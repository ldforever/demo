import Vue from 'vue';
import App from './App';
import store from './store';


import './assets/css/base.less';


new Vue({
    el: '#app',
    store,
    components: {App},
    template: '<App/>'
})