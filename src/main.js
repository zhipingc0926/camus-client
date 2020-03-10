import Vue from 'vue'
import App from './App.vue'
import {
  Layout,
  Menu,
  Icon,
  Breadcrumb,
  Avatar,
  Row,
  Col,
  ConfigProvider,
  Form,
  Input,
  Checkbox,
  Button
} from 'ant-design-vue'
import router from './router'

Vue.component(Layout.name, Layout);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
Vue.component(Icon.name, Icon);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item);
Vue.component(Avatar.name, Avatar);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(ConfigProvider.name, ConfigProvider);
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.component(Input.name, Input);
Vue.component(Checkbox.name, Checkbox);
Vue.component(Button.name, Button);

Vue.config.productionTip = false
// Vue.use(Router1)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
