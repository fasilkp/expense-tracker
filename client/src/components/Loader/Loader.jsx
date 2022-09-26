import React from 'react'
import {HashLoader} from 'react-spinners'
import './Loader.css'
function Loader() {
  return (
    <div className="Loader">
        <HashLoader color="#294861" />
    </div>
  )
}

export default Loader