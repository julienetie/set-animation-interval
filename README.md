# setAnimationFrame
Delay a function call without the use of setTimeout()

``` var requestID = setAnimationFrame(function, delay);```

- setAnimationFrame returns the requestID for cancellation via cancelRequestAnimationFrame() ([polyfill](https://github.com/julienetie/request-frame)).
- setAnimationFrame passes the given function the [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp) as a parameter.
- The delay units are in miliseconds.

## Why not use setTimeout?

![img](https://dev.opera.com/articles/better-performance-with-requestanimationframe/figure1.png)

Checkout [Better Performance With requestAnimationFrame](https://dev.opera.com/articles/better-performance-with-requestanimationframe/) 
By Luz Caballero 
______

#### Browser support using the [requestFrame](https://github.com/julienetie/request-frame) polyfill. ```npm i request-frame```
- FireFox 3+
- Chrome 14+
- Opera 11.6+
- IE 5.5+
- Safari 4+
- IOS Safari 3+
- Android Browser 2.3+
- Android Chrome

#### Browser Support Without a  polyfill or vendor prefix usage.
IE10+,
Edge,
FireFox 23+,
Chrome 24+,
Safari 6.1+,
Opera 15+,
IOS Safari 7.1+,
Android Browser 4.4+,
Android Chrome

Despite the polyfill, legacy browsers will fallback to setTimeout. See [caniuse](http://caniuse.com/#feat=requestanimationframe) for more details.

MIT License

Copyright (c) 2016 Julien Etienne
