function bigMyBasa(){
    let name = document.getElementById("name").value 
    localStorage.setItem("name",name);
    
    let surname = document.getElementById("surname").value 
    localStorage.setItem("surname",surname);

    let email = document.getElementById("email").value 
    localStorage.setItem("email",email);

    let posswrod = document.getElementById("posswrod").value 
    localStorage.setItem("posswrod",posswrod);

    let number = document.getElementById("number").value 
    localStorage.setItem("number",number);

    let list = document.getElementById("list").value 
    localStorage.setItem("list",list);
}