import { CustomersComponent } from "./customers";
import { SalesComponent } from "./sales";
import { RevenueComponent } from "./revenue";
import { ReportsComponent } from "./reports";
import { MatchComponent } from "./match";

export default function MatchHistoryComponent() {
  return (
    <div className="col-lg-8">
      <div className="row">
        <MatchComponent />
        <SalesComponent />
        <RevenueComponent />
        <CustomersComponent />
        <ReportsComponent />
      </div>
    </div>
  );
}
