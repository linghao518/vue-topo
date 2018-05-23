<template>
  <el-dialog custom-class="topo-dialog" :close-on-click-modal="false" :title="`编辑 ${name[item.name]}`" :visible="dialogVisible" @close="onClose" width="580px" append-to-body>
    <el-form :model="form" label-width="120px" ref="data" size="medium" :rules="rules">
      <el-form-item label="触发方式" prop="event">
        <el-select v-model="form.event" placeholder="请选择触发方式">
          <el-option value="data" label="设备上报状态"></el-option>
          <el-option value="change" label="设备状态变化"></el-option>
          <el-option value="online" label="设备上线"></el-option>
          <el-option value="offline" label="设备下线"></el-option>
          <el-option value="bind" label="设备绑定"></el-option>
          <el-option value="unbind" label="设备解绑"></el-option>
          <el-option value="none" label="无"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="onConfirm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import _ from 'lodash'
  import { name } from '../enum'

  export default {
    props: ['item'],
    data() {
      return {
        form: _.cloneDeep(this.item.data) || {},
        name: name,
        dialogVisible: true,
        rules: {}
      }
    },
    methods: {
      onConfirm() {
        this.$refs['data'].validate(valid => {
          if (valid) {
            this.item.data = this.form
            this.onClose()
          }
        })
      },
      onClose() {
        this.dialogVisible = false
        this.$emit('on-close', this.item)
      }
    }
  }
</script>
