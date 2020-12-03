
const Guests = {
    components: {
        GuestItem,
        searchButton
    },
    data() {
        return {
            guests: [],
            search: ''
        }
    },
    created() {
        this.guests = guestsList.map(item => {
            item.isPresent = false;
            return item
        });
    },
    computed: {
        filteredGuests(val) {
            return this.guests.filter(item => item.name.indexOf(this.search) >= 0)
        }
    },
    methods: {
        presenceToggler(id) {
            this.guests = this.guests.map(item => {
                if(item._id === id) {
                    item.isPresent = !item.isPresent
                }
                return item
            })
        },
        searchGuest(val) {
            this.search = val
        }
    },
    template: `
        <div class="guests">
            <search-button @search-guest="searchGuest"></search-button>
            <ol>
                <guest-item v-for="guest in filteredGuests" :key="guest._id" :guest="guest" @present-tog="presenceToggler"></guest-item>
            </ol>
        </div>
    `
}