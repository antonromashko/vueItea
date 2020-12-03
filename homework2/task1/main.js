new Vue({
    el: '#root',
    components: {
        Guests
    },
    data: {
        some_attr: {
            name: 'type',
            value: 'button'
        },
        objOfAttr: {
            type: 'button',
            'class': 'myBtn',
            disable: 'disable'
        },
        labelForBtn: 'props - Label btn',
        inputFromChild: ''
    },
    methods: {
        getInputData(inp, e) {
            this.inputFromChild = inp;
            console.log(e)
        },
        showData() {
            console.log('it\'s native');
        }
    }
})