var basTot = 0;
var blandTot = 0;
var extraTot = 0;

var basCalc = 0;
var blandCalc = 0;
var extraCalc = 0;

var tot = 0;
var storlek = 0;

const Vatten = 0; // 100 ml
const Cola = 42; // 100 ml

myJSON = { "baser" : [
  {"namn" : "Äpplemust", "energi" : 45, "fett" : 0.1, "mättat-fett" : 0, "fleromättat-fett" : 0, "kolhydrat" : 10, "varav-sockerarter" : 10, "protein" : 0.1, "fiber" : 1, "salt" : 0},
  {"namn" : "Vatten", "energi" : 0, "fett" : 0, "mättat-fett" : 0, "fleromättat-fett" : 0, "kolhydrat" : 0, "varav-sockerarter" : 0, "protein" : 0, "fiber" : 0, "salt" : 0}
],
  "bland" : [
    {"namn" : "Äpplemust", "energi" : 45, "fett" : 0.1, "mättat-fett" : 0, "fleromättat-fett" : 0, "kolhydrat" : 10, "varav-sockerarter" : 10, "protein" : 0.1, "fiber" : 1, "salt" : 0},
    {"namn" : "Vatten", "energi" : 0, "fett" : 0, "mättat-fett" : 0, "fleromättat-fett" : 0, "kolhydrat" : 0, "varav-sockerarter" : 0, "protein" : 0, "fiber" : 0, "salt" : 0}
  ]
};

console.log(myJSON.baser);
console.log(myJSON.bland);

function valt(){
    var bas_opt = document.getElementById("bas_opt").value;
    var bland_opt = document.getElementById("bland_opt").value;
    var extra_opt = document.getElementById("extra_opt").value;
    var storlek_opt = document.getElementById("storlek_opt").value;

    switch (storlek_opt) {
      case "150ml":
        storlek = 1.5;
        break;
      case "250ml":
        storlek = 2.5;
        break;

    }


    calculate(bas_opt, bland_opt, extra_opt, storlek);
}

function calculate(bas_opt, bland_opt, extra_opt, storlek){
    switch(bas_opt){
        case "Vatten":
            basCalc = Vatten * storlek;
            console.log("jag är vatten");
            break;
        case "Cola":
            basCalc = Cola * storlek;
            console.log("jag är cola");
            console.log(basCalc);
            break;
    }

    switch(bland_opt){
        case "Ingen":
            blandCalc = 0;
            break;
        case "Cola":
            blandCalc = Cola;
            break;
    }

    switch(extra_opt){
        case "Inget":
            extraCalc = 0;
            break;
        case "Cola":
            extraCalc = Cola;
            break;
    }


    tot = basCalc + blandCalc + extraCalc;
    document.getElementById("totaltP").innerHTML = ("Totalt antal kalorier: " + tot);
    //storlek(basCalc, blandCalc, extraCalc);

}
