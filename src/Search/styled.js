import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CityName = styled.div`
  font-size: 2.5rem;
`;

export const WeatherStatus = styled.div`
  font-size: 5rem;
  font-weight: 700;
`;

export const WeatherStatusDesc = styled.div`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export const WeatherDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;

  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 0.2);

  width: fit-content;
  padding: 2rem;
`;

export const WeatherDescCollumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const WeatherDescRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const DescTitle = styled.div`
  flex: 1;
`;

export const DescDetail = styled.div`
  flex: 1;
  font-weight: 700;
  font-size: 1.375rem;
`;

export const DescTimeTitle = styled.div``;

export const DescTimeDetail = styled.div`
  font-weight: 700;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

export const SearchBar = styled.div`
  position: relative;
`;

export const ClearButton = styled.div`
  position: absolute;
  top: 51%;
  transform: translateY(-51%);
  right: 0.5rem;
  cursor: pointer;
`;

export const SearchButton = styled.button`
  color: #f8f8f8;
  border-radius: 25px;
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;

  ::placeholder {
    color: #f8f8f8;
  }

  :focus {
    border: 1px solid white;
  }
`;

export const WeatherStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WeatherIcon = styled.img``;
