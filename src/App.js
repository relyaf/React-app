import React, {useState} from 'react';
import Counter from './components/Counter.jsx';
import Input from './components/Input.jsx';

function App() {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <div>
          React - это круто
          </div>
          <div className="post__btns">
            <button>Удалить контекст</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;