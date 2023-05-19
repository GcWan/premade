import { FooterComponent } from "@components/footer";
import { HeaderSection } from "@components/header";
import { MainComponent } from "@components/main";

export default function Home() {
  return (
    <>
      <HeaderSection />

      <MainComponent />

      <FooterComponent />
    </>

    //can implement a sidebar if needed??
  );
}
