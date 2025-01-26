<template>
  <div class="page-swiper">
    <van-nav-bar title="Swiper" left-arrow @click-left="onClickLeft" />
    <swiper
      :slidesPerView="1.5"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      :autoplay="{ delay: 10000 }"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
    </swiper>
    <br />
    <swiper-container
      slides-per-view="1"
      pagination="true"
      navigation="true"
      space-between="30"
      centered-slides="true"
      autoplay-delay="2500"
      autoplay-disable-on-interaction="false"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
const onClickLeft = () => history.back()
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

// import 'swiper/css/bundle'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
const modules = [Autoplay, Pagination, Navigation]

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()
</script>

<!-- <style scoped> -->
<style lang="scss">
swiper-container {
  width: 100%;
  height: 200px;
  color: red;
}
.swiper {
  width: 100%;
  height: 50vh;
  color: red;
  --swiper-theme-color: orange;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
.swiper-pagination-bullet {
  /* .swiper-pagination { */
  background-color: red;
}
</style>
