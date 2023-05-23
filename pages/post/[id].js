import { useRouter } from "next/router";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Post = () => {
    const router = useRouter();
    const [content, setContent] = useState({
        title: 'test',
        body: 'test',
    });
    

    useEffect(async () => {
        const { id } = router.query;
        if (id) {
            const res = await axios.get(`/api/berita/${id}`)
            const { title, body } = res.data;
            setContent({
                title,
                body
            })
        }

    }, []);

    return (
        <div>
            <h1> {content.title} </h1>
            <p> {content.body} </p>
        </div>
    )
}

export default Post;