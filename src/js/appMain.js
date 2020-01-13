import Vue from 'vue';
import hello from './components/hello.vue';

var vm = new Vue({
    components: {
        hello
    },
    el: '#app'
})