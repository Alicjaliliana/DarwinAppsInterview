function getTabContent(tab, id){
    let items = document.getElementsByClassName("product-item");
    let contents = document.getElementsByClassName('tab-pane');
    for(let i = 0; i< items.length; i++){
        items[i].classList.remove("active");
    }  
    for(let i = 0; i< contents.length; i++){
        contents[i].classList.remove("in");
        contents[i].classList.remove("active");
    }
    document.getElementById(tab).classList.add("active");
    document.getElementById(id).classList.add("in");
    document.getElementById(id).classList.add("active");
}

function getAccContent(id, collapse){
    let items = document.getElementsByClassName("card");
    let contents = document.getElementsByClassName('collapse');
    console.log(collapse, id);
    for(let i = 0; i< items.length; i++){
        items[i].classList.remove("active");
    }  
    for(let i = 0; i< contents.length; i++){
        contents[i].classList.remove("show");
    }
    document.getElementById(id).classList.add("active");
    document.getElementById(collapse).classList.add("show");
}
