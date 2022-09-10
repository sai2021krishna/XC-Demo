import "../CSS/HomePage.css";
import Nav from "./Nav.js";
import Banner from "./Banner.js";
import Footer from "./Footer.js";

function HomePage() {
  return (
    <div className="homePage">
      <Nav />
      <Banner />
      <Footer />
    </div>
  );
}

export default HomePage;
