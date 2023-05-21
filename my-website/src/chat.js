import React, { useRef, useState } from 'react';
import './chat.css';
import {Link} from 'react-router-dom';

//import firebase from 'firebase/app';
//import 'firebase/firestore';
//import 'firebase/auth';
//import 'firebase/analytics';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';   
//import 'firebase/compat/analytics';   

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyD34iuh6qQd0EmOFUKD4HVTuHFMeMnAwAE",
  authDomain: "superchat-cece7.firebaseapp.com",
  projectId: "superchat-cece7",
  storageBucket: "superchat-cece7.appspot.com",
  messagingSenderId: "903791461801",
  appId: "1:903791461801:web:5963b1ae6e9598df60f0b8",
  measurementId: "G-RVQ4L5FKKX"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
//const analytics = firebase.analytics();


function Chat() {

  const [user] = useAuthState(auth);

  return (
    <div className="container">
    <div className="chat">
      <header className='header'>
        <div className='logo'>
          <h1>Chat</h1>
        </div>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className='chat-content'>
      <h1>Welcome to Benzene Chat!</h1>
      <br></br>
      <button className="chat-sign-in" onClick={signInWithGoogle}>Sign in with Google</button> 
      <br></br>
      <Link to = "/home">
      <button className="chat-sign-in">Home</button> 
      </Link>
    </div>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="chat-sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
  <div>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <div className='form-fr'>
    <form className = "chat-form" onSubmit={sendMessage}>

      <input className = "chat-input" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type here..." />

      <button className = "chat-button" type="submit" disabled={!formValue}>{">"}</button>

    </form>
    </div>
  </div>
  )
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img className = "chat-img" src={photoURL} />
      <p className = "chat-p">{text}</p>
    </div>
  </>)
}


export default Chat;
