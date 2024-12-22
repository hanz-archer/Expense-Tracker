import './index.css'
import ExpenseTracker from './components/ExpenseTracker';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-xl p-4">
        <ExpenseTracker />
      </div>
    </div>
  );
};

export default App;