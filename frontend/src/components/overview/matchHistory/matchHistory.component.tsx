import { CustomersComponent } from "./customers";
import { SalesComponent } from "./sales";
import { RevenueComponent } from "./revenue";
import { ReportsComponent } from "./reports";
import {MatchComponent} from "./match";

const MatchHistoryComponent = () => {
    return(
        <div className="col-lg-8">
            <div className="row">
                <SalesComponent/>
                <RevenueComponent/>
                <CustomersComponent/>
                <ReportsComponent/>
                <MatchComponent/>
            </div>
        </div>
    )
}

export default MatchHistoryComponent;