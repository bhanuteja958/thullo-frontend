import {FC, useState} from 'react';
import classes from './Board.module.css';
import { BoardUser } from '../../config/types';
import VisibilityInput from '../../components/VisibilityInput/VisibilityInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import List from '../../components/List/List';
import AddUserInput from '../../components/AddUserInput/AddUserInput';
import EditBoard from '../../components/EditBoard/EditBoard';
import LabelInput from '../../components/LabelInput/LabelInput';

const users = [
    {
        name: 'Bhanu Teja',
        profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
    },
    {
        name: 'Bhanu Teja',
        profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
    },
    {
        name: 'Bhanu Teja',
        profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
    },
    {
        name: 'Bhanu Teja',
        profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
    },
    {
        name: 'Bhanu Teja',
        profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
    }
];

const Board:FC<{}> = () => {
    const [displayEditBaord, setDisplayEditBoard] = useState<boolean>(true);

    const closeEditBoard = () => {
        setDisplayEditBoard(false);
    }

    return (
        <section className={classes.boardContainer}>
            <div className={classes.boardHeader}>
                <div className={classes.boardHeaderLeft}>
                    <VisibilityInput />
                    <LabelInput />
                    <div className={classes.boardUsers}>
                        {users.map((user:BoardUser) => (
                            <img src={user.profilePic} alt="User profile picture" className={classes.userImage}/>
                        ))}
                        <AddUserInput />
                    </div>
                </div>
                <div className={classes.boardHeaderRight}>
                    <button className={classes.showMenuBtn} onClick={() => {setDisplayEditBoard(true)}}>
                        <FontAwesomeIcon icon={faEllipsisH}/>
                        <span>Show Menu</span>
                    </button>
                </div>
            </div>
            <div className={classes.listsContainer}>
                <List />
                <List />
                <List />
            </div>
            <EditBoard
                displayEditBoard={displayEditBaord}
                closeEditBoard={closeEditBoard}
            />
        </section>
    )
};

export default Board;