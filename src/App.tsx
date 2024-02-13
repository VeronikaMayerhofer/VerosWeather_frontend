import ListGroup from "./components/ListGroup.tsx";
import "./App.css";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {CityKey, CONFIG, WeatherVariableKey} from "./config.ts";
import PlotData from "./components/PlotData.tsx";
import {entries} from "./utils.ts";


interface WeatherData {
    [date: string]: number
}

function App() {
    const [data, setData] = useState<WeatherData>({})
    const [weatherVariable, setWeatherVariable] = useState<WeatherVariableKey>('temperature')
    const [cityVariable, setCityVariable] = useState<CityKey>('wuerzburg')

    const cityItems = CONFIG.locations;
    const cityHeading = "Cities";
    const handleSelectCityItem = (item: CityKey) => {
        setCityVariable(item);
    };

    const weatherVariableItems = CONFIG.weatherVariables;
    const weatherVariableHeadings = "Weather Data"
    const handleSelectWeatherVariableItem = (item: WeatherVariableKey) => {
        setWeatherVariable(item);
    };
    const cities = entries(cityItems).map(([key, value]) => ({
        key: key,
        value: value.name
    }))

    const weatherVariables = entries(weatherVariableItems).map(([key, value]) => ({
        key: key,
        value: value.name
    }))
    const currentWeatherVariable = weatherVariableItems[weatherVariable];

    useEffect(() => {
        const [latitude, longitude] = cityItems[cityVariable].location
        fetch(`http://localhost:8000/weather/${currentWeatherVariable.url_name}?latitude=${latitude}&longitude=${longitude}`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [cityVariable, weatherVariable]);

    const x_data = Object.keys(data);
    const y_data = Object.values(data);


    return (
        <>
            <h1 className="middle-component">Vero's Weather App</h1>
            <div className="container">
                <div className="left-component">
                    <ListGroup
                        items={cities}
                        heading={cityHeading}
                        onSelectItem={handleSelectCityItem}
                    />
                </div>
                <div className="right-component">
                    <ListGroup items={weatherVariables}
                               heading={weatherVariableHeadings}
                               onSelectItem={handleSelectWeatherVariableItem}/>
                </div>
            </div>

            <div className="container">
                <PlotData
                    data_y={y_data}
                    data_x={x_data}
                    unit={weatherVariableItems[weatherVariable].unit}
                    weather_var={weatherVariable}
                >

                </PlotData>
            </div>

        </>
    );
}

export default App;
