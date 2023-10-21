import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import ErrorBoundary from './components/ErrorBoundary'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route
            path='/'
            element={
              <div className='welcome'>
                {' '}
                <h2>Welcome to the page</h2>
                <p>Check out the counter and Error page</p>
              </div>
            }
          />
          <Route path='/counter' element={<Counter />} />
          <Route path='/error' element={<ErrorPage/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
