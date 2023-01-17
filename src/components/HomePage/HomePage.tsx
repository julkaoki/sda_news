import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../helpers/api';
import { List, ListItem, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Article from '../Article/Article';
import { forEachChild } from 'typescript';
import RegisterForm from '../RegisterForm/RegisterForm';

const HomePage = () => {

    const [todayArticles, setTodayArticles] = useState([]);

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
  
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=world&language=en&sortBy=popularity&from${year}-${(month < 10) ? `0${month}` : month}-${day - 1}&apiKey=${API_KEY}`)
        .then((data) => {
            setTodayArticles(data.data.articles);
        });
    }, [todayArticles]);

    return (
        <>
        <Typography variant='h2' align='center' mt={2} sx={{fontSize: "2rem"}}>
            Today's hottest news
        </Typography>
        <List sx={{width: '100%', alignContent: 'center'}}>
            {todayArticles.map((article, key) => 
                {return <Article article={article} key={key}></Article>}
            )}
        </List>
        <Link to='/'>
            <Button variant='contained' sx={{display: 'block', mx: 'auto'}}>Pusty URL</Button>
        </Link>
        </>
    );
};

export default HomePage;