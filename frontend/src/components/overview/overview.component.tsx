import { TitleComponent } from "./title";
import { StatisticsComponent } from "./statistics";
import { MatchHistoryComponent } from "./matchHistory";

export default function OverviewComponent() {
  return (
    <>
      <TitleComponent />

      <section className="section overview">
        <div className="row">
          <StatisticsComponent />

          <MatchHistoryComponent />
        </div>
      </section>
    </>
  );
}
