import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <br/>
      <HookCounter/>
      <br/>
      <ClassCounterTwo/>
      <br/>
      <HookCounterTwo/>
      <br/>
      <HookCounterThree/>
    </div>
  );
}

export default App;
