import Nav from "./component/nav";
import Hero from "./component/hero";
import News  from "./component/news";
import image1 from "./images/image-retro-pcs.jpg"
import image3 from "./images/image-top-laptops.jpg"
import image2 from "./images/image-gaming-growth.jpg"
import Features from "./component/features";

function App() {  
 return(
    <>
     <Nav/>
     <Hero/>
     <div className="News-container">
     <News title="Hydrogen VS Electric Cars" text='Will hydrogen-fueled cars ever catch up to EVs?'/>
     <News title="The Downsides of AI Artistry" text='What are the possible adverse effects of on-demand AI image generation?'/>
     <News title="Is VC Funding Drying Up?" text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'/>
     </div>
     <div className="features-container">
     <Features number="01" src={image1}/>
     <Features number="02" src={image2}/>
     <Features number="03" src={image3}/>
     </div>
    </>
 )
}


export default App;
