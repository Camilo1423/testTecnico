let userData = {
    email: null,
    fullName: null,
    role: null,
    token: null,
    username: null
}
if(localStorage.login) userData = JSON.parse(localStorage.login)
export const {
    email,
    fullName,
    role,
    token,
    username
} = userData