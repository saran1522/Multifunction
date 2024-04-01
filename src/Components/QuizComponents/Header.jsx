export default function Header({ dispatch, isDark }) {
  return (
    <header>
      <button
        className={`mode-btn ${isDark ? "dark-btn" : ""}`}
        onClick={() => {
          dispatch({ type: "toggle" });
        }}
      >
        {isDark ? "light" : "dark"}
      </button>
      <img
        // src="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png"
        src="/react logo.png"
        alt=""
        className="logo"
      />
      <div className="header-text">
        <h1 className="header-title">The Tech Quiz</h1>
      </div>
    </header>
  );
}
