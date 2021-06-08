module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy: "http://localhost:5000",
  }
}
export default {
  vuetify: {
    customVariables: ['./src/assets/variables.scss'],
    treeShake: true
  },
}

