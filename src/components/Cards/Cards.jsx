import React from 'react';
import CountUp from 'react-countup'

//CARDS are three visuals to show the number of infected people, the number of recovered people, and the number of deaths. 
//I use material UI components to make this all easier. 

import { Card, CardContent, Typography, Grid } from '@material-ui/core';


import cx from 'classnames'; //external module 
import styles from './Cards.module.css';
//because we only passed one prop in App.js which is "data", we need to destructure data specifically
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) { //if the data doesn't exist
        return 'Dilan, it is loading...';
    }
    console.log("HEYOOO DILAN WE ARE CHECKIGN CONFIRMING");
    console.log(confirmed);

    return (
        <div className={styles.container}>

            <Grid container spacing={3} justify="center">
                {/* adding size to mobile devices - want to take full length of screen, on med and bigger devices, only 3/12 spaces */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    {/* this will give the card the paperlike look -- hovering */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator="," //used to specify how we want to separate the number 
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases of COVID-19</Typography>

                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    {/* this will give the card the paperlike look -- hovering */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator="," //used to specify how we want to separate the number 
                            /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recoveries from COVID-19</Typography>

                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    {/* this will give the card the paperlike look -- hovering */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator="," //used to specify how we want to separate the number 
                            /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>

                    </CardContent>

                </Grid>
            </Grid>

        </div>
    )
}

export default Cards;