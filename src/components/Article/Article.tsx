import { Card, ListItem, ListItemText } from '@mui/material';
import { NONAME } from 'dns';
import React from 'react';

interface ArticleObj {
    url: string;
    urlToImage: string;
    title: string
};

interface ArticleProps {
    article: ArticleObj;
    key: number
};

const Article = ({article, key}: ArticleProps) => {
  return (
    <ListItem>
        <Card variant='outlined' sx={{mb: '10px'}}>
            <a href={article.url} target='__blank' style={{textDecoration: 'none'}}>
                <img 
                src={article.urlToImage}
                alt={article.title}
                style={{ width: '100%'}}
                />
                <ListItemText sx={{color: 'black', mx: '5%'}}>{article.title}</ListItemText>
            </a>
        </Card>
    </ListItem>
  );
};

export default Article;