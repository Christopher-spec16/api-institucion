export function getLocalStorage(llave){
    return JSON.parse(localStorage.getItem(llave)) || []
}

export function setLocalStorage(llave, valor){
    localStorage.setItem(llave, JSON.stringify(valor))
}

export function removeLocalStorage(){

}