<template>
  <div class="section">
    <div class="tracks">
      <img src="data/courses/tracks/golden-dash/paris_promenade.png">
      <img src="data/courses/tracks/golden-dash/toad_circuit.png">
      <img src="data/courses/tracks/golden-dash/choco_mountain.png">
      <img src="data/courses/tracks/golden-dash/coconut_mall.png">
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
  name: 'GoldenDashCup',
}
</script>