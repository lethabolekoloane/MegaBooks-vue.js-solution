/* eslint-disable */
<template>
  <div class="about">
    <h1>Register to MegaBooks</h1>
    <div class="container">
      <br />
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="FullNames"
              required
              placeholder="Full Names"
            />
            <br />
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
                required
                v-model="password"
                placeholder="Password"
              />
              <div
                v-if="password.length > 1 && password.length < 6"
                class="text-danger"
              >
                Password length should be greather than 6
              </div>
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="reenterPassword "
                required
                v-model="reenterPassword"
                placeholder="Reenter Password"
              />
              <div v-if="password != reenterPassword" class="text-danger">
                Passwords dont match
              </div>
            </div>

            <button @click="register" class="btn-lg btn-primary">
              Register
            </button>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase"
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      reenterPassword: ""
    };
  },
  mounted: function(){
    if(firebase.auth().currentUser)
      this.$router.replace("dashboard");

  },
  methods: {
    register: function() {
      console.log("Email:" + this.email);
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            // Signed in
            console.log(user.user)
            // ...
          })
          .catch(function(error){
            alert("unable to register user" + error.message)
          });
    }
  }
};
</script>

<style scoped></style>
