import { useState } from "react";
import "./styles.css";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div className="accordion">
      {faqs.map((que, ind) => (
        <Accordion index={ind + 1} questionObject={que} />
      ))}
      {/* <Accordion /> */}
    </div>
  );
}

function Accordion({ index, questionObject }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      {/* <div className = {`${open ? "open" : ""}`}> */}

      <p className="number">0{index}</p>
      {/* <div className = {`title text ${open ? "open" : ""}`}> */}
      <p className="title text">{questionObject.title}</p>
      <p className="icon">{open ? "-" : "+"}</p>

      {open ? <div className="content-box">{questionObject.text}</div> : null}
    </div>
  );
}
