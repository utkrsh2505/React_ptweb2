import { useState, useContext } from "react";
import { Auth } from "../ContextApi/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [token, setToken] = useState("");
  const { auth, setIsAuth } = useContext(Auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    fetch("https://reqres.in/api/login", {
      method: "POST",

      body: JSON.stringify({
        email: email,
        password: pass
      }),
      headers: {
        "Content-type": "application/json;charset= UTF-8"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.token);
        setToken(res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return !auth ? (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Type Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Type Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <br />
        <br />
        <input type="submit" value="login" />
      </form>
    </>
  ) : (
    <div>
      <h1>{token}</h1>
      <button onClick={() => setIsAuth(!auth)}>LogOut</button>
    </div>
  );
};
export { Login };
