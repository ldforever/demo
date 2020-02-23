import * as types from '../mutation-types'
import Api from  'src/api' //  Api为ajax的工厂函数


export default {
    // 模块a页面的某个搜索请求
    appSearch({commit, state}, params) {
        Api.modula.appSearch(params).then(
            data => {  // 根据数据判断
                if(data.status === 'fail' ) {
                    alert('fail')
                } else {
                    commit(types.INFORMATION, data);  // 成功的数据使用commit传给mutations处理
                }
            }
        ).catch(res => {
            console.error(res.message)
        })
    }
}

