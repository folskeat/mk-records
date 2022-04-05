<template>
  <div class="section">
    <div class="tracks">
      <img src="data/courses/tracks/bell/neo_bowser_city.webp">
      <img src="data/courses/tracks/bell/ribbon_road.webp">
      <img src="data/courses/tracks/bell/super_bell_subway.webp">
      <img src="data/courses/tracks/bell/big_blue.webp">
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
  name: 'BellCup',
}
</script>