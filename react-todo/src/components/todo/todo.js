import React, { useState, useRef } from 'react';
import styles from './todo.module.scss';

function ToDo(props) {

    const [items, setItems] = useState([]);
    const inputRef = useRef(null);

    const handleInput = () => {
        let inputValue = inputRef.current.value;
        if (inputValue !== ''){
            setItems(x => [...items, inputValue]);
        }
    }

    return (
        <>
            <div className={styles.toDoFormWrapper}>
                <input 
                    ref={inputRef}
                    placeholder={'set your ToDos here'}
                    type="text"/>
                <button onClick={() => handleInput()}>{props.buttonText}</button>
            </div>
            <ul>
                {items.map((data, i)=> {
                    return (<li key={i + data}>{data}</li>)
                })}
            </ul>
        </>
    )
}

export default ToDo;