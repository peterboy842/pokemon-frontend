import { useState } from "react";
import { fetchPokemonByNumber } from "../../services/pokemonService";

//Cores dos tipos de pokemon
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
        paddingTop: 80
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
          onKeyDown={(e) =>{
            if (e.key === "Enter") handleSearch();
          }}
          style={{ padding: 8 }}
        />

        <button
          onClick={() => handleSearch()}
          style={{ padding: 8 }}>
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
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            style={{width: "200px", height: "auto"}}
          />
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 10 }}>
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
        </div>
      )}
    </div>
  );
}
