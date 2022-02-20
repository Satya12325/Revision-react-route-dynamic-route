import "./styles.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AllpageRouts from "./Router/AllpageRout";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllpageRouts />
    </div>
  );
}
