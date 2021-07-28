//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import { useState, useRef, useEffect, useContext } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux-store/duck/actions'
import { ReactReduxContext } from 'react-redux'

import Cookies from 'universal-cookie';


import JSEncrypt from 'jsencrypt';

const cookies = new Cookies();

//var apiServerWeba = "https://blogapibackend.herokuapp.com"
var apiServerWeb = "http://localhost:9000"
//zrezygnuj z sesji, zachowuj id ciastka, klucz bezpieczenstwa i dane niech beda w bazie danych
// najpierw sprobuj to https://cloud.google.com/nodejs/getting-started/session-handling-with-firestore
//sprobuj res cookie
//https://stackoverflow.com/questions/36897364/trying-to-get-then-send-a-cookie-using-react-and-fetch
//https://stackoverflow.com/questions/29425070/is-it-possible-to-get-an-express-session-by-sessionid
function Login({ setToken }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [publicKey, setPublicKey] = useState("")
  const { store } = useContext(ReactReduxContext)
  console.log(store.getState())
  const errorBoxRef = useRef()
  useEffect(() => {
    async function fetchData() {
      var x = await fetch('http://localhost:9000/api-connection/public-key-get')
      return x.text()
    }
    async function getData() {
      setPublicKey(await fetchData())
    }
    getData()
  }, [])
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
        auth(username, password, errorBoxRef, publicKey,setToken)
      }
      }>send</button>
      <p
        ref={errorBoxRef}
      />
    </div>
  );
}
async function auth(username, password, errorBoxRef, publicKey,setToken) {
  var enryptedUsername = encrypt(username, publicKey)
  var enryptedPassword = encrypt(password, publicKey)
  if (username.length >= 5 && password.length >= 8) {
    await fetch(apiServerWeb + `/api-connection/auth-create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: enryptedUsername,
        password: enryptedPassword,
      })
    })
      .then((response) => response.json())
      setToken(cookies.get("token"))
    console.log("aa")
  }
  else {
    errorBoxRef.current.innerText = "Username And Passwords must contain at least 5/8 letters"
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
function encrypt(text, publicKey) {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encrypted = encrypt.encrypt(text);
  return encrypted;
}

const mapDispatchToProps = dispatch => ({
  setToken: (token) => dispatch(actions.setToken(token))
})

export default connect(null, mapDispatchToProps)(Login)
