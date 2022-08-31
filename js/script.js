function input(input){
    let nilai = document.getElementById("textview").innerHTML;
    nilai = nilai + input;
    document.getElementById("textview").innerHTML = nilai;
}

function hasil(){
    let nilai = document.getElementById("textview").innerHTML;
    if(nilai != "" ){
        document.getElementById("textview").innerHTML = eval(nilai);
    }else if(nilai == "" ){
        document.getElementById("textview").innerHTML = "empty!";
        setTimeout(() => (document.getElementById("textview").innerHTML = ""), 2000);
    }
}

function clean() {
    document.getElementById("textview").innerHTML = "";
}

function backspace(){
    let nilai = document.getElementById("textview").innerHTML;
    document.getElementById("textview").innerHTML = nilai.substring(0, nilai.length-1);
}