import React, { useState, useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddAppointmentModal from './AddAppointmentModal.js';
import { AppContext } from '../context/AppContext';
const Calendar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [events, setEvents] = useState([]);
  const { loading, setLoading, appointments } = useContext(AppContext);

  useEffect(() => {
    const updateAppointments = appointments.map((appointment) => {
      const title = appointment.description;
      const date = appointment.dropOffDate;
      return { title, date };
    });
    setEvents(updateAppointments);
  }, [appointments, loading, setLoading]);
  const handleDateClick = (e) => {
    setAppointmentDate(e.dateStr);
    console.log(e.dateStr);
    setModalShow(true);
  };
  console.log(events);
  return (
    <>
      <Container className="mt-2">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={events}
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
