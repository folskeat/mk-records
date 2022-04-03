<template>
  <div class="home">

    <div class="cups">
      <figure class="swing">
        <div class="mushroom cup" @click="mushroomcup" v-if="!mushroom"></div>
        <div class="mushroomclick cup" @click="mushroomcup" v-if="mushroom"></div>
      </figure>
      <figure class="swing">
        <div class="flower cup" @click="flowercup" v-if="!flower"></div>
        <div class="flowerclick cup" @click="flowercup" v-if="flower"></div>
      </figure>
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
    <div class="break"></div>
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

  cursor: pointer;
}

.cup {
  width: 150px;
  height: 150px;
  
  cursor: pointer;
}

.mushroom {
  background-image: url('~@/assets/data/courses/cups/mushroom_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.mushroomclick {
  background-image: url('~@/assets/data/courses/cups/mushroom_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.flower {
  background-image: url('~@/assets/data/courses/cups/flower_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.flowerclick {
  background-image: url('~@/assets/data/courses/cups/flower_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

/* NEW */
body {background: #eee;}

.swing:hover {
    animation: swing ease-in-out 1s infinite alternate;
    transform-origin: center;
    float: left;
}
 
@keyframes swing {
    0% { transform: rotate(5deg); }
    100% { transform: rotate(-5deg); }
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
    offcup() {
      this.mushroom = false;
      this.flower = false;
      this.star = false;
      this.special = false;
      this.egg = false;
      this.triforce = false;
      this.golden_dash = false;
      this.shell = false;
      this.banana = false;
      this.leaf = false;
      this.lightning = false;
      this.crossing = false;
      this.bell = false;
      this.lucky_cat = false;
    },
    mushroomcup() {
      this.offcup();
      this.mushroom = true;
    },
    flowercup() {
      this.offcup();
      this.flower = true;
    },
    starcup() {
      this.offcup();
      this.star = true;
    },
    specialcup() {
      this.offcup();
      this.special = true;
    },
    eggcup() {
      this.offcup();
      this.egg = true;
    },
    triforcecup() {
      this.offcup();
      this.triforce = true;
    },
    goldendashcup() {
      this.offcup();
      this.golden_dash = true;
    },
    shellcup() {
      this.offcup();
      this.shell = true;
    },
    bananacup() {
      this.offcup();
      this.banana = true;
    },
    leafcup() {
      this.offcup();
      this.leaf = true;
    },
    lightningcup() {
      this.offcup();
      this.lightning = true;
    },
    crossingcup() {
      this.offcup();
      this.crossing = true;
    },
    bellcup() {
      this.offcup();
      this.bell = true;
    },
    luckycatcup() {
      this.offcup();
      this.lucky_cat = true;
    }
  }
}
</script>
