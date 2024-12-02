# Weather App

A responsive **Weather App** built with React and Vite. This app allows users to enter a city name and fetches real-time weather information, displaying the current temperature, humidity, wind status, and more.

## Features

- **Real-time Weather Data**: Fetches weather information for any city.
- **Dynamic UI**: Displays current weather conditions with real-time updates.
- **Responsive Design**: Adapts to different screen sizes using CSS Flexbox and Grid.
- **Weather Highlights**: Displays additional information like UV index, wind speed, humidity, etc.
- **Loader**: Displays a loading indicator while waiting for the weather data to load.

## Technologies Used 

- React for building the user interface.
- Vite for fast and optimized project setup.
- Axios for making API requests.
- WeatherAPI to fetch real-time weather data.
- CSS for styling and responsive layout.
Setup and Installation
- To get this app running locally, follow these steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/mohammedhassan0199/Weather-App
Navigate to the Project Directory:

bash
Copy code
cd <project-folder>

**Install Dependencies**:

bash
Copy code
npm install
Run the Development Server:

bash
Copy code
npm run dev


## Folder Structure

plaintext
Copy code
root/
├── src/
│   ├── App.jsx         # Main React component with weather fetching logic
│   ├── Loader.jsx      # Loader component to display while waiting for data
│   ├── index.css       # CSS for styling the application
│   └── main.js         # Entry point for React app
├── public/
│   └── index.html      # HTML template
└── package.json        # Project metadata and dependencies

## Functionality

- **Search City**: Users can enter a city name in the input field and submit it to get the current weather.
- **Weather Data Display**: Once the data is fetched, the app shows the current temperature, condition, wind speed, humidity, and other highlights.
- **Loader**: While waiting for the data, a loader component is displayed.
- **Error Handling**: If the data cannot be fetched, an error message is shown (if implemented).
- **Example**:
- **Input Field**: User enters a city name.
Weather Data Fetching: On submit, the app fetches data using the WeatherAPI.
- **Display Data**: Shows the weather details, including temperature, wind status, UV index, and more.
- **Loader**: Displays a loading spinner until the data is fetched.

## Responsive Design

- The layout is fully responsive, adjusting to various screen sizes.
- Grid layout is used for displaying weather highlights.
- **Mobile-friendly**: Content is stacked vertically on smaller screens.

## Contributing

- **Contributions are welcome! To contribute**:

## Fork the repository.

**Create a new branch**: git checkout -b feature-branch.
**Commit your changes**: git commit -m "Add a new feature".
**Push to the branch**: git push origin feature-branch.
Submit a pull request.

## License

This project is open-source 

## Notes:

**Vite Setup**: This project was created using Vite, ensuring fast development build times and optimized production builds.

This **README.md** file is concise and provides clear instructions on setup, usage, and understanding the app’s core functionality. Let me know if you need further details!