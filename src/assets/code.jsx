// import { useEffect } from "react";
// import "./StoryViewer.css";

// export default function StoryViewer({ story, onClose }) {

//   useEffect(() => {
//     document.body.style.overflow = "hidden"; // lock scroll

//     const timer = setTimeout(() => {
//       document.body.style.overflow = "auto"; // restore scroll
//       onClose();
//     }, 10000);

//     return () => {
//       document.body.style.overflow = "auto";
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div className="story-overlay">
//       <div className="story-content">
//         <img src={story.image} alt="" />
//       </div>
//     </div>
//   );
// }

