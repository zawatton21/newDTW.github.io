// @ts-expect-error TS(7006): Parameter 'val' implicitly has an 'any' type.
function limit(val, min_val, max_val) {
    return Math.max(min_val, Math.min(val, max_val));
}

export {limit}