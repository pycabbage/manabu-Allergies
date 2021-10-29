<template>
  <canvas ref="canvas" scroll.prevent class="BattleCanvasDOM" />
</template>

<script>
import * as PIXI from "pixi.js";
import quiz from "~/assets/quiz.json";
import Data from "../plugins/data";
const HEIGHT = 500;
const WIDTH = 500;
const FPS = 15;
const Text = function (
  t = "",
  size = 24,
  width = 300,
  center = false,
  fill = 0xd0d0d0
) {
  return new PIXI.Text(t, {
    fontFamily: "Arial",
    fontSize: size,
    fill: fill,
    wordWrap: true,
    wordWrapWidth: width,
    breakWords: true,
    align: center ? "center" : "",
  });
};
export default {
  mounted() {
    const loader = new PIXI.Loader();
    this.app = new PIXI.Application({
      width: WIDTH,
      height: HEIGHT,
      antialiasing: true,
      view: this.$refs.canvas,
      backgroundColor: 0x555555,
    });
    console.log("this.app", this.app);
    this.app.stage.addChild(this.currentScene);
    this.app.ticker.maxFPS = FPS;
    loader.add("assets/bg.png").load((_loader, _) => {
      // var bgWH = 80;
      // var _bgSprite;
      // var bgContainer = new PIXI.Container()
      // for (let offsetX = -bgWH; offsetX < WIDTH; offsetX+=bgWH) {
      //   for (let offsetY = -bgWH; offsetY < HEIGHT; offsetY+=bgWH) {
      //     _bgSprite = new PIXI.Sprite(resources['assets/bg.png'].texture);
      //     _bgSprite.position.set(offsetX, offsetY)
      //     bgContainer.addChild(_bgSprite)
      //   }
      // }
      // this.app.stage.addChild(bgContainer)
      this.Begin();
    });
  },
  data() {
    return {
      points: 0,
      noClick: false,
      currentScene: new PIXI.Container(),
      id: this.$route.query.id,
    };
  },
  async asyncData() {
    const db = await Data.init("public");
    const dbList = await db.get("zukanID");
    if (Array.isArray(dbList) !== true) {
      await db.set("zukanID", []);
    }
    return {
      db: db,
      dbList: dbList,
    };
  },
  methods: {
    async ZukanIDSet(value) {
      if (value > -1) {
        var newVal = this.dbList;
        newVal.push(value);
        await this.db.set("zukanID", newVal);
      }
    },
    _shuffle([...array]) {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    _range(n) {
      return Array.from({ length: n }, (v, k) => k);
    },
    Begin() {
      this.app.stage.addChild(this.currentScene);
      var _questions = quiz.general;
      if (this.id) {
        _questions = _questions.concat(quiz[this.id]);
      }
      _questions = _questions.filter((i) => i);
      this.questions = this._shuffle(_questions);
      this.now = -1;
      // Initialize data
      this.points = 0;
      this.noClick = false;
      this.Next();
    },
    Next() {
      this.now += 1;
      if (this.points >= 2) {
        this.Win();
        this.createRetry();
      } else if (this.now >= this.questions.length) {
        this.Lose();
        this.createRetry();
      } else {
        this.Question(this.questions[this.now]);
      }
    },
    Win() {
      var wText = new Text("勝利しました");
      wText.position.set(50, 200);
      this.currentScene.addChild(wText);
      (async () => {
        const db = await Data.init("public");
        console.log(await db.getPoint());
        await db.setPoint((await db.getPoint()) + 1);
        console.log(await db.getPoint());
      })();

      if (this.id) {
        var zukanArray = [
          "egg",
          "milk",
          "wheat",
          "soba",
          "peanuts",
          "shrimp",
          "crab",
        ];
        var id = zukanArray.indexOf(this.id);
        this.ZukanIDSet(id);
      }
    },
    Lose() {
      var lText = new Text("敗北しました");
      lText.position.set(50, 200);
      this.currentScene.addChild(lText);
    },
    createRetry() {
      var rText = new Text("リトライ");
      rText.position.set(50, 400);
      rText.interactive = true;
      rText.buttonMode = true;
      rText.on("pointertap", (e) => {
        this.flush();
        this.Begin();
      });
      this.currentScene.addChild(rText);

      if (!this.id) {
        var scanText = new Text("スキャンに戻る");
        scanText.position.set(50, 450);
        scanText.interactive = true;
        scanText.buttonMode = true;
        scanText.on("pointertap", (e) => {
          this.flush();
          this.$router.push({ path: "scan" });
        });
        this.currentScene.addChild(scanText);
      }
    },
    Question(q) {
      var _ans_offsetX = 50;
      var _ans_offsetY = 300;
      var _q_offsetX = 50;
      var _q_offsetY = 100;
      var qText = new Text(q.question);
      qText.position.set(_q_offsetX, _q_offsetY);
      this.currentScene.addChild(qText);
      const ansEList = this._shuffle(this._range(q.answer.length));
      const ansList = ansEList.map((i) => q.answer[i]);
      const correctAnsE = ansEList.indexOf(0);

      var ans;
      for (var x in ansList) {
        var posX = _ans_offsetX;
        var posY = 50 * Number.parseInt(x) + _ans_offsetY;

        var a = ansList[x];
        ans = new Text(a, 18, WIDTH - posX - 50);
        ans.interactive = true;
        ans.buttonMode = true;
        ans.on(
          "pointertap",
          ((id) => {
            return (e) => {
              if (!this.noClick) {
                this.noClick = true;
                if (correctAnsE == id) {
                  this.Correct();
                } else {
                  this.Wrong();
                }
                console.log(this.points);
                setTimeout(() => {
                  this.noClick = false;
                  this.flush();
                  this.Next();
                }, 1000);
              }
            };
          })(x)
        );
        ans.position.set(posX, posY);
        this.currentScene.addChild(ans);

        // var ansRect = new PIXI.Rectangle(posX, posY, posX+100, posY+50)
        // this.currentScene.addChild(ansRect)
      }
    },
    Correct() {
      var cText = new Text("正解");
      cText.position.set(400, 400);
      this.points += 1;
      this.currentScene.addChild(cText);
      return cText;
    },
    Wrong() {
      var cText = new Text("不正解");
      cText.position.set(400, 400);
      this.currentScene.addChild(cText);
      return cText;
    },
    flush() {
      this.currentScene.visible = false;
      this.app.stage.removeChild(this.currentScene);
      this.currentScene = new PIXI.Container();
      this.app.stage.addChild(this.currentScene);
    },
  },
};
</script>

<style>
canvas {
  width: 500px;
  height: 500px;
}
</style>
