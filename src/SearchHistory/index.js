import { Header, NoRecordContainer } from "../Weather/styled";
import DeleteIcon from "../icons/DeleteIcon";
import SearchIcon from "../icons/SearchIcon";
import {
  HistoryButton,
  SearchHistoryContainer,
  SearchHistoryContent,
  SearchHistoryDetail,
  SearchHistoryName,
  SearchHistoryRow,
} from "./styled";

const SearchHistory = ({ searchHistory, searchLocation, deleteHistory }) => {
  return (
    <>
      <SearchHistoryContainer>
        <Header>Search History</Header>
        <SearchHistoryContent>
          {searchHistory.length > 0 ? (
            searchHistory.map((item, idx) => (
              <SearchHistoryRow key={item.id}>
                <SearchHistoryName>{`${idx + 1}.${
                  item.name
                }`}</SearchHistoryName>
                <SearchHistoryDetail>
                  {item.time}
                  <HistoryButton onClick={() => searchLocation(item.name)}>
                    <SearchIcon />
                  </HistoryButton>
                  <HistoryButton onClick={() => deleteHistory(item.id)}>
                    <DeleteIcon />
                  </HistoryButton>
                </SearchHistoryDetail>
              </SearchHistoryRow>
            ))
          ) : (
            <NoRecordContainer>No Record</NoRecordContainer>
          )}
        </SearchHistoryContent>
      </SearchHistoryContainer>
    </>
  );
};

export default SearchHistory;
