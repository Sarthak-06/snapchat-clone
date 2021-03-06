import { Avatar } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import './Chats.css';
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { db } from './firebase';
import Chat from './Chat';
import { selectUser } from './features/appSlice';
import {useSelector} from "react-redux";
function Chats() {
    const [posts, setPosts]=useState([]);
    const state = useSelector(selectUser);
    useEffect(() => {
       db.collection("posts")
       .orderBy("timestamp","desc")
       .onSnapshot((snapshot)=>{
           setPosts(
               snapshot.docs.map((doc)=>({
                   id:doc.id,
                   data: doc.data()

               }))
           )
       })
    }, [])
    return (
        <div className='chats'>
            <div className='chats__header'>
                <Avatar className="chats__avatar"/>
              <div className="chats__search">
               <SearchIcon fontSize="large" className="chats_search_icon"/>
                <input type="text" placeholder="Friends" className="chats_input" size="38" fontSize="100px"/>
                <ChatBubbleIcon Size="large" className="chats__chatIcon"/>
                </div>
                </div>
                <div className="chat__posts">
                    {posts.map(({id,data:{profilePic,username,timestamp,imageUrl,read}, })=>(
                            <Chat
                            key={id}
                            id={id} 
                            username={username}
                            timestamp={timestamp}
                            read={read}
                            profilePic={profilePic}
                            />
                    )
                    )}
                    </div>
        </div>
    )
}

export default Chats
