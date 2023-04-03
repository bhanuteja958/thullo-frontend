import { FC, useState } from 'react';
import EditProfile from '../../components/EditProfile/EditProfile';
import ViewProfile from '../../components/ViewProfile/ViewProfile';
import classes from './UserProfile.module.css';

interface UserProfileProps {

}

const UserProfile:FC<UserProfileProps> = () => {
    const [isEditMode, setIsEditMode] = useState<boolean>(true);

    return (
        <div className={classes.userProfileContainer}>
            {isEditMode ? <EditProfile goBack={() => {setIsEditMode(false)}}/> : (
                <>
                    <div className={classes.userProfileHeader}>
                        <p className={classes.userProfileHeading}>Personal Info</p>
                        <p className={classes.userProfileSubHeading}>Some basic info to be you</p>
                    </div>
                    <ViewProfile goToEdit={() => {setIsEditMode(true)}}/>
                </>
            )}
        </div>

    )
}

export default UserProfile;