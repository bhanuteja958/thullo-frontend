import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FC} from 'react';
import classes from './MiniSearchBar.module.css';

interface MiniSearchBarProps {
    placeHolder:string
}

const MiniSearchBar:FC<MiniSearchBarProps> = (props) => {
    const {placeHolder} = props;
    return (
        <div className={classes.photoSearchInputContainer}>
            <input type="text" className={classes.photoSearchInput} placeholder={placeHolder} />
            <button className={classes.photoSearchBtn}>
                <FontAwesomeIcon icon={faSearch} />
            </button> 
        </div>
    )
}

export default MiniSearchBar;