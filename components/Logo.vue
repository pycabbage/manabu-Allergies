<template>
  <Svg-icon />
</template>

<script>
export default {
  async asyncData() {
    const db = await Data.init("public");
    const tempdb = await db.get("zukanID");
    if (Array.isArray(tempdb) !== true) {
      await db.set("zukanID", []);
    }
    return {
      db: db,
      dbList: await db.get("zukanID"),
    };
  },
  methods: {
    async ZukanIDSet(value) {
      var newVal = dbList;
      await newVal.push(value);
      await this.db.set("zukanID", newVal);
    },
  },
};
</script>


<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
