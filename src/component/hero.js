function Hero(){
     return(
       <div className="hero">
        <div className="hero__imgBox">
         <div className="hero__image"></div> 
        </div>
        <div className="hero__desc-box">
            <h1 className="hero__title">
            The Bright Future of Web 3.0?
            </h1>
            <div class="hero__desc-leftContainer">
                <p className="hero__desc">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button className="hero__btn">Read More</button>
            </div>
        </div>
       </div>
     )
}


export default Hero;