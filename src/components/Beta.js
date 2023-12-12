import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { styled } from "styled-components";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function Beta() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("Data:", response.data);
        setUserData(response.data || []);

        // Store the fetched data in local storage as a string
        localStorage.setItem("users", JSON.stringify(response.data));
      } catch (error) {
        console.log(error);

        // If there's an error fetching data, try to retrieve data from local storage
        const storedData = localStorage.getItem("users");
        console.log("akakakattttt", storedData);
        setUserData(JSON.parse(storedData));
      }
    };

    // Fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        <CardWrapper>
          <StyledCard>
            <Card.Body>
              <Row className="d-flex align-items-center justify-content-between mb-3">
                <Col sm={12} md={4}>
                  <Tit className="mb-0">Kunden</Tit>
                </Col>
                <Col
                  sm={12}
                  md={4}
                  className="d-flex align-items-center justify-content-between"
                >
                  <StyledInputGroup className="mb-0">
                    <Form.Control
                      placeholder="search here"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </StyledInputGroup>
                </Col>
                <Col
                  sm={12}
                  md={4}
                  className="justify-content-end"
                  style={{ textAlign: "end" }}
                >
                  <Buttonn>Add User</Buttonn>
                </Col>
              </Row>
              <div
                className="table-responsive"
                style={{ overflowX: "auto", maxWidth: "100%" }}
              >
                <Table
                  className="table-responsive table-wrapper"
                  hover
                  size="sm"
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "center",
                          width: "10px",
                          verticalAlign: "middle",
                        }}
                      >
                        #
                      </th>
                      <th
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        Title
                      </th>
                      <th
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        Body
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {userData.map((ele, index) => (
                      <tr key={index}>
                        <td
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          {index + 1}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          {ele.title}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          {ele.body}
                        </td>
                        <td>
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <button
                                style={{ border: "none", background: "none" }}
                              >
                                <MdOutlineEdit size={"25px"} />
                              </button>
                            </div>
                            <div>
                              <button
                                style={{ border: "none", background: "none" }}
                              >
                                <MdDeleteOutline size={"25px"} />
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </StyledCard>
        </CardWrapper>
      </Container>
    </Section>
  );
}

export default Beta;

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 120px;
  padding-bottom: 120px;
  overflow-y: auto;
  @media (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 40px;
  }
`;

const Buttonn = styled.button`
  width: 200px;
  height: 35px;
  justify-content: flex-end;
  align-items: center;
  text-align: end;
  gap: 10px;
  border: 2px solid;
  border-color: orange;
  border-radius: 4px;
  color: orange;
  background-color: white;
  font-family: Roboto;
  font-size: 20px;
  font-style: bold;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  @media (max-width: 767px) {
    width: 150px;
    height: 30px;
    margin-top: 20px;
    text-align: start;
    display: flex;
    justify-content: center;
  }
`;

const StyledInputGroup = styled(InputGroup)`
  position: relative;
  input {
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    border-bottom: 1px solid #ced4da;
    margin-bottom: 0;
  }
  @media (max-width: 767px) {
    width: 60%;
  }
`;

const Tit = styled.p`
  color: navy;
  font-size: 35px;
  @media (max-width: 767px) {
    justify-content: center;
    align-item: center;
    font-size: 25px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(Card)`
  justify-content: center;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
`;
