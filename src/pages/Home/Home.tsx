import { FC } from 'react';
import BoardCard from '../../components/BoardCard/BoardCard';
import classes from './Home.module.css';

const Home:FC<{}> = () => {
    const board = {
        id: 'lsd-asjda-askjdjas',
        title: 'Dev Challenges Board',
        cover_photo_url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        visibility: 'private',
        users: [
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
        ]
    }

    return (
        <section className={classes.boardsContainer}>
            <div className={classes.boardsHeader}>
                <p className={classes.boardsHeading}>All Boards</p>
                <button className={classes.addBoardBtn}>+ Add</button>
            </div>
            <div className={classes.boards}>
                <BoardCard
                    id={board.id}
                    title={board.title}
                    coverPhotoUrl={board.cover_photo_url}
                    visibility={board.visibility}
                    boardUsers={board.users} 
                />
                <BoardCard
                    id={board.id}
                    title={board.title}
                    coverPhotoUrl={board.cover_photo_url}
                    visibility={board.visibility}
                    boardUsers={board.users} 
                />
                <BoardCard
                    id={board.id}
                    title={board.title}
                    coverPhotoUrl={board.cover_photo_url}
                    visibility={board.visibility}
                    boardUsers={board.users} 
                />  
            </div>
        </section>
    )
};

export default Home;