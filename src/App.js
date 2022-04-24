import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import FinancialAdvice from "./components/FinancialAdvice/FinancialAdvice";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Graph from "./components/LandingPage/Graph";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/add-expense" element={<ExpenseForm />} />
        <Route exact path="/view-expense" element={<Graph />} />
        <Route exact path="/financial-advice" element={<FinancialAdvice />} />
      </Routes>
    </Router>
  );
  // return <FinancialAdvice />;
  // return <ExpenseForm />;
  // return <Graph />;
}

export default App;
