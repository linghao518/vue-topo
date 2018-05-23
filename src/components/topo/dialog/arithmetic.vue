<template>
  <el-dialog custom-class="topo-dialog" :close-on-click-modal="false" :title="`编辑 ${name[item.name]}`" :visible="dialogVisible" @close="onClose" width="580px" append-to-body>
    <el-form :model="form" label-width="120px" ref="data" size="medium" :rules="rules">

      <el-form-item label="比较参数1" prop="condition1">
        <el-input v-model="form.condition1" auto-complete="off" placeholder="必填"></el-input>
      </el-form-item>
      <el-form-item label="比较符号" prop="operator">
        <el-select v-model="form.operator">
          <el-option label="等于" value="=="></el-option>
          <el-option label="不等于" value="!="></el-option>
          <el-option label="大于" value=">"></el-option>
          <el-option label="小于" value="<"></el-option>
          <el-option label="不小于" value=">="></el-option>
          <el-option label="不大于" value="<="></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="比较参数2" prop="condition2">
        <el-input v-model="form.condition2" auto-complete="off" placeholder="必填"></el-input>
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
        form: _.cloneDeep(this.item.data) || {
          operator: '=='
        },
        name: name,
        dialogVisible: true,
        rules: {
          condition1: [
            { required: true, message: '请输入比较参数1', trigger: 'blur' }
          ],
          operator: [
            { required: true, message: '请选择比较符号', trigger: 'blur' }
          ],
          condition2: [
            { required: true, message: '请输入比较参数2', trigger: 'blur' }
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
      }
    }
  }
</script>
