<template>
  <div class="m__map-switch">
    <div
      v-if="value === '0'"
      class="m__map-switch--earth m__map-switch--spinner"
      :class=" { 'is-active': value === '0' }"
      @click="handleClick(0)"
    >
      <div class="map-item-text">影像</div>
    </div>
    <div
      v-if="value === '1'"
      class="m__map-switch--normal m__map-switch--spinner"
      :class=" { 'is-active': value === '1' }"
      @click="handleClick(1)"
    >
      <div class="map-item-text">地图</div>
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
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>