import styled from 'styled-components';

export const ServicesStyle = styled.div`
  margin-bottom: 100px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  border-spacing: 0 10px;
`;

export const Thead = styled.thead`
  background-color: #0c5990;
  margin-bottom: 8px;
`;

export const Th = styled.th`
  font-size: 16px;
  color: #fff;
  padding: 8px 0;
  font-weight: 400;
  text-align: left;
  padding-left: 15px;
  &:first-child {
    border-radius: 4px 0 0 0;
  }
  &:last-child {
    border-radius: 0 4px 0 0;
  }
`;

export const Td = styled.td`
  padding-left: 15px;
`;

export const TrBody = styled.tr`
  box-shadow: 2px 2px 10px #00000029;
  border-radius: 4px;
`;

export const TdBody = styled.td`
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const NameService = styled(TdBody)`
  color: #0c5990;
`;

export const DateService = styled(TdBody)`
  color: #707070;
`;

export const Plate = styled(TdBody)`
  color: #0c5990;
  font-weight: 600;
`;

export const ButtonRemove = styled.button`
  display: flex;
  column-gap: 8px;
  background-color: #fff;
  color: #f91919;
  border-radius: 30px;
  border: 1px solid #f91919;
  padding: 12px 16px;
  font-weight: 600;
  &:hover {
    background-color: #f919191f;
  }
`;

export const ButtonFinish = styled.button`
  display: flex;
  column-gap: 8px;
  background-color: #fff;
  color: #02e64a;
  border-radius: 30px;
  border: 1px solid #02e64a;
  padding: 12px 16px;
  font-weight: 600;
  &:hover {
    background-color: #19f9201f;
  }
`;
