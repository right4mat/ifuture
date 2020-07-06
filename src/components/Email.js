import React from "react";
import "./Email.css";

import validate from "../helpers/Validate";
import sendEmail from "../helpers/SendEmail";

import Context from '../context/Context';

function Email() {

  const {setFinish, setGlobalEmail} = React.useContext(Context);

  const [date] = React.useState(new Date());

  const [year, setYear] = React.useState(false);

  const [email, setEmail] = React.useState("");

  const [body, setBody] = React.useState("");

  const DeliverIn = () => {
    return (
      <div className="Deliver">
        <a
          className={year === 1 ? "Selected Button" : "Button"}
          onClick={() => setYear(1)}
        >
          1 year
        </a>
        <a
          className={year === 2 ? "Selected Button" : "Button"}
          onClick={() => setYear(2)}
        >
          2 years
        </a>
        <a
          className={year === 5 ? "Selected Button" : "Button"}
          onClick={() => setYear(5)}
        >
          5 years
        </a>
      </div>
    );
  };



  const send = () => {
    if (!validate(email)) return alert("sorry, invalid email.");
    if (!body) return alert("sorry, email cant be empty.");
    if (!year) return alert("You need to pick when to deliver first!");

    sendEmail({ date: date.toString(), email: email, year: year, body: body });
    setYear(false)
    setEmail('')
    setBody('')
    setFinish(true)

    setGlobalEmail(email);

  };

  return (
    <div className="Email">
      <textarea
        value={body}
        placeholder={"Dear me,\n\ntoday is " + date.toString() + "..."}
        onChange={(x) => setBody(x.target.value)}
      ></textarea>
      <h3>Deliver In</h3>
      <DeliverIn />
      <h3>Send To</h3>
      <div className="SendTo">
        <i class="fas fa-envelope"></i>
        <input
          value={email}
          type="text"
          placeholder="Your Email"
          onChange={(x) => setEmail(x.target.value)}
        />
      </div>
      <button className="Submit" onClick={send}>
        Send Email
      </button>
    </div>
  );
}

export default Email;
