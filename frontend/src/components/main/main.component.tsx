import { OverviewComponent } from "../overview";

export default function MainComponent() {
  return (
    <>
      <main id="main" className="main">
        <OverviewComponent />
      </main>
    </>
  );
}

/*
I want to use a router that switches between overview / stat comparison:
return (
        <Router> 
            <Switch> 
                <Route path ="/" exact >
                    <>
                        <SidePanelSection />
                        <main id="main">
                            <HomeComponent />      
                        </main>
                        
                    </>
                </Route>

                <Route path ="/about" exact >
                    <>
                        <SidePanelSection />
                        <main id="main">
                            <AboutComponent />   
                        </main> 
                    </>
                </Route>
*/
