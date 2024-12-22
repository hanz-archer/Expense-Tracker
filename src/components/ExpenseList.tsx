import React from 'react'
import { Expense } from '../types'
import { formatDate } from "../utils/formatDate";

interface ExpenseListProps {
    expenses: Expense[];
}

export const ExpenseList:React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className='mt-6'>
        <h2 className='text-xl font-semibold mb-4'>Expenses List</h2>
        <ul>
            {expenses.map((expense, index) => (
            <li key={index} className='flex justify-between items-center p-2 border-b'>
                <div>
                    <p className='text-lg'>{expense.description}</p>
                    <p className='text-sm text-gray-500'>{expense.category}</p>
                </div>
                <div>
                    <p className='text-lg font-bold'>₱{expense.amount}</p>
                    <p className='text-sm text-gray-500'>{formatDate(expense.date)}</p>
                </div>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ExpenseList