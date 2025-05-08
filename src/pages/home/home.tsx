import { useState } from "react";
import { fetchPokemonByNumber } from "../../services/pokemonService";

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

export function Home() {
  const [pokedexNumber, setPokedexNumber] = useState("");
  const [pokemonData, setPokemonData] = useState<any>(null);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPokedexNumber(e.target.value);
  }

  async function handleSearch(number?: string) {
    try {
      const num = number ?? pokedexNumber;
      const data = await fetchPokemonByNumber(num);
      setPokemonData(data);
    } catch (error) {
      alert("Pokémon not found");
      setPokemonData(null);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingTop: 80,
        backgroundColor: "#dbeac2",
        fontFamily: "'Arial', sans-serif"
      }}
    >
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Type Pokédex number"
          value={pokedexNumber}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          style={{ padding: 8 }}
        />

        <button onClick={() => handleSearch()} style={{ padding: 8 }}>
          Search
        </button>
        <button
          onClick={() => {
            const randomNumber = Math.floor(Math.random() * 1025) + 1;
            setPokedexNumber(randomNumber.toString());
            handleSearch(randomNumber.toString());
          }}
          style={{ padding: 8 }}
        >
          Random
        </button>
      </div>

      {pokemonData && (
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <h2>
            {pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.slice(1)}
          </h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
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
            {pokemonData.types.map((t: any) => {
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
              {pokemonData.stats.map((stat: any) => {
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
      )}
    </div>
  );
}
