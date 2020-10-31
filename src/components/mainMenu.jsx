import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import SubMenu from 'antd/lib/menu/SubMenu';
import { HomeOutlined, CalendarOutlined, BellOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import './mainMenu.css';

class MainMenu extends Component {   
    render() { 
        const menuStyle = {
            fontSize: '24px'
        }
        return(
            <React.Fragment>
                <Menu
                  mode="vertical"
                  className="mainMenu"
                >
                    <SubMenu className="subMenu" icon={<HomeOutlined style={menuStyle}/>}></SubMenu>
                    <SubMenu className="subMenu" icon={<CalendarOutlined style={menuStyle}/>}></SubMenu>
                    <SubMenu className="subMenu" icon={<BellOutlined style={menuStyle}/>}></SubMenu>
                    <SubMenu className="subMenu" icon={<UserOutlined style={menuStyle}/>}></SubMenu>
                    <SubMenu className="subMenu" icon={<SettingOutlined style={menuStyle}/>}></SubMenu>
                </Menu>
            </React.Fragment>
        );
    }
}
 
export default MainMenu;