import "../App.css";

const SearchBar = () => (
  <form action="/" method="get">
    {/* <label htmlFor="header-search">
      <span className="visually-hidden">Search blog posts</span>
    </label> */}
    <input
      type="text"
      id="header-search"
      placeholder="Find your superhero"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
