import { faImage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FC, MouseEvent, useEffect, useState} from 'react';
import classes from './CoverPhotoInput.module.css';

const unsplashPhotos: string[] = [
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1623627484632-f041d1fb366d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdmVyJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvdmVyJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1625579293382-1a733ee8db0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvdmVyJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
]

interface CoverPhotoInputProps {

}

const CoverPhotoInput:FC<CoverPhotoInputProps> = () => {
    const [selectedCoverPhoto, setSelectedCoverPhoto] = useState<string>('');
    const [displayDropDown, setDisplayDropDown] = useState<boolean>(false);

    const coverPhotoInputHandler = (photoUrl:string) => {
        setSelectedCoverPhoto(photoUrl);
        setDisplayDropDown(false);
    }

    const dropDownHandler = (event:MouseEvent) => {
        event.stopPropagation();
        setDisplayDropDown((prev) => (!prev));
    }

    useEffect(() => {
    const windowClickListener = () => {
        setDisplayDropDown(false);
    }

    window.addEventListener('click', windowClickListener);

    return () => {
        window.removeEventListener('click', windowClickListener)
    }
    })

    return (
        <div className={classes.coverPhotoInputContainer}>
            <p className={classes.coverPhotoInput} onClick={dropDownHandler}>
                <FontAwesomeIcon icon={faImage} className={classes.coverPhotoIcon}/>
                <span>Cover</span>
            </p>
            {displayDropDown ? (
                <div className={classes.coverPhotoDropDown} onClick={(event:MouseEvent) => {event.stopPropagation()}}>
                    <p className={classes.dropDownTitle}>Photo Search</p>
                    <p className={classes.dropDownSubTitle}>Search Unsplash for photos</p>
                    <div className={classes.photoSearchInputContainer}>
                        <input type="text" className={classes.photoSearchInput} placeholder="Keywords..." />
                        <button className={classes.photoSearchBtn}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button> 
                    </div>
                    <div className={classes.coverPhotosContainer}>
                        {unsplashPhotos.map((photoUrl:string) => (
                            <img className={classes.coverPhoto} src={photoUrl} alt="A Cover Photo" onClick={() => {coverPhotoInputHandler(photoUrl)}}/>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    )
};

export default CoverPhotoInput;