
const GuestItem = {
    props: {
        guest: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isPresent: this.guest.isPresent,
        }
    },
    watch: {
        isPresent(nValue, oValue) {
            this.$emit('present-tog', this.guest._id)
        }
    },
    template: `
        <li>
            <span :style="{textDecoration: isPresent ? 'line-through' : ''}">{{ guest.name }}</span>
            <input type="checkbox" v-model="isPresent">        
        </li>
    `
}