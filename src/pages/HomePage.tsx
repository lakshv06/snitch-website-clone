import { ReactElement } from "react";
import NavHeader from "./NavigationHeader";

function HomePage(): ReactElement {
  return (
    <div className="p-3 m-1">
      <NavHeader />
      <div>Home Page</div>
    </div>
  );
}

export default HomePage;
