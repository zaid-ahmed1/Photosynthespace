import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Message {
  sender: "user" | "bot";
  text: string;
}
const REACT_APP_VOICEFLOW_API_KEY =
  "VF.DM.66e5bd25ec948227a6f651a6.3qZ2GRtFMfdlAsYE";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const user_id = useRef<string>("stanleylin82@gmail.com");

  const interact = async (user_id: string, request: any) => {
    try {
      const response = await axios.post(
        `https://general-runtime.voiceflow.com/state/user/${user_id}/interact`,
        { request: request },
        {
          headers: {
            Authorization: REACT_APP_VOICEFLOW_API_KEY,
            versionID: "production",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const traces = response.data;
      const messages: Message[] = [];
      for (let trace of traces) {
        if (trace.type === "message" || trace.type == "speak") {
          messages.push({ sender: "bot", text: trace.payload.message });
        }
      }

      return messages;
    } catch (error) {
      return [
        {
          sender: "bot",
          text: "Sorry, something went wrong.",
        },
      ];
    }
  };

  useEffect(() => {
    const initiateConversation = async () => {
      setLoading(true);
      const botMessages = await interact("stanleylin82@gmail.com", {
        type: "launch",
      });
      setMessages([]);
      setMessages((prev) => [...prev, ...(botMessages as Message[])]);
      setLoading(false);
    };

    initiateConversation();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const botMessages = await interact(user_id.current, {
      type: "text",
      payload: input,
    });

    setMessages((prev) => [...prev, ...(botMessages as Message[])]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[80vh] mt-30 z-50 px-4 w-[80vw]">
      {/* Messages */}
      <div className="flex-1 overflow-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-8 p-3 px-6 font-display max-w-xs ${
                message.sender === "user"
                  ? "bg-[#A7E0CB] text-[#104241]"
                  : "bg-[#104241] text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="mb-2 flex justify-start">
            <div className="rounded-8 p-3 px-6 max-w-base bg-[#206B6A] text-white">
              Typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 py-6 rounded-12 bg-white flex justify-center items-center gap-8">
        <input
          type="text"
          className="border border-gray-300 p-4 pl-8 focus:outline-none rounded-8 w-[800px] font-display focus:ring-[#206B6A]"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          className="bg-[#104241] rounded-8 w-32 text-white p-4 rounded-r-lg hover:bg-[#3c9896]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
