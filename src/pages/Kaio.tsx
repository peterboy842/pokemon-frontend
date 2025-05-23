const typeColors: { [key: string]: string } = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const pokemonFavorito = {
  name: "gengar",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  },
  types: [{ type: { name: "ghost" } }, { type: { name: "poison" } }],
  stats: [
    { stat: { name: "hp" }, base_stat: 60 },
    { stat: { name: "attack" }, base_stat: 65 },
    { stat: { name: "defense" }, base_stat: 60 },
    { stat: { name: "special-attack" }, base_stat: 130 },
    { stat: { name: "special-defense" }, base_stat: 75 },
    { stat: { name: "speed" }, base_stat: 110 },
  ],
};

export default function Pagina1() {
  return (
    <div
      style={{
        padding: 40,
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#dbeac2",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Kaio´s favorite Pokémon</h1>
      <div
        style={{
          marginTop: 40,
          textAlign: "center",
        }}
      >
        <h2>
          {pokemonFavorito.name.charAt(0).toUpperCase() +
            pokemonFavorito.name.slice(1)}
        </h2>
        <img
          src={pokemonFavorito.sprites.front_default}
          alt={pokemonFavorito.name}
          style={{ width: "200px", height: "auto" }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          {pokemonFavorito.types.map((t) => {
            const typeName = t.type.name;
            const color = typeColors[typeName] || "#777";
            return (
              <span
                key={typeName}
                style={{
                  backgroundColor: color,
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                }}
              >
                {typeName}
              </span>
            );
          })}
        </div>

        <div style={{ marginTop: 40, textAlign: "left" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: 24 }}>Status</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {pokemonFavorito.stats.map((stat) => {
              const name = stat.stat.name.toUpperCase();
              const value = stat.base_stat;
              const percentage = (value / 255) * 100;

              return (
                <div
                  key={name}
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    <span>{name}</span>
                    <span>{value}</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#e0e0e0",
                      borderRadius: 6,
                      overflow: "hidden",
                      height: 12,
                    }}
                  >
                    <div
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: "#4caf50",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
