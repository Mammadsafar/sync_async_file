const fs = require('fs');

function get_name(file_name) {
    let from = fs.readFileSync(file_name, "utf8");
    return from;
}

function write_name() {
    let name_data = get_name("./file/from.txt");
    console.log(name_data);
    fs.writeFileSync("./file/to.txt", name_data);
}
write_name();