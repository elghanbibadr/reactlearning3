import Balance from "./component/balance";
import Spendings from './component/spendings';
import Total from "./component/total";
function App() {
  return (
    <div className="container">
       <Balance/>
       <Spendings/>
       <Total/>
    </div>
  );
}

export default App;
