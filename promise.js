function one() {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    })
    return promise1;
}
function two() {
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    })
    return promise2;
}

async function test(){
    try{
        const res1 = await one();
        const res2 = await two();
        const final = res1 + res2;
        console.log("result is", final)
    }catch(err){
        console.log(err)
    }
}

test();