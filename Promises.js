// sequential execution
// add->sub->mul
addAsync(10, 20)
    .then(data => {
        console.log("add(): ", data);
        subAsync(10, 50)
            .then(data => {
                console.log("sub(): ", data);
                mulAsync(10, 10)
                    .then(data => {
                        console.log("mul(): ", data);
                    })
                    .catch(err => {
                        console.log("We Got the mulAsync Error!!!", err);
                    })
            })
            .catch(err => {
                console.log("We Got the subAsync Error!!!", err);
            })
    })
    .catch(err => {
        console.log("We Got the addSync Error!!!", err);
    })

// parallel execution
// addAsync(10, 20).then(data => console.log('add() ->', data));
// subAsync(10, 50).then(data => console.log("sub() ->", data));
// mulAsync(10, 10).then(data => console.log("mul() ->", data));


function addAsync(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const c = a + b;
            resolve(c);
        }, 1000);
    });
}

function subAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const c = a - b;
            resolve(c);
        }, 1000);
    });
}

function mulAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const c = a * b;
            resolve(c);
        }, 1000);
    });
}