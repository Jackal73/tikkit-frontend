import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { fetchSingleTicket, closeTicket } from '../ticket-list/ticketsAction';
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';
import { useParams } from 'react-router-dom';

// const ticket = tickets[0];
export const Ticket = () => {
  const {replyMsg} = useSelector(state => state.tickets);
  const {tId} = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, selectedTicket} = useSelector(state => state.tickets);

  useEffect(() => {
    dispatch(fetchSingleTicket(tId))
}, [tId, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading && <Spinner variant='primary' animation="border" />}
          {error && <Alert variant='danger'>{error}</Alert>}
          {replyMsg && <Alert variant='success'>{replyMsg}</Alert>}
        </Col>
      </Row>

      <Row>
        <Col className="font-weight-bolder text-secondary">
        {/* {tId} */}
          <div className="subject">Subject : {selectedTicket.subject}</div>
          <div className="date">Ticket Opened : {selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleString()}</div>
          <div className="status">Status : {selectedTicket.status}</div>
        </Col>
        <Col className="text-right">
          <Button
            variant="outline-info"
            onClick={() => dispatch(closeTicket(tId))}
            style={{borderRadius: '.4rem'}}
            disabled = {selectedTicket.status === "Closed"}
          >
            Close Ticket
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{selectedTicket.conversations && <MessageHistory msg={selectedTicket.conversations} />}
        </Col>
      </Row>
      <hr />

      <Row className="mt-4">
        <Col>
          <UpdateTicket _id= {tId}

          />
        </Col>
      </Row>
    </Container>
  )
}
