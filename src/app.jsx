import Header from './components/header.jsx'
import PlanetsGrid from './components/planet-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    async function fetchPlanets() {
      const response = await fetch('https://swapi.tech/api/planets/')
      const data = await response.json()
      // Fetch details for each planet with ai help
      const detailedPlanets = await Promise.all(
        data.results.map(async (planet) => {
          const res = await fetch(planet.url)
          const detail = await res.json()
          return detail.result.properties
        }),
      )
      setPlanets(detailedPlanets)
    }
    fetchPlanets()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Header />
      <PlanetsGrid planets={planets} />
    </main>
  )
}
