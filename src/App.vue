<template>
  <div class="OpenTheDoorDiv">
    <div>
      <el-row justify="center">
        <el-col>
          <img
              src="https://sls-cloudfunction-ap-guangzhou-code-1252781038.cos.ap-guangzhou.myqcloud.com/picture/2022%E5%B9%B48%E6%9C%8815%E6%97%B615%E6%97%B649%E5%88%8613%E7%A7%92%E8%BF%9C%E7%A8%8B%E5%BC%80%E9%97%A8.png"/>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row justify="center">
        <el-button type="primary" size="large" @click="openTheDoor">一键开门</el-button>
      </el-row>
    </div>

  </div>
</template>

<script>
import {ElLoading, ElMessage} from 'element-plus'

export default {
  data() {
    return {}
  },
  methods: {

    openTheDoor() {
      const loading = ElLoading.service({
        lock: true,
        text: '一键开门中...',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      const url = "http://140.246.242.45:3030/openTheDoor"
      this.axios.get(url).then(res => {
        loading.close()
        console.log(res)
        if (res.data.recode === 200) {
          ElMessage.success('开门成功')
        } else {
          ElMessage.error(res.data.msg)
        }
      }).catch(err => {
        loading.close()
        ElMessage.error({
          message: '开门失败,如多次尝试后仍失败请联系管理员更新token'
        });
      })
    },
  },
  mounted() {
  }
}


</script>

<style>

</style>
