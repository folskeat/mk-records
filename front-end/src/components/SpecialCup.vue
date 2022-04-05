<template>
  <div class="section">
    <div class="tracks">
      <img src="data/courses/tracks/special/cloudtop_cruise.webp">
      <img src="data/courses/tracks/special/bone-dry_dunes.webp">
      <img src="data/courses/tracks/special/bowser's_castle.webp">
      <img src="data/courses/tracks/special/rainbow_road.webp">
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
  name: 'SpecialCup',
}
</script>