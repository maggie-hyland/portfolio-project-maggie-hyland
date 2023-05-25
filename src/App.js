import PageContainer from './PageContainer';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import  './scss/Style.scss'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} onColor='#7b417b' offColor='#855bc0' />
        </div>
        <PageContainer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
