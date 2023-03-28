import {FC} from 'react';
import classes from './SearchBar.module.css';

interface SearchBarProps {
    
}

const SearchBar:FC<SearchBarProps> = (props) => {
    return (
        <div className={classes.searchBarContainer}>
            <input className={classes.searchInput} placeholder="Keyword..." />
            <button className={classes.searchBtn}>Search</button>
        </div>
    )
}

export default SearchBar;