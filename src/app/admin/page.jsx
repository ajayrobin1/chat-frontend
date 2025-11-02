"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function AdminPage() {
  const [allMessages, setAllMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.emit("loadAllChats");
    socket.on("allChats", (msgs) => setAllMessages(msgs));
    socket.on("newMessageForAdmin", (msg) =>
      setAllMessages((prev) => [msg, ...prev])
    );
    return () => {
      socket.off("allChats");
      socket.off("newMessageForAdmin");
    };
  }, []);

  const users = [...new Set(allMessages.map((m) => m.sessionId))];
  const userMessages = allMessages.filter((m) => m.sessionId === selectedUser);

const sendMessage = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    socket.emit("chatMessage", { sessionId: selectedUser, text: text, isAdmin: true });
    setText("");
  };


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/3 border-r overflow-y-auto ">
        <h2 className="p-4 text-xl font-semibold bg-blue-600 text-white">
          Users
        </h2>
        <div className="p-2 space-y-2">
          {users.map((user) => {
            const lastMsg =
              allMessages
                .filter((m) => m.sessionId === user)
                .slice(0)[0]?.text || "";
            return (
              <div
                key={user}
                onClick={() => setSelectedUser(user)}
                className={`p-2 rounded-lg cursor-pointer ${
                  selectedUser === user
                    ? "bg-neutral-600"
                    : "hover:bg-neutral-700 bg-neutral-800"
                }`}
              >
                <div className="font-semibold">{user}</div>
                <div className="text-xs text-neutral-200 truncate">{lastMsg}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat view */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b bg-gray-800">
          <h2 className="text-lg font-semibold">
            {selectedUser ? `Chat with ${selectedUser}` : "Select a user"}
          </h2>
        </div>
        <div className="flex flex-col-reverse p-4 overflow-y-auto">
          {selectedUser &&
            userMessages.map((msg, i) => (
              <div key={i} className={`${msg.isAdmin ? 'bg-neutral-700 ml-auto': 'bg-neutral-800 mr-auto'} mb-2 p-2  rounded-lg max-w-xl`}>
                <div className="text-xs text-neutral-400">
                  {new Date(msg.createdAt).toLocaleTimeString()}
                </div>
                <div>{msg.text}</div>
              </div>
            ))}
          {!selectedUser && (
            <p className="text-gray-400 text-center mt-20">
              Select a user to view their chat.
            </p>
          )}
        </div>
         {selectedUser &&
                <form onSubmit={sendMessage} className="p-4 border-t flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-lg p-2 bg-neutral-700 text-white"
          />
          <button className="bg-blue-600 text-white px-4 rounded-lg">
            Send
          </button>
        </form>
}
      </div>
    </div>
  );
}
