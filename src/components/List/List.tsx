import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {DragEvent, FC, useRef, useState} from 'react';
import ListCard from '../ListCard/ListCard';
import classes from './List.module.css';

interface List {

}

const List:FC<List> = () => {
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    
    const dropCard = (event:DragEvent) => {
        const draggingNode = document.querySelector('.dragging') as Node;
        
        if(cardsContainerRef.current?.childElementCount! > 0) {
            cardsContainerRef.current?.insertBefore(draggingNode, cardsContainerRef.current.firstChild)
        } else {
            cardsContainerRef.current?.appendChild(draggingNode);
        }
        
    }

    const dragOver = (event:DragEvent) => {
        event.preventDefault();
    }

    return (
        <div
            className={classes.listContainer}
        >
            <div className={classes.listHeader}>
                <p className={classes.listName}>Backlog</p>
                <FontAwesomeIcon icon={faEllipsisH}  className={classes.cardMenuIcon}/>
            </div>
            <div
                className={classes.cardsContainer}
                ref={cardsContainerRef}
                onDrop={dropCard}
                onDragOver={dragOver}
            >
                <ListCard title='FrontEnd'/>
                <ListCard title='BackEnd'/>
            </div>
        </div>
    )
};

export default List;