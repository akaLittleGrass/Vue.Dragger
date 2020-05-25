# vuedragger
My team often gets some requirements such as developing a panel used to view AI results,so I made this component which can be used to drag and zoom something
<div align='center'>
 <img src='https://i.loli.net/2020/01/07/KtP1T9h7vwBuOeb.gif' width='600px' height='400px'/>
</div>

## Features 🥢🍚
- Tiny size(7.5KB gzipped 📦)
- Easy to use and understand 🛠

## Usage 📝
```bash
$ npm i vuedragger --save-dev
```    

Register in Vue and to do:
```vue
<template>
  <div id="app">
    <VueDragger :useZoom="true" :useGrid="true" :defaultPosition="{ top: 400, left: 400 }" :w="200" :h="200">
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

Each prop has its default value, you may also not to set them 🍌

#### w
Type: `Number`,<br>
Default: `100`

Define the width of the element
```html
<VueDragger :w="200">
```

#### h
Type: `Number`,<br>
Default: `100`

Define the height of the element
```html
<VueDragger :h="200">
```

#### defaultPosition
Type: `Object`,<br>
Default: `{ top: 0, left: 0 }`

Define the defaultPosition of the element
```html
<VueDragger :defaultPosition="{ top: 200, left: 200 }">
```

#### parentLimitation
type: `Boolean`, <br>
default: `true`

Define whether the element can cross the boundary of its parent element
```html
<VueDragger :parentLimitation="false">
```

#### areaLimits
Type: `Object`,<br>
Default: `{ minTop: null, maxTop: null, minRight: null, maxRight: null, minBottom: null, maxBottom: null, minLeft: null, maxLeft: null }`

Define the scope that the element can move
```html
<VueDragger :areaLimits="{ minTop: 100, maxTop: 100, minRight: 100, maxRight: 100, minBottom: 100, maxBottom: 100, minLeft: 100, maxLeft: 100 }">
```

#### useZoom
type: `Boolean`,<br>
default: `true`

Enable the element to zoom by scrolling
```html
<VueDragger :useZoom="false">
```

#### zIndex
type: `Number`,<br>
default: `10`

Define z-index of the element
```html
<VueDragger :zIndex="11">
```

#### useGrid
type: `Boolean`,<br>
default: `false`

Define weather the element should snap to the grid
```html
<VueDragger :useGrid="true">
```

#### gridX
type: `Number`,<br>
default: `100`

Define the width of the grid
```html
<VueDragger :gridX="150">
```

#### gridY
type: `Number`,<br>
default: `100`

Define the height of the grid
```html
<VueDragger :gridY="150">
```

### Events

#### clicked
Parameters: Original handler

Called when the element was clicked
```html
<VueDragger @clicked="clickedHandle">
```

#### move
Parameters: `{ top: xxx, left: xxx }`

Called when the element move
```html
<VueDragger @clicked="moveHandle">
```

             
