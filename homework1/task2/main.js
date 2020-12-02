new Vue({
  el: '#vue',
  data() {
    return {
      mainButton: 'click me',
      buttonsList: [
        { name: 'G', style: { 'background-color': 'green', color: 'black' } },
        { name: 'Y', style: { 'background-color': 'yellow', color: 'black' } },
        { name: 'B', style: { 'background-color': 'black', color: 'white' } },
      ],
      showModal: false,
      showModalButtonClass: {
        'margin-left': '20px',
        width: '75px',
        height: '30px'
      },
      currentColor: 'white'
    }
  },
  computed: {
    styleObject() {
      return {
        'background-color': this.currentColor
      }
    }
  }
})