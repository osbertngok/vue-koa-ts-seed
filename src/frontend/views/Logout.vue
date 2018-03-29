<template>
  <div class="about">
    <el-row :gutter="10" type="flex" justify="center">
      <el-col :sm="20" :md="8" :lg="8">
        <span>{{message}}</span>
        <el-form ref="form" label-width="80px">
          <el-button type="primary" @click="onLogin">Navigate to Login</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import ElementUI from 'element-ui';
import { Component } from 'vue-property-decorator';

@Component
export default class LogoutForm extends Vue {
  public message: string;

  constructor() {
    super();
    this.message = '';
  }

  public async mountedAsync() {
    try {
      const res = await axios.post('/logout');
      console.log(res);
      this.message = 'You have logged out successfully';
    } catch (error) {
      this.$notify.error({
        title: 'Login Error',
        message: 'Logout failed',
      });
    }
  }

  public mounted() {
    this.mountedAsync();

  }

  public async onLogin() {
    this.$router.push('/login');
  }
}
</script>