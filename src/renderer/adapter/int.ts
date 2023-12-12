// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function int(data0) {
    return parseInt(data0);
}

export {int}