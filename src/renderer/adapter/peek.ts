import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'string_data' implicitly has an 'any' ty... Remove this comment to see the full error message
function peek(string_data, index) {
    switch (string_data.split("")[index]) {
        case "1":
            return 49;
        case "2":
            return 50;
        case "3":
            return 51;
        case "4":
            return 52;
        case "5":
            return 53;
        case "6":
            return 54;
        case "7":
            return 55;
        case "8":
            return 56;
        case "9":
            return 57;
        case "x":
            return 120;
        case "y":
            return 121;
        case "z":
            return 122;
        case "#":
            return 35;
        case ".":
            return 46;
        case "^":
            return 94;
        case "I":
            return 73;
        case "a":
            return 97;
        case "b":
            return 98;
        case "c":
            return 99;
        case "d":
            return 100;
        case "e":
            return 101;
        case "f":
            return 102;
        case "g":
            return 103;
        case "h":
            return 104;
        case "i":
            return 105;
        case "j":
            return 106;
        case "k":
            return 107;
        case "l":
            return 108;
        default:
            Adap.undef_func("peek", [string_data, index]);
            Adap.undef_func("peek", [string_data.split("")[index]]);
            return index;
    }
}

export {peek}