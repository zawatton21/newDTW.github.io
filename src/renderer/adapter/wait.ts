// @ts-expect-error TS(7006): Parameter 'time' implicitly has an 'any' type.
function wait(time) {
    // @ts-expect-error TS(2794): Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
    return new Promise((resolve, reject) => { setTimeout(() => resolve(), 10 * time); });
}

export {wait}