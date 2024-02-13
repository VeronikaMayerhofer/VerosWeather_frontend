import ListGroup from "./components/ListGroup.tsx";
import "./App.css";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {CONFIG} from "./config.ts";
import PlotData from "./components/PlotData.tsx";


interface WeatherData {
    [date: string]: number
}

function App() {


    const [data, setData] = useState<WeatherData[]>({'2024-02-13T00:00:00': 0})
    const [weatherVariable, setWeatherVariable] = useState<string>('rain')
    const [cityVariable, setCityVariable] = useState<string>('oslo')

    const cityItems = CONFIG.locations;
    const cityHeading = "Cities";
    const handleSelectCityItem = (item: string) => {
        setCityVariable(item);
    };

    const weatherVariableItems = CONFIG.weatherVariables;
    const weatherVariableHeadings = "Weather Data"
    const handleSelectWeatherVariableItem = (item: string) => {
        setWeatherVariable(item);
    };
    //const start_date = '2024-02-12'
    //const end_date = '2024-02-14'



    console.log('city var: ' + cityVariable)
    console.log('weather var:' + weatherVariable)
    const cities = Object.entries(cityItems).map(([key, value]) => ({
        key: key,
        value: value.name
    }))
    const weatherVariables = Object.entries(weatherVariableItems).map(([key, value]) => ({
        key: key,
        value: value.name
    }))

    useEffect(() => {
        const [latitude, longitude] = cityItems[cityVariable].location
        console.log(latitude, longitude)
        console.log(`http://localhost:8000/weather/${weatherVariable}?latitude=${latitude}&longitude=${longitude}`)
        fetch(`http://localhost:8000/weather/${weatherVariable}?latitude=${latitude}&longitude=${longitude}`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);


    const y_data = new Array<number>
    const x_data = new Array<string>
    Object.entries(data).map(([date, value]) => {
        x_data.push(date), y_data.push(value)
    })
    console.log(y_data)
    console.log(x_data)

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
