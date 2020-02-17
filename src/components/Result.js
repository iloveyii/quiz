import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Quiz from "./App";
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';




const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
});

// Inspired by blueprintjs
function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
            icon={<span className={classes.icon}/>}
            {...props}
        />
    );
}

export default function Result(props) {

    const calculateResults = () => {
        console.log('Results: ', props.questions);
        let correct = 0; let wrong = 0;
        for(let i = 0; i < props.questions.length; i++) {
            const q = props.questions[i];
            if(q.answer == q.correct) {
                correct++;
            } else {
                wrong++;
                console.log(q.correct, q.answer)
            }
        }
        console.log('Correct, wrong', correct, wrong);
        return {correct, wrong};
    };

    const {correct, wrong} = calculateResults();
    return (
        <Paper style={{padding: '100px'}}>
            <Typography variant="h3" component="h3" gutterBottom color='primary'>
                Result
            </Typography>

            <Typography variant="h5" component="h3" gutterBottom color='secondary'>
                Correct: {correct}
            </Typography>

            <Typography variant="h5" component="h3" gutterBottom color='secondary'>
                Wrong: {wrong}
            </Typography>

            <Button onClick={() => window.location.reload(false)} style={{margin: '30px 10px 0 0', minWidth: '120px'}} variant="contained"
                    color="secondary">
                Retake Quiz
            </Button>

        </Paper>
    );
}
