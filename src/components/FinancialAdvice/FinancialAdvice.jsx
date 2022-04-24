import React from "react";
import "./FinancialAdvice.css";
import { Link } from "react-router-dom";

function FinancialAdvice() {
  return (
    <div className="financial_advice">
      <h1 className="heading">
        Your piece of financial advice 💸 for your expense tracker
      </h1>

      <div className="advice">
        Always have your expenditure less than your earnings (helps in the long
        run 😉).
      </div>

      <div className="advice">
        In case you think you have spent a lot on a fine day, compensate it by
        spending less on the next few days until you think its enough.
      </div>

      <div className="advice">
        Never spend your money on stuff which you think you won't use quite
        often.
      </div>

      <div className="advice">
        Always respect your money...coz it's earned through a lot of hard work
      </div>

      <Link to="/">
        <button className="return_button">Return to Home Page</button>
      </Link>
    </div>
  );
}

export default FinancialAdvice;
