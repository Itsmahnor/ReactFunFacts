import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Facts from './facts'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
const[bg,changebg]=useState(false)

function Change(event){
changebg(event.target.checked)
}

  return (
    <>
    <div className="container">
      <div className="inner-con">
      <div className="navbar" style={{background:bg?"black":"white",color:bg?"white":"black"}} >
      <div className='logo'>
      
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
  
      <h1>React Facts</h1>    </div>

<div class="form-check form-switch">

  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
  name="BgTrue"
  checked={bg}
  onChange={Change}
   /> 

  <label style={{marginLeft:"0.5rem",marginRight:"1rem"}} class="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
</div>
      </div>

      <Facts
      isTrue={bg}
    

       />
      </div></div>
    </>
  )
}

export default App
