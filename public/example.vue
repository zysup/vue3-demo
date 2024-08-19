<!--
@file 我是示例文件
@author Router
-->

<template>
  <div class="page-example flex flex-col">
    <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" />
    <article class="flex-1 overflow-auto p-10 text-18">
      <section v-for="n in 5" :key="n" class="mb-12  p-12 rounded-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis optio eum excepturi minus, itaque
        doloremque sit voluptate alias repellat. Vero nostrum facilis impedit dolorum at assumenda accusamus quo
        aspernatur quos, dolor cupiditate odit, saepe repellat? Nulla, inventore repellat nihil minus nemo laudantium
        molestiae asperiores, cum sunt voluptas esse animi? Repellendus architecto non         autem ex iusto necessitatibus
        sequi
      </section>
    </article>
  </div>
</template>
<script      setup lang="ts">
import {  } from "module";
const onClickLeft = () => history.back()
</script>
<style scoped lang="scss">
.page-example {
  outline: 2px solid red;
  outline-offset: -2px;
}
</style>
