// Your solution goes here.
// Hints:
// -> Handle the onsubmit function using attribute or js event listener.
// -> Take the value of input, calculate the grade and update ui.
// -> Maximum number can be 100
// -> Clear the input field after value submission



let inputElement=document.getElementById("iits-inp");
let text;

let addButton=document.getElementById("iits-formSubmit");
addButton.addEventListener('submit',myFunction);

function myFunction(){
    event.preventDefault();
    let x=inputElement.value;
    console.log(x);

    if(x>100)
    {
      alert("maximum input 100");
    }
    else if(x>=81&&x<=100)
    {
        let text=document.getElementById("iits-a_count");
        let count= parseInt(text.textContent);
        text.textContent= ++count;  
    }
    else if(x>=71&&x<=80)
    {
        let text=document.getElementById("iits-bp_count");
       let count= parseInt(text.textContent);
        text.textContent= ++count;  
    }
    else if(x>=61&&x<=70)
    {
        let text=document.getElementById("iits-b_count");
       let count= parseInt(text.textContent);
        text.textContent= ++count;  
    }
    else if(x>=51&&x<=60)
    {
        let text=document.getElementById("iits-bm_count");
        let count= parseInt(text.textContent);
        text.textContent= ++count;  
    }
    else if(x>=40&&x<=50)
    {
        let text=document.getElementById("iits-c_count");
       let count= parseInt(text.textContent);
        text.textContent= ++count;  
    }
    else
    {
        let text=document.getElementById("iits-f_count");
       let count= parseInt(text.textContent);
        text.textContent= ++count;  
    }
    inputElement.value=0;
}