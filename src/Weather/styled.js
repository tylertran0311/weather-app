import styled from "styled-components";
import background from "../assets/background.png";

export const PageContainer = styled.div`
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
