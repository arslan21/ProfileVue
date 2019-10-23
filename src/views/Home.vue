<template>
  <div class="">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Авторизация пользователя</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Ваш логин" type="text" required></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Ваш пароль" type="password" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" @click="logIn">Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  // import isAuth from '@/server/index.js'

  export default {
    data(){
      return {
        login: "",
        password: ""
      }
    },
    methods: {
      logIn() {
        if (this.$refs.form.validate()) {
          const user = {
            login: this.login,
            password: this.password
          }

          this.$store.dispatch('loginUser', user)
            .then(() => {
                this.$router.posh('/profile-student')
            })
            // .catch(err => console.log(err))
        }
      }
    }
  }
</script>

<style>
/<style>
