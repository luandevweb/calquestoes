function capturar(){
    var materia = document.getElementById('materias').value
    var questoes = parseInt(document.getElementById('qtdquestoes').value)
    var acertos = parseInt(document.getElementById('qtdacertos').value)
    var resultado = document.getElementById('resultado')
    
    
    var converter = acertos/questoes * 100
    
    var arrendondar = Math.round(parseFloat(converter))
    
    var erros = questoes-acertos
    
    if(arrendondar <= 25){
    
        resultado.innerHTML = "O resultado obtido na matéria de "+materia+"foi de: <h1>"+arrendondar+" %</h1>" + "Acertos: " + acertos +
        "<br>Erros: " + erros +
    "<br><img src='/img/vinteecinco.png' width='200px'>" + "<h4>Você está abaixo da média!"
    }
    
    else if(arrendondar >= 26 && arrendondar <= 50 ){
        resultado.innerHTML = "O resultado obtido na matéria de "+materia+" foi de: <h1>"+arrendondar+" %</h1>" + "Acertos: " + acertos +
        "<br>Erros: " + erros +
    
    "<br><img src='/img/cinquenta.png' width='200px'>" + "<h4>Você precisa estudar mais!"
    
    }
    
    else if(arrendondar >= 51 && arrendondar <= 75 ){
    
        resultado.innerHTML = "O resultado obtido na matéria de "+materia+" foi de: <h1>"+arrendondar+" %</h1>" + "Acertos: " + acertos +
        "<br>Erros: " + erros +
    "<br><img src='/img/setenta.png' width='200px'>" + "<h4>Você está na zona tolerável"
    
    }else{
    
        resultado.innerHTML = "O resultado obtido na matéria de "+materia+" foi de: <h1>"+arrendondar+" %</h1>" + "Acertos: " + acertos +
        "<br>Erros: " + erros +
    "<br><img src='/img/cem.png' width='200px'>" + "<h4>Você está mandando bem!"
    
    }
    }