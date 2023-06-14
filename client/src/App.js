
import './App.css';
import CurrentAccountForm from './components/CurrentAccountForm/CurrentAccountForm';
import MuiFormikForm from './components/MuiFormikForm/MuiFormikForm';

function App() {
 
  return (
    <div className="app">
      <h1>sbi form</h1>
      {/* <CurrentAccountForm /> */}
      <MuiFormikForm />
    </div>
  );
}

export default App;
