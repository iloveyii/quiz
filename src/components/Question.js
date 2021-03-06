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
import {MCQS_COUNT} from './settings'


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

export default function Question(props) {
    return (
        <FormControl component="fieldset" style={{width: '100%'}}>
            <FormLabel style={{marginBottom: '20px', textAlign: 'left'}}
                       component="legend"><strong>{props.index + 1} : </strong>{props.q.description}</FormLabel>
            <RadioGroup defaultValue={props.q.answer + ''} aria-label="gender"
                        name={props.q.id + '_name'}>
                {props.q.choices.map(((choice, index) => <FormControlLabel style={{textAlign: 'left'}} key={index} value={index + ''}
                                                                           control={<StyledRadio
                                                                               onChange={() => props.q.setAnswer(index)}/>}
                                                                           label={choice}/>))}
            </RadioGroup>

            <Toolbar style={{float: 'right', display: 'block'}}>
                <Button onClick={props.prev} style={{margin: '30px 10px 0 0', minWidth: '120px'}} variant="contained"
                        color="secondary">
                    Previous
                </Button>
                <Button onClick={props.next} style={{marginTop: '30px', minWidth: '120px'}} variant="contained"
                        color="primary">
                    {props.index < MCQS_COUNT - 1 ? 'Next' : 'Submit'}
                </Button>
            </Toolbar>

        </FormControl>
    );
}
