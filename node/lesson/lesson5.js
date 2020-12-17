
Promise.resolve().then(() => console.log(2));
process.nextTick(() => console.log(1));
Promise.resolve().then(() => {
    console.log(3);
    process.nextTick(() => console.log(4));
    Promise.resolve().then(() => console.log(5));
}).then(() => {
    console.log(6);
})

/*
When we run the code:

callback in process.nextTick is added to process.nextTick queue.
callback in promises are added to promises microtask queue.
Event loop executes tasks in following order: process.nextTick queue, promises microtask queue, setTimeout queue, setImmediate queue

Event loop will execute callback from process.nextTick queue and prints 1.
Event loop will look for promises microtask queue and then processes them. So it prints 2 and 3. On the next line it again adds a callback to process.nextTick queue which will be executed once promises microtask queue is finished.
So the next 5 and 6 will be printed. Now promises microtask queue is empty
Event loop will again check if there is any handler in process.nextTick queue and will execute them. So it now prints 4.
*/