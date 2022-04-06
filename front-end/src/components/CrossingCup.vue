<template>
  <div class="wrapper">
    <audio controls hidden id="hoverSound">
      <source src="~@/assets/data/sounds/hover.wav" type="audio/wav" />
    </audio>
    <audio controls hidden id="courseSound">
      <source src="~@/assets/data/sounds/select.wav" type="audio/wav" />
    </audio>
    <div class="section">
      <div class="tracks">
        <img src="~@/assets/data/courses/tracks/crossing/baby_park.webp" @click="show(); babyPark()" @mouseover="playHover()">
        <img src="~@/assets/data/courses/tracks/crossing/cheese_land.webp" @click="show(); cheeseLand()" @mouseover="playHover()">
        <img src="~@/assets/data/courses/tracks/crossing/wild_woods.webp" @click="show(); wildWoods()" @mouseover="playHover()">
        <img src="~@/assets/data/courses/tracks/crossing/animal_crossing.webp" @click="show(); animalCrossing()" @mouseover="playHover()">
      </div>
    </div>

    <div class="break"></div>

    <div v-if="showing">
      <h1>Records for {{this.trackName}}</h1>
    </div>

    <div class="section">
      <div class="records" v-if="showing">
        <div class="break"></div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Racer</th>
              <th>Time</th>
              <th>Character</th>
              <th>Kart</th>
              <th>Wheels</th>
              <th>Glider</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in sortedItems" :key="item.id">
              <td>{{index + 1}}</td>
              <td>{{item.racer}}</td>
              <td>{{calctime(item)}}</td>
              <td>
                <img :src="require('@/assets/data/carts/character/' + getImg(item.character) + '.png')" />
                <br />
                {{item.character}}
              </td>
              <td class="wider">
                <img :src="require('@/assets/data/carts/body/' + getImg(item.body) + '.png')" />
                <br />
                {{item.body}}
              </td>
              <td class="wider">
                <img :src="require('@/assets/data/carts/wheels/' + getImg(item.wheels) + '.png')" />
                <br />
                {{item.wheels}}
              </td>
              <td>
                <img :src="require('@/assets/data/carts/glider/' + getImg(item.glider) + '.png')" />
                <br />
                {{item.glider}}
              </td>
              <td>
                <button @click="deleteItem(item)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <div class="break"></div>
    </div>

    <div class="section new">
      <div class="add" v-if="showing">
        <div class="form">
          <input v-model="racer" placeholder="Player Name">
          <input type="number" min="0" max="9" v-model="minute" placeholder="Minutes">
          <label>:</label>
          <input type="number" min="0" max="59" v-model="second" placeholder="Seconds">
          <label>.</label>
          <input type="number" min="0" max="999" v-model="milli" placeholder="Milliseconds">
          <div class="break"></div>
          <select v-model="character">
            <option disabled value="">Pick your character</option>
            <option>Mario</option>
            <option>Luigi</option>
            <option>Peach</option>
            <option>Daisy</option>
            <option>Rosalina</option>
            <option>Tanooki Mario</option>
            <option>Cat Peach</option>
            <option>Yoshi</option>
            <option>Toad</option>
            <option>Koopa Troopa</option>
            <option>Shy Guy</option>
            <option>Lakitu</option>
            <option>Toadette</option>
            <option>King Boo</option>
            <option>Baby Mario</option>
            <option>Baby Luigi</option>
            <option>Baby Peach</option>
            <option>Baby Daisy</option>
            <option>Baby Rosalina</option>
            <option>Metal Mario</option>
            <option>Pink Gold Peach</option>
            <option>Wario</option>
            <option>Waluigi</option>
            <option>Donkey Kong</option>
            <option>Bowser</option>
            <option>Dry Bones</option>
            <option>Bowser Jr.</option>
            <option>Dry Bowser</option>
            <option>Lemmy</option>
            <option>Larry</option>
            <option>Wendy</option>
            <option>Ludwig</option>
            <option>Iggy</option>
            <option>Roy</option>
            <option>Morton</option>
            <option>Inkling Girl</option>
            <option>Inkling Boy</option>
            <option>Link</option>
            <option>Villager</option>
            <option>Isabelle</option>
            <option>Mii</option>
          </select>
          <select v-model="body">
            <option disabled value="">Pick your kart</option>
            <option>Standard Kart</option>
            <option>Pipe Frame</option>
            <option>Mach 8</option>
            <option>Steel Driver</option>
            <option>Cat Cruiser</option>
            <option>Circuit Special</option>
            <option>Tri-Speeder</option>
            <option>Badwagon</option>
            <option>Prancer</option>
            <option>Biddybuggy</option>
            <option>Landship</option>
            <option>Sneeker</option>
            <option>Sports Coupe</option>
            <option>Gold Standard</option>
            <option>GLA</option>
            <option>W 25 Silver Arrow</option>
            <option>300 SL Roadster</option>
            <option>Blue Falcon</option>
            <option>Tanooki Kart</option>
            <option>B Dasher</option>
            <option>Streetle</option>
            <option>P-Wing</option>
            <option>Koopa Clown</option>
            <option>Standard Bike</option>
            <option>The Duke</option>
            <option>Flame Rider</option>
            <option>Varmint</option>
            <option>Mr. Scooty</option>
            <option>City Tripper</option>
            <option>Master Cycle Zero</option>
            <option>Comet</option>
            <option>Sport Bike</option>
            <option>Jet Bike</option>
            <option>Yoshi Bike</option>
            <option>Master Cycle</option>
            <option>Standard ATV</option>
            <option>Wild Wiggler</option>
            <option>Teddy Buggy</option>
            <option>Bone Rattler</option>
            <option>Splat Buggy</option>
            <option>Inkstriker</option>
          </select>
          <select v-model="wheels">
            <option disabled value="">Pick your wheels</option>
            <option>Standard</option>
            <option>Monster</option>
            <option>Roller</option>
            <option>Slim</option>
            <option>Slick</option>
            <option>Metal</option>
            <option>Button</option>
            <option>Off-Road</option>
            <option>Sponge</option>
            <option>Wood</option>
            <option>Cushion</option>
            <option>Blue Standard</option>
            <option>Hot Monster</option>
            <option>Azure Roller</option>
            <option>Crimson Slim</option>
            <option>Cyber Slick</option>
            <option>Retro Off-Road</option>
            <option>Gold Tires</option>
            <option>GLA Tires</option>
            <option>Triforce Tires</option>
            <option>Leaf Tires</option>
            <option>Ancient Tires</option>
          </select>
          <select v-model="glider">
            <option disabled value="">Pick your wheels</option>
            <option>Super Glider</option>
            <option>Cloud Glider</option>
            <option>Wario Wing</option>
            <option>Waddle Wing</option>
            <option>Peach Parasol</option>
            <option>Parachute</option>
            <option>Parafoil</option>
            <option>Flower Glider</option>
            <option>Bowser Kite</option>
            <option>Plane Glider</option>
            <option>MKTV Parafoil</option>
            <option>Gold Glider</option>
            <option>Hylian Kite</option>
            <option>Paper Glider</option>
            <option>Paraglider</option>
          </select>
          <button @click="upload">Upload Result</button>
        </div>
      </div>
    </div>
    <p v-if="!check">You must fill out all fields before submitting</p>
    <br />
    <p v-if="!checkNum">Invalid numbers on entries</p>
    <br />
    <p>To edit your existing record, just re-use your racer name</p>
  </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    overflow-x: scroll;

    white-space: pre-line;

    flex-direction: column;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

td, th {
  width: 100px;
}

.break {
  flex-basis: 100%;
  height: 30px;
}

.section {
  width: 100%;

  display: flex;
  justify-content: center;
}

.new {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.overflow {
  overflow: auto;
}

.tracks {
  display: flex;
  justify-content: space-around;
  
  flex-wrap: wrap;

  width: 1000px;
  height: 149px;

  overflow: auto;
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

.records {
  display: flex;
  flex-direction: column;

  width: 900px;

  height: 100%;
  flex-wrap: nowrap;
}

.records h1 {
  align-self: center;
  overflow-x: auto;
}

.records table {
  margin: 0;
  padding: 0;

  height: 100%;
  width: 900px;

  position: relative;
  table-layout: fixed;

  overflow-x: auto;

  background: #ffffff;
  color: #000000;
}

.records img {
  width: 30px;
  height: 30px;
}

.wider img {
  width: 45px;
}

.add {
  display: flex;

  align-self: center;
  white-space: wrap;
}

.add form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding-top: 10px;
}

.add input {
  height: 25px;
  margin: 5px;
}

.add select {
  height: 25px;
  margin: 5px;
}

.add button {
  height: 35px;
  width: 100px;
  margin-left: 8px;
}

.add input[type="number"] {
  width: 100px;
}

@media only screen and (max-width: 899px) {
  .section {
    width: 100%;

    display: flex;
    justify-content: left;
    overflow: auto;
  }
}

@media only screen and (min-width: 515px) {
  .new {
    width: 100%;

    display: flex;
    justify-content: center;
    overflow: auto;
  }
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'CrossingCup',
  rank: 0,
  prevTime: 0,
  data() {
    return {
      currentTrack: "",
      trackName: "",
      showing: false,
      check: true,
      checkNum: true,
      items: [],
      racer: "",
      time: "",
      minute: "",
      second: "",
      milli: "",
      character: "",
      body: "",
      wheels: "",
      glider: "",
      addItem: null,
    }
  },
  created() {
    this.getItems();
  },
  computed: {
    sortItems: function() {
        return this.items.filter(item => item.track === this.currentTrack)
    },
    sortedItems: function() {
      function compare(a, b) {
        if (a.minute < b.minute) {
            return -1;
        }
        if (a.minute > b.minute) {
            return 1;
        }
        if (a.second < b.second) {
          return -1;
        }
        if (a.second > b.second) {
          return 1;
        }
        if (a.milli < b.milli) {
          return -1;
        }
        if (a.milli > b.milli) {
          return 1;
        }
        return 0;
      }
      function newArray(items) {
        var newItems = [];
        for (var i = 0; i < items.length; i++) {
            newItems[i] = items[i];
        }
        return newItems;
      }
      var newList = newArray(this.sortItems);
      return newList.sort(compare);
    },
  },
  methods: {
    playHover() {
      var newAudio = document.getElementById("hoverSound");
      newAudio.play();
    },
    playClick() {
      var newAudio = document.getElementById("courseSound");
      newAudio.play();
    },
    show() {
      this.showing = true;
      this.playClick();
    },
    calctime(item) {
      let length = item.second.toString().length;
      if (length === 1) {
        item.second = "0" + item.second;
      }
      length = item.milli.toString().length;
      if (length === 1) {
        item.milli = "00" + item.milli;
      }
      else if (length === 2) {
        item.milli = "0" + item.milli;
      }
      let retime = item.minute + ":" + item.second + "." + item.milli;
      return retime;
    },
    checker() {
      this.checkNum = true;

      if (this.minute.length === 0) {
        if (isNaN(parseInt(this.minute))) {
          this.checkNum = false;
        }
        return false;
      }

      if (parseInt(this.minute) < 0) {
        this.checkNum = false;
        return false;
      }

      if (this.second.length === 0) {
        if (isNaN(parseInt(this.second))) {
          this.checkNum = false;
        }
        return false;
      }

      if (parseInt(this.second) < 0 || parseInt(this.second) > 59) {
        this.checkNum = false;
        return false;
      }

      if (this.milli.length === 0) {
        if (isNaN(parseInt(this.milli))) {
          this.checkNum = false;
        }
        return false;
      }

      if (parseInt(this.milli) < 0 || parseInt(this.milli) > 999) {
        this.checkNum = false;
        return false;
      }

      if (this.racer.length === 0) {
        return false;
      }
      if (this.character.length === 0) {
        return false;
      }
      if (this.body.length === 0) {
        return false;
      }
      if (this.wheels.length === 0) {
        return false;
      }
      if (this.glider.length === 0) {
        return false;
      }

      return true;
    },
    getImg(name) {
      if (name != undefined) {
        let newName = name.replace(/\s+/g, '');
        return newName;
      }
    },
    babyPark() {
      this.currentTrack = "gcn_baby_park";
      this.trackName = "Baby Park";
    },
    cheeseLand() {
      this.currentTrack = "gba_cheese_land";
      this.trackName = "Cheese Land";
    },
    wildWoods() {
      this.currentTrack = "wild_woods";
      this.trackName = "Wild Woods";
    },
    animalCrossing() {
      this.currentTrack = "animal_crossing";
      this.trackName = "Animal Crossing";
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async upload() {
      this.check = this.checker();
      if (this.check === false) {
        return;
      }

      let filterItems = this.items.filter(item => item.track === this.currentTrack);
      let match = filterItems.find(item => item.racer === this.racer);
      if (match != null && match.track === this.currentTrack) {
        try {
          await axios.put("/api/items/" + match._id, {
            minute: this.minute,
            second: this.second,
            milli: this.milli,
            character: this.character,
            body: this.body,
            wheels: this.wheels,
            glider: this.glider,
          });
          this.getItems();
          return true;
        } catch (error) {
          console.log(error);
        }
      }
      try {
        let r = await axios.post('/api/items', {
          track: this.currentTrack,
          racer: this.racer,
          minute: this.minute,
          second: this.second,
          milli: this.milli,
          character: this.character,
          body: this.body,
          wheels: this.wheels,
          glider: this.glider,
        });
        this.addItem = r.data;
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>