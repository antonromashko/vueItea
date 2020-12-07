const ContactList = {
  components: {
    Contact
  },
  template: `
<div id="main">
<div class="contact-list">
    <div class="contact-search">
      <input 
        id="search-input" 
        v-model="searchValue" 
        placeholder="search" 
        type="text" />
        <span>{{ countContacts }}</span>
    </div>
     <div class="buttons-panel">
     <div class="delete" :class="{ pending: !activeId }" @click="deleteContact">&#10005;</div>
      <div
        class="create"
        @click="openForm"
      >
        +
      </div>
     </div>
      
      <ul class="items">
        <li
          v-for="(contact, idx) in filteredGuests"
          :key="idx"
          :class="{ active: contact.id === activeId }"
          class="item"
          @click="selectContact(contact)"
          >{{ contact.firstName + ' ' + contact.lastName + ' ' + contact.phone }}
          <img alt="No image" :src="contact.image">
          </li>
          
      </ul>
</div>
<contact v-if="isContactForm" @save-contact="saveContact"></contact>
</div>`,
  data() {
    return {
      searchValue: '',
      activeId: null,
      contactList: [
        {firstName: 'John', lastName: 'Smith', id: 1, phone: '555-25-35', image: 'http://fakeimg.pl/300/'},
        {firstName: 'Adam', lastName: 'Black', id: 2, phone: '555-33-11', image: 'http://fakeimg.pl/300/'},
        {firstName: 'Kate', lastName: 'William', id: 3, phone: '555-08-19', image: 'http://fakeimg.pl/300/'}
      ],
      isContactForm: false
    }
  },
  watch: {
      stringToFind(nVal, oVal) {
        this.searchValue = nVal
      }
  },
  computed: {
    countContacts() {
      return this.contactList.length
    },
    filteredGuests() {
      return this.contactList.filter(item => {
          // search in all fields
          for(const key of Object.keys(item)) {
              if (item[key].toString().indexOf(this.searchValue) >= 0) {
                  return true
              }
          }
          return false
      })
    },
  },
  methods: {
    selectContact(data) {
      this.activeId = data.id
    },
    openForm() {
      this.isContactForm = true;

    },
    saveContact(data) {
      this.contactList.push(data)
    },
    deleteContact() {
      this.contactList = this.contactList.filter(item => item.id !== this.activeId)
    }
  }
}