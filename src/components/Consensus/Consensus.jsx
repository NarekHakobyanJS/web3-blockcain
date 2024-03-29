import React from 'react'
import './Consensus.css'
import Pos from './Pos/Pos'
import Pow from './Pow/Pow'

const Consensus = () => {
  return (
    <div>
      <div>
        <h2>Consensus(Համաձայնության) մեխանիզմը</h2>
        <b>
          Համաձայնության ալգորիթմը մեխանիզմ է, որով օգտվողները և ծրագրերը կարող են համակարգել իրենց գործողությունները Բլոկչեյն ցանցում: Այն ապահովում է, որ ցանցի բոլոր մասնակիցները համաձայնության գան տվյալների ներկա վիճակի վերաբերյալ, նույնիսկ եթե որոշ հանգույցներ ձախողվեն: Այս ալգորիթմը ապահովում է, որ ցանցի բոլոր հանգույցներն ունենան մատյանների նույն պատճենը, որը պարունակում է բոլոր գործարքների գրառումը: Կոնսենսուսի մեխանիզմները բլոկչեյնների անբաժանելի մասն են, քանի որ նրանք չունեն կենտրոնական իշխանություն, որը ստուգում է գործարքները և պահպանում ցանցի ամբողջականությունը:
        </b>
        <br />
        <b>
          Գոյություն ունեն Consensus ի բազմաթիվ մեխանիզմներ սակայն միայն երկուսն են ամենահայտնին և տարածվածը
          <h2 style={{ margin: '0', padding: '0' }}>Proof of Work (PoW) և Proof of Stake (PoS)</h2>
        </b>
      </div>
      <div>
        <Pow />
      </div>
      <div>
        <Pos />
      </div>
    </div>
  )
}

export default Consensus