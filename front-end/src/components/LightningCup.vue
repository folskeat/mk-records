<template>
  <div class="section">
    <div class="tracks">
      <img src="data/courses/tracks/lightning/tick-tock_clock.webp">
      <img src="data/courses/tracks/lightning/piranha_plant_slide.webp">
      <img src="data/courses/tracks/lightning/grumble_volcano.webp">
      <img src="data/courses/tracks/lightning/rainbow_road.webp">
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-content: center;
}

.tracks {
  display: flex;
  justify-content: space-around;

  width: 1000px;
  height: 149px;
}

.tracks img {
  width: 200px;
  height: 141px;

  cursor: pointer;
}

.tracks img:hover {
  width: 210px;
  height: 149px;
}
</style>

<script>
export default {
  name: 'LightningCup',
}
</script>