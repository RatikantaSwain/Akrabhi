let inputs=documnent.getElementById("inp");
let text=document.querySelector(".text");

function add(){
    if(inputs.value==""){
        alert("please enter your name: ");
    }
    else{
        let a=document.creatElement("ul");
        a.innerHTML=`${a}`;
        text.appendChild(a);
        inputs.value="";
    }
}
