import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../helpers/api';
import { List, ListItem, Typography } from '@mui/material';


const HomePage = () => {

    const [todayArticles, setTodayArticles] = useState([]);

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=world&language=en&sortBy=popularity&from${year}-${(month < 10) ? `0${month}` : month}-${day - 1}&apiKey=${API_KEY}`)
        .then((data) => setTodayArticles(data.data.articles));
    }, []);

    return (
        <>
        <Typography variant='h2' align='center' mt={2} sx={{fontSize: "2rem"}}>
            Today's hottest news
        </Typography>
        <List sx={{width: '100%', alignContent: 'center'}}>
            <ListItem></ListItem>
        </List>
        </>
    );
};

export default HomePage;