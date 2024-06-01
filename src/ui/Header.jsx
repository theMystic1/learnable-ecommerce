function Header({ parag, h1, h2 }) {
  return (
    <header className="header">
      <h2>{h2}</h2>
      <h1>{h1}</h1>
      <p>{parag}</p>
    </header>
  );
}

export default Header;
