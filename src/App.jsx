import React from 'react'
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    const fetchData = () => {
      // 非同期処理の記述
      console.log('sample');
      setLoading(false);
    }
  }, []);

  return (
    <>
    sample code
    </>
  )
}

export default App