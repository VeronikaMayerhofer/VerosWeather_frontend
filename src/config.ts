export const CONFIG = {
    "weatherVariables": {
        "temperature": {
            "url_name": "temperature_2m",
            "name": "Temperature",
            "hourly": true,
            "unit": "\u00b0C",
            "max_value": 40,
            "min_value": -20
        },
        "apparentTemperature": {
            "url_name": "apparent_temperature",
            "name": "Apparent Temperature",
            "hourly": true,
            "unit": "\u00b0C",
            "max_value": 40,
            "min_value": -20
        },
        "relativeHumidity": {
            "url_name": "relative_humidity_2m",
            "name": "Relative Humidity",
            "hourly": true,
            "unit": "%",
            "max_value": 101,
            "min_value": 50
        },
        "precipitationProbability": {
            "url_name": "precipitation_probability",
            "name": "Precipitation Probability",
            "hourly": true,
            "unit": "%",
            "max_value": 101,
            "min_value": 0
        },
        "rain": {
            "url_name": "rain",
            "name": "Rain",
            "hourly": true,
            "unit": "mm    ",
            "max_value": 6,
            "min_value": 0
        },
        "snow": {
            "url_name": "snowfall",
            "name": "Snow",
            "hourly": true,
            "unit": "cm",
            "max_value": 10,
            "min_value": 0
        }
    },
    "locations": {
        "wuerzburg": {
            "location": ["49.8", "10.0"],
            "name": "Würzburg"
        },
        "oslo": {
            "location": [59.9, 10.8],
            "name": "Oslo",
        },
        "heilsbronn": {
            "location": ["49.3", "10.8"],
            "name": "Heilsbronn"
        },
        "halsbach": {
            "location": ["50.0", "9.7"],
            "name": "Halsbach, Lohr am Main"
        },
        "hochiminh": {
            "location": ["10.8", "106.7"],
            "name": "Ho-Chi-Minh City"
        }
    },

    "unused": {
        "Minimum Temperature": {
            "url_name": "temperature_2m_min",
            "name": "Minimum Temperature",
            "hourly": false,
            "unit": "\u00b0C",
            "max_value": 40,
            "min_value": -20
        },
        "Maximum Temperature": {
            "url_name": "temperature_2m_max",
            "name": "Maximum Temperature",
            "hourly": false,
            "unit": "\u00b0C",
            "max_value": 40,
            "min_value": -20
        },
        "Sunrise": {
            "url_name": "sunrise",
            "name": "Sunrise",
            "hourly": false,
            "unit": "GMT+1",
            "max_value": "03:45",
            "min_value": "09:30"
        },
        "Sunset": {
            "url_name": "sunset",
            "name": "Sunset",
            "hourly": false,
            "unit": "GMT+1",
            "max_value": "15:05",
            "min_value": "22:50"
        },
        "Daylight Duration": {
            "url_name": "daylight_duration",
            "name": "Daylight Duration",
            "hourly": false,
            "unit": "h",
            "max_value": 24,
            "min_value": 0
        },
        "Sunshine Duration": {
            "url_name": "sunshine_duration",
            "name": "Sunshine Duration",
            "hourly": false,
            "unit": "h",
            "max_value": 24,
            "min_value": 0
        }
    }
}
