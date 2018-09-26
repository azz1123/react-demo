import React from "react";

import {Menu, Icon, Layout,} from 'antd';
import List from '../routes/List/List';

import routeDate from './permissionRoute';

import './Home.less';

const {Header, Content, Sider} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static getMenu(data) {
    console.log('data', data)
    if(data.hasChild) {
      console.log('item', data, data.isMenuGroup)
      let cHtml = data.children.map((item, i) => {
        if(item.children && item.children.length > 0) {
          return <MenuItemGroup key={item.id} title={item.permissionName}>
            {Home.getMenu(item)}
          </MenuItemGroup>
        } else {
          return Home.getMenu(item)
        }
      });
      return cHtml
    } else {
      console.log('dfsdsadsadsds', data)
      return <Menu.Item key={data.id}>{data.permissionName}</Menu.Item>

    }
  }

  componentDidMount() {

  }

  render() {
    console.log('routeDate', routeDate, Home.getMenu(routeDate))
    const menuHtml = routeDate.map((item, i) => {
      console.log('render-item', item)
      if(item.hasChild) {
        return <SubMenu key={item.id} title={<span><Icon type="appstore"/><span>{item.permissionName}</span></span>}>
          {Home.getMenu(item)}
        </SubMenu>
      } else {
        //这里的routeurl是路由地址，是自定义的一个属性
        return <Menu.Item routeurl={item.accessPath} key={item.id}>{item.permissionName}</Menu.Item>
      }
    })
    return (
      <Layout
        className="ManagePage">
        <Header className="Header">
        </Header>
        <Layout className="ManagePage-Content">
          <Sider theme="light">
            <Menu className="Menu"
                  onClick={this.handleClick}
                  defaultSelectedKeys={['99']}
                  defaultOpenKeys={['sub1', 'sub3']}
                  mode="inline">
              {menuHtml}
              {/*<SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>*/}
              {/*<MenuItemGroup key="g1" title="Item 1">*/}
              {/*<Menu.Item key="1">Option 1</Menu.Item>*/}
              {/*<Menu.Item key="2">Option 2</Menu.Item>*/}
              {/*</MenuItemGroup>*/}
              {/*<MenuItemGroup key="g2" title="Item 2">*/}
              {/*<Menu.Item key="3">Option 3</Menu.Item>*/}
              {/*<Menu.Item key="4">Option 4</Menu.Item>*/}
              {/*</MenuItemGroup>*/}
              {/*</SubMenu>*/}
              {/*<SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>*/}
              {/*<Menu.Item key="5">Option 5</Menu.Item>*/}
              {/*<Menu.Item key="6">Option 6</Menu.Item>*/}
              {/*<SubMenu key="sub3" title="Submenu">*/}
              {/*<Menu.Item key="7">Option 7</Menu.Item>*/}
              {/*<Menu.Item key="8">Option 8</Menu.Item>*/}
              {/*</SubMenu>*/}
              {/*</SubMenu>*/}
              {/*<SubMenu key="sub4" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>*/}
              {/*<Menu.Item key="9">Option 9</Menu.Item>*/}
              {/*<Menu.Item key="10">Option 10</Menu.Item>*/}
              {/*<Menu.Item key="11">Option 11</Menu.Item>*/}
              {/*<Menu.Item key="12">Option 12</Menu.Item>*/}
              {/*</SubMenu>*/}
              {/*<Menu.Item key="13">Option 13</Menu.Item>*/}
            </Menu>
          </Sider>
          <Content className="content">
            {this.props.children || <List/>}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

module.exports = Home;
