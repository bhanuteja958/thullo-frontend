import {FC} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';
import classes from './Header.module.css';

interface HeaderProps {

}

const Header:FC<HeaderProps> = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.headerLeft}>
                <h6 className={classes.logo}>Thullo</h6>
                <div className={classes.boardInfo}>
                    <h6 className={classes.boardName}>Devchallenges Board</h6>
                    <button className={classes.allBoardsBtn}>
                        <img className={classes.appsIcon} src="/src/assets/apps.svg" alt="An image of 9 dots in 3 rows arranged like a board with spacing"/>
                        <span className={classes.allBoardsBtnText}>All Boards</span>
                    </button> 
                </div>
            </div>
            <div className={classes.headerRight}>
                <SearchBar />
                <UserMenu />
            </div>
        </header>
    );
};

export default Header;