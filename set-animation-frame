(function(window){
  /**
   * @param {Function} callback
   * @param {Number} delay
   */
  window.setAnimationFrame = function(callback, delay) {
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
    loop(0);
    

    /**
     * Returns the timestamp relative to the navigationStart attribute of the 
     * PerformanceTiming interface
     * @return {Number} - DOMHighResTimeStamp
     */
    return requestId;
  }
}(window));
