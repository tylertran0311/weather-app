import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Search from "./Search";
import SearchHistory from "./SearchHistory";
import background from "./assets/background.png";
import { getTime } from "./utils/getTime";

const Weather = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [time, setTime] = useState();
  const [weatherIcon, setWeatherIcon] = useState();

  const handleInputChange = (location) => {
    setLocation(location);
  };

  const clearSearchText = () => {
    setLocation("");
    searchLocation("");
  };

  const searchLocation = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2b7cca634b280b856a70f87fa568ed11`
      );
      const iconName = await response.data.weather[0].icon;
      setData(response.data);
      setTime(getTime(response.data.timezone));
      setSearchHistory([
        ...searchHistory,
        {
          name: `${response.data.name}, ${response.data.sys.country} `,
          time: new Date().toLocaleTimeString("en-US"),
          id: uuidv4(),
        },
      ]);
      setWeatherIcon(
        "http://openweathermap.org/img/wn/" + iconName + "@2x.png"
      );
    } catch (e) {
      const message = await e.message;
      setData(null);
      console.log(message);
    }
  };

  const deleteHistory = (id) => {
    const newSearchHistory = [...searchHistory].filter(
      (search) => search.id !== id
    );
    setSearchHistory(newSearchHistory);
    sessionStorage.setItem("searchHistory", [...newSearchHistory]);
  };

  return (
    <PageContainer>
      <Search
        data={data}
        location={location}
        time={time}
        handleInputChange={handleInputChange}
        clearSearchText={clearSearchText}
        searchLocation={searchLocation}
        weatherIcon={weatherIcon}
      />
      <SearchHistory
        searchHistory={searchHistory}
        searchLocation={searchLocation}
        deleteHistory={deleteHistory}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 0 20px;
  color: white;
  min-height: 100vh;
  background: url(${background}) center;
  background-size: cover;
`;

export const Header = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #f8f8f8;
`;

export const NoRecordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  min-height: 100%;
`;

export default Weather;
