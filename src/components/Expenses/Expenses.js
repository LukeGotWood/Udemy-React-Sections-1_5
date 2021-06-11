import { useState } from "react";

import ExpensesList from "../ExpensesList/ExpensesList";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import Card from "../Card/Card";

import "./Expenses.css";


function Expenses(props) {
  const [filterArg, setFilterArg] = useState("2020");

  function onFilterChangeHandler(filterArg) {
    setFilterArg(filterArg);
  }

  let filteredItems = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterArg
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterArg}
        onFilterChange={onFilterChangeHandler}
      />
      <ExpensesChart items={filteredItems}/>
      <ExpensesList items={filteredItems}/>
    </Card>
  );
}

export default Expenses;
