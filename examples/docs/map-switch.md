# MapSwitch 底图切换
----
### 基础用法
使用```data```、```value```属性来定义 MapSwitch 的数据和选择项。

<div class="demo-block">
  <div>
    <m-mapswitch :data="data"></m-mapswitch>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        data:  [
        { label: "影像", img: require('../assets/img/map-elec.png') },
        { label: "地图", img: require('../assets/img/map-image.png')},
        { label: "三维", img: require('../assets/img/map-three.png') }],
      }
    }
  }
</script>

::: demo
```html

<div>
   <m-mapswitch :data="data"></m-mapswitch>
</div>
<script>
  export default {
    data() {
      return {
        data:  [
        { label: "影像", img: "" },
        { label: "地图", img: "" },
        { label: "三维", img: "" }],
      }
    }
  }
</script>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
