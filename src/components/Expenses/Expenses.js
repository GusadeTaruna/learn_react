import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [selectedYearFilter, setYearFilter] = useState("2020");

  function yearChangeHandler(selectedYear) {
    setYearFilter(selectedYear);
  }

  const filteredYearData = props.items.filter(function (expense) {
    return expense.date.getFullYear().toString() === selectedYearFilter;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYearFilter}
        onYearChange={yearChangeHandler}
      />
      {filteredYearData.map(function (expense) {
        return (
          <ExpenseItem
            key={expense.id}
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
