import React, { useState } from 'react';
import Data from './data';
import './accordianStyle.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Accordian = () => {
  const [selectd, setSelected] = useState(null);

  const handleClick = (itemId) => {
    selectd !== itemId ? setSelected(itemId) : setSelected(null);
  };
  return (
    <Container className="">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Row>
            <h1 className="title">Accordian</h1>
          </Row>
          <Row>
            <div className="wrapper">
              <div className="accordian">
                {Data && Data.length > 0 ? (
                  Data.map((dataItem) => {
                    return (
                      <div className="item" key={dataItem.id}>
                        <div
                          className="itemQuestion"
                          onClick={() => handleClick(dataItem.id)}
                        >
                          {dataItem.question}
                          <span className="accordianIcon">
                            {dataItem.id === selectd ? ' -' : ' + '}
                          </span>
                        </div>
                        {dataItem.id === selectd ? (
                          <div className="ItemAnswer">{dataItem.answer}</div>
                        ) : null}
                      </div>
                    );
                  })
                ) : (
                  <h3>No data available</h3>
                )}
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Accordian;
