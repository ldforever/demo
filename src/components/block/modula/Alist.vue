<template>
    <div>
        {{ listA }}
    </div>
</template>


<script>
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'aList',
    comments: {},
    data() {
        return {

        }
    },
    created() {
        
    },
    computed: {
        ...mapGetters([
            'listA'
        ]),
    },
    watch: {
        
    },
    methods: {
        ...mapActions(['appSearch']),

        searchFunc() { //  使用actions请求数据
            this.appSearch(params)  
        }
    },
}
</script>
