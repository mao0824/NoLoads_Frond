// 引入axios的初始化模块
import request from '@/utils/request'

// 导入默认模块
export default {
  list() {
    return request({
      url: '/admin/integralGrade/list',
      method: 'get',
    })
  },
}
