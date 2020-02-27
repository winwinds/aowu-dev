//Element中这个文件是构建工具自动生成
import Button from '../packages/button/index.js';

const components = [
  Button
]

const install = function (Vue) { //注册所有引入的组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

//默认导出全部的组件 import AuwoUI from "aowu-ui"; Vue.use(AuwoUI);
export default {
  "version": "0.1.3 ",
  install,
  Button,
}

//提供按需引入 import { Button } from "aowu-ui"; Vue.use(Button);
export {
  Button
}