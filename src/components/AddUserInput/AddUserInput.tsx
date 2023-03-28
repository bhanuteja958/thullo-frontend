import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FC, MouseEvent, useEffect, useState} from 'react';
import MiniSearchBar from '../MiniSearchBar/MiniSearchBar';
import classes from './AddUserInput.module.css';

interface AddUserInputProps {

}

const AddUserInput:FC<AddUserInputProps> = (props) => {
    const [displayDropDown, setDisplayDropDown] = useState<boolean>(false);

    const dropDownHandler = (event:MouseEvent) => {
        event.stopPropagation();
        setDisplayDropDown((prev) => !prev);
    }

    useEffect(() => {
        const windowClickListener = () => {
            setDisplayDropDown(false);
        }

        window.addEventListener('click', windowClickListener);

        return () => {
            window.removeEventListener('click', windowClickListener)
        }
    })
    return (
        <div className={classes.userInputContainer}>
            <button className={classes.addUserBtn} onClick={dropDownHandler}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
            {displayDropDown ? (
                <div className={classes.dropDown} onClick={(event:MouseEvent) => {event.stopPropagation();}}>
                    <div className={classes.dropDownHeader}>
                        <p className={classes.dropDownTitle}>Invite to Board</p>
                        <p className={classes.dropDownSubTitle}>Search users you want to invite to</p>
                    </div>
                    <MiniSearchBar placeHolder='User...'/>
                    <div className={classes.users}>
                        <div className={classes.user}>
                            <p className={classes.userNameShort}>MC</p>
                            <p className={classes.userName}>Morris Croft</p>
                        </div>
                        <div className={classes.user}>
                            <p className={classes.userNameShort}>MC</p>
                            <p className={classes.userName}>Morris Croft</p>
                        </div>
                    </div>
                    <div className={classes.dropDownFooter}>
                        <button className={classes.inviteBtn}>Invite</button>
                    </div>
                </div>
            ) :  null}
        </div>
    )
};

export default AddUserInput;