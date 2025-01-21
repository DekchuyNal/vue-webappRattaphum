<template>
  <div class="body-text">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button @click="goHome">Go To Home</button>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
  methods: {
      goHome (){
          this.$router.push('/');
      },
  },
};
</script>
<style scoped>
h1 {
color: red;
}
.body-text {
position: absolute;
top: 30%;
left: 60%;
transform: translate(-50%, -50%);
width: 100%;
text-align: left;
padding: 0 30px;
}

.body-text div {
font-size: 45px;
font-weight: 600;
}
</style>