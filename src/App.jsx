import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      // 非同期処理の記述
      console.log('sample');
      setLoading(false);
    }
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <p className='loader'>ロード中。。。</p>
        ) : (
          <>
            <div className="">
              ここに表示したい内容
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default App