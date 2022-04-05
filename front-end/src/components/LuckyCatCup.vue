<template>
  <div class="section">
    <div class="tracks">
      <img src="data/courses/tracks/lucky-cat/tokyo_blur.webp">
      <img src="data/courses/tracks/lucky-cat/shroom_ridge.png">
      <img src="data/courses/tracks/lucky-cat/sky_garden.png">
      <img src="data/courses/tracks/lucky-cat/ninja_hideaway.webp">
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
  name: 'LuckyCatCup',
}
</script>