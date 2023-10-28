export const getDashbaord = () =>  fetch('http://localhost:5000/api/lista-de-contratos', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
}).then(response => response.json())
.then(response => {
    return response
})

// export const postDashboard = (id) =>  fetch('/api/'+id, {
//    method: 'POST',
//    headers: {
//        'Accept': 'application/json',
//    },
//}).then(response => response.json())
//.then(response => console.log(JSON.stringify(response)))

export default [getDashbaord]