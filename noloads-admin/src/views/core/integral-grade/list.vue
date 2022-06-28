<template>
  <div>积分等级列表</div>
</template>

<script>
// 引入api模块
import integralGradeApi from '@/api/core/integral-grade'

export default {
  data() {
    return {
      list: [], // 积分等级列表
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      integralGradeApi.list().then((response) => {
        this.list = response.data.list
      })
    },
  },
}
</script>

<style scoped></style>
