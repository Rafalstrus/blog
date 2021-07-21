//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import { useState } from 'react'

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
  const [authToken, setAuthToken] = useState("")
  return (
    <div className="App">
      <input onChange={(e) => {
        setUsername(e.target.value)
      }}></input>
      <input onChange={(e) => {
        setPassword(e.target.value)
      }}></input>
      <button onClick={() => {
        register(username, password,setAuthToken)
      }
      }>send</button>
      <p>{console.log(authToken)}</p>
    </div>
  );
}
async function register(username, password,setAuthToken) {
  setAuthToken( await fetch(apiServerWeb+`/api-connection/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
  .then((response) => response.json())
  )
}
/*async function getSession(setAuthKey) {
  return fetch(apiServerWeb+`/api-connection/home`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
  .then((response) => setAuthKey(response.json()))
}*/
export default Register;
