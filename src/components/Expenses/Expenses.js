import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYearFilter, setYearFilter] = useState("2020");

  function yearChangeHandler(selectedYear) {
    setYearFilter(selectedYear);
  }

  const filteredYearData = props.items.filter(function (expense) {
    return expense.date.getFullYear().toString() === selectedYearFilter;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYearFilter}
          onYearChange={yearChangeHandler}
        />
        <ExpensesList items={filteredYearData} />
      </Card>
    </li>
  );
}

export default Expenses;
