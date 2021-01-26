const fs = require('fs');

fs.readFile("./file/from.txt","utf8",function(err,data) {
    if (err) console.log(err);
    fs.writeFile("./file/to.txt",data,function(err)  {
        if (err) console.log(err);
    })
});


fs.readFile("./file/append.txt","utf8",function(err,data) {
    if (err) console.log(err);
    fs.appendFile("./file/to.txt",` ${data}`,function(err)  {
        if (err) console.log(err);

    })
});