const convertFrom=document.getElementById('from');
const convertTo=document.getElementById('to');
var text1 = convertFrom.options[convertFrom.selectedIndex].text;
var text2 = convertTo.options[convertTo.selectedIndex].text;
document.querySelector('.convert').addEventListener('click',function(){
    const inputValue=document.querySelector('.input-field').value;
    if(!inputValue){
        document.querySelector('.message').textContent='Input cannot be Empty';
    }
    else {
        document.querySelector('.message').textContent='Enter valid Input:';
    }
    //Decimal Conversions
    if(text1=='Decimal' && text2=='Binary'){
        const result=Number(inputValue).toString(2);
        document.querySelector('.result-print').textContent=result;
        console.log(inputValue);
    }
    
    else if(text1=='Decimal' && text2=='Octal'){
        const result=Number(inputValue).toString(8);
        document.querySelector('.result-print').textContent=result;
        console.log(inputValue);
    }
    else if(text1=='Decimal' && text2=='Hexadecimal'){
        const result=Number(inputValue).toString(16);
        document.querySelector('.result-print').textContent=result;
        console.log(inputValue);
    }
    else if(text1=='Decimal' && text2=='Decimal'){
        document.querySelector('.result-print').textContent=inputValue;
        console.log(inputValue);
    }
    //Binary Conversions
    else if(text1=='Binary' && text2=='Decimal'){
        const result=parseInt(inputValue, 2).toString(10);
        document.querySelector('.result-print').textContent=result;
        console.log(inputValue);
    }
    else if(text1=='Binary' && text2=='Hexadecimal'){
        const result=parseInt(inputValue, 2).toString(16);
        document.querySelector('.result-print').textContent=result;
        console.log(inputValue);
    }
    else if(text1=='Binary' && text2=='Octal'){
        const result=parseInt(inputValue, 2).toString(8);
        document.querySelector('.result-print').textContent=result;
        console.log(inputValue);
    }
    else if(text1=='Binary' && text2=='Binary'){
        document.querySelector('.result-print').textContent=inputValue;
        console.log(inputValue);
    }
    //Octal Conversions
    else if(text1=='Octal' && text2=='Decimal'){
        const result=parseInt(inputValue,8)
        document.querySelector('.result-print').textContent=result;
        console.log(inputValue);
    }
    else if(text1=='Octal' && text2=='Hexadecimal'){
        const result=parseInt(inputValue,8);
        const result1=result.toString(16);
        document.querySelector('.result-print').textContent=result1;
        console.log(inputValue);
    }
    
    else if(text1=='Octal' && text2=='Binary'){
        const result=parseInt(inputValue,8);
        const result1=result.toString(2);
        document.querySelector('.result-print').textContent=result1;
        console.log(inputValue);
    }
    else if(text1=='Octal' && text2=='Octal'){
        document.querySelector('.result-print').textContent=inputValue;
        console.log(inputValue);
    }
    //Hexadecimal converions
    else if(text1=='Hexadecimal' && text2=='Decimal'){
        const result=parseInt(inputValue,16)
        document.querySelector('.result-print').textContent=result;
        console.log(inputValue);
    }
    else if(text1=='Hexadecimal' && text2=='Binary'){
        const result=parseInt(inputValue,16);
        const result1=result.toString(2);
        document.querySelector('.result-print').textContent=result1;
        console.log(inputValue);
    }
    else if(text1=='Hexadecimal' && text2=='Octal'){
        const result=parseInt(inputValue,16);
        const result1=result.toString(8);
        document.querySelector('.result-print').textContent=result1;
        console.log(inputValue);
    }
    else if(text1=='Hexadecimal' && text2=='Hexadecimal'){
        document.querySelector('.result-print').textContent=inputValue;
        console.log(inputValue);
    }
});
document.querySelector('.reset').addEventListener('click',function(){
    document.querySelector('.input-field').value='';
    document.querySelector('.result-print').textContent='';
    document.querySelector('.message').textContent='Enter valid Input:';
});
document.querySelector('.swap').addEventListener('click',function(){
    var text1=convertTo.options[convertTo.selectedIndex].text;
    var text2=convertFrom.options[convertFrom.selectedIndex].text;
    convertTo.options[convertTo.selectedIndex].text=text2;
    convertFrom.options[convertFrom.selectedIndex].text=text1;
});