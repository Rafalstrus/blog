import { useState, useRef, useEffect } from 'react'
import './register.css'

import {encrypt} from '../../crypt';

import { TextField } from '@mui/material';

import {fetchAuthKey} from '../../fetches';

//var apiServerWeba = "https://blogapibackend.herokuapp.com"
var apiServerWeb = "http://localhost:9000"

function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [publicKey, setPublicKey] = useState<any>("")
  const errorBoxRef = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    async function fetchData() {
      var x = await fetchAuthKey()
      return x
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
      <TextField
        onChange={(e) => {
          setUsername(e.target.value)
        }}></TextField>
      <p>Password</p>
      <TextField
        id="password-Input"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}></TextField>
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
async function register(username :string, password :string, errorBoxRef :any,publicKey :any) {
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

export default Register;
