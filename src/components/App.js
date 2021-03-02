import '../App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';
import React, {useState,useEffect} from 'react';


function App() {
  const [message, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/message/sync')
    .then(res => {
      
      setMessages(res.data);
     
    });
   
  }, []);
  
  useEffect(() => {
    const pusher = new Pusher('6ca71683632c74d2324a', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setMessages([...message, newMessage]);
      
    });
   
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [message])

  console.log('whattttttttttt');
  
  return (
    <div className="app">
      <div className='app_body'>
        <Sidebar />
        <Chat messages={message} />
        
      </div>
     
     
    </div>
  );
}

export default App;
