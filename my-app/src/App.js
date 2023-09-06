import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreeting />
      <FunctionalGreeting />
      <FunctionalGreeting />
      <FunctionalGreeting />
      <FunctionalGreeting />
      <FunctionalGreeting />
      <FunctionalGreetingWithProps />
    </div>
  );
}

export default App;
