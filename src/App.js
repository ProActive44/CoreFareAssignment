import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
      <AllRoutes/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
