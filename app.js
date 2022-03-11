
function getValue(){

    var selectedValue = document.getElementById("firstselect").value;

    const heading =document.querySelector(".heading");


if(selectedValue==="Octal"){
      heading.textContent="Enter Octal Value";
}
else if(selectedValue==="Decimal"){
    heading.textContent="Enter Decimal Value";
}
else if(selectedValue==="Hexadecimal"){
    heading.textContent="Enter Hexadecimal Value";
}
else{
    heading.textContent="Enter Binary Value";
}
}

function toValue(){

    var selectedValuee = document.getElementById("secondselect").value;

    const sHeading =document.querySelector(".sHeading");

if(selectedValuee==="Octal"){
    sHeading.textContent="To Octal no";
}
else if(selectedValuee==="Decimal"){
  sHeading.textContent="To Decimal no";
}   
else if(selectedValuee==="Hexadecimal"){
  sHeading.textContent="To Hexadecimal no";
}
else{
  sHeading.textContent="To Binary no";
}
}


    const submit=document.querySelector(".submit");
    submit.addEventListener("click", doNextStep);

    function doNextStep(){
    var selectedvalue = document.getElementById("firstselect").value;
    var selectedvaluee = document.getElementById("secondselect").value;

    if(selectedvalue==="Decimal" && selectedvaluee==="Binary"){
    const input =Number(document.getElementById("number").value);
    var bin = input.toString(2);
    document.getElementById("output").value=bin;
    }

    else if(selectedvalue==="Decimal" && selectedvaluee==="Octal"){
    const input =Number(document.getElementById("number").value);
    var bin = input.toString(8);
    document.getElementById("output").value=bin;
    }
    else if(selectedvalue==="Decimal" && selectedvaluee==="Hexadecimal"){
    const input =Number(document.getElementById("number").value);
    var bin = input.toString(16);
    document.getElementById("output").value=bin;
    }
    else if(selectedvalue==="Decimal" && selectedvaluee==="Decimal"){
    const input =Number(document.getElementById("number").value);
    var bin = input;
    document.getElementById("output").value=bin;
    }
    else if(selectedvalue==="Binary" && selectedvaluee==="Binary"){
        const input =Number(document.getElementById("number").value);
        var bin = input;
        document.getElementById("output").value=bin;
        }
    else if(selectedvalue==="Binary" && selectedvaluee==="Octal"){
        const input =Number(document.getElementById("number").value);
        var bin = parseInt(input, 2).toString(8);
        document.getElementById("output").value=bin;    
        }
    else if(selectedvalue==="Binary" && selectedvaluee==="Decimal"){
        const input =Number(document.getElementById("number").value);
        var bin =parseInt(input, 2);
        document.getElementById("output").value=bin;    
        }
    else if(selectedvalue==="Binary" && selectedvaluee==="Hexadecimal"){
        const input =Number(document.getElementById("number").value);
        var bin =parseInt(input, 2).toString(16);
        document.getElementById("output").value=bin;    
        }
        else if(selectedvalue==="Octal" && selectedvaluee==="Octal"){
        const input =Number(document.getElementById("number").value);
        var bin =input;
        document.getElementById("output").value=bin;    
        }
        else if(selectedvalue==="Octal" && selectedvaluee==="Decimal"){
        const input =Number(document.getElementById("number").value);
        var bin =(parseInt(input,8));
        document.getElementById("output").value=bin;    
        }   
        else if(selectedvalue==="Octal" && selectedvaluee==="Binary"){
            const input =Number(document.getElementById("number").value);
            var bin =(parseInt(input,8));
            const inputt =bin;
            var binn = inputt.toString(2);
        document.getElementById("output").value=binn;    
        }   
        else if(selectedvalue==="Octal" && selectedvaluee==="Hexadecimal"){
            const input =Number(document.getElementById("number").value);
            var bin =(parseInt(input,8));
            const inputt =bin
            var binn = inputt.toString(16);
        document.getElementById("output").value=binn;    
        }   
        else if(selectedvalue==="Hexadecimal" && selectedvaluee==="Hexadecimal"){
            const input =Number(document.getElementById("number").value);
            var bin =input;
            document.getElementById("output").value=bin;    
            }  
        else if(selectedvalue==="Hexadecimal" && selectedvaluee==="Octal"){
            const input =document.getElementById("number").value;
            var din =parseInt(input,16);
            var bin = din.toString(8);
            document.getElementById("output").value=bin;  
            }  
        else if(selectedvalue==="Hexadecimal" && selectedvaluee==="Decimal"){
            const input =document.getElementById("number").value;
            var din =parseInt(input,16);
            document.getElementById("output").value=din;  
            } 
        else if(selectedvalue==="Hexadecimal" && selectedvaluee==="binary"){
            const input =document.getElementById("number").value;
            var din =parseInt(input,16);
            var bin = din.toString(2);
            document.getElementById("output").value=bin;  
            }        
}

const reset=document.querySelector(".reset");
reset.addEventListener("click", clearall);

function clearall(){
    const input = document.getElementById("number");
    const output = document.getElementById("output");
   input.value = '';
   output.value = '';

}
const swap=document.querySelector(".swap");
swap.addEventListener("click",swapfunc);

function swapfunc(){
    var selectedvalue = document.getElementById("firstselect").value;
    var selectedvaluee = document.getElementById("secondselect").value;

var fse=document.getElementById("firstselect");
var sse=document.getElementById("secondselect");

fse.value=selectedvaluee;
sse.value=selectedvalue;

getValue();
toValue();

}