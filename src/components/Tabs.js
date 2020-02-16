import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import questions from '../mocks';
import RadioGroup from './RadioGroup';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            //backgroundColor: 'red',
        },
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [answers, setAnswers] = React.useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log('You changed index to ', newValue);
    };

    const handleChangeIndex = index => {
        if(index >=0 && index < 10)
            setValue(index);
        else
            calculateResults();
        console.log('You handleChangeIndex index to ', index);
    };

    const calculateResults = () => {
        console.log('Results: ', questions)
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    aria-label="full width tabs"
                >
                    {
                        questions.map(q => <Tab key={q.id} label={q.id + 1} {...a11yProps(q.id)}  />)
                    }
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {
                    questions.map(q => <TabPanel key={q.id} value={value} index={q.id}
                                                 dir={theme.direction}> <RadioGroup key={q.id} prev={()=>handleChangeIndex(q.id - 1)} next={() => handleChangeIndex(q.id+1)} q={q} /> </TabPanel>)
                }
            </SwipeableViews>
        </div>
    );
}
