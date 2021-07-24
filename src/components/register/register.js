//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import { useState, useRef } from 'react'
import './register.css'

var apiServerWeba = "https://blogapibackend.herokuapp.com"
var apiServerWeb = "http://localhost:9000"
//zrezygnuj z sesji, zachowuj id ciastka, klucz bezpieczenstwa i dane niech beda w bazie danych
// najpierw sprobuj to https://cloud.google.com/nodejs/getting-started/session-handling-with-firestore
//sprobuj res cookie
//https://stackoverflow.com/questions/36897364/trying-to-get-then-send-a-cookie-using-react-and-fetch
//https://stackoverflow.com/questions/29425070/is-it-possible-to-get-an-express-session-by-sessionid
function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const errorBoxRef = useRef()
  return (
    <div className="Register">
      <h2>REGISTER</h2>
      <p>Username</p>
      <input
        minLength="5"
        onChange={(e) => {
          setUsername(e.target.value)
        }}></input>
      <p>Password</p>
      <input
        id="password-Input"
        minLength="8"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}></input>
      <button onClick={() => {
        register(username, password, errorBoxRef)
      }
      }
      >send</button>
      <p
        id="error-Box"
        ref={errorBoxRef}
      />
    </div>
  );
}
async function register(username, password, errorBoxRef) {
  if (username.length >= 5 && password.length >= 8) {
    await fetch(apiServerWeb + `/api-connection/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
      .then((response) => response.json())
  }
  else {
    errorBoxRef.current.innerText = "Username And Passwords must contain at least 5/8 letters"
  }
}
export default Register;
