# setAnimationFrame
Delay a function call without the use of setTimeout()

```javascript 
// Heads up!
// Animation timing functions work in enviroments that either render or 
// simulate the rendering of frames. (Unlike nodejs & dev tools)
```

``` var requestID = setAnimationFrame(function, delay);```

- setAnimationFrame returns the requestID for cancellation via cancelRequestAnimationFrame() ([polyfill](https://github.com/julienetie/request-frame)).
- setAnimationFrame passes the given function the [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp) as a parameter.
- The delay units are in miliseconds.

## Why not use setTimeout?

<img width="400px" src="https://dev.opera.com/articles/better-performance-with-requestanimationframe/figure1.png">

Checkout [Better Performance With requestAnimationFrame](https://dev.opera.com/articles/better-performance-with-requestanimationframe/) 
By Luz Caballero 
______

#### Browser support using the [requestFrame](https://github.com/julienetie/request-frame) polyfill. ```npm i --save request-frame```
- IE 5.5+

#### Browser Support Without a  polyfill or vendor prefix usage.
- IE10+

See [caniuse](http://caniuse.com/#feat=requestanimationframe) for more details.

MIT License

Copyright (c) 2016 Julien Etienne
