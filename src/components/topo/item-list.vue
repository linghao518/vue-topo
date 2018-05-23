<template>
  <div class="item-list">
    <div class="item-category">
      <div class="item-header">输入</div>
      <div class="item-content">
        <el-popover ref="DEVICE" placement="right" title="设备数据" width="200" trigger="hover" content="这是一段详细注释"></el-popover>
        <div v-popover:DEVICE class="item item-input" data-type="INPUT" data-name="DEVICE">
          <div class="item-icon"><img :src="icon.DEVICE" /></div>
          <div class="item-label">设备数据</div>
          <div class="item-port item-port-output"></div>
        </div>
        <el-popover ref="CUSTOM_DATA" placement="right" title="自定义数据" width="200" trigger="hover" content="这是一段详细注释"></el-popover>
        <div v-popover:CUSTOM_DATA class="item item-input" data-type="INPUT" data-name="CUSTOM_DATA">
          <div class="item-icon"><img :src="icon.CUSTOM_DATA" /></div>
          <div class="item-label">自定义数据</div>
          <div class="item-port item-port-output"></div>
        </div>
      </div>
    </div>

    <div class="item-category">
      <div class="item-header">处理方法</div>
      <div class="item-content">
        <el-popover ref="LOGIC_RULE" placement="right" title="自定义数据" width="200" trigger="hover" content="这是一段详细注释"></el-popover>
        <div v-popover:LOGIC_RULE class="item item-function" data-type="FUNCTION" data-name="LOGIC_RULE">
          <div class="item-icon"><img :src="icon.LOGIC_RULE" /></div>
          <div class="item-label">逻辑规则</div>
          <div class="item-port item-port-input"></div>
          <div class="item-port item-port-output"></div>
        </div>
        <el-popover ref="ARITHMETIC" placement="right" title="自定义数据" width="200" trigger="hover" content="这是一段详细注释"></el-popover>
        <div v-popover:ARITHMETIC class="item item-function" data-type="FUNCTION" data-name="ARITHMETIC">
          <div class="item-icon"><img :src="icon.ARITHMETIC" /></div>
          <div class="item-label">四则规范</div>
          <div class="item-port item-port-input"></div>
          <div class="item-port item-port-output"></div>
        </div>
      </div>
    </div>

    <div class="item-category">
      <div class="item-header">触发动作</div>
      <div class="item-content">
        <el-popover ref="APP" placement="right" title="APP推送" width="200" trigger="hover" content="这是一段详细注释"></el-popover>
        <div v-popover:APP class="item item-action" data-type="ACTION" data-name="APP">
          <div class="item-icon"><img :src="icon.APP" /></div>
          <div class="item-label">APP推送</div>
          <div class="item-port item-port-input"></div>
        </div>
        <el-popover ref="HTTP" placement="right" title="HTTP请求" width="200" trigger="hover" content="这是一段详细注释"></el-popover>
        <div v-popover:HTTP class="item item-action" data-type="ACTION" data-name="HTTP">
          <div class="item-icon"><img :src="icon.HTTP" /></div>
          <div class="item-label">HTTP请求</div>
          <div class="item-port item-port-input"></div>
        </div>
        <el-popover ref="EMAIL" placement="right" title="邮件" width="200" trigger="hover" content="这是一段详细注释"></el-popover>
        <div v-popover:EMAIL class="item item-action" data-type="ACTION" data-name="EMAIL">
          <div class="item-icon"><img :src="icon.EMAIL" /></div>
          <div class="item-label">邮件</div>
          <div class="item-port item-port-input"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { icon } from './enum'

  export default {
    name: 'item-list',
    data() {
      return {
        icon
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .item-list {
    box-sizing: border-box;
    padding-left: 20px;
  }

  .item-category {
    padding: 10px 0;
  }

  .item-header {
    margin-bottom: 10px;
    color: #999;
    font-size: 14px;
  }

  .item {
    position: relative;
    margin-bottom: 10px;
    background: #ddd;
    border-radius: 5px;
    width: 120px;
    height: 28px;
    cursor: move;
    outline: none;

    &.item-input {
      background: rgb(22, 156, 228);
    }
    &.item-function {
      background: rgb(143, 187, 52);
    }
    &.item-action {
      background: rgb(255, 197, 57);
    }
    &:hover {
      .item-port {
        background: #eee;
      }
    }

    .item-icon {
      position: absolute;
      width: 30px;
      top: 0;
      left: 0;
      bottom: 0;
      border-right: 1px solid rgba(0,0,0,.1);
      background-color: rgba(0,0,0,.05);

      img {
        position: absolute;
        top: 3px;
        left: 4px;
      }
    }

    .item-label {
      margin-left: 28px;
      line-height: 26px;
      overflow: hidden;
      text-align: center;
      color: #fff;
      font-size: 13px;
    }

    .item-port {
      position: absolute;
      top: 9px;
      width: 10px;
      height: 10px;
      border: 1px solid #999;
      box-sizing: border-box;
      border-radius: 3px;
      background: #d9d9d9;

      &.item-port-input {
        left: -5px;
      }

      &.item-port-output {
        right: -5px;
      }
    }
  }
</style>
