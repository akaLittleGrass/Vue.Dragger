<template>
  <div id="app">
    <div class="dragWrapper">
      <VueDragger :parentLimitation="true" :areaLimits="{}" :w="200" :h="200">
        <img class="imageOnshow" :src="imageSrc">
      </VueDragger>
      <VueDragger :parentLimitation="true" :useZoom="true" :defaultPosition="{top: 200, left: 200}" :areaLimits="{minTop: 200, minLeft: 200, minBottom: 200, minRight: 200}" :w="200" :h="200">
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
      imageSrc: "https://i.loli.net/2019/12/30/OqSwopnYmDCaitU.jpg"
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
  height: 800px;
  margin: 0 auto;
  background-color: #ddd;
  border-radius: 3px;
  box-shadow: 0 0 10px #000;
  position: relative;
  overflow: hidden;
}
.imageOnshow{
  width: 100%;
}
</style>
