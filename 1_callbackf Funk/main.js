// const​ fname_1 ​=​ ​"​Ali​";
// const​ lname_1 ​=​ ​"​Ahmadi​";

function shoe_name(fname, lname, show_result){

    let result = fname + " " + lname;
    show_result(`result ​=====>​ ​"​${result}"`);
}

shoe_name ("​Ali​", "​Ahmadi​", function(f) {

    console.log(f);

})

