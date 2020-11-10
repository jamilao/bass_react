import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { HomeOutlined, CalendarOutlined, BellOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import './mainMenu.css';

class MainMenu extends Component {   
    constructor(){
        super();
        this.state = {
            initialLoad: true,
            home: true,
            calendar: false,
            notifications: false,
            contacts: false,
            settings: false,
            current: "home",
        };
    }
    toggleCollapsed = (menuItem) => {
        const selection = document.querySelector(".ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected");
        const extendedMenu = document.getElementById("extendedMenu");
        
        if(this.state[menuItem]){ // close extended menu 
            this.setState({
                [menuItem]: false,
                current: "none"}, function () {
                    selection.setAttribute("id","deselected");
                    extendedMenu.style.display = "none";
                });                   
        }
        else{ // open extended menu 
            this.setState({[menuItem]: true,
                [this.state.current]: false,
                current: menuItem}, function () {
                    selection.setAttribute("id","");
                    extendedMenu.style.display = "block";
                    this.renderSubMenu(this.state.current);
                });  
        }             
    }
    // TODO: each switch case should return the proper submenu items to be nested in the extendedMenu
    renderSubMenu = (menuItem) =>{
        const extendedMenu = document.getElementById("extendedMenu");
        var subMenuItems = <div></div>;
        switch(menuItem){
            case "home": 
                subMenuItems = (
                    <div>
                        <h2 className="extendedMenuHeading">Join Meeting</h2>
                        <h2 className="extendedMenuHeading">New Meeting</h2>
                    </div>
                );
                break;
            case "calendar":
                subMenuItems = (
                    <div>
                        <h2 className="extendedMenuHeading">Upcoming Meetings</h2>
                        <h2 className="extendedMenuHeading">Calendar</h2>
                    </div>
                );
                break;
            case "notifications":
                subMenuItems = (
                    <div>
                        <h2 className="extendedMenuHeading">Messages</h2>
                        <h2 className="extendedMenuHeading">Reminders</h2>
                    </div>
                );
                break;
            case "contacts":
                subMenuItems = (
                    <div>
                        <h2 className="extendedMenuHeading">Contacts</h2>
                    </div>
                );
                break;
            case "settings":
                subMenuItems = (
                    <div>
                        <h2 className="extendedMenuHeading">Settings</h2>
                    </div>
                );
                break;
            default:
                break;
        }
        console.log(menuItem);
        ReactDOM.render(subMenuItems,extendedMenu);
    }
    componentDidMount(){
        const subMenuItems = (
            <div>
                <h2 className="extendedMenuHeading">Join Meeting</h2>
                <h2 className="extendedMenuHeading">New Meeting</h2>
            </div>
        );
        ReactDOM.render(subMenuItems,document.getElementById("extendedMenu"));
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
                <div id="extendedMenu">
                </div>
            </React.Fragment>           
        );
    }
}
 
export default MainMenu;