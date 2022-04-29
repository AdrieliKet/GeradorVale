
function gerar(){
            var campoNumero = document.getElementById("numero");
            var campoValor = document.getElementById("valorI");
            var campoNome = document.getElementById("nomeI");
            var campoCidade = document.getElementById("cidadeI");
            var campoData = document.getElementById("dataI");
            var campoDadosEmp = document.getElementById("dadosEmpresa");

            if(campoNumero.value == '' || campoValor.value == '' || campoCidade.value == '' || campoNome.value == '' || campoData.value == '' ||campoDadosEmp.value == ''){
                alert("Campo vazio!");
            }

            if(campoNumero.value == '' ){
                campoNumero.classList.add("errorInput");
            }
    
            if(campoValor.value == ''){
                campoValor.classList.add("errorInput");
            }
    
            if(campoCidade.value == ''){
                campoCidade.classList.add("errorInput");
            }
    
            if(campoNome.value == ''){
                campoNome.classList.add("errorInput");
            }
    
            if(campoData.value == ''){
                campoData.classList.add("errorInput");
            }
    
            if(campoDadosEmp.value == ''){
                campoDadosEmp.classList.add("errorInput");
            }
            
    
            var numero= parseInt(campoNumero.value);
            var valor= parseFloat(campoValor.value);
            var nome= campoNome.value;
            var cidade= campoCidade.value;
            var data= campoData.value;
            var dadosEmpresa= campoDadosEmp.value;

            document.getElementById("num").innerHTML = numero;
            document.getElementById("val").innerHTML = valor;
            document.getElementById("nom").innerHTML = nome;
            document.getElementById("cid-data").innerHTML = cidade +", " + data;
            document.getElementById("dadosEmp").innerHTML = dadosEmpresa;
            document.getElementById("valo").innerHTML = valor;

            document.getElementById("num2").innerHTML = numero;
            document.getElementById("val2").innerHTML = valor;
            document.getElementById("nom2").innerHTML = nome;
            document.getElementById("cid-data2").innerHTML = cidade +", " + data;
            document.getElementById("dadosEmp2").innerHTML = dadosEmpresa;
            document.getElementById("valo2").innerHTML = valor;

            var dataE = data;
            var arrData = dataE.split('-');

            var stringFormatada = arrData[1] + '/' + arrData[0] + '/' +
            arrData[2];
            var dataFormatada = new Date(stringFormatada);

            console.log('Data formatada 1: ' + dataFormatada);
            

            var gerarVia = document.getElementById("recibo").style.display;
            if(gerarVia=="none"){
                document.getElementById("recibo").style.display ="block";
            } else{
                document.getElementById("recibo").style.display ="none";
            }

            var print = document.getElementById("print").style.display;
            if(print=="none"){
                document.getElementById("print").style.display ="block";
            } else{
                document.getElementById("print").style.display ="none";
            }
           
            var checkBox = document.getElementById("segundaVia");
            var recibo2 = document.getElementById("recibo2");
            if (checkBox.checked == true){
                recibo2.style.display = "block";
            } else {
                recibo2.style.display = "none";
            }
           
            
        
    }


