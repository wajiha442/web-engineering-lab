
# Task 10: JavaScript Event Loop

## Prediction
I predicted that synchronous statements would execute first,
followed by the Promise callback and then the setTimeout callback.

## Actual Output
1. Start
4. End
3. Promise
2. setTimeout

## Explanation
Synchronous statements execute first in their written order.
The Promise .then() callback is placed in the microtask queue.
The setTimeout callback is scheduled as a timer task.
After synchronous code finishes, microtasks are processed before
the next timer task. Therefore, the Promise callback executes
before the setTimeout callback.
