import { useState } from "react";

import ExpenseForm from "../ExpenseForm/ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [formOpen, setFormOpen] = useState(false);

  function saveExpenseItemHandler(expenseItem) {
    props.onAddExpense(expenseItem);
    setFormOpen(false);
  }

  function addNewExpenseHandler() {
    setFormOpen(true);
  }

  function cancelNewExpenseHandler() {
    setFormOpen(false);
  }

  return (
    <div className="new-expense">
      {formOpen && (
        <ExpenseForm
          onSaveExpenseItem={saveExpenseItemHandler}
          onCancelExpenseItem={cancelNewExpenseHandler}
        />
      )}
      {!formOpen && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
