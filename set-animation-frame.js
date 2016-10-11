(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.setAnimationFrame = factory());
}(this, (function () { 'use strict';

/**
 *  set-animation-frame - Delay function calls without setTimeout.
 *     License:  MIT
 *      Copyright Julien Etienne 2016 All Rights Reserved.
 *        github:  https://github.com/julienetie/set-animation-frame
 *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 */

/**
 * @param {Function} callback
 * @param {Number} delay
 */
var setAnimationFrame = function setAnimationFrame(callback, delay) {
  var duration = 0;
  var terminate = false;
  var requestId;

  /**
   * The duration increments until it satisfys the delay.
   * Once the delay is ready to be terminated, the requestID
   * is returned. Whilst unsatisfied requestAnimationFrame
   * calls the loop with the incremented timestamp
   */
  function loop(timestamp) {
    if (!duration) {
      duration = timestamp;
    }

    if (timestamp > duration + delay && !terminate) {
      if (callback) callback(timestamp);
      terminate = true;
    } else {
      requestId = requestAnimationFrame(loop);
    }
  }

  /**
   * Start the loop. 
   */
  loop(1);

  /**
   * Returns the timestamp relative to the navigationStart attribute of the 
   * PerformanceTiming interface
   * @return {Number} - DOMHighResTimeStamp
   */
  return requestId;
};

return setAnimationFrame;

})));