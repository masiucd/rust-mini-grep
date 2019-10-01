import React from 'react';
import TextField from './TextField';
import ReducerExp from './ReducerExp';
import './App.css';
import { Mycounter } from './MyCounter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Mycounter>
        {(count, setCount) => (
          <div>
            {count} <button onClick={() => setCount(count + 1)} />{' '}
          </div>
        )}
      </Mycounter>
    </div>
  );
};

export default App;
