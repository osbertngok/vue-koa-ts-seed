<template>
  <div class="about">
    <el-row :gutter="10" type="flex" justify="center">
      <el-col :sm="20" :md="8" :lg="8">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="Username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Login</el-button>
          </el-form-item>
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
export default class LoginForm extends Vue {
  public form: {
    username: string,
    password: string,
  };

  constructor() {
    super();
    this.form = {
      username: '',
      password: '',
    };
  }

  public async onSubmit() {
    try {
      const res = await axios.post('/login', this.form);
      console.log(res);
      this.$router.push('/');
    } catch (error) {
      this.$notify.error({
        title: 'Login Error',
        message: 'Username does not exists or password does not match',
      });
    }
  }
}
</script>