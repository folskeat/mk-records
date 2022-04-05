<template>
  <div class="section">
    <div class="tracks">
      <img src="data/courses/tracks/egg/yoshi_circuit.webp">
      <img src="data/courses/tracks/egg/excitebike_arena.webp">
      <img src="data/courses/tracks/egg/dragon_driftway.webp">
      <img src="data/courses/tracks/egg/mute_city.webp">
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
  name: 'EggCup',
}
</script>