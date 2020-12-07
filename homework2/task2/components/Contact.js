const Contact = {
  data() {
    return {
      formData: { firstName: '', lastName: '', id: 1, phone: '', image: '' },
    }
  },
  methods: {
    saveContact() {
      this.formData.id = new Date().toString()
      this.$emit('save-contact', this.formData)
    }
  },
  template: `
<div id="contact">
     <form class="form">
      <label for="firstName" class="first-name">First Name</label>
      <input v-model="formData.firstName" id="firstName" type="text">

      <label for="lastName" class="last-name">Last Name</label>
      <input v-model="formData.lastName" id="lastName" type="text">

      <label for="phone">Phone</label>
      <input v-model="formData.phone" id="phone" type="text">

      <label for="image">Image</label>
      <input v-model="formData.image" id="image" type="text">

      <button @click="saveContact" type="button">SAVE</button>
    </form>
</div>
  `
}