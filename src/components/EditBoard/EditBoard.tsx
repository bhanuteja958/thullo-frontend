import { faClose, faFile, faPencil, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import classes from  './EditBoard.module.css';

interface EditBoardProps {
    closeEditBoard: () => void
    displayEditBoard: boolean
}

const EditBoard:FC<EditBoardProps> = (props) => {
    const {closeEditBoard, displayEditBoard} = props
    const  [isEditing, setIsEditing] = useState<boolean>(false);

    const editClickHandler = () => {
        setIsEditing(true);
    }

    const cancelClickHandler = () => {
        setIsEditing(false);
    }

    const saveClickHandler = () => {
        setIsEditing(false);
    }

    return (
        <aside className={displayEditBoard ? `${classes.editBoardContainer} ${classes.editBoardOpen}` : `${classes.editBoardContainer} ${classes.editBoardClose}`} >
            <div className={classes.editBoardHeader}>
                <p className={classes.boardTitle}>Dev Challenges Board</p>
                <FontAwesomeIcon icon={faClose} className={classes.closeIcon} onClick={closeEditBoard}/>
            </div>
            <div className={classes.madeBy}>
                <p className={classes.madeByHeading}>
                    <FontAwesomeIcon icon={faUserCircle} />
                    <span>Made By</span>
                </p>
                <div className={classes.madeByUser}>
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="user image" className={classes.userImage}/>
                    <div className={classes.boardInfo}>
                        <p className={classes.madeByUserName}>Daniel Jensen</p>
                        <p className={classes.createdOn}>on 4 July, 2020</p>
                    </div>
                </div>
            </div>
            <div className={classes.descriptionContainer}>
                <div className={classes.descriptionHeader}>
                    <p className={classes.descriptionHeading}>
                        <FontAwesomeIcon icon={faFile} />
                        <span>Description</span>
                    </p>
                    {isEditing ? null : (
                        <button className={classes.boardEditBtn} onClick={editClickHandler}>
                            <FontAwesomeIcon icon={faPencil} />
                            <span>Edit</span>
                        </button>
                    )}
                </div>
                <div className={classes.description}>
                    {isEditing ? (
                        <>
                            <textarea className={classes.descriptionEdit}>
                                simple board to start on a project. Ideas are created here. Here people can describe the idea following three simple questions: Why you wish to do it, What it is, how can you do it.
                            </textarea>
                            <div className={classes.descriptionControls}>
                                <button className={classes.saveBtn} onClick={saveClickHandler}>Save</button> 
                                <button className={classes.cancelBtn} onClick={cancelClickHandler}>Cancel</button> 
                            </div>
                        </>    
                    ) : (
                        <p className={classes.descriptionView}>
                            simple board to start on a project. Ideas are created here. Here people can describe the idea following three simple questions: Why you wish to do it, What it is, how can you do it.
                        </p>
                    )  }
                </div>
            </div>
            <div className={classes.teamContainer}>
                <p className={classes.teamHeading}>
                    <FontAwesomeIcon icon={faUsers}/>
                    <span>Team</span>
                </p>
                <div className={classes.team}>
                    <div className={classes.teamMember}>
                        <div className={classes.memberInfo}>
                            <img className={classes.memberImage} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="user image"/>
                            <p className={classes.memberName}>Daniel Jensen</p>
                        </div>
                        {/* <p className={classes.memberType}>Admin</p> */}
                        <button className={classes.removeBtn}>Remove </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default EditBoard;