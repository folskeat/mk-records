<template>
  <div class="home">

    <div class="cups">
      <img src="data/courses/cups/mushroom_icon.png" @click="mushroomcup">
      <img src="data/courses/cups/flower_icon.png">
      <img src="data/courses/cups/star_icon.png">
      <img src="data/courses/cups/special_icon.png">
      <img src="data/courses/cups/egg_icon.png">
      <img src="data/courses/cups/triforce_icon.png">
      <img src="data/courses/cups/golden-dash_icon.png">
      <div class="break"></div>
      <img src="data/courses/cups/shell_icon.png">
      <img src="data/courses/cups/banana_icon.png">
      <img src="data/courses/cups/leaf_icon.png">
      <img src="data/courses/cups/lightning_icon.png">
      <img src="data/courses/cups/crossing_icon.png">
      <img src="data/courses/cups/bell_icon.png">
      <img src="data/courses/cups/lucky-cat_icon.png">
    </div>
    <div class="tracks" v-if="mushroom">
      <MushroomCup />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style scoped>
.break {
  flex-basis: 100%;
  height: 30px;
}

.cups {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-around;
}

.cups img {
  width: 150px;
  height: 150px;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MushroomCup from '@/components/MushroomCup.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MushroomCup,
  },
  data() {
    return {
      mushroom: false,
      flower: false,
      star: false,
      special: false,
      egg: false,
      triforce: false,
      golden_dash: false,
      shell: false,
      banana: false,
      leaf: false,
      lightning: false,
      crossing: false,
      bell: false,
      lucky_cat: false,
    }
  },
  methods: {
    mushroomcup() {
      this.mushroom = !this.mushroom;
    }
  }
}
</script>
