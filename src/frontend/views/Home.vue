<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/frontend/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public mounted() {
    this.mountedAsync();
  }

  public async mountedAsync() {
    try {
      const res = await axios.get('/user');
      if (!res.data) {
        this.$router.push('/login');
      }
    } catch (error) {
      this.$router.push('/login');
    }
  }
}
</script>
