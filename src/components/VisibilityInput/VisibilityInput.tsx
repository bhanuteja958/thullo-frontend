import { faEarth, faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FC, MouseEvent, MouseEventHandler, useEffect, useState} from 'react';
import { VisibilityOption } from '../../config/types';
import classes from './VisibilityInput.module.css';

interface VisibilityInputProps {

}

const VISIBILITY_OPTIONS: VisibilityOption[] = [
    {
        name: 'Public',
        icon: faEarth,
        description: 'Anyone on the internet can see this.'
    },
    {
        name: 'Private',
        icon: faLock,
        description: 'Only board members can see this'
    }
];

const VisibilityInput:FC<VisibilityInputProps> = (props) => {

    const [selectedOption, setSelectedOption] = useState<VisibilityOption>(VISIBILITY_OPTIONS[1]);
    const [displayDropDown, setDisplayDropDown] = useState<boolean>(false);

    const visibilityInputHandler = (option:VisibilityOption) => {
        setSelectedOption(option);
        setDisplayDropDown(false);
    }

    const dropDownHandler = (event:MouseEvent) => {
        event.stopPropagation();
        setDisplayDropDown((prev) => (!prev));
    }

    useEffect(() => {
        const windowClickListener = () => {
            setDisplayDropDown(false);
        }
        window.addEventListener('click', windowClickListener);
    
        return () => {
            window.removeEventListener('click', windowClickListener)
        }
    });
    
    return (
        <div className={classes.visibilityInputContainer}>
            <p className={classes.selectedVisibility} onClick={dropDownHandler}>
                <FontAwesomeIcon icon={selectedOption.icon} className={classes.selectedVisibilityIcon}/>
                <span className={classes.selectedVisibilityName}>{selectedOption.name}</span>
            </p>
            {displayDropDown ? (
                <div className={classes.optionDropdown} onClick={(event:MouseEvent) => {event.stopPropagation();}}>
                    <p className={classes.dropDownTitle}>Visibility</p>
                    <p className={classes.dropDownSubTitle}>Choose who can see this board</p>
                    <ul className={classes.options}>
                        {VISIBILITY_OPTIONS.map((option:VisibilityOption) => (
                            <li className={classes.option} onClick={() => {visibilityInputHandler(option)}}>
                                <p className={classes.optionName}>
                                    <FontAwesomeIcon icon={option.icon} className={classes.optionIcon}/>
                                    <span className={classes.optionText}>{option.name}</span>
                                </p>
                                <p className={classes.optionDescription}>
                                    {option.description}
                                </p>   
                            </li>       
                        ))}
                    </ul>
                </div>
            ) : null}
            
        </div>
    )
}

export default VisibilityInput;