
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import PricingOptions from './components/pricingOptions/PricingOptions'
import ResultsCharts from './components/ResultsCharts/ResultsCharts';
import axios from 'axios';



const pricingPromise = fetch('pricingData.json').then(res=>res.json());
const salesPromise =axios.get('salesData.json');

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
          <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
            <ResultsCharts salesPromise={salesPromise}></ResultsCharts>
          </Suspense>

        </main>
    </>
  )
}

export default App
