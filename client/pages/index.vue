<template>
  <div class="wrapper">
    <Header />
    <div class="post-content">
      <div class="col-1">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div class="col-2">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div class="col-3">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.post-content {
  margin: 0 0;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: start;
  text-align: center;
}
.col-1,
.col-2,
.col-3 {
  margin: 0 0;
  min-height: 100vh;
  justify-content: start;
  align-items: start;
  text-align: center;
  margin-top: 11vw;
}
.header {
  position: fixed;
  width: 100vw;
  height: 16.5vw;
  background-color: white;
  display: flex;
  z-index: 500;
  justify-content: space-between;
}
.nav {
  position: relative;
  height: 100%;
  width: 33.33%;
  margin: auto, 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
#mapicon {
  position: relative;
  width: auto;
  height: 7vh;
  z-index: 501;
}
#plus {
  font-size: 2.5rem;
  font-weight: 200;
}
</style>
