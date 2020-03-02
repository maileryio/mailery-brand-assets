import component from './components/BrandCard.vue';
import './styles/index.scss';

const plugin = {
  install,
  component
};

(function (plugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(plugin);
  }
})(plugin);

export function install(Vue, options) {
  Vue.component(component.name, component);
}

export default plugin;
