import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, MouseEvent, useEffect, useState } from 'react';
import { useInput } from '../../common/customhooks';
import { LABEL_COLORS } from '../../config/constants';
import classes from './LabelInput.module.css';

interface LabelInputProps {

};

const LabelInput:FC<LabelInputProps> = (props) => {
    const [displayDropDown, setDisplayDropDown] = useState<boolean>(false);
    const {inputValue: labelName, inputChangeHandler: labelNameChangeHandler} = useInput();

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
        <div className={classes.labelInputContainer}>
            <p className={classes.labelInput} onClick={dropDownHandler}>
                <FontAwesomeIcon icon={faTag}/>
                <span>Labels</span>
            </p>
            {displayDropDown ? (
                <div className={classes.dropDown} onClick={(event:MouseEvent) =>{event.stopPropagation();} }>
                    <div className={classes.dropDownHeader}>
                        <p className={classes.dropDownTitle}>Label</p>
                        <p className={classes.dropDownSubTitle}>Select a name and a color</p>
                    </div>
                    <input className={classes.labelNameInput} placeholder="Label..." type="text" value={labelName} onChange={labelNameChangeHandler} />
                    <div className={classes.colors}>
                        {LABEL_COLORS.map((color:string) => (
                            <p className={classes.color} style={{
                                backgroundColor: `#${color}`
                            }}/>
                        ))}
                    </div>
                    <div className={classes.availableLabels}>
                        <p className={classes.availableHeading}>Available</p>
                        <div className={classes.labels}>
                            <p className={classes.label}>Technical</p>
                            <p className={classes.label}>Design</p>
                        </div>  
                    </div>
                    <div className={classes.dropDownFooter}>
                        <button className={classes.addLabelBtn}>Add</button>
                    </div>
                </div>
            ) : null}
        </div>
    )
};

export default LabelInput;