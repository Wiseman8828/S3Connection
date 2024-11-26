const promise1 = new Promise((res, rej) => {
    setTimeout(() => res(2), 1000)
})
const promise2 = new Promise((res, rej) => {
    setTimeout(() => rej(42), 5000)
})
const promise3 =new Promise((res, rej) => {
    setTimeout(() => {res('hyyy'); console.log('heyy')}, 9000)
})

Promise.all([promise1, promise2, promise3]).then((results) => {
    console.log(results);
}).catch((error) => {
    console.error('The rejected promise',error);
});