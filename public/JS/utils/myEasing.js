module.exports= function easer(Height ,targetHeight, clb,speed)
{
    
    const distance= targetHeight - Height
    const duration = speed
    let start= null

    window.requestAnimationFrame(step)
    function step(timestamp)
    {
       if(!start) start=timestamp
       const progress= timestamp - start
       clb(easeOutQuartfunction(progress, Height, distance, duration))
       if(progress < duration) window.requestAnimationFrame(step)
    }
    function easeOutQuartfunction (t, b, c, d) {
        t /= d;
        t--;
        return -c * (t*t*t*t - 1) + b;
    }
}


    
