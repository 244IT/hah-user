// 按需加载组件
import { Icon, Button, Avatar, Tree, Switch } from "ant-design-vue";

const cpns = [Icon, Button, Avatar, Tree, Switch];

function registerCpns(app) {
  cpns.forEach((cpn) => {
    app.use(cpn);
    const cpnName = `${cpn.name.slice(1, 2).toLowerCase()}${cpn.name.slice(2)}`;
    import(`ant-design-vue/lib/${cpnName}/style`);
  });
}

export default registerCpns;
