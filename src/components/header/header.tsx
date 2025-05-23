import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#cc0000",
        padding: "1rem",
        textAlign: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "'Press Start 2P', sans-serif",
      }}
    >
      <Link to="/">
        <img
          src="/pokedex.png"
          alt="Pokédex"
          style={{ maxWidth: "80px", height: "auto", cursor: "pointer" }}
        />
      </Link>
      <h1 style={{ marginTop: "0.5rem" }}>Pokédex UNIESP 2025.1</h1>
    </header>
  );
};

export default Header;
