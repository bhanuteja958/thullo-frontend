import { faFileImage, faImage, faImagePortrait, faImages, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useRef, useState } from 'react';
import CoverPhotoInput from '../CoverPhotoInput/CoverPhotoInput';
import VisibilityInput from '../VisibilityInput/VisibilityInput';
import classes from './AddBoard.module.css';

const AddBoard:FC<{}> = () => {
    const [visibility, setVisibility] = useState<"public" | "private">("public");

    return (
        <div className={classes.addBoardContainer}>
            <div className={classes.addBoardModal}>
                <div className={classes.coverPhotoContainer}>
                    {/* <img className={classes.coverPhoto} src="" alt="Selected cover photo of a board "/> */}
                    <div className={classes.coverPhotoPlaceHolder}>
                        <FontAwesomeIcon icon={faImage} className={classes.placeHolderIcon}/>
                        <p className={classes.placeHolderText}>No cover photo added</p>
                    </div> 
                </div>
                <input type="text" className={classes.boardTitleInput} placeholder="Add board title"/>
                <div className={classes.actionInputContainer}>
                    <CoverPhotoInput />
                    <VisibilityInput />
                </div>  
                <div className={classes.addModalFooter}>
                    <button className={classes.cancelBtn}>Cancel</button>
                    <button className={classes.createBtn}>+ Create</button>
                </div>
            </div>
        </div>
    )
};

export default AddBoard;