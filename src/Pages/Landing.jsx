import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main,
            height: '100vh',
            width: '100%',
        },
    }),
);

const Landing = () => {
    const classes = useStyles();
    return <div className={classes.root}>Landing</div>;
};

export default Landing;
