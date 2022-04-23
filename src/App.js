import { FormControl, Input } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Message from './components/Message/Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
     db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
       setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
     })
  },[])

  useEffect(() => {
     setUsername(prompt('Please enter your name'));
  },[])

  const sendMessage = e => {
     e.preventDefault();
     db.collection('messages').add({
       message: input,
       username: username,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
     setInput('');
  }
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png" alt="" />
      <h1>Hello Clever Programmer</h1>
      <h2>Welcome {username}</h2>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input className='app__input' placeholder='Enter a message...' value={input} onChange={e => setInput(e.target.value)}  />
          <IconButton className='app__iconButton' disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      
      </form>
       <FlipMove>
       {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }
       </FlipMove>
    </div>
  );
}

export default App;
