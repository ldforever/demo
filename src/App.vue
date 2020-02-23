<template>
    <div id="app">
        <div>
            <HeadBar/>
            <SideBar/>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'app',
    data() {
        return {

        };
    },
    components: {
        Headbar: () => import('block/Headbar'),
        Sidebar: () => import('block/Sidebar')
    }
}
</script>
<style lang="less">
    @import (reference) url('~assets/css/a.less');
    @import (reference) url('~assets/css/b.less');
</style>

