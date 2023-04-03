import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FC} from 'react';
import classes from './ViewProfile.module.css';

interface ViewProfileProps {
    goToEdit: () => void;
}

const ViewProfile:FC<ViewProfileProps> = (props) => {
    const { goToEdit } = props;
    return (
        <table className={classes.viewProfileTable}>
            <tr>
                <th className={classes.profileTableHeader}>
                    <div className={classes.profileTableHeaderLeft}>
                        <p className={classes.profileTableHeading}>Profile</p>
                        <p className={classes.profileTableSubHeading}>Some info may be visible to other people</p>
                    </div>
                    <div className={classes.profileTableHeaderLeft}>
                        <button className={classes.profileEditBtn} onClick={goToEdit}>
                            <FontAwesomeIcon icon={faPencil}/>
                            <span>Edit</span>
                        </button>
                    </div>
                </th>
            </tr>
            <tr>
                <td className={classes.profileTableRow}>
                    <div className={classes.profileDetail}>
                        <p className={classes.profileDetailName}>Photo</p>
                        <img className={classes.profileDetailValuePic} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="user profile pic"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td className={classes.profileTableRow}>
                    <div className={classes.profileDetail}>
                        <p className={classes.profileDetailName}>Name</p>
                        <p className={classes.profileDetailValue}>Xanthe Neal</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td className={classes.profileTableRow}>
                    <div className={classes.profileDetail}>
                        <p className={classes.profileDetailName}>Bio</p>
                        <p className={classes.profileDetailValue}>I am a software developer and a big fan of devchanllenges</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td className={classes.profileTableRow}>
                    <div className={classes.profileDetail}>
                        <p className={classes.profileDetailName}>Phone</p>
                        <p className={classes.profileDetailValue}>8097649087</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td className={classes.profileTableRow}>
                    <div className={classes.profileDetail}>
                        <p className={classes.profileDetailName}>Email</p>
                        <p className={classes.profileDetailValue}>Xanthe.neal@gmail.com</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td className={classes.profileTableRow}>
                    <div className={classes.profileDetail}>
                        <p className={classes.profileDetailName}>Password</p>
                        <input className={classes.profileDetailValueInput} type="password" readOnly name="passoword" value="asdsasdlkas;ld"/>
                    </div>
                </td>
            </tr>
        </table>
    )
}

export default ViewProfile;