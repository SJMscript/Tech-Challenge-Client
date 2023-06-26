import { Route, Routes } from "react-router";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OnePhone from "./components/OnePhone";
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"
import Phones from "./pages/Phones";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Phones />}/>
        <Route path="/:phoneId" element={<OnePhone />}/>

        <Route path="/error" element={<Error />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}
 export default App;
