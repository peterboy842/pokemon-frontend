import { useState } from "react";
import { fetchPokemonByNumber } from "../../services/pokemonService";

export function Home() {
  const [pokedexNumber, setPokedexNumber] = useState("");
  const [pokemonData, setPokemonData] = useState<any>(null);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPokedexNumber(e.target.value);
  }

  async function handleSearch() {
    try {
      const data = await fetchPokemonByNumber(pokedexNumber);
      setPokemonData(data);
    } catch (error) {
      alert("Pokémon not found");
      setPokemonData(null);
    }
  }

  return (
    <div
      style={{
        background: "gray",
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Pokédex</h1>

      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Type Pokédex number"
          value={pokedexNumber}
          onChange={handleInputChange}
          style={{ padding: 8 }}
        />

        <button onClick={handleSearch} style={{ padding: 8 }}>
          Search
        </button>
      </div>

      {pokemonData && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      )}
    </div>
  );
}
