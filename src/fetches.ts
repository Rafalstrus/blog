import Cookies from 'universal-cookie';

import {encrypt} from './crypt';

const cookies = new Cookies();

export const fetchAuthKey = async (nameorId: any) => {
    if (nameorId.length !== 0) {
        var data = {}
        await fetch('https://pokeapi.co/api/v2/pokemon/' + nameorId)
            .then(async (response) => {
                if (!response.ok) {
                    console.clear()
                    data = { "error": "404" }
                }
                else {
                    data = await response.json()
                }
            })
        return await data
    }
    return { "error": "404" }
}
async function sendPostToApi(authToken: any) {
    fetch(`http://localhost:9000/api-connection/post-create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            token: authToken
        })
    })
        .then((response) => (response.json()))
}

async function auth(username: string, password: string, errorBoxRef: any, publicKey: any) {
    var enryptedUsername = encrypt(username, publicKey)
    var enryptedPassword = encrypt(password, publicKey)
    if (username.length >= 5 && password.length >= 8) {
        await fetch('https::/localhost:3000' + `/api-connection/auth-create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username: enryptedUsername,
                password: enryptedPassword,
            })
        })
            .then((response) => response.json())
        console.log(cookies.get("token")
        )}
    else {
        errorBoxRef.current.innerText = "Username And Passwords must contain at least 5/8 letters"
    }
}
function Logout(authToken :any) {
    cookies.remove("token")
    //here destroy cookie, and destroy redux store value
}
function getPosts(page :number){
    return [
        {

        },
        {

        }
    ]
}



