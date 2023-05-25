import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';

const Searchbar = () => {
  return (
    <div className="searchBar">
      <div className="search">
        <MagnifyingGlassIcon className="searchicon" />
        <p>Search for a product</p>
      </div>
      <div className="category">
        <div className="line"></div>
        <p>category</p>
        <ChevronDownIcon className="categoryicon" />
      </div>
    </div>
  );
};

export default Searchbar;
