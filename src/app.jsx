import Header from './components/header.jsx'
import PlanetsGrid from './components/planet-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    async function fetchPlanets() {
      const response = await fetch('https://swapi.tech/api/planets/')
      const data = await response.json()
      setPlanets(data.results)
    }
    fetchPlanets()
  }, [])

  return (
    <main
      style={{ backgroundColor: '#136c68' }}
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <Header />
      <PlanetsGrid planets={planets} />
    </main>
  )
}
