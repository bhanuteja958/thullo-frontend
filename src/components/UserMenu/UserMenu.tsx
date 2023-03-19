import { FC, useState } from 'react';
import classes from './UserMenu.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'

interface UserMenuProps  {

}

const UserMenu:FC<UserMenuProps> = () => {
    const [displayDropDown, setDisplayDropDown] = useState<boolean>(false);

    const toggleDropDownDisplay = () => {
        setDisplayDropDown(!displayDropDown);
    }

    return (
        <div className={classes.userMenu}>
            <div className={classes.userPicContainer}>
                <img className={classes.userPic} alt="picture of the user" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
            </div>
            <div className={classes.dropdownContainer}>
                <p className={classes.userName} onClick={() => {toggleDropDownDisplay()}}>
                    <span>John Doe</span>
                    <FontAwesomeIcon icon={faCaretDown} className={classes.caretDown}/>
                </p>
                {displayDropDown ? (
                    <div className={classes.dropDown}>
                        <ul className={classes.positiveActionList}>
                            <li className={classes.action}>
                                <FontAwesomeIcon icon={faUserCircle}/>
                                <p className={classes.actionName}>My Profile</p>
                            </li>
                        </ul>
                        <hr />
                        <ul className={classes.negativeActionList}>
                            <li className={classes.action}>
                                <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                                <p className={classes.actionName}>Logout</p>
                            </li>
                        </ul>
                    </div>
                ) : null}
                
            </div>
        </div>
    );
}

export default UserMenu;