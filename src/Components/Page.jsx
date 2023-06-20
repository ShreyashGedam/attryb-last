import styled from "styled-components";
import { Users } from "./Users";
import { Pending } from "./pending";

export const Page = () => {
  return (
    <>
      <Container>
        <Heading>User Management</Heading>
        <Headinginfo>Add or manage your Domains</Headinginfo>
        <Users />
        <Pending />
      </Container>
    </>
  );
};

const Container = styled.div`
  /* border: 1px solid; */
  margin-top: 5vh;
`;

const Heading = styled.div`
  width: 80%;
  margin: auto;
  color: #101828;
  font-size: 30px;
  font-weight: 600;
`;

const Headinginfo = styled.p`
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  width: 80%;
  margin: auto;
  margin-bottom: 32px;
`;
