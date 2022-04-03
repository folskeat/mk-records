<template>
  <div class="section">
    <div class="tracks">
      <img src="data/courses/tracks/mushroom/mario_kart_stadium.webp">
      <img src="data/courses/tracks/mushroom/water_park.webp">
      <img src="data/courses/tracks/mushroom/sweet_sweet_canyon.webp">
      <img src="data/courses/tracks/mushroom/thwomp_ruins.webp">
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
  name: 'MushroomCup',
}
</script>