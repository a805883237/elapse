<template>
  <div class="ta-page">
    <div>
      <div class="head">
        <p>
          4<ta-icon name="flash-off"></ta-icon>3
        </p>
        <p>您没有权限访问该页面</p>
      </div>
      <div class="body">
        <ta-button type="text" @click="goback2home">返回首页</ta-button>
        <ta-button type="primary" @click="goback">返回上一页</ta-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
})
export default class NotFound extends Vue {
  goback() {
    this.$router.go(-1)
  }

  goback2home() {
    this.$router.push('/')
  }
}
</script>


<style lang="scss" scoped>
@include b(page) {
  box-sizing: border-box;
  height: 100%;
  background: #f1f1f1;
  @include flexLayout(center) {
    align-items: center;
  };

  > div {
    background: #fff;
    padding: 80px 120px;
    border: 1px solid $border;
    border-radius: 5px;

    .head {
      font-size: 240px;
      font-weight: 700;
      color: $primary;

      p {
        &:last-of-type {
          font-size: 20px;
          color: $primaryFont;
          text-align: center;
        }
      }

      .ta-icon {
        font-size: 220px;
        color: $danger;
      }
    }

    .body {
      margin-top: 40px;
      text-align: center;
    }
  }
}
</style>
