import React, {useState} from 'react'
import { Button, Input, Select, SelectItem } from "@shadcn/ui"
import { FaPlus } from 'react-icons/fa'
import { ExpenseList } from './ExpenseList'
import { Expense } from '../types'
import { formatDate } from '../utils'

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [ amount, setAmount ] = useState<number>(0);
    const [ category, setCategory ] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleAddExpense = () => {
        
    }

  return (
    <div>ExpenseTracker</div>
  )
}

export default ExpenseTracker