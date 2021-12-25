import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [selectedYearFilter, setYearFilter] = useState("2020");

  function yearChangeHandler(selectedYear) {
    // console.log('Expenses.js');
    // console.log(selectedYear);
    setYearFilter(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYearFilter}
        onYearChange={yearChangeHandler}
      />
      {props.items.map(function (expense) {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
