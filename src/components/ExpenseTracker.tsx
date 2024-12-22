import React, {useState} from 'react'
import { Button, Input, Select, SelectItem } from "@shadcn/ui"
import { FaPlus } from 'react-icons/fa'
import { ExpenseList } from './ExpenseList'
import { Expense } from '../types'
import { formatDate } from "../utils/formatDate";

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [ amount, setAmount ] = useState<number>(0);
    const [ category, setCategory ] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleAddExpense = () => {
        const newExpense = {
            amount, 
            category,
            description,
            date: new Date(),
        };
        setExpenses([...expenses, newExpense]);
        setAmount(0);
        setCategory('');
        setDescription('');
    };
    const getTotal = (filter: "day" | "month" | "year") => {
        const now = new Date();
        return expenses
          .filter((expense) => {
            const expenseDate = new Date(expense.date);
            if (filter === "day") {
              return expenseDate.toDateString() === now.toDateString();
            }
            if (filter === "month") {
              return (
                expenseDate.getMonth() === now.getMonth() &&
                expenseDate.getFullYear() === now.getFullYear()
              );
            }
            if (filter === "year") {
              return expenseDate.getFullYear() === now.getFullYear();
            }
            return false;
          })
          .reduce((total, expense) => total + expense.amount, 0);
      };


  return (
    <div>ExpenseTracker</div>
  )
}

export default ExpenseTracker