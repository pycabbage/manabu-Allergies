<template>
  <ZukanContentPage :ZukanContent="ZukanContent"/>
</template>

<script>
export default {
  data() {
    return {
      ZukanContent: {
        Title: "テスト用",
        Img: "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg",
        PageFileName: "test",   //ここは常に英数字。日本語等はダメ。
        Description: [
          {
            title:"test",
            content:"これはテストです。"
          },
          {
            title: "test2",
            content: "これはテスト２です。"
          },
        ],
      },
    };
  },
}
</script>
