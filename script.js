
let res = '0';


const CalcText = document.getElementById('CalcText');


CalcText.innerHTML = res;

function Click(text){

    Check(text);

    res += text;
    CalcText.innerHTML = res;
}

function Check(text){
    if (text == 'CL' || text == 'Del' || text == 'check')
}