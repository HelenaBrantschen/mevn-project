<template>
  <div class="post">
    <a href="">
      <img src="../static/assets/src/img01.png" />
    </a>
    <div class="title-position">
      <p class="title">Post title</p>
      <p class="subtitle">Subtitle</p>
    </div>
  </div>
</template>
<style>
.title-position {
  position: absolute;
}
.title {
  font-size: 25pt;
}
.subtitle {
  font-size: 20pt;
}

.post {
  width: 33.33vw;
  height: 33.33vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
}
</style>
