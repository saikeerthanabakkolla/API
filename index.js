// let p = fetch("https://fakestoreapi.com/products")
// p.then((value1)=>{
//     console.log(value1.status)
//     console.log(value1.ok)
//     console.log(value1.headers)
//     return value1.text()
// }).then((value2) => {
//     console.log(value2[1])}).catch((err) =>{
//     console.log("You Got some error", err)
// })
fetch("https://fakestoreapi.com/products").then((data) => {
    return data.json()
}).then((completeData) => {
    let data1 ="";
    completeData.map((values)=>{
        data1 += `<div class="card">
        <h1 class="title">${values.title}</h1>
        <img  src="${values.image}" class="images"/>
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>

    </div>`
    });
    document.getElementById("cards").innerHTML = data1
    
}).catch((error)=>{
    console("something went wrong",error)
})

