import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Homepage(props) {
    const [posts, setPosts] = useState([]);
    const [specificPost, setSpecificPost] = useState({});

    //MOUNTING FASE
    useEffect(()=> {
        async function fetchPosts() {
            try {
                const { data: { data: { children } }} = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(children);
    // sla de array van posts op
                setPosts(children);
    // sla echt alleen de allereerste post op
                setSpecificPost(children[0]);
            } catch(e) {
                console.error(e);
            }
        }

        fetchPosts();
        }, []);


    return (
        <div>Dit is de homepagina</div>
    {specificPost.author && specificPost.author}
    );
}

export default Homepage;