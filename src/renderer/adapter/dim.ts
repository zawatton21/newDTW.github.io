// @ts-expect-error TS(7006): Parameter 'length1' implicitly has an 'any' type.
function dim(length1, length2 = null, length3 = null, length4 = null) {
    if (length4 != null) {
        throw "4重配列なんてありませんよ";
    }
    const return_list = [];
    for (let i = 0; i < length1; i++) {
        if (length2 != null) {
            return_list[i] = [];
            for (let j = 0; j < length2; j++) {
                if (length3 != null) {
                    // @ts-ignore
                    return_list[i][j] = [];
                    for (let k = 0; k < length3; k++) {
                        // @ts-ignore
                        return_list[i][j][k] = 0;
                    }
                }
                else {
                    // @ts-ignore
                    return_list[i][j] = 0;
                }
            }
        }
        else {
            return_list[i] = 0;
        }
    }
    return return_list;
}

export {dim}