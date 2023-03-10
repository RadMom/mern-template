import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login,isLoading,error } = useLogin();

  const handleSubmitLogin = async(e) => {
    e.preventDefault();
    await login( email, password)
    
  };

  return (
    <form className="login" onSubmit={handleSubmitLogin}>
      <h1>Login</h1>
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
      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

