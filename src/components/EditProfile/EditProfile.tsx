import { faCamera, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import classes from './EditProfile.module.css';

interface EditProfile {
    goBack: () => void
}

const EditProfile:FC<EditProfile> = (props) => {
    const {goBack} = props;
    
    return (
        <div className={classes.editProfileContainer}>
            <div className={classes.editProfileHeader}>
                <p className={classes.backBtn} onClick={goBack}>
                    <FontAwesomeIcon icon={faLessThan}/>
                    <span>Back</span>
                </p>
            </div>
            <div className={classes.editProfile}>
                <div className={classes.editProfileHeadingContainer}>
                    <p className={classes.editProfileHeading}>ChangeInfo</p>
                    <p className={classes.editProfileSubHEading}>Changes will be reflected to every services</p>
                </div>
                <div className={classes.editProfilePicContainer}>
                    <input type="file" hidden />
                    <div className={classes.editProfilePicInput}>
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="userProfilePic" className={classes.editProfilePic}/>
                        <FontAwesomeIcon icon={faCamera} className={classes.cameraIcon}/>
                    </div>
                    <div className={classes.editPorfileInputName}>Change Photo</div>
                </div>
                <div className={classes.editProfileInputContainer}>
                    <label className={classes.editProfileInputName}>Name</label>
                    <input className={classes.editProfileInput} type="text" placeholder='Enter your name...'/>
                </div>
                <div className={classes.editProfileInputContainer}>
                    <label className={classes.editProfileInputName}>Bio</label>
                    <textarea className={classes.editProfileInput}  placeholder='Enter your bio...'></textarea>
                </div>
                <div className={classes.editProfileInputContainer}>
                    <label className={classes.editProfileInputName}>Phone</label>
                    <input className={classes.editProfileInput} type="number" placeholder='Enter your phone...'/>
                </div>
                <div className={classes.editProfileInputContainer}>
                    <label className={classes.editProfileInputName}>Email</label>
                    <input className={classes.editProfileInput} type="email" placeholder='Enter your email...'/>
                </div>
                <div className={classes.editProfileInputContainer}>
                    <label className={classes.editProfileInputName}>Password</label>
                    <input className={classes.editProfileInput} type="text" placeholder='Enter your new password...'/>
                </div>
                <button className={classes.saveBtn}>Save</button>
            </div>
        </div>
    )
}

export default EditProfile;