import { Avatar } from '@material-ui/core';
import React from 'react';
import '../Chat.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {AttachFile, Message, MessageSharp, MoreVert} from '@material-ui/icons';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';


function Chat(props) {
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar />
                <div className='info_section'>
                    <h2>Room Name</h2>
                    <p>Last seen Fri, 04 sep 2020 5:00pm GMT </p>

                </div>
                <div className='icons'>
                    <div className='icons_again'>
                        <SearchOutlinedIcon />
                        <AttachFile />
                        <MoreVert />
                    </div>

                </div>
            </div>
            <div className='chat_body'>
                {props.messages.map(message => 
               
                    (<p className={"chat_message" + (message.received && 'chat_reciever')} >
                        <span className='chat_name'>
                            {message.name}
                        </span >
                            {message.message}
                            {message.received}
                            
                        
                        <span className='chat_time'>
                            {message.timestamp}
                        </span>
                   
                </p>
                
                ))}
               
               
                

                   
               


               
                    
          
               
              
                

            </div>
            <div className='chat_footer'>
                
                <EmojiEmotionsOutlinedIcon className='emoji'/>
                <form>
                    <input className='type_input'placeholder='type here'></input>
                    <button>send a message</button>

                </form>
                
               
               
            </div>
          
            
        </div>
    )
}

export default Chat;
