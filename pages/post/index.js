import axios from 'axios';
import { useEffect, useState } from 'react';

const Posts = (props) => {
    const [ entriesData, setEntries] = useState([]);
    useEffect(async () => {
        const res = await axios.get('/api/beritas');
        setEntries(res.data.entriesData)
    }, []);

    return (
        <div>
            <h1> Posts </h1>
            {entriesData.map(entry => (
                <div key={entry.id}> 
                    <a href={`/posts/${entry.id}`}>
                        {entry.title}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Posts;