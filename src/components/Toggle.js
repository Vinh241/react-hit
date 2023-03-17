import React from 'react'
import './Toggle.css'
const Toggle = () => {
  return (
    <div class='container3'>
    <label class="switch">
        <input id="icon_prefix" type="checkbox" class="validate" />
        <span class="slider round"></span>
    </label>
    </div>
  )
}
export default Toggle;