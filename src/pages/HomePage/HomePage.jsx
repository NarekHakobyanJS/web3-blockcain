import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div>
        <NavLink to='/web3'>Web3 </NavLink>
      </div>
      <div>
<NavLink to='/tokenomics'>Տոկենոմիկա</NavLink>
      </div>
    </div>
  )
}

export default HomePage