import React, { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddAppointmentModal from './AddAppointmentModal.js';
import { AppContext } from '../context/AppContext';

const Calendar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(null);
  // const {loading, setLoading} = useContext(AppContext);

  const handleDateClick = (e) => {
    setAppointmentDate(e.dateStr);
    setModalShow(true);
  };

  return (
    <>
      <Container className="mt-2">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
        />
        <AddAppointmentModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          date={appointmentDate}
        />
      </Container>
    </>
  );
};

export default Calendar;
