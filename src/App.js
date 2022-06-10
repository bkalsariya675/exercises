import "./styles.css";

export default function App() {
  return (
    <div className="search-bar">
      <label for="search"></label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search for items..."
      ></input>
      <img
        src="https://img.icons8.com/material-outlined/20/search.pnghttps://img.icons8.com/material-outlined/20/search.png"
        alt=""
      />
    </div>
  );
}
