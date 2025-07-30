import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [submitClicked, setSubmitClicked] = useState(false);

  return (
    <>
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitClicked(true);
        }}
      >
        <label htmlFor="firstName">First Name :</label>
        <input
          id="firstName"
          type="text"
          required
          onChange={(e) => {
            setSubmitClicked(false);
            setFirstName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="lastName">Last Name :</label>
        <input
          id="lastName"
          type="text"
          required
          onChange={(e) => {
            setSubmitClicked(false);
            setLastName(e.target.value);
          }}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
      {submitClicked && (
        <p>Full Name:{submitClicked ? ` ${firstName} ${lastName}` : ""}</p>
      )}
    </>
  );
}

export default App;
