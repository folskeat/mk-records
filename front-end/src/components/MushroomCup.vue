<template>
  <div class="wrapper">
    <div class="section">
      <div class="tracks">
        <img src="~@/assets/data/courses/tracks/mushroom/mario_kart_stadium.webp" @click="show(); marioKartStadium()">
        <img src="~@/assets/data/courses/tracks/mushroom/water_park.webp" @click="show(); waterPark()">
        <img src="~@/assets/data/courses/tracks/mushroom/sweet_sweet_canyon.webp" @click="show(); sweetSweetCanyon()">
        <img src="~@/assets/data/courses/tracks/mushroom/thwomp_ruins.webp" @click="show(); thwompRuins()">
      </div>
    </div>

    <div class="break"></div>

    <div class="section">
      <div class="records" v-if="showing">
        <h1>Records for {{this.trackName}}</h1>
        <div class="break"></div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Racer</th>
              <th>Time</th>
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
              <td>{{item.body}}</td>
              <td>{{item.wheels}}</td>
              <td>{{item.glider}}</td>
              <td>
                <button @click="deleteItem(item)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="break"></div>

    <div class="section">
      <div class="add" v-if="showing">
        <div class="form">
          <input v-model="racer" placeholder="Player Name">
          <input type="number" min="0" max="9" v-model="minute" placeholder="Minutes">
          <label>:</label>
          <input type="number" min="0" max="59" v-model="second" placeholder="Seconds">
          <label>.</label>
          <input type="number" min="0" max="999" v-model="milli" placeholder="Milliseconds">
          <div class="break"></div>
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
    <p>To edit your existing record, just re-use your racer name</p>
  </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
  align-items: center;
  align-content: center;
  align-self: center;
  justify-content: center;
  overflow: auto;

  padding: 0;
  margin: 0;
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
  align-self: center;

  margin: 0;
  padding: 0;

  height: 100%;
  flex-wrap: nowrap;
}

.records table {
  width: 900px;
  align-self: center;

  table-layout: fixed;
  overflow: auto;
  position: relative;
}

.add {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.add form {
  display: flex;
  overflow: hidden;
  flex-direction: row;
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
</style>

<script>
import axios from 'axios';

export default {
  name: 'MushroomCup',
  rank: 0,
  prevTime: 0,
  data() {
    return {
      currentTrack: "",
      trackName: "",
      showing: false,
      items: [],
      racer: "",
      time: "",
      minute: "",
      second: "",
      milli: "",
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
    show() {
      this.showing = true;
    },
    calctime(item) {
      console.log(item);
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
    marioKartStadium() {
      this.currentTrack = "mario_kart_stadium";
      this.trackName = "Mario Kart Stadium";
    },
    waterPark() {
      this.currentTrack = "water_park";
      this.trackName = "Water Park";
    },
    sweetSweetCanyon() {
      this.currentTrack = "sweet_sweet_canyon";
      this.trackName = "Sweet Sweet Canyon";
    },
    thwompRuins() {
      this.currentTrack = "thwomp_ruins";
      this.trackName = "Thwomp Ruins";
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
      let filterItems = this.items.filter(item => item.track === this.currentTrack);
      let match = filterItems.find(item => item.racer === this.racer);
      if (match != null && match.track === this.currentTrack) {
        try {
          await axios.put("/api/items/" + match._id, {
            minute: this.minute,
            second: this.second,
            milli: this.milli,
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