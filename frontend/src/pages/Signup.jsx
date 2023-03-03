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
    <form className="signup" onSubmit={handleSubmitSignup}>
      <h1>Sign Up</h1>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
