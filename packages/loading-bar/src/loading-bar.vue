<template>
  <div class="m__loading-bar">
    <div
      class="m__loading-bar--bar"
      :class="isError ? 'm__loading-bar--error' : ''"
      role="bar"
      :style="{transform: 'translate3d(-'+(100-totalProgress)+'%, 0, 0)'}">
      <div class="m__loading-bar--peg"></div>
    </div>
    <div class="m__loading-bar--spinner" role="spinner" v-if="showSpinner">
      <div class="spinner-icon" :class="isError ? 'spinner-icon--error' : ''"
           :style="{'animation': 'm-spinner 400ms '+easing+' infinite'}"></div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'mLoadingBar',
    props: {
      type: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        speed: 5,
        easing: 'linear',
        percentNum: 0,
        totalProgress: 0,
        showSpinner: true,
        isError: false
      }
    }
  }
</script>
