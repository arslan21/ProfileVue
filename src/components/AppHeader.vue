<template>
  <div class="">
    <v-toolbar app dark class="primary">
      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title v-text="'Наш сайт'">
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-for="(item, i) in menuItems" flat :key="`menuItem${i}`" :to="item.route">
          <v-icon left v-html="item.icon"></v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
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
