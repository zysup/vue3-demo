<!--
@file 贪吃蛇
@author Router
-->

<template>
  <div class="page-greedy-snake">
    <van-nav-bar title="Privacy policy" left-arrow @click-left="onClickLeft" />
    <div id="game-wrapper">
      <div id="stage">
        <div id="snake">
          <div></div>
        </div>

        <div id="food">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="score-panel">
        <div>SCORE: <span id="score">0</span></div>
        <div>level: <span id="level">1</span></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import GameControl from './gameControl'

const onClickLeft = () => history.back()

onMounted(() => {
  new GameControl()
})
</script>

<style scoped lang="scss">
.page-greedy-snake {
}
#game-wrapper {
  width: 360px;
  height: 420px;
  background-color: #b7d4a8;
  margin: 100px auto;
  border: 10px solid var(--van-background2);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

#stage {
  width: 304px;
  height: 304px;
  border: 2px solid var(--van-gray-8);
  position: relative;

  #snake {
    div {
      width: 10px;
      height: 10px;
      background-color: #000;
      border: 1px solid #b7d4a8;
      position: absolute;
    }
  }

  #food {
    width: 10px;
    height: 10px;
    left: 40px;
    top: 100px;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    div {
      width: 4px;
      height: 4px;
      transform: rotate(45deg);
      background-color: #000;
    }
  }
}

#score-panel {
  width: 300px;
  display: flex;
  justify-content: space-between;
}
</style>
