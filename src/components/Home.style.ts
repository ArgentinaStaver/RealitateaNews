import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    articles: {
        margin: '0 auto',
        width: '80%',
        display: 'flex', 
        justifyContent: 'space-between',
    },
    article: {
      width: '30%',
    },
    about: {
        width: '100%',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        color: '#FF0000',
    },
    articleImage: {
        width: '100%',
    },
    title: {   
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),      
    },
    link: {   
        color: "#000",  
    },
    snipetContent: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    pubDate: {
        color: '#FF0000',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

export default useStyles;