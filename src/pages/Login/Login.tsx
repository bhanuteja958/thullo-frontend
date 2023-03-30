import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useInput } from '../../common/customhooks';
import classes from './Login.module.css';
interface LoginProps {

}

const Login:FC<{}> = (props) => {
    const {inputValue:email, inputChangeHandler:emailChangeHandler} = useInput();
    const {inputValue:password, inputChangeHandler:passwordChangeHandler} = useInput();

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginCard}>
                <div className={classes.loginHeader}>
                    <p className={classes.loginHeading}>SignIn</p>
                    <p className={classes.loginSubHeading}>Thullo - A simple project management tool</p>
                </div>
                <div className={classes.loginForm}>
                    <div className={classes.loginInputContainer}>
                        <FontAwesomeIcon icon={faEnvelope} className={classes.loginInputIcon}/>
                        <input type="text" className={classes.loginInput} placeholder="Email" value={email} name="email" onChange={emailChangeHandler}/>
                    </div>
                    <div className={classes.loginInputContainer}>
                        <FontAwesomeIcon icon={faLock} className={classes.loginInputIcon}/>
                        <input type="password" className={classes.loginInput} placeholder="Password" value={password} name="password" onChange={passwordChangeHandler} />
                    </div>
                </div>
                <button className={classes.signInBtn}>Sign In</button>
                <div className={classes.loginFooter}>
                    <p className={classes.signUpNudge}>
                        <span>Don't have an account?</span>
                        <a href="#">Sign Up</a>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Login 