<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">King of Bot</a> -->
      <router-link class="navbar-brand" :to="{name:'home'}">首页</router-link>

      <router-link class="navbar-brand" :to="{name:'page1'}">page1</router-link>
      <router-link class="navbar-brand" :to="{name:'page2'}">page2</router-link>
      <router-link class="navbar-brand" :to="{name:'page3'}">page3</router-link>
      <router-link class="navbar-brand" :to="{name:'page4'}">page4</router-link>
      <router-link class="navbar-brand" :to="{name:'page5'}">page5</router-link>
      <router-link class="navbar-brand" :to="{name:'page6'}">page6</router-link>
      <router-link class="navbar-brand" :to="{name:'page7'}">page7</router-link>
      <div class="collapse navbar-collapse" id="navbarText">
        



      <ul class="navbar-nav ms-auto" v-if="$store.state.user.is_login">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            admin
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click="logout">退出</a></li>
          </ul>
        </li>
      </ul>

      <ul class="navbar-nav ms-auto" v-else>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'user_account_login' }" role="button">
            登录
          </router-link>
        </li>
      </ul>



    </div>
  </div>
</nav>
</template>

<script>
// import { useStore } from 'vuex';
import router from '../router/index'
import store from '../store/index'

export default {
    setup() {
        // const store = useStore();
        const logout = () => {
          store.state.user.is_login=false;
          router.push({ name: 'user_account_login' });
        }
        console.log(store.state.user.is_login);
        return {
            logout
        }
    }
}
</script>

<style scoped>

</style>
