import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ExpenseForm.css";
import { data } from "../LandingPage/Graph";

function ExpenseForm() {
  const [details, setDetails] = useState({
    enteredDate: "",
    enteredAmount: "",
    enteredDetails: "",
  });

  const dateChangeHandler = (event) => {
    console.log("changed");
    setDetails((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    console.log("changed");
    setDetails((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const detailsChangeHandler = (event) => {
    console.log("changed");
    setDetails((prevState) => {
      return { ...prevState, enteredDetails: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let myStr = details.enteredDate.split("-");
    let index = 0;
    let year = parseInt(myStr[0]);
    let month = parseInt(myStr[1]);
    if (year === 2021) index = 3;
    else if (year === 2022) index = 4;
    console.log(year, month);
    data["datasets"][index]["data"][month - 1] += parseInt(
      details.enteredAmount
    );
  };

  return (
    <div className="expense_div">
      <h1 className="expense_div__heading">Expense Form</h1>
      <form onSubmit={submitHandler}>
        <div className="expense_form">
          <table>
            <tr>
              <td>
                <p className="expense_form__text">
                  <strong>Date</strong>
                </p>
              </td>
              <td>
                <input
                  className="expense_form__input"
                  type="date"
                  min="2010-01-01"
                  max="2023-12-31"
                  onChange={dateChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="expense_form__text">
                  <strong>Amount</strong>
                </p>
              </td>
              <td>
                <input
                  className="expense_form__input"
                  type="number"
                  min="10"
                  max="100000"
                  onChange={amountChangeHandler}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <p className="expense_form__text">
                  <strong>Details</strong>
                </p>
              </td>
              <td>
                <input
                  className="expense_form__input additional"
                  type="text"
                  onChange={detailsChangeHandler}
                ></input>
              </td>
            </tr>
          </table>

          <table>
            <tr>
              <td>
                <Link to="/">
                  <button type="button" className="expense_form__button">
                    Return to Home Page
                  </button>
                </Link>
              </td>
              <td>
                <button type="submit" className="expense_form__button">
                  Add Expense
                </button>
              </td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
