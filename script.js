
let res = '0';


const CalcText = document.getElementById('CalcText');


CalcText.innerHTML = res+'#';

function Click(text){
    
    if(text == 'check'){
        
        if (document.getElementById('check').innerHTML == 'On'){
            document.getElementById('check').innerHTML = 'Off';
        }
        else{
            document.getElementById('check').innerHTML = 'On';
        }
    }

    if(document.getElementById('check').innerHTML == 'On'){
        if(text == 'CL'){
            res = '0';
        }
        else if(text == 'Del' & res == 'Error'){
            res = '0';
        }
        else if(text == 'Del'){
            res = res.slice(0, -1);
        }
        
        else if(text == '=' & res !== 'Error'){
            res = eval(res);
            
        }
        
        
        else if (res == '0' & text !== 'check' & text !== '**' & text !== '/' & text !== '*' & text !== '+' & text !== '.' || res == 'Error'){
            res = text;
        }
        else if(text !== 'check'){
            res += text;
        }
        
        if (res == Infinity){
            res = 'Error';
        }
        if(res == ''){
            res = '0';
        }
            
        CalcText.innerHTML = res+'#';
    }

    
        

        
}

