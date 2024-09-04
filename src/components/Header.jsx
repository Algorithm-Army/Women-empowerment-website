function Header() {
  return (
    <>
      <div className="headerbox">
        <p className="heading">
          <h1 style={{ fontSize: "52px", fontWeight: "bold" }}>
            Empowering Women
          </h1>
          <h2>Empowering World</h2>
        </p>
        <img
          src="src/components/images/img1.jpg"
          alt="..."
          className="headerImg"
        />
      </div>
      <div id="features"></div>
    </>
  );
}
export default Header;
