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
       clb(easingFunction!= null?easeInOutQuad(progress, startValue, distance, duration):easeOutQuartfunction(progress, startValue, distance, duration))
       if(progress < duration) window.requestAnimationFrame(step)
    }
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
}


    
