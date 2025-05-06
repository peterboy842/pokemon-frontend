import { useState } from "react";
import { fetchPokemonByNumber } from "../../services/pokemonService";

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
          onClick={() => handleSearch}
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
        </div>
      )}
    </div>
  );
}
