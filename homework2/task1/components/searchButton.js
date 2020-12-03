const searchButton = {
    data() {
      return {
        stringToFind: null
      }
    },
    watch: {
      stringToFind(nVal, oVal) {
        this.$emit('search-guest', nVal)
      }
    },
    template: `
        <div class="search">
            <label><input type="text" v-model="stringToFind"></label>
        </div> 
    `
}