import { Avatar } from '@material-ui/core';
import React from 'react';
import "../SidebarChat.css";


function SidebarChat() {
    return (
        <div className='sidebar_chat'>
            <div className='group_chat'>
                <Avatar className="avatar_chat" />
                <div className='chat_nameAndtext'>
                    <h2 className='chat_h2'>Room name</h2>
                    <p>This is the last message</p>
                </div>
            </div>
            
        </div>
    )
}

export default SidebarChat;
