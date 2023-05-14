import { SearchComponent } from "./search";

const HeaderSection = () => {
  //also need profile + switchtab + more profiles + update
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <SearchComponent />
    </header>
  );
};

export default HeaderSection;
