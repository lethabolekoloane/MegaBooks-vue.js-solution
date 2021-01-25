<template>
  <div class="about">
    <h1>Login to MegaBooks</h1>
    <div class="container">
      <br />
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              required
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
            <br />

            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                required
                placeholder="Password"
              />
              <div
                v-if="password.length > 1 && password.length < 6"
                class="text-danger"
              >
                Password length should be greather than 6
              </div>
            </div>

            <button @click="login" class="lg btn btn-primary">Login</button>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  mounted: function(){
    if(firebase.auth().currentUser)
      this.$router.replace("dashboard");

  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user.user);
          // ...
        })
        .catch(function(error) {
          alert("Unable to log in: " + error.message);
        });
    }
  }
};
</script>

<style scoped></style>
