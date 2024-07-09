//Handling Independent Promises

async function waiting(){
    const firstValue = await firstAsyncThing();
    const secondValue = await secondAsyncThing();
    console.log(firstValue, secondValue);
}
//we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console.

async function concurrent(){
    const firstPromise = firstAsyncThing();
    const secondPromise = secondAsyncThing();
    console.log(await firstPromise, await secondPromise);
}
//both promises are constructed without using await. We then await each of their resolutions to print them to the console.
//注意事项：如果我们有多个真正独立的promise，我们希望完全并行执行，我们必须使用单独的 .then() 函数，并避免使用 await 停止执行