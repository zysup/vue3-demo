<!--
@file 隐私协议
@author Router
-->

<template>
  <div class="page-privacy-policy">
    <van-nav-bar title="Privacy policy" left-arrow @click-left="onClickLeft" class="title" />
    <article class="my-[46px] overflow-auto p-10 text-18">
      <section v-for="n in 5" :key="n" class="mb-12 rounded-4 p-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis optio eum excepturi minus, itaque
        doloremque sit voluptate alias repellat. Vero nostrum facilis impedit dolorum at assumenda accusamus quo
        aspernatur quos, dolor cupiditate odit, saepe repellat? Nulla, inventore repellat nihil minus nemo laudantium
        molestiae asperiores, cum sunt voluptas esse animi? Repellendus architecto non autem ex iusto necessitatibus
        sequi
      </section>
    </article>
    <footer class="fixed bottom-0 left-0 h-46 w-full bg-gray">我是页脚</footer>
  </div>
</template>
<script setup lang="ts">
const onClickLeft = () => history.back()
</script>
<style scoped lang="scss">
.page-privacy-policy {
  height: unset;
  display: unset;
  .title {
    position: fixed;
    left: 0;
    width: 100%;
    top: 0;
  }
}
</style>
