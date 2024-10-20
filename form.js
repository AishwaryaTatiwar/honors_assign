function validate(){
    let your_nm=document.getElementById("Name").value;
    if (your_nm === ""){
        alert("Enter your name");
    }
    let mail=document.getElementById("email").value;
    if(mail === ""){
        alert("Enter email");
    }
    let contact=document.getElementById("contact").value;
    if(contact ===""){
        alert("Enter contact number");
    }
    else if(contact.length != 10){
        alert("Enter valid contact number");
    }
    let e=document.getElementById("eve");
    var str=e.options[e.selectedIndex].value;
    if(str==="sel"){
        alert("Please select event");
    }
    let s=document.getElementById("shirt");
    var str1=s.options[s.selectedIndex].value;
    if(str1==="s0"){
        alert("Please select size");
    }
}