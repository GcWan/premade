
import { TitleComponent } from "./title"
import { StatisticsComponent } from "./statistics"
import { MatchHistoryComponent } from "./matchHistory"

const OverviewComponent = () => {
    return(
        <>
        <TitleComponent/>
        
        <section className="section overview">
            <div className="row">

                <StatisticsComponent/>

                <MatchHistoryComponent/>
                
            </div>
        </section>
        </>   
    )
}

export default OverviewComponent

