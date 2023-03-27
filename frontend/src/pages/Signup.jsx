import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmitSignup = async (e) => {
    e.preventDefault();

    await signup(email, password);

    console.log(email, password);
  };

  return (
    <div className="signup-screen">
      <form className="signup-form" onSubmit={handleSubmitSignup}>
        <h1>Sign Up</h1>
        <div className="email-input">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-input">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="signup-btn" disabled={isLoading}>Sign Up</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
