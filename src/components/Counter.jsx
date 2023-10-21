import { useState } from 'react'
import { useCount } from './useCount'
import '../App.css'

export default function Counter() {
  const { count, increment, decrement, reset, setValue } = useCount()
  const [newCount, setNewCount] = useState('')

  function handleOnChange(e) {
    setNewCount(e.target.value)
    e.target.value = newCount
  }

  function handleOnClick() {
    setValue(newCount)
    setNewCount('')
  }

  return (
    <div className='app'>
      <h1>{count}</h1>
      <div className='app-btn'>
        <button className='increment' onClick={increment}>
          Increment
        </button>
        <button className='reset' onClick={reset}>
          Reset
        </button>
        <button className='decrement' onClick={decrement}>
          Decrement
        </button>
      </div>

      <input value={newCount} type='number' onChange={handleOnChange} />
      <button onClick={handleOnClick}>Set count value</button>
    </div>
  )
}
