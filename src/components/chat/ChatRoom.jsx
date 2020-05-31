import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import ChatForm from "./ChatForm";
import { formatDistanceToNow } from "date-fns";
// import PropTypes from 'prop-types'

function useChats(room) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection("test")
      .where("room", "==", room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        const newChats = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setChats(newChats);
      });

    return () => unsub();
  }, [room]);

  return chats;
}

const ChatRoom = (props) => {
  const [room, setRoom] = useState("general");

  const chats = useChats(room);

  const getRoom = (e) => {
    if (e.target.tagName === "BUTTON") {
      setRoom(e.target.getAttribute("id"));
    }
  };

  return (
    <div className="container main">
      <h2 className="text-center pt-4">Live Chat Room</h2>

      <div className="chat-rooms mb-3 text-center" onClick={getRoom}>
        <div className="my-2">Choose a chat room:</div>
        <button className="btn btn-info mx-2" id="general">
          #general
        </button>
        <button className="btn btn-info mx-2" id="gaming">
          #gaming
        </button>
        <button className="btn btn-info mx-2" id="music">
          #music
        </button>
      </div>

      <div className="chat-window">
        <ul className="chat-list list-group text-left">
          {chats.map((chat) => (
            <li className="list-group-item" key={chat.id}>
              <span className="username">{chat.username}: </span>
              <span className="message">{chat.message}</span>
              <div className="time">
                {formatDistanceToNow(chat.created_at.toDate(), {
                  addSuffix: true,
                })}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ChatForm room={room} />
    </div>
  );
};

// ChatRoom.propTypes = {}

export default ChatRoom;
