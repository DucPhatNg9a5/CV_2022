import React, { Fragment, useState, useEffect } from "react";
import firebase from "../../firebase";
// import PropTypes from "prop-types";

const ChatForm = ({ room }) => {
  const [username, setUsername] = useState("anonymous");
  const [message, setMessage] = useState("");
  const now = new Date();

  useEffect(() => {
    if (localStorage.username && localStorage.username !== "anonymous") {
      setUsername(localStorage.username);
    }
  }, []);

  const updateUsername = (e) => {
    e.preventDefault();

    setUsername(document.getElementById("username").value);

    localStorage.setItem("username", document.getElementById("username").value);

    document.getElementById("username").value = "";
  };

  const wholeSubmit = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("test")
      .add({
        username,
        message,
        room,
        created_at: firebase.firestore.Timestamp.fromDate(now),
      });

    document.getElementById("message").value = "";
  };

  return (
    <Fragment>
      <form className="new-name my-3" onSubmit={updateUsername}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">Update name:</div>
          </div>
          <input type="text" id="username" className="form-control" required />
          <div className="input-group-append">
            <input type="submit" className="btn btn-success" value="update" />
          </div>
        </div>
      </form>
      <form className="new-chat my-3" onSubmit={wholeSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">Your message:</div>
          </div>
          <input
            type="text"
            id="message"
            className="form-control"
            onChange={(e) => setMessage(e.currentTarget.value)}
            required
          />
          <div className="input-group-append">
            <input type="submit" className="btn btn-success" value="send" />
          </div>
        </div>
      </form>
      <div className="mb-4">
        Your name is <strong>{username}</strong>. Chat room:{" "}
        <strong>{room}</strong>.
      </div>
    </Fragment>
  );
};

// ChatForm.propTypes = {};

export default ChatForm;
