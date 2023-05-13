import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button';

function App() {
    const [listTitle, setListTitle] = useState('My List');
    const [isDescending, setIsDescending] = useState(false);

    const changeTitleHandler = useCallback(() => {
        setListTitle('Sorting number as change sorted button');
    }, []);

    const toggleOrderHandler = useCallback(() => {
        setIsDescending((prevState) => !prevState);
    }, []);
    const items = useMemo(() => [5, 3, 1, 10, 9], []);
    const sortedItems = useMemo(() => {
        const sorted = [...items];
        if (isDescending) {
            sorted.sort((a, b) => b - a);
        } else {
            sorted.sort((a, b) => a - b);
        }
        return sorted;
    }, [isDescending]);


    return (
        <div className="app">
            <DemoList title={listTitle} items={sortedItems} />
            <Button onClick={changeTitleHandler}>Change List Title</Button><br /><br />
            <Button onClick={toggleOrderHandler}>
                {isDescending ? 'Sort Ascending' : 'Sort Descending'}
            </Button>
        </div>
    );
}

export default App;
