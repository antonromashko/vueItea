new Vue({
  el: '#vue',
  data() {
    return {
      myLists: {
        devices: ['ios', 'android', 'desktop', 'mobile'],
        topClubs: ['Manchester City', 'Liverpool', 'Arsenal', 'PSG', 'Bayern Munich'],
        eSports: ['Dota 2', 'CS:GO', 'League of Legends', 'Call of Duty']
      },
      enableLists: [],
      activeClass: 'active'
    }
  }
})

class MyVue {
  constructor(parameters) {
    this.selector = parameters.element
    this.data = parameters.data
    //
    this.init()
  }

  init() {
    this.element = document.querySelector(this.selector);
    for (const [key, value] of Object.entries(this.data.myLists)) {
      let subItemDiv = document.createElement('div');
      subItemDiv.className = 'current-list';
      let button = document.createElement('button');
      button.className = button.innerHTML = key;
      let list = document.createElement('ul');
      list.classList.add(...[key, 'active']);
      value.forEach(item => {
        let row = document.createElement('li');
        row.innerHTML = item;
        list.insertAdjacentElement('beforeend', row);
      })
      subItemDiv.insertAdjacentElement('beforeend', button);
      subItemDiv.insertAdjacentElement('beforeend', list);
      this.element.insertAdjacentElement('beforeend', subItemDiv)
      button.addEventListener('click', (e) => {
        list.classList.toggle('active');
      })
    }
  }
}

const test = new MyVue({
    element: '#js',
    data: {
      myLists: {
        devices: ['ios', 'android', 'desktop', 'mobile'],
        topClubs: ['Manchester City', 'Liverpool', 'Arsenal', 'PSG', 'Bayern Munich'],
        eSports: ['Dota 2', 'CS:GO', 'League of Legends', 'Call of Duty']
      }
    }
});

console.log(test);

