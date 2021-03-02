import React from 'react';
import '../Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import { IconButton, Avatar } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                
                <Avatar className='avatar'src='https://th.bing.com/th/id/OIP.VKfNBk5shxIGnwaAzRi4GAHaEK?w=331&h=186&c=7&o=5&pid=1.7'/>
                <IconButton>
                    <ChatIcon />
                </IconButton>
               
                
            </div>
            <div className='search_bar'>
                <SearchOutlinedIcon className='search_icon'/>
                <input placeholder='search or start a chat' type='text'></input>

            </div>
            <div>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
            
            
        </div>
    )
}

export default Sidebar;
