

var basTot = 0;
var blandTot = 0;
var extraTot = 0;
var tot = 0;
const Vatten = 0;
const Cola = 50;

function valt(){
    var bas = document.getElementById("bas_opt").value;
    var bland = document.getElementById("bland_opt").value;
    var extra = document.getElementById("extra_opt").value;
    var storlek = document.getElementById("storlek_opt").value;

    calculate(bas, bland, extra, storlek);
}

function calculate(bas, bland, extra){
    switch(bas){
        case "Vatten":
            basTot = Vatten;
            break;
        case "Cola":
            basTot = Cola;
            break;
    }

    switch(bland){
        case "Ingen":
            blandTot = 0;
            break;
        case "Cola":
            blandTot = Cola;
            break;
    }

    switch(extra){
        case "Inget":
            extraTot = 0;
            break;
        case "Cola":
            extraTot = Cola;
            break;
    }

    var tot = basTot + blandTot + extraTot;
    console.log("Totalt: ", tot);

    document.getElementById("totaltP").innerHTML = ("Totalt antal kalorier: " + tot);

}
