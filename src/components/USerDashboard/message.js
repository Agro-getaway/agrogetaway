import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MessagingPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Chat
      </Typography>
      <div
        style={{
          height: "400px",
          border: "1px solid #ccc",
          overflowY: "auto",
          marginBottom: "20px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              padding: "8px",
              textAlign: message.sender === "user" ? "right" : "left",
            }}
          >
            <strong>{message.sender === "user" ? "You" : "Friend"}</strong>:{" "}
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <TextField
          type="text"
          label="Type your message..."
          variant="outlined"
          fullWidth
          value={newMessage}
          onChange={handleInputChange}
          style={{ marginBottom: "10px" }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </Paper>
  );
};

export default MessagingPage;
