import React, {useState} from 'react'
import { FaPlus } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Expense Tracker</h1>
      <div className='flex space-x-4' mb-6>

        <Input type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        />
        <Input type='text'
        placeholder='Category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        />
        <Input type='text'
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={handleAddExpense}>
        <FaPlus />
        </Button>
      </div>

      <div className='mb-6'>
        <p>Total for today: ${getTotal("day")}</p>
        <p>Total for this month: ${getTotal("month")}</p>
        <p>Totoal for this year: ${getTotal("year")}</p>
      </div>

      <ExpenseList expenses={expenses} />
    </div>
    );
};

export default ExpenseTracker