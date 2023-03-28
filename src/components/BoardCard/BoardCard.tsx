import {FC, useEffect, useState} from 'react';
import { BoardUser } from '../../config/types';
import classes from './BoardCard.module.css';

interface BoardCardProps {
    id: string
    title: string
    coverPhotoUrl: string
    visibility: string
    boardUsers: BoardUser[]
}

const BoardCard:FC<BoardCardProps> = (props) => {
    const [boardUsersToDisplay, setBoardUsersToDisplay] = useState<BoardUser[]>([]);
    const [moreUserCount, setMoreUserCount] = useState<number>(0);
    const { id, title, coverPhotoUrl, visibility, boardUsers } = props;

    useEffect(() => {
        if(boardUsers.length > 3) {
            const displayUsers = boardUsers.slice(0,3);
            setBoardUsersToDisplay(displayUsers);
            setMoreUserCount(boardUsers.length - 3);
        } else {
            setBoardUsersToDisplay(boardUsers);
        }
    },[]);

    return (
        <div className={classes.board}>
            <div className={classes.boardInfo}>
                <img className={classes.boardCoverPhoto} src={coverPhotoUrl} alt="cover photo of a board"/>
                <h2 className={classes.boardTitle}>{title}</h2>
            </div>
            <div className={classes.boardUsers}>
                {boardUsersToDisplay.map((boardUser:BoardUser) => (
                    <img src={boardUser.profilePic} className={classes.userPic} alt="profile pic of a board user"/>
                ))}
                {moreUserCount ?  <p className={classes.moreUserCount}>+ {moreUserCount} others</p> : null }
            </div>
        </div>
    )
}

export default BoardCard;