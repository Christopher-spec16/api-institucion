export function token() {
    let token = ""
    for (let i = 1; i <= 20; i++) {
        token += Math.random().toString(36).substring(2)
    }
    return token
}

export function id() {
    let id = ""
    for (let i = 1; i <= 2; i++) {
        id += Math.random().toString(36).substring(2)
    }
    return id
}