import { faComment, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DragEvent, FC, useRef, useState } from 'react';
import { BoardUser } from '../../config/types';
import AddUserInput from '../AddUserInput/AddUserInput';
import classes from './ListCard.module.css';


const users = [
    {
        name: 'Bhanu Teja',
        profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
    },
    {
        name: 'Bhanu Teja',
        profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
    },
];

interface ListCardProps {
    title: string
}

const ListCard:FC<ListCardProps> = (props) => {
    const {title} = props
    const cardRef = useRef<HTMLDivElement>(null);

    const dragStartHandler = (event:DragEvent) => {
        event.currentTarget.classList.add('dragging');
    }

    const dragEndHandler = (event:DragEvent) => {
        event.currentTarget.classList.remove('dragging');
    }


    return (
        <div className={classes.listCardContainer}>
            <div
                className={classes.listCard}
                draggable="true"
                onDragStart={dragStartHandler}
                onDragEnd={dragEndHandler}
                ref={cardRef}
            >
                <div className={classes.listCardMainInfo}>
                    <img className={classes.listCardCoverPhoto} src="https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXJQaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="cover photo" />
                    <p className={classes.listCardTitle}>{title}</p>
                </div>
                <div className={classes.listCardLabels}>
                    
                </div>
                <div className={classes.listCardSubInfo}>
                    <div className={classes.listCardUsers}>
                        {users.map((user:BoardUser) => (
                            <img className={classes.userImage} src={user.profilePic} alt="user image"/>
                        ))}
                        <AddUserInput />
                    </div>
                    <div className={classes.listCardCountInfo}>
                        <div className={classes.countInfo}>
                            <FontAwesomeIcon icon={faComment} className={classes.countName} />
                            <p className={classes.count}>2</p>
                        </div>
                        <div className={classes.countInfo}>
                            <FontAwesomeIcon icon={faPaperclip} className={classes.countName} />
                            <p className={classes.Count}>1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
};

export default ListCard;