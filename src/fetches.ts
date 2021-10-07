import Cookies from 'universal-cookie';

import {encrypt} from './crypt';

const cookies = new Cookies();

export const fetchAuthKey = async () => {
    return {'aa':'aa'}
}
export async function sendPostToApi(authToken: any) {
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

export async function auth(username: string, password: string, errorBoxRef: any, publicKey: any) {
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
export function Logout(authToken :any) {
    cookies.remove("token")
    //here destroy cookie, and destroy redux store value
}
export function getPosts(page :number){
    return [
        {

        },
        {

        }
    ]
}
export async function setLikeOrDisLike(authToken :any, operation : any, postId :number){
    await fetch('https::/localhost:3000' + `/api-connection/set-like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            authToken: authToken,
            operation: operation,
            postId: postId
        })
    })
        .then((response) => response.json())
}



