import React from 'react';
import {
    Typography,
    Link,
    Grid, 
} from '@material-ui/core';
import { LinkStateToProps, LinkDispatchToProps } from '../containers/NewsList';
import { newsController } from '../controllers/NewsController';
import { getFullDateFormat } from '../utils/dateFormater';
import useStyles from './Home.style';
import { INewsModel } from '../models/NewsModel';

type Props = LinkStateToProps & LinkDispatchToProps;

const Home: React.FC<Props> = ((props) => {
    const classes = useStyles();
    const controller = newsController;
    controller.setProps(props);

     if(!props.news.length) {
         controller.loadNews();
     }

    console.log(props);
    return(
        <div>
            <Grid container className={classes.articles} >
                <Grid item className={classes.about}>
                    <Typography component="h1" variant="h1" align="center">Stiri Realitatea.NET</Typography>
                </Grid>              
                    {
                        props.news.map((breakingNews:  INewsModel, index) =>(
                            <Grid item className={classes.article} key={index}>
                                <img className={classes.articleImage} src={breakingNews.enclosure.url}/>
                                <Typography className={classes.pubDate}>
                                    {getFullDateFormat(breakingNews.pubDate)}                                   
                                 
                                </Typography>
                                <Typography component="p" className={classes.title}>                        
                                    <Link href={breakingNews.link} className={classes.link} underline="none" target="_blank">
                                        {breakingNews.title}
                                    </Link>
                                </Typography>                               
                                <Typography paragraph className={classes.snipetContent}>{breakingNews.contentSnippet}</Typography>
                            </Grid>
                        ))
                    }              
            </Grid>            
        </div>
    )
});

export default Home;