(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.setAnimationInterval = factory());
}(this, (function () { 'use strict';

/**
 *  set-animation-interval - Repeatedly call a function without setInterval,
 *    call a function by approximate frames per second.
 *     License:  MIT
 *      Copyright Julien Etienne 2016 All Rights Reserved.
 *        github:  https://github.com/julienetie/set-animation-interval
 *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 */

/**
 * @param {Function} - Callback.
 * @param {Number}   - Delay in milliseconds or frames per second.
 * @param {Boolean}  - use FPS.
 */
function setAnimationInterval(callback, delay, useFPS) {
  var fPSTimeStamp = 0;
  var interval = useFPS ? 1000 / delay : delay;
  var requestId = void 0;

  /**
   * Iterates the call back.
   * Compare the timestamp.
   * @return {Number} - DOMHighResTimeStamp.
   */
  (function loopCallback(timestamp) {
    if (timestamp > fPSTimeStamp) {
      fPSTimeStamp += interval;
      callback(fPSTimeStamp);
    }
    requestId = requestAnimationFrame(loopCallback);
  })();

  /**
   * Returns the timestamp relative to the navigationStart attribute of the 
   * PerformanceTiming interface
   * @return {Number} - DOMHighResTimeStamp
   */
  return requestId;
}

return setAnimationInterval;

})));
