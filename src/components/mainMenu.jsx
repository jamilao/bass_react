import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { HomeOutlined, CalendarOutlined, BellOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import './mainMenu.css';

class MainMenu extends Component {   
    constructor(){
        super();
        this.state = {
            home: true,
            calendar: false,
            contacts: false,
            settings: false,
            notifications: false,
            current: "home",
        };
    }
    //TODO: color change of block on back to back select/deselect
    toggleCollapsed = (menuItem) => {
        console.log("toggleCollapsed() called on " + menuItem);
        const selection = document.querySelector(".ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected");
        if(this.state[menuItem]){
            this.setState({
                [menuItem]: false,
                current: "none"}, function () {
                    selection.setAttribute("id","deselected");
                });                   
        }
        else{
            this.setState({[menuItem]: true,
                [this.state.current]: false,
                current: menuItem}, function () {
                selection.setAttribute("id","");
                });
        }             
    }
    render() { 
        const menuStyle = {
            fontSize: '24px'
        }
        return(
            <React.Fragment>
                <Menu
                  mode="inline"
                  className="mainMenu"
                  theme="dark"
                  defaultSelectedKeys={['home']}
                >
                    <Menu.Item onClick={ () => this.toggleCollapsed("home") } key="home" className="subMenu" icon={<HomeOutlined style={menuStyle}/>}></Menu.Item>
                    <Menu.Item onClick={ () => this.toggleCollapsed("calendar") } className="subMenu" icon={<CalendarOutlined style={menuStyle}/>}></Menu.Item>
                    <Menu.Item onClick={ () => this.toggleCollapsed("notifications") } className="subMenu" icon={<BellOutlined style={menuStyle}/>}></Menu.Item>
                    <Menu.Item onClick={ () => this.toggleCollapsed("contacts") } className="subMenu" icon={<UserOutlined style={menuStyle}/>}></Menu.Item>
                    <Menu.Item onClick={ () => this.toggleCollapsed("settings") } className="subMenu" icon={<SettingOutlined style={menuStyle}/>}></Menu.Item>
                </Menu>
            </React.Fragment>
            
        );
    }
}
 
export default MainMenu;