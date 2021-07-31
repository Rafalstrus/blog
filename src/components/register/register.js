import { useState, useRef, useEffect } from 'react'
import './register.css'

import JSEncrypt from 'jsencrypt';

//var apiServerWeba = "https://blogapibackend.herokuapp.com"
var apiServerWeb = "http://localhost:9000"

function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [publicKey, setPublicKey] = useState("")
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
        register(username, password, errorBoxRef,publicKey)
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
async function register(username, password, errorBoxRef,publicKey) {
  if (username.length >= 5 && password.length >= 8) {
    var enryptedUsername = encrypt(username, publicKey)
    var enryptedPassword = encrypt(password, publicKey)
    await fetch(apiServerWeb + `/api-connection/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: enryptedUsername,
        password: enryptedPassword,
      })
    })
      .then((response) => response.json())
  }
  else {
    errorBoxRef.current.innerText = "Username/Passwords must contain at least 5/8 letters"
  }
}
function encrypt(text, publicKey) {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encrypted = encrypt.encrypt(text);
  return encrypted;
}
export default Register;
