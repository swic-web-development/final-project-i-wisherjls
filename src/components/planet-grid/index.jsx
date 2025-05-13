import Card from './card'

export default function PlanetsGrid({ planets }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {planets.map((planet) => (
        <Card planet={planet} key={planet.uid || planet.url} />
      ))}
    </div>
  )
}
