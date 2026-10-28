

export function getData(endpoint) {
    return fetch(endpoint)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function createData(end_points, data) {
    return fetch(end_points, {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function updateData() {
    fetch()
}

export function deleteData() {
    fetch()
}