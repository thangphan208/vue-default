<template>
<div class="container">
  <div class="login-form mt-5">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" v-model="account.username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="account.password" class="form-control" id="exampleInputPassword1">
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>
</template>

<script >

export default {
  data() {
    return {
      account:{
        username:'',
        password:''
      },

    };
  },

  methods:{
    login(){

    }
  }

}

</script>

<style>

.login-form{
  margin: 0 auto;
  max-width: 500px;
  background-color: cadetblue;
  padding:20px ;
  border-radius: 7px;
}
.form-label{
  float: left;
}
</style>