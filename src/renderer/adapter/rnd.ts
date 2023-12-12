function rnd(num: any) {
    return Math.floor(Math.random() * num); // Math.floor は対象の値の小数点以下を切り捨て
}

export {rnd}