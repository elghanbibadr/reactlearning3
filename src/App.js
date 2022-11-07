import Nav from "./component/nav";
import Hero from "./component/hero";
import News  from "./component/news";

function App() {  
 return(
    <>
     <Nav/>
     <Hero/>
     <News title="Hydrogen VS Electric Cars" text='Will hydrogen-fueled cars ever catch up to EVs?'/>
     <News title="The Downsides of AI Artistry" text='What are the possible adverse effects of on-demand AI image generation?'/>
     <News title="Is VC Funding Drying Up?" text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'/>
    </>
 )
}


export default App;
