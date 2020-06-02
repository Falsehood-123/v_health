export function setUserId(payload) {
    return localStorage.setItem('userId',payload)
}

export function getUserId() {
    return localStorage.getItem('userId')
}

export function deleteUserId() {
    return localStorage.removeItem('userId')
}
export function setUserName(payload) {
    return localStorage.setItem('userName',payload)
}

export function getUserName() {
    return localStorage.getItem('userName')
}

export function deleteUserName() {
    return localStorage.removeItem('userName')
}
