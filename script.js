let res = document.getElementById('res');

function calcular(){
    let nome = document.getElementById('txtNome').value;
    let altura = document.getElementById('numAltura');
    let peso = document.getElementById('numPeso');

    if (nome.length == 0 || altura.value.length == 0 || peso.value.length == 0){
        alert('Preencha os Dados Corretamente!');
    }else{
        let numAltura = Number(altura.value);
        let numPeso = Number(peso.value);
        let valorIMC = (numPeso / (numAltura * numAltura)).toFixed(1);

        if (valorIMC <= 18.5){
            res.innerHTML = `${nome} seu IMC é de ${valorIMC} e você está Abaixo do Peso!`;
        }else if (valorIMC <= 24.9){
            res.innerHTML = `${nome} seu IMC é de ${valorIMC} e você está no seu Peso Ideal!`;
        }else if (valorIMC <= 29.9){
            res.innerHTML = `${nome} seu IMC é de ${valorIMC} e você está em Sobrepeso`;
        }else if (valorIMC <= 34.9){
            res.innerHTML = `${nome} seu IMC é de ${valorIMC} e você está em Obesidade Grau I`;
        }else if (valorIMC <= 39.9){
            res.innerHTML = `${nome} seu IMC é de ${valorIMC} e você está em Obesidade Grau II`;
        }else{
            res.innerHTML = `${nome} seu IMC é de ${valorIMC} e você está em Obesidade Grau III`;
        } 
    }

}

