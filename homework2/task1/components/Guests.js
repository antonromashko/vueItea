
const Guests = {
    components: {
        GuestItem,
        searchButtons: searchButtons,
        isArrived: false,
        isAbsent: false
    },
    data() {
        return {
            allGuests: [],
            guests: [],
            conditionGuests: [],
            search: '',
            isDisabledMore: false
        }
    },
    created() {
        this.allGuests = this.getBatchedGuests(guestsList.map(item => {
            item.isPresent = false;
            return item
        }), 10);
        this.guests = this.allGuests.shift()
        this.conditionGuests = this.guests
    },
    computed: {
        filteredGuests() {
            return this.conditionGuests.filter(item => {
                // search by index
                if(this.search.startsWith('index=')) {
                    return item.index === parseInt(this.search.replace('index=', ''))
                }
                // search in all fields
                for(const key of Object.keys(item)) {
                    if (item[key].toString().indexOf(this.search) >= 0) {
                        return true
                    }
                }
                return false
            })
        },
        guestsCount() {
            return this.filteredGuests.length
        },
        arrivedCount() {
            if (this.guests) {
                return this.guests.filter(item => item.isPresent === true).length
            }
        },
        absentCount() {
            let allGuestsCount = 0;
            if (this.allGuests.length > 0) {
                allGuestsCount = (this.allGuests.length - 1) * 10 + this.allGuests.slice(-1)[0].length
            }
            if (this.guests) {
                return this.guests.filter(item => item.isPresent === false).length + allGuestsCount
            }
        }
    },
    watch: {
      allGuests() {
          if(this.allGuests.length === 0) {
                this.isDisabledMore = true
          }
      }
    },
    methods: {
        presenceToggle(id) {
            this.guests = this.guests.map(item => {
                if(item._id === id) {
                    item.isPresent = !item.isPresent
                }
                return item
            })
        },
        searchGuest(val) {
            this.search = val
        },
        showArrived() {
            this.conditionGuests = this.guests
            this.conditionGuests = this.guests.filter(item => item.isPresent === true)
        },
        showAbsent() {
            this.conditionGuests = this.guests
            this.conditionGuests = this.guests.filter(item => item.isPresent === false)
        },
        all() {
            let res = [];
            this.allGuests.forEach(item => {
                res.push(...item)
            })
            this.allGuests = []
            this.conditionGuests = this.guests = [...this.guests, ...res]
        },
        getBatchedGuests(arr, n) {
            function *range(start, stop, step = 1) {
                if (stop == null) {
                    stop = start;
                    start = 0;
                }
                for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
                    yield i;
                }
            }
            function *batched(arr, n) {
                for(let i of range(0, arr.length, n)) {
                    yield arr.slice(i, i + n);
                }
            }
            return Array.from(batched(arr, n))
        },
        showMore() {
            this.guests.push(...this.allGuests.shift())
        }
    },
    template: `
        <div class="guests">
            <search-buttons
                :found-guests="guestsCount"
                :arrived-count="arrivedCount"
                :absent-count="absentCount"
                @search-guest="searchGuest"
                @arrived="showArrived" 
                @absent="showAbsent" 
                @all="all"></search-buttons>
            <ol>
                <guest-item v-for="guest in filteredGuests" :key="guest._id" :guest="guest" @present-tog="presenceToggle"></guest-item>
            </ol>
            <button class="more" type="button" @click="showMore" :disabled="isDisabledMore">more</button>
        </div>
    `
}