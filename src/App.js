import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e0",
    title: "Car Insurance",
    amount: 590.0,
    date: new Date(2021, 2, 10),
  },
  {
    id: "e1",
    title: "Rent",
    amount: 800.0,
    date: new Date(2021, 2, 1),
  },
  {
    id: "e2",
    title: "Water Bill",
    amount: 60.0,
    date: new Date(2021, 3, 2),
  },
  {
    id: "e3",
    title: "Gas Bill",
    amount: 50.0,
    date: new Date(2021, 6, 3),
  },
  {
    id: "e4",
    title: "Electricity",
    amount: 45.0,
    date: new Date(2021, 11, 4),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  function addExpenseHandler(expense) {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
