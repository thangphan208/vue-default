<template>

  <Form @submit="onSubmit">
    <div class="form-login">
      <div class="mb-3">
        <label class="form-label"
               for="email">Email address</label>
        <Field v-model="email" class="form-control" name="email" rules="required|email|minLength:8,128" type="text"/>
        <ErrorMessage class="err-message" name="email"/>
      </div>

      <div class="mb-3">
        <label class="form-label"
               for="password">Password</label>
        <Field v-model="password" class="form-control" name="password" rules="required|minLength:8,128"
               type="password"/>
        <ErrorMessage class="err-message" name="password"/>
      </div>
      <button class="btn btn-light">Login</button>
    </div>
  </Form>
</template>

<script lang="ts">
import {ErrorMessage, Field, Form} from 'vee-validate';

export default ({
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      console.log(this.email);
    }
  }


});
</script>

<style>
.form-login {
  padding-top: 50px;
  background-color: cadetblue;
  margin: auto;
  max-width: 500px;
  padding: 30px;
  border-radius: 5px;
  margin-top: 100px;
}

.form-label {
  float: left;
}

.err-message {
  color: red;
}
</style>