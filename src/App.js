import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ParticlesBg from "particles-bg";
import FullWidthTabs from "./Tabs";


import './App.css';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing(1),
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
        this.state = {checked: false};
    }

    handleChange = () => {
        this.setState({checked: !this.state.checked});
    };

    render() {
        const {classes} = this.props;
        const {checked} = this.state;

        let config = {
            num: [4, 7],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [2, 3],
            tha: [-40, 40],
            alpha: [0.6, 0],
            scale: [.1, 0.4],
            position: "all",
            color: ["random", "#ff0000"],
            cross: "dead",
            // emitter: "follow",
            random: 15
        };

        if (Math.random() > 0.85) {
            config = Object.assign(config, {
                onParticleUpdate: (ctx, particle) => {
                    ctx.beginPath();
                    ctx.rect(
                        particle.p.x,
                        particle.p.y,
                        particle.radius * 2,
                        particle.radius * 2
                    );
                    ctx.fillStyle = particle.color;
                    ctx.fill();
                    ctx.closePath();
                }
            });
        }

        return (
            <div className={classes.root}>
                <CssBaseline/>

                <Container component="main" className={classes.main} maxWidth="xl">
                    <Typography variant="h2" component="h1" gutterBottom>
                        Questions pool
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {'Pin a footer to the bottom of the viewport.'}
                        {'The footer will move as the main element of the page grows.'}
                    </Typography>
                    <Typography variant="body1">Sticky footer placeholder.</Typography>

                    <FullWidthTabs />
                </Container>

                <footer className={classes.footer}>
                    <Container maxWidth="sm">
                        <Typography variant="body1">My sticky footer can be found here.</Typography>
                        <Copyright/>
                    </Container>
                </footer>

                <ParticlesBg type="random" bg={true}/>

            </div>
        );
    }
}

export default withStyles(styles)(App);


