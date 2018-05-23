<template>
  <el-dialog custom-class="topo-dialog" :close-on-click-modal="false" :title="`编辑 ${name[item.name]}`" :visible="dialogVisible" @close="onClose" width="580px" append-to-body>
    <el-form :model="form" label-width="120px" ref="data" size="medium" :rules="rules">
      <el-form-item label="触发方式" prop="event">
        <el-select v-model="form.event" placeholder="请选择触发方式">
          <el-option label="无" value="none"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数据源URL" prop="inputUrl">
        <el-input v-model="form.inputUrl" auto-complete="off" placeholder="输入获取数据的URL"></el-input>
      </el-form-item>
      <el-form-item label="请求方法" prop="method">
        <el-select v-model="form.method" placeholder="请选择请求方法">
          <el-option label="GET" value="GET"></el-option>
          <el-option label="POST" value="POST"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="请求头部" prop="headers">
        <el-input type="textarea" rows="2" v-model="form.headers" auto-complete="off" placeholder="选填"></el-input>
      </el-form-item>
      <el-form-item label="请求参数" prop="data">
        <el-input type="textarea" rows="4" v-model="form.data" auto-complete="off" placeholder="JSON格式"></el-input>
      </el-form-item>
      <el-form-item label="Schema" prop="schema">
        <el-input type="textarea" rows="4" v-model="form.schema" auto-complete="off" placeholder="JSON格式"></el-input>
      </el-form-item>
      <el-form-item label="数据标识名" prop="alias">
        <el-input v-model="form.alias" auto-complete="off" placeholder="给数据指定一个前缀标识"></el-input>
      </el-form-item>
      <el-form-item label="更新间隔" prop="refresh">
        <el-input-number v-model="form.refresh" controls-position="right" :min="0" :max="99999"></el-input-number>
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
          method: 'GET',
          schema: `{"$schema":"", "type":""}`,
          refresh: 3600
        },
        name: name,
        dialogVisible: true,
        rules: {
          inputUrl: [
            { required: true, message: '请输入获取数据的URL', trigger: 'blur' }
          ],
          schema: [
            { required: true, message: '请输入Schema', trigger: 'blur' }
          ],
          alias: [
            { required: true, message: '请给数据指定一个前缀标识', trigger: 'blur' }
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
