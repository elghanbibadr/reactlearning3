import SpendingCharts from "./spendingsCharts";

function Spendings(){
    return (
        <div className="spendings">
            <h3 className="spendings__title">Spending - Last 7 days</h3>
            <div className="grid">
                <SpendingCharts amount='$17.45' height='mond-spending' day='mond'/>
                <SpendingCharts amount='$34.91' height='tue-spending' day='tue'/>
                <SpendingCharts amount='$52.36' height='wed-spending' day='wed'/>
                <SpendingCharts amount='$31.07' height='thu-spending' day='thu'/>
                <SpendingCharts amount='$23.39' height='fri-spending' day='fri'/>
                <SpendingCharts amount='$43.28' height='sat-spending' day='sat'/>
                <SpendingCharts amount='$25.48' height='sun-spending' day='sun'/>
            </div>
        </div>

    )
}


export default Spendings;