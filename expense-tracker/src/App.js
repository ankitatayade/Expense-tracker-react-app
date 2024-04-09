import React from 'react';
import { Header} from './components/Header'; 
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpenses';
import { TransactionList } from './components/TrasactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <div className = "container"> 
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
        </div>
    </div>
  );
}

export default App;