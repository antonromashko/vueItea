new Vue({
  el: '#main',
  data() {
    return {
      myLists: {
        devices: ['ios', 'android', 'desktop', 'mobile'],
        topClubs: ['Manchester City', 'Liverpool', 'Arsenal', 'PSG', 'Bayern Munich'],
        eSports: ['Dota 2', 'CS:GO', 'League of Legends', 'Call of Duty']
      },
      enableLists: [],

    }
  }
})