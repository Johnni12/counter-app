import React, { useState } from 'react'
import '../App.css' 

function ErrorTest() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    throw new Error('An error occurred somewhere in the React tree!!')
  }
  return (
    <div className='error-test'>
      <h2>You can test our Error Boundary here</h2>
      <button className='error-button' onClick={() => setHasError(true)}>
        ErrorBoundary test
      </button>
      
    </div>
  )
}

export default ErrorTest
