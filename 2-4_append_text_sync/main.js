const fs = require('fs');

function get_name(url) {
    let text = fs.readFileSync(url, "utf8");
    return text;
}


function write_name() {
    let from_data = get_name("./file/from.txt");
    let append_data = get_name("./file/append.txt");
    fs.writeFileSync("./file/to.txt", from_data);
    fs.appendFileSync("./file/to.txt", ` ${append_data}`);
}
write_name();