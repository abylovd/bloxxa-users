import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Overview from "./components/Overview/Overview";
import Account from "./components/Account/Account";
import Billing from "./components/Billing/Billing";
import Endpoints from "./components/Endpoints/Endpoints";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Overview />}>
            <Route index element={<Account />} />
            <Route path="blogs" element={<Billing />} />
            <Route path="contact" element={<Endpoints />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* 
      <Overview /> */}
    </div>
  );
}

export default App;
