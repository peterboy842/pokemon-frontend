import axios from "axios";

export async function fetchPokemonByNumber(number: string) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
  return response.data;
}
