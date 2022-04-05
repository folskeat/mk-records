<template>
  <div>
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
              <th>Racer</th>
              <th>Time</th>
              <th>Kart</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in sortItems" :key="item.id">
              <td>{{item.racer}}</td>
              <td>{{item.time}}</td>
              <td>{{item.body}}</td>
              <td>
                <button @click="deleteItem(item)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="break"></div>

    <div class="add" v-if="showing">
      <div class="form">
        <input v-model="racer" placeholder="Player Name">
        <input v-model="time" placeholder="Time">
        <select v-model="body">
          <option disabled value="">Pick a kart</option>
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
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{addItem.time}}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.records {
  display: flex;
  flex-direction: column;
  align-self: center;
}

.records table {
  width: 400px;
  align-self: center;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'MushroomCup',
  data() {
    return {
      currentTrack: "",
      trackName: "",
      showing: false,
      items: [],
      racer: "",
      time: "",
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
    }
  },
  methods: {
    show() {
      this.showing = true;
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
            time: this.time,
            body: this.body,
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
          time: this.time,
          body: this.body,
          wheels: this.wheels,
          glider: this.glider,
        });
        this.addItem = r.data;
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