function validateFname(){
    let fname = document.getElementById('fname');
    let fdiv = document.getElementById('fdiv');
    let fout = document.getElementById('fout');

    if(fname.value.trim().length == 0){
        fout.innerText = "Please enter fname";
        fdiv.classList.add('has-error')
    }else{
        fout.innerText = "";
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }

}