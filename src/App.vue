<template>
  <div id="app">
    <div class="dragWrapper">
      <VueDragger :parentLimitation="true" :areaLimits="{}" :w="200" :h="200">
        <img class="imageOnshow" :src="imageSrc">
      </VueDragger>
      <VueDragger :parentLimitation="true" :useZoom="true" :defaultPosition="{top: 200, left: 200}" :areaLimits="{}" :w="200" :h="200">
        <img class="imageOnshow" :src="imageSrc">
      </VueDragger>
       <VueDragger :parentLimitation="true" :useZoom="false" :defaultPosition="{top: 400, left: 400}" :useGrid="true" :areaLimits="{}" :w="200" :h="200">
        <img class="imageOnshow" :src="imageSrc">
      </VueDragger>
    </div>
  </div>
</template>

<script>
import VueDragger from './components/VueDragger';
export default {
  name: 'app',
  data: function () {
    return {
      imageSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572430978729&di=26b1e8e4e3ce9b49779c208a3918c42c&imgtype=0&src=http%3A%2F%2Fphoto.orsoon.com%2F180307%2F180307_62%2FVXpgbcJH9H_small.jpg"
    }
  },
  components: {
    VueDragger
  },
  mounted() {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.dragWrapper{
  width: 98%;
  height: 700px;
  margin: 0 auto;
  background-color: #ddd;
  border-radius: 3px;
  box-shadow: 0 0 10px #000;
  position: relative;
}
.imageOnshow{
  width: 100%;
}
</style>
