//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import { useState ,  useRef } from 'react'
import {connect} from 'react-redux'
import { makeToken } from '../../redux-store/duck/operations'

var apiServerWeba = "https://blogapibackend.herokuapp.com"
var apiServerWeb = "http://localhost:9000"
//zrezygnuj z sesji, zachowuj id ciastka, klucz bezpieczenstwa i dane niech beda w bazie danych
// najpierw sprobuj to https://cloud.google.com/nodejs/getting-started/session-handling-with-firestore
//sprobuj res cookie
//https://stackoverflow.com/questions/36897364/trying-to-get-then-send-a-cookie-using-react-and-fetch
//https://stackoverflow.com/questions/29425070/is-it-possible-to-get-an-express-session-by-sessionid
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const errorBoxRef = useRef()

  return (
    <div className="Login">
      <h2>LOGIN</h2>
      <p>Username</p>
      <input onChange={(e) => {
        setUsername(e.target.value)
      }}></input>
      <p>Password</p>
      <input onChange={(e) => {
        setPassword(e.target.value)
      }}></input>
      <button onClick={() => {
        auth(username, password,errorBoxRef)
      }
      }>send</button>
      <p
        ref={errorBoxRef}
        />
    </div>
  );
}
async function auth(username, password, errorBoxRef) {
  if (username.length >= 5 && password.length >= 8) {
    await fetch(apiServerWeb + `/api-connection/auth-create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
      .then((response) => response.json())
      console.log("aa")
      makeToken()
  }
  else {
    errorBoxRef.current.innerText ="Username And Passwords must contain at least 5/8 letters"
  }
}
/*async function getSession(setAuthKey) {
  return fetch(apiServerWeb+`/api-connection/home`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
  .then((response) => setAuthKey(response.json()))
}*/
export default connect()(Login);
