import React from 'react'
import Header from '../../utils/Header'
import SplitJuusSlide from '../../utils/SplitJuusSlide'
import SplitNovaSlide from '../../utils/SplitNovaSlide'
import FullJuusSlide from '../../utils/FullJuusSlide'
import FullNovaSlide from '../../utils/FullNovaSlide'

function Homee() {
  return (
    <div>
        <div>
            <Header />
        </div>
        <main className='flex w-full h-screen'>
            <div><FullJuusSlide /></div>
            <div className=''><FullNovaSlide /></div>
        </main>
    </div>
  )
}

export default Homee