// import Vue from 'vue';
import './app.css';

Vue.config.productionTip = true;

new Vue({
    el: '#app',
    template: `
        <div class='hello'>aaa</div>
    `,
    created(){
        console.log(this);
    }
});