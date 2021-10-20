import "../App.css";

const SearchBar = () => (
  <div class="search_bar">
    <form >
    <input
      class="search_input"
      type="search"
      placeholder="Search"
      aria-label="Search"
    ></input>
    <button class="search_submit" type="submit">
      Search
    </button>
  </form>
  </div>
  
);

export default SearchBar;
