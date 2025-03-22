import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import axios from 'axios';
import { useAccount } from 'wagmi';

const HackathonChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {address} = useAccount();

  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      content: 'Hi there! 👋 I\'m your Edu-chain Hackathon Assistant. Ask me anything about the hackathon!' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e : any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async(e : any) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const updatedMessages = [
      ...messages,
      { type: 'user', content: inputValue }
    ];
    setMessages(updatedMessages);
    setInputValue('');
    
    setIsTyping(true);

    const botResponse = await generateBotResponse(inputValue.toLowerCase());

    console.log(botResponse);

    setIsTyping(false);
    setMessages([
        ...updatedMessages,
        { type: 'bot', content: botResponse }
    ]);
  };

  // Function to generate responses strictly limited to hackathon information
  const generateBotResponse = async(query : any) => {
    try {
        if(query.includes('faucet')){
            console.log(true)
            try{
                const res = await axios.post('https://hack-new.onrender.com/api/transfer',{
                    to : address
                })

                console.log(res);

                //@ts-ignore
                return (`Successfully airdroped 0.1 Edu , Transaction hash : ${res.data.transactionHash}`)
            }
            catch(e) {
                console.log(e);
                return ("Error while airdroping faucet try later!")
            }
        }
        else{
            const prompt = `
                You are an AI assistant helping participants in a hackathon and blockchain.
                Only provide information about hackathon-related topics such as rules, tracks, prizes, deadlines, and project ideas. 
                If a question is not related to the hackathon, respond with "⚠️ I can only assist with hackathon-related queries."
                User query: ${query}
            `;

            const result = await model.generateContent(prompt);
            const responseText = result.response.text();
            console.log("Chatbot response:", responseText);
            return responseText;
        }
      } catch (error) {
        console.error("Chatbot error:", error);
        return("❌ Sorry, I encountered an error. Please try again.");
      }

  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end z-50">
      {isOpen && (
        <div className="bg-gray-900 border border-purple-500 rounded-lg shadow-lg mb-4 w-96 text-wrap h-[600px] flex flex-col overflow-hidden">
    
          <div className="bg-purple-600 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-green-400 rounded-full h-2 w-2 mr-2"></div>
              <h3 className="text-white font-medium">Hackathon Assistant</h3>
            </div>
            <button onClick={toggleChatbot} className="text-white opacity-75 hover:opacity-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          

          <div className="flex-1 p-4 overflow-y-auto bg-gray-800">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 ${message.type === 'user' ? 'text-right' : ''}`}
              >
                <div 
                  className={`inline-block px-4 py-2 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-purple-600 text-white rounded-br-none text-wrap' 
                      : 'bg-gray-700 text-gray-200 rounded-bl-none'
                  }`}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="mb-3">
                <div className="inline-block px-4 py-2 rounded-lg bg-gray-700 text-gray-200 rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="bg-gray-500 rounded-full h-2 w-2 animate-bounce"></div>
                    <div className="bg-gray-500 rounded-full h-2 w-2 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="bg-gray-500 rounded-full h-2 w-2 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="border-t border-gray-700 p-2 bg-gray-800">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Ask about the hackathon..."
                className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg px-4 py-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Chat Button */}
      <button 
        onClick={toggleChatbot}
        className={`bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center focus:outline-none transition-all ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default HackathonChatbot;
