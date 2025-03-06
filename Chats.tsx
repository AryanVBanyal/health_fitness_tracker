import React, { useEffect, useState, useRef } from "react";
import { socket } from "../lib/socket";

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface Message {
  sender: string;
  content: string;
}

const allUsers: User[] = [
  { id: "user1", name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: "user2", name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: "user3", name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
];

const ChatApp: React.FC<{ userId: string }> = ({ userId }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.emit("join", userId);

    socket.on("updateUsers", (users: string[]) => setOnlineUsers(users));

    const handleReceiveMessage = (message: Message) => {
      setMessages((prev) => [...prev, message]);
    };

    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("updateUsers");
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedUser) return;

    const messageData = {
      sender: userId,
      receiver: selectedUser.id,
      content: newMessage,
    };

    socket.emit("sendMessage", messageData);
    setMessages((prev) => [...prev, messageData]);
    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-300 via-violet-200 to-pink-300">
      {/* Sidebar - User List */}
      <div
        className={`absolute inset-y-0 left-0 w-64 bg-white border-r border-gray-300 shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-1/3 transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-700">Chats</h2>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            ❌
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-60px)]">
          {allUsers.map((user) => (
            <div
              key={user.id}
              className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-violet-200 transition-all rounded-xl ${
                selectedUser?.id === user.id ? "bg-violet-900 text-white" : ""
              }`}
              onClick={() => {
                setSelectedUser(user);
                setIsSidebarOpen(false);
              }}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full border-2 border-purple-400"
              />
              <span className="text-lg font-semibold">{user.name}</span>
              {onlineUsers.includes(user.id) && (
                <span className="ml-auto text-green-500 text-sm">Online</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-full md:w-2/3 flex flex-col">
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="p-4 flex items-center mt-14 gap-4 bg-white border-b border-gray-300 shadow-md">
              <button
                className="md:hidden text-gray-600"
                onClick={() => setIsSidebarOpen(true)}
              >
                📋
              </button>
              <img
                src={selectedUser.avatar}
                alt={selectedUser.name}
                className="w-12 h-12 rounded-full border-2 border-purple-400"
              />
              <div>
                <h2 className="font-semibold text-xl text-gray-800">
                  {selectedUser.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {onlineUsers.includes(selectedUser.id) ? "Online" : "Offline"}
                </p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-xs shadow-md ${
                    msg.sender === userId
                      ? "bg-purple-800 text-white ml-auto"
                      : "bg-white text-black border border-gray-300"
                  } mb-3`}
                >
                  {msg.content}
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>

            {/* Message Input */}
            <div className="flex p-4 bg-white border-t border-gray-300 items-center shadow-md">
              <input
                type="text"
                className="flex-1 p-3 border border-purple-400 rounded-full focus:outline-none text-gray-700"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="ml-3 bg-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-purple-700 transition"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-500 text-lg">
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
