function calcNota() {
  let n1 = Number(document.getElementById("nota1").value);
  let n2 = Number(document.getElementById("nota2").value);
  let n3 = Number(document.getElementById("nota3").value);
  let n4 = Number(document.getElementById("nota4").value);
  var media = ((n1 + n2 + n3 + n4) / 4).toFixed(1);
  
  if(media>=6){
    document.getElementById("resultado").innerText=`Muito Bem! APROVADO com media de ${media}`
    document.getElementById("resultado").style.color = "#EEEEEE"
  }else if(media<=6 && media<5){
    document.getElementById("resultado").innerText=`Que Pena! Voce foi DESAPROVADO com media de ${media}`;
    document.getElementById("resultado").style.color = "#880E4F";
  }

}

