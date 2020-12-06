const searchButtons = {
    data() {
      return {
        stringToFind: null,
      }
    },
    props: {
      foundGuests: {
        type: Number,
        required: true
      },
      arrivedCount: {
        type: Number,
        required: true
      },
      absentCount: {
        type: Number,
        required: true
      }
    },
    watch: {
      stringToFind(nVal, oVal) {
        this.$emit('search-guest', nVal)
      }
    },
    template: `
        <div class="search">
            <label> <span>{{ foundGuests }}</span> <input type="text" v-model="stringToFind"></label>
            <button class="arrived" type="button" @click="$emit('arrived')">arrived ({{arrivedCount}})</button>
            <button class="absent" type="button" @click="$emit('absent')">absent ({{absentCount}})</button>
            <button class="all" type="button" @click="$emit('all')">all</button>
        </div> 
    `
}