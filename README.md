# vuedragger
Our company often needs to view AI results on a panel, usually an image, so I made this component

## Basic usage
```
$ npm install vuedragger --save
```
Register the component:    
```
import Vue from 'vue';
import VueDragger from 'vuedragger';

Vue.component('vue-dragger', VueDragger);
```
To use:
```
<template>
  <div id="app">
    <VueDragger :parentLimitation="true" :useZoom="false" :defaultPosition="{top: 400, left: 400}" :useGrid="true" :w="200" :h="200">
      <h1>233333</h1>
    </VueDragger>
  </div>
</template>

<script>
import VueDragger from 'vuedragger';
export default {
  name: 'app',
  components: {
    VueDragger
  }
}
</script>

```

### Props

#### w
Type: `Number`,<br>
Required: `false`,<br>
Default: `100`

Define the width of the element
```
<VueDragger :w="200">
```

#### h
Type: `Number`,<br>
Required: `false`,<br>
Default: `100`

Define the height of the element
```
<VueDragger :h="200">
```

#### defaultPosition
Type: `Object`,<br>
Required: `false`,<br>
Default: `{ top: 0, left: 0 }`

Define the defaultPosition of the element
```
<VueDragger :defaultPosition="{top: 200, left: 200}">
```

#### parentLimitation
type: `Boolean`, <br>
Required: `false`,<br>
default: `true`

Define whether the element can cross the boundary of its parent element
```
<VueDragger :parentLimitation="false">
```

### areaLimits
Type: `Object`,<br>
Required: `false`,<br>
Default: `{ minTop: null, maxTop: null, minRight: null, maxRight: null, minBottom: null, maxBottom: null, minLeft: null, maxLeft: null }`

Define the scope that the element can move
```
<VueDragger :defaultPosition="{ minTop: 100, maxTop: 100, minRight: 100, maxRight: 100, minBottom: 100, maxBottom: 100, minLeft: 100, maxLeft: 100 }">
```

### useZoom
type: `Boolean`,<br>
Required: `false`,<br>
default: `true`

Enable the element to zoom by scrolling
```
<VueDragger :useZoom="false">
```

### zIndex
type: `Number`,<br>
Required: `false`,<br>
default: `10`

Define z-index of the element
```
<VueDragger :zIndex="11">
```

### useGrid
type: `Boolean`,<br>
Required: `false`,<br>
default: `false`

Define weather the element should snap to the grid
```
<VueDragger :useGrid="true">
```

### gridX
type: `Number`,<br>
Required: `false`,<br>
default: `100`

Define the width of the grid
```
<VueDragger :gridX="150">
```

### gridY
type: `Number`,<br>
Required: `false`,<br>
default: `100`

Define the height of the grid
```
<VueDragger :gridY="150">
```

### Events

#### clicked
Parameters: Original event handler

Called when the element was clicked
```
<VueDragger @clicked="clickHandle">
```

#### move
Parameters: {
  top: XXX,
  left: XXX
}

Called when the element move
```
<VueDragger @clicked="moveHandle">
```

             