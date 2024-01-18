import { Header, NoRecordContainer } from "../Weather";
import ClearIcon from "../icons/ClearIcon";
import {
  CityName,
  ClearButton,
  DescDetail,
  DescTimeDetail,
  DescTimeTitle,
  DescTitle,
  SearchBar,
  SearchButton,
  SearchContainer,
  SearchInput,
  WeatherContainer,
  WeatherDescCollumn,
  WeatherDescContainer,
  WeatherDescRow,
  WeatherStatus,
  WeatherStatusDesc,
} from "./styled";

const Search = ({
  handleInputChange,
  clearSearchText,
  searchLocation,
  data,
  location,
  time,
}) => {
  return (
    <>
      <Header>Today's Weather</Header>
      <SearchContainer>
        <SearchBar>
          <SearchInput
            type="text"
            value={location}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Enter a location"
          />
          <ClearButton onClick={() => clearSearchText()}>
            <ClearIcon />
          </ClearButton>
        </SearchBar>
        <SearchButton onClick={() => searchLocation(location)}>
          Search
        </SearchButton>
      </SearchContainer>

      {data ? (
        <WeatherContainer>
          <CityName>{`${data.name}, ${data.sys.country}`}</CityName>
          <WeatherStatus>{data.weather && data.weather[0].main}</WeatherStatus>
          <WeatherStatusDesc>
            {data.weather && data.weather[0].description}
          </WeatherStatusDesc>
          <WeatherDescContainer>
            <WeatherDescRow>
              <WeatherDescCollumn>
                <DescDetail>{data.wind && `${data.wind.speed} m/s`}</DescDetail>
                <DescTitle>Windspeed</DescTitle>
              </WeatherDescCollumn>
              <WeatherDescCollumn>
                <DescDetail>
                  {data.main &&
                    `${data.main.temp_min}°C ~ ${data.main.temp_max}°C`}
                </DescDetail>
                <DescTitle>Temperature</DescTitle>
              </WeatherDescCollumn>
              <WeatherDescCollumn>
                <DescDetail>
                  {data.main && `${data.main.humidity}%`}
                </DescDetail>
                <DescTitle>Humidity</DescTitle>
              </WeatherDescCollumn>
            </WeatherDescRow>
            <WeatherDescRow>
              <DescTimeDetail>Time:</DescTimeDetail>
              <DescTimeTitle>{time}</DescTimeTitle>
            </WeatherDescRow>
          </WeatherDescContainer>
        </WeatherContainer>
      ) : (
        <WeatherContainer>
          <NoRecordContainer>Not Found</NoRecordContainer>
        </WeatherContainer>
      )}
    </>
  );
};

export default Search;
