<template>
  <div>
    <form
      action=""
      @submit="formSubmitted"
      @submit.prevent
      :class="classes.formContainer"
    >
      <div>
        <label for="first name">First Name :</label>
        <input type="text" v-model="data.firstName" />
      </div>
      <div>
        <label for="last name">Last Name :</label>
        <input type="text" v-model="data.lastName" />
      </div>
      <div>
        <label for="email">Email :</label>
        <input type="email" v-model="data.email" />
      </div>
      <div>
        <label for="Phone number">Phone number :</label>
        <input type="number" v-model="data.phone" />
      </div>
      <div>
        <input type="submit" value="Save" />
      </div>
    </form>
  </div>
</template>
<script lang="ts" src="./Form.ts" />
