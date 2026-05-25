import { MdDelete } from "react-icons/md";
import Comments from "./Comments.jsx";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Commentshow() {
  let [show, setShow] = useState([]);

  let addcomment = (text) => {
    setShow((currentcomm) => [...currentcomm, { id: uuidv4(), text }]);
  };
  let deletecomment = (id) => {
    setShow((prev) => prev.filter((msg) => msg.id !== id));
  };
  return (
    <div
      style={{
        border: "2px solid black",
        marginTop: "190px",
        borderRadius: "12px",
      }}
    >
      <Comments
        addcomment={addcomment}
        style={{ position: "relative", top: "3px" }}
      />
      <h2 style={{ textAlign: "center" }}>all comments</h2>
      {show.map((comment) => (
        <div key={comment.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <p>{comment.text}</p>
          <MdDelete onClick={() => deletecomment(comment.id)} />
        </div>
      ))}
    </div>
  );
}
