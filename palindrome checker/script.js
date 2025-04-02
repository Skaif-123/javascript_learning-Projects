const input = document.getElementById("input");


function reverseString(name){
    return name.split("").reverse().join("")
}



function check() {
  const value = input.value;
  const reverse1=reverseString(value)
  

    if(value===reverse1){
        alert("PALINDROME WOW")
    }

    else{
        alert("NOT PALINDROME")
    }

    input.value=""
}
