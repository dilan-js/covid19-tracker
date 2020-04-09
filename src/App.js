import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';


//to make my import statements more efficient, I export my components from index.js -- to make code more readable
import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';

import { fetchData } from './api';

import coronaImage from './images/image.png'



//we are dealing with asynchronous data, so it's easier I think to use class based component
class App extends React.Component {

    //don't declare constructor because its unnecessary ... will be created anyways
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
        console.log(fetchedData);
        console.log(country);

        //fetch the data
        // set the state

    }



    render() {

        const { data, country } = this.state;

        return (
            //since I'm using module for my CSS, instead of saying className = "container", I can just do: 
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="Title picture of COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />             </div>
        )
    }
}
export default App;