// Render a single planet card.
export default function Card({ planet }) {
  const {
    name,
    climate,
    surface_water,
    diameter,
    rotation_period,
    terrain,
    gravity,
    orbital_period,
    population,
  } = planet // Get planet details.

  return (
    <section
      className="overflow-hidden rounded-lg shadow-md"
      style={{ backgroundColor: '#1e2124' }} // dark grey hex
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        <div className="mt-2 text-white">
          <div>Climate: {climate}</div>
          <div>Terrain: {terrain}</div>
          <div>Gravity: {gravity}</div>
          <div>Diameter: {diameter} km</div>
          <div>Rotation Period: {rotation_period} hours</div>
          <div>Orbital Period: {orbital_period} days</div>
          <div>Surface Water: {surface_water}%</div>
          <div>Population: {population}</div>
        </div>
      </div>
    </section>
  )
}
