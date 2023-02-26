"use strict"



let tableBody = document.querySelector("tbody");

let products = JSON.parse(localStorage.getItem("basket"));






if (products != null) {
    for (const product of products) {

        tableBody.innerHTML += `<tr>
        <td>
        <img src="${product.img}" alt="">
        </td>
        <td>${product.name}</td>
        
        <td>${product.description}</td>
        
        <td>${product.count}</td>
        
        <td>$${product.prices}</td>

        <td class="d-none">${product.id}</td>

        <td><i class="fa-solid fa-xmark item2"></i></td>

        </tr> `
    }




    let deletedIcon = document.querySelectorAll(".item2")


    for (const item of deletedIcon) {

        item.addEventListener("click", function () {

            let arr = products.filter(m => m.id != Number(this.parentNode.previousElementSibling.innerText))

            localStorage.setItem("basket", JSON.stringify(arr))

            window.location.reload()

        })


    }

    getBasketCount(products)
} else {
    document.querySelector("table").classList.add("d-none")

    document.querySelector(".alert-warning").classList.remove("d-none")
}

function getBasketCount(arr) {

    let sum = 0

    for (const item of arr) {

        sum += item.count;
    }

    document.querySelector("sup").innerText = sum

}


