import styled from "styled-components";
import message_icon from "../Public/message.svg";
import profilepic from "../Public/profilepic.svg";

export const Pending = () => {
  const arr = [
    {
      image: profilepic,
      name: "Olivia Rhye",
      email: "olivia@untitledui.com",
    },
    {
      image: profilepic,
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
    },
  ];

  return (
    <Container>
      <Info>
        <Heading>Pending Invites</Heading>
        <p>
          Manage the status of user account invitations that have been sent out
          but have not yet been accepted by the recipients
        </p>
        <Button>
          <img src={message_icon} />
          <p>Invite People</p>
        </Button>
      </Info>
      <List>
        <Topbar>
          <div style={{ width: "70%", paddingLeft: "24px" }}>
            <p>Name</p>
          </div>
        </Topbar>
        {arr.map((e) => (
          <ListUser>
            <Infobox>
              <Imagediv>
                <img src={e.image} />
              </Imagediv>
              <Infodiv>
                <p
                  style={{
                    color: "#101828",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {e.name}
                </p>
                <p
                  style={{
                    color: "#475467",
                    fontSize: "14px",
                    fontWeight: "00",
                  }}
                >
                  {e.email}
                </p>
              </Infodiv>
            </Infobox>
            <Decision>
              <Resend>Resend Invite</Resend>
              <Invoke>Invoke Invite</Invoke>
            </Decision>
          </ListUser>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 24px;
  border-bottom: 3px solid #eaecf0;
  p {
    margin: 0;
    padding: 0;
  }
`;

const Info = styled.div`
  width: 25%;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #475467;
    margin: 0;
  }
`;

const List = styled.div`
  border: 1px solid #eaecf0;
  width: 75%;
  border-radius: 20px;
  margin-bottom: 24px;
`;

const Heading = styled.div`
  font-size: 16px;
  color: #344054;
  font-weight: 600;
`;

const Button = styled.div`
  background-color: #6e40ff;
  height: 36px;
  width: 144px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;

  img {
    margin-left: 15.67px;
  }

  p {
    color: white;
    margin-left: 9.67px;
  }
`;

const Topbar = styled.div`
  background-color: #f9fafb;
  height: 44px;
  display: flex;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  p {
    font-size: 12px;
    font-weight: 500;
    color: #475467;
  }
`;

const ListUser = styled.div`
  height: 72px;
  border-bottom: 1px solid #eaecf0;
  display: flex;
  align-items: center;
`;
const Infobox = styled.div`
  width: 70%;
  display: flex;
`;
const Imagediv = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 24px;
`;

const Infodiv = styled.div`
  margin-left: 12px;
  p {
    padding: 0;
    margin: 0;
  }
`;

const Decision = styled.div`
  display: flex;
  margin-right: 5%;
  button {
    width: 140px;
    height: 36px;
  }
`;

const Resend = styled.button`
  color: #344054;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  padding: 8px 14px;
  border: 1px solid #344054;
`;
const Invoke = styled.button`
  font-size: 14px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #b42318;
  background-color: #fecdca;
  margin-left: 12px;
`;
