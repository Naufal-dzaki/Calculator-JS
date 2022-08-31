function input(input){
    let nilai = document.getElementById("textview").innerHTML;
    nilai = nilai + input;
    document.getElementById("textview").innerHTML = nilai;
}

function negatifNumber() {
    let nilai = document.getElementById("textview").innerHTML;
    nilai = nilai * -1;
    document.getElementById("textview").innerHTML = nilai;
}

function percent() {
    let nilai = document.getElementById("textview").innerHTML;
    nilai = nilai / 100;
    document.getElementById("textview").innerHTML = nilai;
}

function hasil(){
    let nilai = document.getElementById("textview").innerHTML;
    if(nilai != "" ){
        document.getElementById("textview").innerHTML = eval(nilai);
    }else if(nilai == "" ){
        document.getElementById("textview").innerHTML = "empty!";
        document.getElementById("textview").classList = "col-12 border-0 custom-textview d-flex py-4 text-danger fw-bold fs-4";
        setTimeout(() => (document.getElementById("textview").innerHTML = ""), 2000);
        setTimeout(() => (document.getElementById("textview").classList = "col-12 border-0 custom-textview d-flex py-4 text-white-50 fw-bold fs-4"), 2000);
    }
}

function clean() {
    document.getElementById("textview").innerHTML = "";
}

function backspace(){
    let nilai = document.getElementById("textview").innerHTML;
    document.getElementById("textview").innerHTML = nilai.substring(0, nilai.length-1);
}