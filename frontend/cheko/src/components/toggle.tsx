import { useEffect, useState } from "react"
import Sun from "../assets/sun"
import MoonSVG from "../assets/moon"

const Toggle = () =>{
    const [darkMode,SetDarkMode] = useState(false)
    useEffect(()=>{
      let mode = darkMode? 'dark':'light'
      if(mode === 'dark') {
      if(document.documentElement.classList.contains('light')) {
        document.documentElement.classList.remove('light')
      }
    }
      else {
        if(document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark')
        }
      }
      document.documentElement.classList.add(mode)
    },[darkMode])

return(
  <div className=" gap-2 inline-flex items-center rotate-90 mt-9">
    <Sun />
<div className="relative inline-block w-11 h-6 ">
  <input onChange={(e)=>{
    SetDarkMode(!darkMode)
  }} id="switch-component-custom" type="checkbox" className="peer appearance-none w-11 h-4 bg-slate-100 border border-slate-300 rounded-full checked:bg-slate-800 checked:border-slate-800 cursor-pointer transition-colors duration-300" />
  <label className="absolute top-0 left-0 w-5 h-5 bg-pink-200  rounded-full  border-slate-800 border-4 shadow transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
  </label>
</div>
<MoonSVG />
</div>
 );



}

export default Toggle