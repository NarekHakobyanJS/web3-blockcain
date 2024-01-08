import React from 'react'
import { NavLink } from 'react-router-dom'
import './Web3Page.css'

const Web3Page = () => {
  return (
    <div className='Web3Page'>
        <h1>Web3 և Ապակենտրոնացում</h1>

        <NavLink to='/web3/web3story'>Web3-ի հասկացողությունը </NavLink>
        <NavLink to='/web3/blockchain'>Բլոկչեյն</NavLink>
        <NavLink to='/web3/consensus'>Կոնսենսուսի մեխանիզմների տեսակները</NavLink>
        <NavLink>Բլոկչեյնի տարբերակները(Layer1 Layer2) </NavLink>
        <NavLink>Կենտրոնացված և Ապակենտրոնացված Բորսաներ (Տարբերություները)</NavLink>
        <NavLink>Դրամապանակների Տեսակները(Տարբերություները) </NavLink>
    </div>
  )
}

export default Web3Page