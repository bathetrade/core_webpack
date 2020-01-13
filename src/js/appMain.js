import Vue from 'vue';

var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue from Webpack'
    },
    created() {
        console.log('Created() root Vue instance');
    }
});