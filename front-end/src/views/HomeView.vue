<template>
  <div class="home">
    <video autoplay muted loop id="background">
      <source src="~@/assets/data/background.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <div class="header">
      <h1>Mario Kart Records</h1>
      <h5>A place to show off your racing skills</h5>
      <div class="audio">
        <audio controls loop hidden id="playAudio">
          <source src="~@/assets/data/sounds/course_select.mp3" type="audio/mp3" />
        </audio>
        <audio controls hidden id="hoverSound">
          <source src="~@/assets/data/sounds/hover.wav" type="audio/wav" />
        </audio>
        <audio controls hidden id="clickSound">
          <source src="~@/assets/data/sounds/ok.wav" type="audio/wav" />
        </audio>
      </div>
    </div>

    <div class="music-note contain-note" @click="toggleAudio()" v-if="!play_audio"></div>
    <div class="no-music-note contain-note" @click="toggleAudio()" v-if="play_audio"></div>

    <div class="cups">
      <figure class="swing">
        <div class="mushroom cup" @click="mushroomcup" @mouseover="playHover()" v-if="!mushroom"></div>
        <div class="mushroomclick cup" @click="mushroomcup" @mouseover="playHover()" v-if="mushroom"></div>
      </figure>
      <figure class="swing">
        <div class="flower cup" @click="flowercup" @mouseover="playHover()" v-if="!flower"></div>
        <div class="flowerclick cup" @click="flowercup" @mouseover="playHover()" v-if="flower"></div>
      </figure>
      <figure class="swing">
        <div class="star cup" @click="starcup" @mouseover="playHover()" v-if="!star"></div>
        <div class="starclick cup" @click="starcup" @mouseover="playHover()" v-if="star"></div>
      </figure>
      <figure class="swing">
        <div class="special cup" @click="specialcup" @mouseover="playHover()" v-if="!special"></div>
        <div class="specialclick cup" @click="specialcup" @mouseover="playHover()" v-if="special"></div>
      </figure>
      <figure class="swing">
        <div class="egg cup" @click="eggcup" @mouseover="playHover()" v-if="!egg"></div>
        <div class="eggclick cup" @click="eggcup" @mouseover="playHover()" v-if="egg"></div>
      </figure>
      <figure class="swing">
        <div class="triforce cup" @click="triforcecup" @mouseover="playHover()" v-if="!triforce"></div>
        <div class="triforceclick cup" @click="triforcecup" @mouseover="playHover()" v-if="triforce"></div>
      </figure>
      <figure class="swing">
        <div class="golden-dash cup" @click="goldendashcup" @mouseover="playHover()" v-if="!golden_dash"></div>
        <div class="golden-dashclick cup" @click="goldendashcup" @mouseover="playHover()" v-if="golden_dash"></div>
      </figure>
      <figure class="swing">
        <div class="shell cup" @click="shellcup" @mouseover="playHover()" v-if="!shell"></div>
        <div class="shellclick cup" @click="shellcup" @mouseover="playHover()" v-if="shell"></div>
      </figure>
      <figure class="swing">
        <div class="banana cup" @click="bananacup" @mouseover="playHover()" v-if="!banana"></div>
        <div class="bananaclick cup" @click="bananacup" @mouseover="playHover()" v-if="banana"></div>
      </figure>
      <figure class="swing">
        <div class="leaf cup" @click="leafcup" @mouseover="playHover()" v-if="!leaf"></div>
        <div class="leafclick cup" @click="leafcup" @mouseover="playHover()" v-if="leaf"></div>
      </figure>
      <figure class="swing">
        <div class="lightning cup" @click="lightningcup" @mouseover="playHover()" v-if="!lightning"></div>
        <div class="lightningclick cup" @click="lightningcup" @mouseover="playHover()" v-if="lightning"></div>
      </figure>
      <figure class="swing">
        <div class="crossing cup" @click="crossingcup" @mouseover="playHover()" v-if="!crossing"></div>
        <div class="crossingclick cup" @click="crossingcup" @mouseover="playHover()" v-if="crossing"></div>
      </figure>
      <figure class="swing">
        <div class="bell cup" @click="bellcup" @mouseover="playHover()" v-if="!bell"></div>
        <div class="bellclick cup" @click="bellcup" @mouseover="playHover()" v-if="bell"></div>
      </figure>
      <figure class="swing">
        <div class="lucky-cat cup" @click="luckycatcup" @mouseover="playHover()" v-if="!lucky_cat"></div>
        <div class="lucky-catclick cup" @click="luckycatcup" @mouseover="playHover()" v-if="lucky_cat"></div>
      </figure>
    </div>
    <div class="break"></div>
    <div class="tracks" v-if="mushroom">
      <MushroomCup />
    </div>
    <div class="tracks" v-if="flower">
      <FlowerCup />
    </div>
    <div class="tracks" v-if="star">
      <StarCup />
    </div>
    <div class="tracks" v-if="special">
      <SpecialCup />
    </div>
    <div class="tracks" v-if="egg">
      <EggCup />
    </div>
    <div class="tracks" v-if="triforce">
      <TriforceCup />
    </div>
    <div class="tracks" v-if="golden_dash">
      <GoldenDashCup />
    </div>
    <div class="tracks" v-if="shell">
      <ShellCup />
    </div>
    <div class="tracks" v-if="banana">
      <BananaCup />
    </div>
    <div class="tracks" v-if="leaf">
      <LeafCup />
    </div>
    <div class="tracks" v-if="lightning">
      <LightningCup />
    </div>
    <div class="tracks" v-if="crossing">
      <CrossingCup />
    </div>
    <div class="tracks" v-if="bell">
      <BellCup />
    </div>
    <div class="tracks" v-if="lucky_cat">
      <LuckyCatCup />
    </div>
    <div class="break"></div>
    <div class="break"></div>
    <div class="break"></div>
    <div class="break"></div>
    <div class="footer">
      <a href="https://github.com/folskeat/mk-records">
        <img src="~@/assets/data/github.png">
      </a>
    </div>
  </div>
</template>

<style scoped>

#background {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;

  z-index: 1;
}

.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.footer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;

  padding-top: 100px;

  z-index: 2;
}

.footer img {
  width: 50px;
  height: 50px;

  cursor: pointer;
}

.track {
  overflow: auto;
}

.tracks {
  position: relative;

  z-index: 2;
}

.tracks table {
  background: #ffffff;
  background-color: #ffffff;
}

.break {
  flex-basis: 100%;
  height: 30px;
}

.cups {
  position: relative;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-around;

  z-index: 2;
}

.cup {
  width: 150px;
  height: 150px;
  
  cursor: pointer;
}

.contain-note {
  position: absolute;

  top: 5px;
  right: 5px;

  width: 50px;
  height: 50px;
  
  cursor: pointer;

  align-self: right;

  z-index: 2;
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

.star {
  background-image: url('~@/assets/data/courses/cups/star_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.starclick {
  background-image: url('~@/assets/data/courses/cups/star_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.special {
  background-image: url('~@/assets/data/courses/cups/special_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.specialclick {
  background-image: url('~@/assets/data/courses/cups/special_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.egg {
  background-image: url('~@/assets/data/courses/cups/egg_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.eggclick {
  background-image: url('~@/assets/data/courses/cups/egg_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.triforce {
  background-image: url('~@/assets/data/courses/cups/triforce_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.triforceclick {
  background-image: url('~@/assets/data/courses/cups/triforce_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.golden-dash {
  background-image: url('~@/assets/data/courses/cups/golden-dash_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.golden-dashclick {
  background-image: url('~@/assets/data/courses/cups/golden-dash_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.shell {
  background-image: url('~@/assets/data/courses/cups/shell_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.shellclick {
  background-image: url('~@/assets/data/courses/cups/shell_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.banana {
  background-image: url('~@/assets/data/courses/cups/banana_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.bananaclick {
  background-image: url('~@/assets/data/courses/cups/banana_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.leaf {
  background-image: url('~@/assets/data/courses/cups/leaf_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.leafclick {
  background-image: url('~@/assets/data/courses/cups/leaf_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.lightning {
  background-image: url('~@/assets/data/courses/cups/lightning_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.lightningclick {
  background-image: url('~@/assets/data/courses/cups/lightning_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.crossing {
  background-image: url('~@/assets/data/courses/cups/crossing_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.crossingclick {
  background-image: url('~@/assets/data/courses/cups/crossing_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.bell {
  background-image: url('~@/assets/data/courses/cups/bell_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.bellclick {
  background-image: url('~@/assets/data/courses/cups/bell_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.lucky-cat {
  background-image: url('~@/assets/data/courses/cups/lucky-cat_icon.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.lucky-catclick {
  background-image: url('~@/assets/data/courses/cups/lucky-cat_click.png');
  background-repeat: no-repeat;
  background-size: 150px;
}

.header {
  display: flex;
  align-self: center;
  align-content: center;
  justify-content: center;

  flex-direction: column;

  z-index: 2;
}

.header h1 {
  position: relative;

  margin-top: 0;
  margin-bottom: 0;

  font-size: 48px;
  font-style: oblique;
}

.header h5 {
  position: relative;

  margin-top: 5px;
  margin-bottom: 10px;

  font-size: 20px;
}

.audio {
  position: relative;

  align-self: right;
  justify-content: right;
  align-items: right;

  z-index: 2;
}

.music-note {
  position: absolute;

  right: 50px;
  top: 20px;
  
  display: flex;

  background-image: url('~@/assets/data/sounds/music_note.png');
  background-repeat: no-repeat;
  background-size: 50px;

  align-self: right;

  z-index: 2;
}

.no-music-note {
  position: absolute;

  right: 50px;
  top: 20px;

  display: flex;

  background-image: url('~@/assets/data/sounds/no_music_note.png');
  background-repeat: no-repeat;
  background-size: 50px;

  align-self: right;

  z-index: 2;
}

/* NEW */
body {background: #eee;}

figure {
  width: auto;
}

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
import MushroomCup from '@/components/MushroomCup.vue'
import FlowerCup from '@/components/FlowerCup.vue'
import StarCup from '@/components/StarCup.vue'
import SpecialCup from '@/components/SpecialCup.vue'
import EggCup from '@/components/EggCup.vue'
import TriforceCup from '@/components/TriforceCup.vue'
import GoldenDashCup from '@/components/GoldenDashCup.vue'
import ShellCup from '@/components/ShellCup.vue'
import BananaCup from '@/components/BananaCup.vue'
import LeafCup from '@/components/LeafCup.vue'
import LightningCup from '@/components/LightningCup.vue'
import CrossingCup from '@/components/CrossingCup.vue'
import BellCup from '@/components/BellCup.vue'
import LuckyCatCup from '@/components/LuckyCatCup.vue'

export default {
  name: 'HomeView',
  components: {
    MushroomCup,
    FlowerCup,
    StarCup,
    SpecialCup,
    EggCup,
    TriforceCup,
    GoldenDashCup,
    ShellCup,
    BananaCup,
    LeafCup,
    LightningCup,
    CrossingCup,
    BellCup,
    LuckyCatCup,
  },
  data() {
    return {
      play_audio: true,
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
    toggleAudio() {
      let myAudio = document.getElementById("playAudio");
      this.play_audio = !this.play_audio;
      return myAudio.paused ? myAudio.play() : myAudio.pause();
    },
    playHover() {
      var newAudio = document.getElementById("hoverSound");
      newAudio.play();
    },
    playClick() {
      var newAudio = document.getElementById("clickSound");
      newAudio.play();
    },
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
      this.playClick();
    },
    flowercup() {
      this.offcup();
      this.flower = true;
      this.playClick();
    },
    starcup() {
      this.offcup();
      this.star = true;
      this.playClick();
    },
    specialcup() {
      this.offcup();
      this.special = true;
      this.playClick();
    },
    eggcup() {
      this.offcup();
      this.egg = true;
      this.playClick();
    },
    triforcecup() {
      this.offcup();
      this.triforce = true;
      this.playClick();
    },
    goldendashcup() {
      this.offcup();
      this.golden_dash = true;
      this.playClick();
    },
    shellcup() {
      this.offcup();
      this.shell = true;
      this.playClick();
    },
    bananacup() {
      this.offcup();
      this.banana = true;
      this.playClick();
    },
    leafcup() {
      this.offcup();
      this.leaf = true;
      this.playClick();
    },
    lightningcup() {
      this.offcup();
      this.lightning = true;
      this.playClick();
    },
    crossingcup() {
      this.offcup();
      this.crossing = true;
      this.playClick();
    },
    bellcup() {
      this.offcup();
      this.bell = true;
      this.playClick();
    },
    luckycatcup() {
      this.offcup();
      this.lucky_cat = true;
      this.playClick();
    }
  }
}
</script>
