export function buscarItem(estudiantes, numeroDocumento, email) {
    let user = estudiantes.some((item) => item.numeroDocumento == numeroDocumento && item.email == email)
    return user
}