let notaAluno = "reprovada"

switch (notaAluno) {
    case "aprovada":
        console.log("Parabéns você passou");
        break;
    
    case "lista":
        console.log("Você aguardará na lista de espera");
        break;
        
    case "reprovada":
        console.log("Dessa vez não foi");
        break;
    
    default:
        console.log("Não se aplica");
        

}