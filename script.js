let products=[
    {
        id:"sbedri",
        name:"Sbedri",
        description:"White",
        price:120
    },
    {
        id:"klasset",
        name:"Klasset",
        description:"Noir",
        price:20
    },
    {
        id:"kartaba",
        name:"Kartaba",
        description:"Gris",
        price:80
    }
];
window.onload=function(){
    for (let i=0;i<products.length;i++){
        this.document.querySelector(`#${products[i].id} .item-title`).innerHTML = products[i].name;
        this.document.querySelector(`#${products[i].id} .item-description`).innerHTML = products[i].description;
        this.document.querySelector(`#${products[i].id} .price`).innerHTML = products[i].price;
        this.document.querySelector(`#${products[i].id} .nbr-item`).innerHTML = 1;
    }

    const deleteBtn = this.document.querySelectorAll('.delete-btn');
    for (let i=0; i<deleteBtn.length; i++){
        deleteBtn[i].addEventListener("click",function(){
            deleteBtn[i].closest(".product-container").style.display = "none";
        })
    }


}

function moreItem(id){
    var nbr = Number.parseInt(document.querySelector(`#${id} .nbr-item`).innerHTML) + 1;
    document.querySelector(`#${id} .nbr-item`).innerHTML = nbr;
    var price = 0;
    for (let i=0;i<products.length;i++){
            if (products[i].id==id)
            price=products[i].price;
        }
    document.querySelector(`#${id} .price`).innerHTML = price*nbr;
}

function lessItem(id){
    if(Number.parseInt(document.querySelector(`#${id} .nbr-item`).innerHTML)){
        var nbr = Number.parseInt(document.querySelector(`#${id} .nbr-item`).innerHTML) - 1;
        document.querySelector(`#${id} .nbr-item`).innerHTML = nbr;
        var price = 0;
        for (let i=0;i<products.length;i++){
                if (products[i].id==id)
                price=products[i].price;
            }
        document.querySelector(`#${id} .price`).innerHTML = price*nbr;
    }
    else document.querySelector(`#${id} .price`).innerHTML = 0;

}