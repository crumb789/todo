<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

*{
  box-sizing: border-box;
  margin: 0;
  color: #fff;
  // background-color: #2c3e50;
  // background-image: linear-gradient(to left, #11de93, #0e7ad6);
}
.container{
  width: 1140px;
  margin: 0 auto;
  background: transparent;
	// background-image: linear-gradient(to left, #0b8b5c, #123c60);
  padding: 30px 30px;
}

h1{
  color: #fff;
  text-transform: uppercase;
  font-size: 40px;
  text-shadow: 5px 5px 5px #0b8b5c;
}
html{
	background-image: linear-gradient(to left, #0b8b5c, #123c60);

}



</style>
