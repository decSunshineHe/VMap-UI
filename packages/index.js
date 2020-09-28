import mButton from './button/index.js';
import mLoadingBar from './loading-bar/index.js'
import mMapSwitch from './map-switch/index.js'

const components = [
  mButton,
  mMapSwitch
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$loading = mLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  mButton,
  mMapSwitch,
  mLoadingBar,
}
