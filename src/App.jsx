import Home from "./components/Home";
import CrudProvider from "./context/CrudContext";

import "./styles/styleDay.css"
import "./styles/styleNight.css"
import "./styles/styleGeneral.css"

function App() {
  return (
    <CrudProvider>
      <div className="App">
        <Home/>
      </div>
    </CrudProvider>
  );
}

export default App;
