import { BudgetReportComponent } from "./budgetReport";
import { RecentActivityComponent } from "./recentActivity";
import { WebsiteTrafficComponent } from "./websiteTraffic";

const StatisticsComponent = () => {
    return(
        <div className="col-lg-8">
            <RecentActivityComponent/>
            <BudgetReportComponent/>
            <WebsiteTrafficComponent/>
        </div>
    )
}

export default StatisticsComponent;

