
function timeout(ts) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ts, 'done');
    });
}

timeout(10000).then(value => {
    console.log('time is up');
})