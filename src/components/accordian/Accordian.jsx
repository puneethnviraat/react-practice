import React, { useState } from 'react';
import Data from './data';
import './accordianStyle.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Accordian = () => {
  const [selectd, setSelected] = useState(null);
  const [viewItems, setViewItems] = useState([]);
  const [multipleView, setMultipleView] = useState(false);
  const ChangeView = () => [setMultipleView(!multipleView)];

  const handleClick = (itemId) => {
    if (!multipleView) {
      selectd !== itemId ? setSelected(itemId) : setSelected(null);
    } else {
      let multipleViews = [...viewItems];
      const indexOfItem = multipleViews.indexOf(itemId);
      if (indexOfItem === -1) {
        multipleViews.push(itemId);
      } else {
        multipleViews.splice(indexOfItem, 1);
      }
      setViewItems(multipleViews);
    }
  };

  return (
    <Container className="">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Row>
            <h1 className="title">Accordian</h1>
          </Row>
          <Row>
            <Button onClick={ChangeView} variant="success">
              {multipleView ? 'Single view' : 'multiple view'}
            </Button>
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
                        {!multipleView ? (
                          dataItem.id === selectd ? (
                            <div className="ItemAnswer">{dataItem.answer}</div>
                          ) : null
                        ) : (
                          viewItems.map((id) => {
                            if (id === dataItem.id) {
                              return (
                                <div className="ItemAnswer">
                                  {dataItem.answer}
                                </div>
                              );
                            }
                          })
                        )}
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
