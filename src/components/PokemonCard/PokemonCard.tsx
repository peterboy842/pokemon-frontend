import React from "react";

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

interface PokemonCardProps {
  pokemon: {
    name: string;
    sprites: { front_default: string };
    types: { type: { name: string } }[];
    stats: { stat: { name: string }; base_stat: number }[];
  };
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div style={{ marginTop: 40, textAlign: "center" }}>
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
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
        {pokemon.types.map((t) => {
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
          {pokemon.stats.map((stat) => {
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
  );
}
