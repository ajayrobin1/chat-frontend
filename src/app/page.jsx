"use client";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // backend URL

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [userName, setUserName] = useState("");
  const messagesRef = useRef(null);

  // Assign username (localStorage)
  useEffect(() => {
    let storedName = localStorage.getItem("chatUserName");
    if (!storedName) {
      storedName = "user_" + Math.floor(Math.random() * 10**8).toString(36);
      localStorage.setItem("chatUserName", storedName);
    }
    setUserName(storedName);
  }, []);

    useEffect(() => {
      socket.on("newMessageForAdmin", (msg) => {
        setMessages((prev) => [msg, ...prev]);
        scrollToBottom();
      }
      );
      return () => {
        socket.off("newMessageForAdmin");
      };
    }, []);

  // Connect to backend & load messages
  useEffect(() => {
    if (!userName) return;

    socket.emit("loadUserMessages", userName);

    socket.on("chatHistory", (msgs) => setMessages(msgs));
    
    // socket.on("chatMessage", (msg) => {
    //   setMessages((prev) => [msg, ...prev]);
    // });

    return () => {
      socket.off("chatHistory");
      socket.off("chatMessage");
    };
  }, [userName]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    socket.emit("chatMessage", { sessionId: userName, text: text });
    setText("");
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }, 100);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 max-h-screen justify-between">
      <div className="w-full max-w-md overflow-hidden rounded-2xl flex flex-col border border-neutral bg-neutral-100">
        <div className="flex justify-between items-start px-6 py-4 text-neutral-700 ">
          <div className=" ">
          <h1 className="text-lg font-semibold">Maria Concepts</h1>
            <div className="text-sm opacity-80 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span>
              Online
              </span>
              </div>
          </div>
            <div className="hover:bg-neutral-200 rounded-full text-4xl text-center transition">
            <svg className="m-2" width="0.75em" height="0.75em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="#000000" d="M6.5 8.05a.45.45 0 0 1 .45.45v4a.45.45 0 0 1-.9 0V9.584l-3.732 3.733a.45.45 0 1 1-.636-.636L5.413 8.95H2.5a.449.449 0 1 1 0-.9zm6.182-6.368a.45.45 0 0 1 .637.636L9.586 6.05H12.5a.45.45 0 0 1 0 .9h-4l-.09-.01a.45.45 0 0 1-.36-.44v-4a.45.45 0 0 1 .9 0v2.914z"/></svg>  
            </div>
        </div>
          {messages.length === 0?
        <div className="bg-neutral-100 text-neutral-800 text-2xl text-center h-100">
          <h2 className="mt-12 w-full block">How can we assist you?</h2>
        </div> 
        :
        
                <div ref={messagesRef} className="flex flex-col-reverse p-4 overflow-y-auto gap-y-8 h-100 scrollbar">


          {messages.map((msg, i) => (
<div key={i} className={`max-w-3/4 ${msg.isAdmin? 'text-left mr-auto' : 'text-right ml-auto' }`}>
    <span className="text-xs font-normal text-neutral-400 mx-2">{new Date(msg.createdAt).toLocaleTimeString( 'en-IN',
      { 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
}
    )}</span>
   <div className={`shadow-lg py-6 px-8 text-left ${msg.isAdmin? 'rounded-e-full rounded-es-full bg-amber-100 text-neutral-600' :'rounded-s-full rounded-se-full bg-amber-200 text-neutral-600'}`}>
      {msg.text}
   </div>
</div>
            
          ))}
        </div>
        }


      <form onSubmit={sendMessage} className="p-4 flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-neutral-200 rounded-full p-2 px-6 text-neutral-900 foxus:ring-1"
            />
          <button className="bg-none text-neutral-600 hover:text-neutral:500 transition px-4 rounded-s-full rounded-se-full cursor-pointer">
            <svg width="2.286em" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="currentColor" d="m0 0l8 3.5L0 7l1-3q5-.5 0-1"/></svg>
          </button>
        </form>
    </div>
            </div>
  );
}
