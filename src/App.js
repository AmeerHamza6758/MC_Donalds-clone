import Header from "./components/header/Header";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import './App.css'
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Github from "./components/github/Github";
// import { Theme } from "./components/Theme";

 //use context
export const ThemeContext = createContext({

  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {}
})
function App() {
 

  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="github" element={<Github />} />
        </Routes>
        
      </ThemeContext.Provider>
      <Footer/>
      
    </>
  );
}

export default App;

