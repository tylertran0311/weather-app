import styled from "styled-components";

export const SearchHistoryContainer = styled.div``;

export const SearchHistoryContent = styled.div`
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 0.1);
  height: 300px;
  overflow-y: auto;
`;

export const SearchHistoryRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border-radius: 25px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const SearchHistoryName = styled.div`
  flex: 1;
`;

export const SearchHistoryDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const HistoryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
