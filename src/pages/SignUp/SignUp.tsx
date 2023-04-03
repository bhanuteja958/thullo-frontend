import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useInput } from '../../common/customhooks';
import classes from './SignUp.module.css';

interface SignUpProps {

}
const SignUp:FC<SignUpProps> = (props) => {
    const {inputValue:email, inputChangeHandler:emailChangeHandler} = useInput();
    const {inputValue:password, inputChangeHandler:passwordChangeHandler} = useInput();
    const {inputValue:firstName, inputChangeHandler:firstNameChangeHandler} = useInput();
    const {inputValue:lastName, inputChangeHandler:lastNameChangeHandler} = useInput();
    return (
        <div className={classes.signUpContainer}>
            <div className={classes.signUpCard}>
                <div className={classes.signUpHeader}>
                    <p className={classes.signUpHeading}>Sign Up</p>
                    <p className={classes.signUpSubHeading}>Thullo - A simple project management tool</p>
                </div>
                <div className={classes.signUpForm}>
                    <div className={classes.signUpInputContainer}>
                        <FontAwesomeIcon icon={faUser} className={classes.signUpInputIcon}/>
                        <input type="text" className={classes.signUpInput} placeholder="First Name" value={firstName} name="firstname" onChange={firstNameChangeHandler}/>
                    </div>
                    <div className={classes.signUpInputContainer}>
                        <FontAwesomeIcon icon={faUser} className={classes.signUpInputIcon}/>
                        <input type="text" className={classes.signUpInput} placeholder="Last Name" value={lastName} name="lastname" onChange={lastNameChangeHandler}/>
                    </div>
                    <div className={classes.signUpInputContainer}>
                        <FontAwesomeIcon icon={faEnvelope} className={classes.signUpInputIcon}/>
                        <input type="text" className={classes.signUpInput} placeholder="Email" value={email} name="email" onChange={emailChangeHandler}/>
                    </div>
                    <div className={classes.signUpInputContainer}>
                        <FontAwesomeIcon icon={faLock} className={classes.signUpInputIcon}/>
                        <input type="password" className={classes.signUpInput} placeholder="Password" value={password} name="password" onChange={passwordChangeHandler} />
                    </div>
                </div>
                <button className={classes.signUpBtn}>Sign Up</button>
                <div className={classes.signUpFooter}>
                    <p className={classes.loginNudge}>
                        <span>Already have an account?</span>
                        <a href="#">SignIn</a>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp;