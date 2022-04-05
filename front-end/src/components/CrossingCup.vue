<template>
  <div class="section">
    <div class="tracks">
      <img src="data/courses/tracks/crossing/baby_park.webp">
      <img src="data/courses/tracks/crossing/cheese_land.webp">
      <img src="data/courses/tracks/crossing/wild_woods.webp">
      <img src="data/courses/tracks/crossing/animal_crossing.webp">
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
  name: 'CrossingCup',
}
</script>