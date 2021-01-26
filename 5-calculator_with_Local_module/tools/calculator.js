// import modules

function convert(con,a,b){
    if(con==="Total"){
        return a + b;
    }else if(con==="Submission"){
        return a - b;
    }else if(con==="Multiplication"){
        return a * b;
    }else if(con==="Division"){
        return a / b;
    }
}


module.exports = convert;