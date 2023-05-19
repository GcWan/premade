import { BudgetReportComponent } from "./budgetReport";
import { RecentActivityComponent } from "./recentActivity";
import { WebsiteTrafficComponent } from "./websiteTraffic";

export default function StatisticsComponent() {
  return (
    <div className="col-lg-4">
      <RecentActivityComponent />
      <BudgetReportComponent />
      <WebsiteTrafficComponent />
    </div>
  );
}
