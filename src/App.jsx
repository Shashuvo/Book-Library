
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import PricingOptions from './components/pricingOptions/PricingOptions'
import ResultsCharts from './components/ResultsCharts/ResultsCharts';


const pricingPromise = fetch('pricingData.json').then(res=>res.json());

function App() {

  return (
    <>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
            <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
          </Suspense>
          <ResultsCharts></ResultsCharts>
        </main>
    </>
  )
}

export default App
