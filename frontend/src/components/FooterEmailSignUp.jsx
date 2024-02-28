//import SimpleDialog from "./SimpleDialog";
import { useState } from "react";

const FooterEmailSignUp = () => {
  const [emailError, setEmailError] = useState(false);

  async function signUp(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    const email = values.email;
    setEmailError(!(email.includes("@") && email.includes(".")));

    if (emailError) {
      // TODO: ADD TO EMAIL LIST
    }

    e.currentTarget.reset();
  }

  return (
    <div
      style={{
        backgroundColor: "#f3f2ee",
        color: "black",
        textAlign: "center",
        padding: "1rem",
        marginTop: "auto",
      }}
    >
      <h2>Register and save 10%</h2>
      <p>
        Register as a newsletter subscriber: you will receive a 10% discount on
        your next order.
      </p>
      <form
        onSubmit={signUp}
        method="post"
        style={{ height: "2rem", border: "none" }}
      >
        <input
          type="text"
          name="email"
          style={{ height: "100%", width: "20rem" }}
          required
        />
        <button type="submit" style={{ height: "100%", marginLeft: "1rem" }}>
          Register
        </button>
      </form>
      <p className="error-text">{emailError && "Not a valid email address"}</p>
      <p className="small-text">
        You can unsubscribe from the newsletter at any time. Check out our
        privacy policy <a href="url">here.</a>
      </p>
    </div>
  );
};

export default FooterEmailSignUp;
