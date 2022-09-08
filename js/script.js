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

// on/off mode
var checker = document.getElementById('checkme');
var setBtn = document.querySelectorAll("#onOff button");
var setShape_1 = document.querySelector('#onOff-shape .shape-1');
var setShape_2 = document.querySelector('#onOff-shape .shape-2');
var setBody = document.body;

checker.onchange = function() {
    for (let i = 0; i < setBtn.length; i++){
        //button disable on/off
        setBtn[i].disabled = !this.checked;
        if(setBtn[i].disabled = !this.checked){
            // body background color when off
            setBody.classList.remove("enabled-body");

            // clear text view when button off
            document.getElementById("textview").innerHTML = "";

            // btn off
            setBtn[i].classList.remove("enableds");
            setBtn[i].classList.add("disableds");
            
            // shape off
            setShape_1.classList.remove("enableds-shape-1");
            setShape_1.classList.add("disableds-shape-1");
            setShape_2.classList.remove("enableds-shape-2");
            setShape_2.classList.add("disableds-shape-2");
            
        }else{
            // body background color when on
            setBody.classList.add("enabled-body");

            // btn on
            setBtn[i].classList.remove("disableds");
            setBtn[i].classList.add("enableds");

            // shape on/off
            setShape_1.classList.remove("disableds-shape-1");
            setShape_1.classList.add("enableds-shape-1");
            setShape_2.classList.remove("disableds-shape-2");
            setShape_2.classList.add("enableds-shape-2");
        }
    }
};