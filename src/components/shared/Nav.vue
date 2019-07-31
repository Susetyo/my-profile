<template>
  <v-toolbar>
    <v-toolbar-title>Susetyo Front End Enginner</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn @click="redirectLink('home')" text>Home</v-btn>
      <v-btn @click="redirectLink('portofolio')" text>Portofolio</v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>
<script>
export default{
  name: 'Nav',
  methods:{
    redirectLink(pages){
      this.$router.push(`/${pages}`);
    }
  }

} 
</script>