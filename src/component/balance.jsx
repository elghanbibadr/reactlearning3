
 import logo from '../logo.svg';

function Balance(){

    return(
        <div className="balance">
              <div className="balance__desc">
            <p className="balance__title">My balance</p>
           <h2 className="h2 balance__value">$921.49</h2>
       </div>
        <div className="balance__imageContainer">
            <img src={logo} alt="two circle intersected icons" />
        </div>
        </div>
    )
}


export default Balance;