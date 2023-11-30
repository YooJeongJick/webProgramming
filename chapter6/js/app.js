// Try catch 문
// try {
//     const num = Number("abc");
//     if (isNaN(num)) {
//         throw Error("abc is not Number");
//     }
//     console.log(num);
// } catch(e) {
//     console.log(e);
// }

async function asyncSample() {
    try {
        await printlogAfter1Sec();
        console.log(2222);
    } catch(e) {
        console.log(e);
    }
}

// Async(비동기) Code 작성 
// Promise 패턴
function printlogAfter1Sec() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (err) {
            //     reject();
            // } else {
            //     resolve();
            // }
            console.log(11111);
            resolve();
        }, 1000);
    })
}

// printlogAfter1Sec()
//     .then(() => {
//         console.log(2222);
//         return printlogAfter1Sec();
//     })
//     .catch(() => {
//         console.log(err);
//     })

// setTimeout(() => {
//     console.log(11111);
// }, 1000);

// setTimeout(() => {
//     console.log(22222);
// }, 999);

// Callback
// function printlogAfter1Sec(func, errfunc) {
//     setTimeout(() => {
//         console.log(11111);
//         if (err) {
//             // 에러가 발생한 경우
//             errfunc();
//         } else {
//             func();
//         }
//     }, 1000);
// }

// printlogAfter1Sec(() => {
//     console.log(2222);
// });

