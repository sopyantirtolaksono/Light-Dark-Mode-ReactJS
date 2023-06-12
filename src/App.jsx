import { createContext, useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null)

function App() {
  // Version 1
  // const [theme, setTheme] = useState(window.localStorage.getItem('theme'))
  
  // Version 2
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light')

  useEffect(() => {
    // Version 1 (Without Dependencies)
    // if(theme) {
    //   setTheme(theme)
    // } else {
    //   setTheme('light')
    // }

    // Version 2 (With Dependencies)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    // Version 1
    // if(theme) {
    //   if(theme === 'light') {
    //     window.localStorage.setItem('theme', 'dark')
    //     setTheme(window.localStorage.getItem('theme'))
    //   } else {
    //     window.localStorage.setItem('theme', 'light')
    //     setTheme(window.localStorage.getItem('theme'))
    //   }
    // } else {
    //   window.localStorage.setItem('theme', 'dark')
    // }

    // Version 2
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <Form />
        <div className='switch'>
          <label>{ theme === 'light' ? 'Light Mode' : 'Dark Mode' }</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
