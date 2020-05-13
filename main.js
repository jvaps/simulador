// function ar() {
//     let teste = document.getElementById('sub').innerHTML;
//     // (document.getElementById('sub').click)
//     if (teste == true) {
//         document.getElementById("res").value
//         console.log("Agora deveria aparecer o resultado");

//     }
//     else {
//     //    document.getElementById('res').write.style.display = "none";
//     document.getElementById("res").style.display = "none";
//        console.log("Não deveria aparecer o resultado");
//     }
// }


function ar() {
    if (document.getElementById("nome").value , document.getElementById("email").value) {
        document.getElementById("res").style.display = "inline";
        document.getElementById('sub').style.display = "none";
    }
    else {
        document.getElementById("res").style.display = "none"
    }

    // document.getElementById('refazer').style.display = "inline"
}

// function refazer() {
//     // document.getElementById('a').value =" ''";
//     // document.getElementById('b').value =" ''";
//     // document.getElementById('c').value =" ''";
//     // document.getElementById('d').value =" ''";
//     // document.getElementById('nome').value =" ''";
//     // document.getElementById('email').value =" ''";
//     document.getElementById('refazer').style.display = "none";
//     document.getElementById('sub').style.display = "none";
//     console.log("refazer")
// }
