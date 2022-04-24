import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const [isClicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  return (
    <div>
      {!isClicked && (
        <div className="landing_page">
          <h1 className="landing_page_heading">My Expense Tracker</h1>

          <Link to="/add-expense">
            <button onClick={handleClick} className="expense">
              Add New Expense
            </button>
          </Link>

          <Link to="/view-expense">
            <button onClick={handleClick} className="expense">
              View Expenses
            </button>
          </Link>

          <Link to="/financial-advice">
            <button onClick={handleClick} className="expense">
              Take financial advice
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
