export default function calcularIMC() {

    let btn_Calcular = document.querySelector("#btnCalcular")
    
    let peso = document.querySelector("#pesoJS")
    
    let altura = document.querySelector("#alturaJS")

    let imc = (Number(peso.value) / (Number(altura.value)**2)).toFixed(1)

    btn_Calcular.addEventListener("click", () =>{
        document.querySelector("#resultado").innerHTML = imc;
        
        console.log(imc)
    
        let faixa
        if (imc < 18.5) {
            faixa = " Abaixo do peso"
        } else if (imc < 24.9) {
            faixa = " Peso normal"
        } else if (imc < 29.9) {
            faixa = " Sobrepeso"
        } else if (imc < 34.9) {
            faixa = " Obesidade Grau 1"
        } else if (imc < 39.9) {
            faixa = " Obesidade Grau 2"
        } else {
            faixa = " Obesidade Mórbida"
        }
        return document.querySelector("#faixaPeso").innerHTML = faixa;

    })

}
