export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="body">
      <header className="header">
        <h4 className="title">Type here what you want to find</h4>
        <div className="wrapper">
          <div className="search-container">
            <input
              id="search-bar"
              className="search-bar"
              type="text"
              /* onChange={handleInput} */
              data-testid="search-input"
            />
            <button type="button" className="btn" /* onClick={searchHandler} */>
              Search
            </button>
          </div>
          {/* <ErrorBtn /> */}
        </div>
      </header>
      {children}
    </div>
  );
}
