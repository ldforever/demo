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
        HeadBar: () => import('block/HeadBar'),
        SideBar: () => import('block/SideBar')
    }
}
</script>
<style lang="less">
    @import (reference) url('~assets/css/a.less');
    @import (reference) url('~assets/css/b.less');
</style>

