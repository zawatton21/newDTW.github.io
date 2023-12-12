let last_wait_time = new Date();

function await_(time: any) {
    const wait_time = Math.max(time - Math.max(0, new Date().getMilliseconds() - last_wait_time.getMilliseconds()), 0);
    last_wait_time = new Date();
    // @ts-ignore
    return new Promise((resolve, reject) => {
        // @ts-expect-error TS(2794): Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
        setTimeout(() => resolve(), wait_time);
    });
}

export {await_}