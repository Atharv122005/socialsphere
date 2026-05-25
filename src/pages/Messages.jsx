// import { useState } from "react";
// import "./Message.css";
// import { user } from "../data/PostData.js";
// import { v4 as uuidv4 } from "uuid";

// export default function MessagesPage() {
//   const [activeUser, setActiveUser] = useState(null);
//   const [messageText, setMessageText] = useState("");
//   const [messages, setMessages] = useState([]);

//   function handleInput(e) {
//     setMessageText(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!messageText || !activeUser) return;

//     setMessages(prev => [
//       ...prev,
//       {
//         id: uuidv4(),
//         text: messageText,
//         userId: activeUser.userId
//       }
//     ]);

//     setMessageText("");
//   }

//   return (
//     <div className="dm-container">
//       <div className="dm-left">
//         {user.map(u => (
//           <div
//             key={u.userId}
//             onClick={() => setActiveUser(u)}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               cursor: "pointer",
//               padding: "8px",
//               background:
//                 activeUser?.userId === u.userId ? "#0c0713" : "transparent"
//             }}
//           >
//             <img src={u.src} alt={u.username} width="32" />
//             <span style={{ marginLeft: "10px" }}>{u.username}</span>
//           </div>
//         ))}
//       </div>

//       <div className="dm-right">
//         {!activeUser && <p>Send a message to start a chat</p>}

//         {activeUser && (
//           <>
//             <h3>Chat with {activeUser.username}</h3>

//             <ul>
//               {messages.filter(m => m.userId === activeUser.userId)
//                 .map(m => (
//                   <li key={m.id}>{m.text}</li>
//                 ))}
//             </ul>

//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 value={messageText}
//                 onChange={handleInput}
//               />
//               <button type="submit">Send</button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }












import { useState } from "react";
import "./Message.css";
import { user } from "../data/PostData.js";
import { v4 as uuidv4 } from "uuid";

export default function MessagesPage() {
  const [activeUser, setActiveUser] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);

  function handleInput(e) {
    setMessageText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!messageText || !activeUser) return;

    const newMessage = {
      messageId: uuidv4(),   // renamed for clarity
      text: messageText,
      userId: activeUser.userId
    };

    setMessages(prev => [...prev, newMessage]);

    setMessageText("");
  }

  return (
    <div className="dm-container">
      
      {/* LEFT SIDE USERS */}
      <div className="dm-left">
        {user.map(u => (
          <div
            key={u.userId}
            onClick={() => setActiveUser(u)}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "8px",
              background:
                activeUser?.userId === u.userId
                  ? "#0c0713"
                  : "transparent"
            }}
          >
            <img src={u.src} alt={u.username} width="32px" />
            <span style={{ marginLeft: "20px" }}>
              {u.username}
            </span>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE CHAT */}
      <div className="dm-right">
        {!activeUser && (
          <p>Send a message to start a chat</p>
        )}

        {activeUser && (
          <>
            <h3>Chat with {activeUser.username}</h3>

            <ul>
              {messages
                .filter(m => m.userId === activeUser.userId)
                .map(m => (
                  <li key={m.messageId}>
                    {m.text}
                  </li>
                ))}
            </ul>


            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={messageText}
                onChange={handleInput}
              />
              <button type="submit">Send</button>
            </form>
          </>
        )}
      </div>

    </div>
  );
}