<template>
  <div class="wrapper">
    <div class="header"></div>
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
  margin-top: 10vh;
}
.header {
  position: fixed;
  width: 100vw;
  height: 10vh;
  background-color: aqua;
  z-index: 1000;
}
</style>
