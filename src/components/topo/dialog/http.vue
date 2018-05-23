<template>
  <el-dialog custom-class="topo-dialog" :close-on-click-modal="false" :title="`编辑 ${name[item.name]}`" :visible="dialogVisible" @close="onClose" width="580px" append-to-body>
    <el-form :model="form" label-width="120px" ref="data" size="medium" :rules="rules">
      <el-form-item label="请求URL" prop="url">
        <el-input v-model="form.url" auto-complete="off" placeholder="必填"></el-input>
      </el-form-item>
      <p><em>TODO: 演示项目，其他字段未添加</em></p>
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
        rules: {
          url: [
            { required: true, message: '请输入请求URL', trigger: 'blur' }
          ]
        }
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
        this.item.updateItem({
          text: this.form.url
        })
      }
    }
  }
</script>
