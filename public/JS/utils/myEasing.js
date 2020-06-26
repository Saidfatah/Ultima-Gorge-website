module.exports= function easer(startValue ,targetValue, clb,speed,easingFunction)
{
    
    const distance= targetValue - startValue
    const duration = speed
    let start= null

    window.requestAnimationFrame(step)
    function step(timestamp)
    {
       if(!start) start=timestamp
       const progress= timestamp - start
       clb(easingFunction!= null?easeOutCirc(progress, startValue, distance, duration):easeOutQuartfunction(progress, startValue, distance, duration))
       if(progress < duration) window.requestAnimationFrame(step)
    }
    function easeOutCirc  (t, b, c, d) {
        t /= d;
        t--;
        return c * Math.sqrt(1 - t*t) + b;
    };
    function easeOutQuartfunction (t, b, c, d) {
        t /= d;
        t--;
        return -c * (t*t*t*t - 1) + b;
    }
    function easeInOutQuad(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };
     function easeInExpo (t, b, c, d) {
        return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
    };
      function easeInOutQuart(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;
    };
}


    
