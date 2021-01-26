const fs = require('fs');


var from = fs.createWriteStream("file/from.txt");
from.once('open', function() {
  from.write("from");
  from.end();
});

try {
  if (fs.existsSync("file/from.txt")) {
    console.log("The file/from.txt exists");
  }
} catch(err) {
  console.error(err)
}