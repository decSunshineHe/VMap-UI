<template>
  <div
    class="m__map-switch"
    @mouseover="mouseoverChange"
    @mouseout="mouseoutChange"
  >
    <div class="m__map-switch--item" v-for="(item, index) in data" :key="index">
      <div
        class="m__map-switch--spinner"
        v-if="isHover || value == index"
        @click="handleClick(item)"
      >
        <img :src="item.img" />
        <div class="map-item-text">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mMapswitch",
  props: {
    value: {
      type: String,
      default: "0",
    },
    data: {
      type: Array,
      default: [],
      required: true,
    },
  },
  data() {
    return {
      isHover: false,
    };
  },
  computed: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
    mouseoverChange() {
      this.isHover = true;
    },
    mouseoutChange() {
      this.isHover = false;
    },
  },
};
</script>