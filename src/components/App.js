import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ParticlesBg from "particles-bg";
import FullWidthTabs from "./Tabs";
import Copyright from './Copyright';

import '../App.css';


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
        textAlign: 'center',

    },
    grid: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        zIndex: 0,
        position: 'relative',
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
});


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline/>


                <Container component="main" className={classes.main} maxWidth="xl">
                    <Typography variant="h2" component="h1" gutterBottom>
                        Questions pool
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {'For each questions four alternative options have been given'}
                    </Typography>
                    <Typography variant="body1">You can move back and forth using the buttons previous and
                        next.</Typography>


                    <Grid container spacing={3} className={classes.grid}>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <FullWidthTabs/>
                            </Paper>
                        </Grid>
                    </Grid>

                </Container>

                <footer className={classes.footer}>
                    <Container maxWidth="sm">
                        <Typography variant="body1">This a test Quiz app developed in React.</Typography>
                        <Copyright/>
                    </Container>
                </footer>

                <ParticlesBg type="random" bg={true}/>

            </div>
        );
    }
}

export default withStyles(styles)(App);


