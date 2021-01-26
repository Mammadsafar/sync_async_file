


const fs = require('fs');


function name_obj(uid, name, verb, number) {
    this.uid = uid;
    this.name = name;
    this.verb = verb;
        this.number = `${number}`;
}

function number_obj(uid, number) {
    this.uid = uid;
    this.number = number;

}


function read_file(url, text) {

    let arr = [];
    let data = fs.readFileSync(url, "utf8");
    arr = data.split(/\r?\n/);

    let obj_arr = [];
    for (let i = 0; i < arr.length; i++) {
        let creat_obj;
        creat_obj = arr[i].split("-");
        if (text === "name") {

            obj_arr.push(new name_obj(creat_obj[0], creat_obj[1]));
        } else {
            obj_arr.push(new number_obj(creat_obj[0], creat_obj[1]));

        }


    }

    return obj_arr;
}

function merge(name_array, numbers_array) {
    let result = [];
    for (let i = 0; i < name_array.length; i++) {
        let count = 0;
        for (let j = 0; j < numbers_array.length; j++) {
            if (name_array[i].uid == numbers_array[j].uid) {
                count++;
                if (count === 2) {
                    name_array[i].verb = "’s phone numbers are "
                    name_array[i].number += ", " + numbers_array[j].number;
                } else {
                    name_array[i].verb = "’s phone number is "
                    name_array[i].number = numbers_array[j].number;
                }
            }
            if (name_array[i].verb == undefined) {
                name_array[i].verb = " hasn’t any phone number."
                name_array[i].number ="";
            }
        }
        result.push(name_array[i]);
    }
    return result;
}

function main(names_url, numbers_url) {

    let name_array = read_file(names_url, "name");
    let numbers_array = read_file(numbers_url, "num");


    merge(name_array, numbers_array);

    for (const key in name_array) {
        console.log(`${name_array[key].name}${name_array[key].verb}${name_array[key].number}`);
    }

}
main("./file/names.txt", "./file/numbers.txt");