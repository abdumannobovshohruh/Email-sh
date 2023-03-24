let inp = document.querySelector("input")
inpfunck = () => {
    if(! inp.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       inp.innerHTML = "good" 
    }else{
        inp.innerHTML = "false"
    }
}