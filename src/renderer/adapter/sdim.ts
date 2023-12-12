// @ts-expect-error TS(7006): Parameter 'length1' implicitly has an 'any' type.
function sdim(length1: any, length2: any = null, length3: any = null) {
    if (length2 == null) {
        return "";
    }
    const return_list = [];
    for (let i = 0; i < length2; i++) {
        if (length3 != null) {
            return_list[i] = [];
            for (let j = 0; j < length3; j++) {
                // @ts-expect-error TS(2542): Index signatrue in type 'string | never[]' only pe... Remove this comment to see the full error message
                return_list[i][j] = "";
            }
        }
        else {
            return_list[i] = "";
        }
    }
    return return_list;
}

export {sdim}