<template>
  <div class="section">
    <div class="tracks">
      <img src="~@/assets/data/courses/tracks/flower/mario_circuit.webp">
      <img src="~@/assets/data/courses/tracks/flower/toad_harbor.webp">
      <img src="~@/assets/data/courses/tracks/flower/twisted_mansion.webp">
      <img src="~@/assets/data/courses/tracks/flower/shy_guy_falls.webp">
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
  name: 'FlowerCup',
}
</script>