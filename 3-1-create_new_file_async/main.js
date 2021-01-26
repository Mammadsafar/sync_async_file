const fs = require('fs');


fs.createWriteStream("file/from.txt");
// from.once('open', function() {
//   from.write("from");
//   from.end();
// });
fs.access("file/from.txt", fs.F_OK, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("The file/from.txt exists");

})