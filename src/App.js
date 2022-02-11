import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Checker from './components/Checker'
import Generator from './components/Generator'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)
  const [darktheme, setDarkTheme] = useState(() => {
    try {
      const value = localStorage.getItem('darkmode')

      if (value) {
        return JSON.parse(value)
      } else {
        localStorage.setItem("darkmode", JSON.stringify(false))
        return false
      }
    } catch (err) {
      return false
    }
  })

  function darkmode() {
    setDarkTheme(!darktheme)
    localStorage.setItem("darkmode", !darktheme)
  }

  function show() {
    setOpen(false)
    setOpen(true)
    // get id checkvalue
    const a = document.getElementById('checkvalue')
    // get id string
    const b = document.getElementById('string')
    fetch(`https://mdhashback.herokuapp.com/check/${b.value.toString()}`).then(function(response) {
      return response.text()
    }).then(function(data) {
      a.innerHTML = data.toString()
    })
  }

  function show1() {
    setOpen(false)
    setOpen(true)
    const a = document.getElementById("hashvalue")
    const b = document.getElementById("string1")
    const c = document.getElementById("stringvalue")
    fetch(`https://mdhashback.herokuapp.com/gen/${b.value.toString()}`).then(function(response) {
      return response.text()
    }).then(function(data) {
      a.innerHTML = data.toString()
    })
    c.innerHTML = b.value.toString()
    return a.innerHTML
  }

  function copyToClipboard() {
    const text = show1()
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
  }

  function submit() {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")
    fetch(`https://mdhashback.herokuapp.com/sendEmail?name=${name.value.toString()}&email=${email.value.toString()}&message=${message.value.toString()}`).then(function(response) {
      return response.text()
    }).then(function(data) {
      if (data.toString().includes("went wrong")) {
        setError(true)
      } else {
        setOpen(true)
      }
    })
  }

  // Set Page Title
  useEffect(() => {
    const url = window.location.href
    if (url.includes("/checker")) {
      document.title = "MD5 - Checker"
    } else if (url.includes("/generator")) {
      document.title = "MD5 - Generator"
    } else if (url.includes("/contact")) {
      document.title = "MD5 - Contact"
    } else {
      document.title = "MD5 - Home"
    }
  }, [])


  return (
    <div className={`h-screen font-display ${darktheme ? 'bg-neutral-900':'bg-white'}`}>
      <Router>
        {/* Navbar */}
        <NavBar darktheme={darktheme} darkmode={darkmode}/>

        <Switch>
          <Route exact path="/">
            {/* Home */}
            <Home darktheme={darktheme}/>
          </Route>
          <Route exact path="/checker">
            {/* Checker */}
            <Checker darktheme={darktheme} show={show} open={open}/>
          </Route>
          <Route exact path="/generator">
            {/* Generator */}
            <Generator darktheme={darktheme} show={show1} open={open} copy={copyToClipboard}/>
          </Route>
          <Route exact path="/contact">
            {/* Contact */}
            <Contact darktheme={darktheme} open={open} submit={submit} error={error} sopen={setOpen} serror={setError}/>
          </Route>
        </Switch>

        {/* Footer */}
        <Footer darktheme={darktheme}/>
      </Router>
    </div>
  );
}

export default App;
