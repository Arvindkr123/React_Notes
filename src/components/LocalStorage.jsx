import React, { useEffect, useState } from 'react'

const LocalStorage = () => {
    const [title, setTitle] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let _myData = [];
        let data = sessionStorage.getItem('userData');
        if (data && data !== null) {
            let jsonData = JSON.parse(data);
            _myData = jsonData;
        }
        _myData.push(({ listTitle: title }));
        sessionStorage.setItem('userData', JSON.stringify(_myData));
        setTitle('');
    }

    useEffect(() => { }, [title])

    const fetchData = () => {
        let Data = sessionStorage.getItem('userData');
        let jsonData = []
        if (Data && Data !== null) {
            jsonData = JSON.parse(Data);
        }

        return jsonData && jsonData.length > 0 ? jsonData.map((item, index) => {
            return <li key={index}>{index + 1} {item.listTitle}</li>
        }) : <div>No Data found</div>
    }
    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const clearDataHandler = () => {
        sessionStorage.removeItem('userData'); 
    }
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                {`title value here ${title}`} <br /><br />
                <label htmlFor="title">
                    Title :
                    <input type="text" name="title" id="title" placeholder='enter title...' value={title} onChange={titleHandler} />
                </label><br />
                <input type="submit" value="Submit" />
            </form>
            <input type="button" value={'Clear Data'} onClick={clearDataHandler}/>
            {fetchData()}
        </>
    )
}

export default LocalStorage
