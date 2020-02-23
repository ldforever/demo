import * as types from '../mutation-types';

export default ({
    // 模块A的某个数据
    [types.INFORMATION](state, {data}) {  // 某个列表数据
        state.listA.list = data.list 
    } 
})