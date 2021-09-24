//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router
import { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'

import { TextField, Grid } from '@material-ui/core'



import { mapStateToProps, mapDispatchToProps } from '../../redux-store/operation'

//var apiServerWeba = "https://blogapibackend.herokuapp.com"
var apiServerWeb = "http://localhost:9000"
//zrezygnuj z sesji, zachowuj id ciastka, klucz bezpieczenstwa i dane niech beda w bazie danych
// najpierw sprobuj to https://cloud.google.com/nodejs/getting-started/session-handling-with-firestore
//sprobuj res cookie
//https://stackoverflow.com/questions/36897364/trying-to-get-then-send-a-cookie-using-react-and-fetch
//https://stackoverflow.com/questions/29425070/is-it-possible-to-get-an-express-session-by-sessionid
// TODO: here need to add optional login by google 
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [publicKey, setPublicKey] = useState("")
  const errorBoxRef = useRef<HTMLParagraphElement>(null)
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
      <Grid container direction="row">
        <Grid item xs={12}>
          <TextField 
          label="Username"
          onChange={
            (e) => {
              setUsername(e.target.value)
            }}>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField 
          label="Password"
          onChange={
            (e) => {
              setPassword(e.target.value)
            }}>
            Password
          </TextField>
        </Grid>
      </Grid>
      <button onClick={() => {
        //auth(username, password, errorBoxRef, publicKey,setToken)
      }
      }>send</button>
      <p
        ref={errorBoxRef}
      />
    </div>
  );
}





export default connect(mapStateToProps, mapDispatchToProps)(Login)
