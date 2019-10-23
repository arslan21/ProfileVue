<template>
  <div class="">
    <v-footer :fixed="true" app>
      <v-toolbar dark class="primary">
        <router-link to="/" tag="span" style="cursor:pointer">
          <v-toolbar-title v-text="'Наш сайт'">
          </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-footer>
  </div>
</template>

<script>
  export default {
    computed:{
      menuItems(){
        return [
          {
            icon: 'input',
            title: 'Войти',
            route: '/profile-student'
          },
          {
            icon: 'info',
            title: 'info',
            route: '/profile-teacher'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
