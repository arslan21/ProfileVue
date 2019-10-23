const userList = [
  {
    "login": "student",
    "password": "sdemo",
    "status": "student",
     "name": "student1"
  },
  {
    "login": "teacher",
    "password": "tdemo",
    "status": "teacher",
    "name": "teacher1"
  }
]

export default {
  props: {
    login: String,
    password: String
  },
  methods: {
    isAuth(login, password) {
      for (var i = 0; i < this.userList.length; i++) {
        if (login == this.userList[i].login && password == this.userList[i].login) {
          return userList[i]
        }
      }
      return "Пользователь не зарегестрирован"
    }
  }
}
