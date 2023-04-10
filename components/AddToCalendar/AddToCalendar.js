import { useState } from "react";

/* update calnedar details with your personal information */
const AddToCalendar = () => {
  const [event, setEvent] = useState({
    title: "Chat with FJ hiring meeting",
    description:
      'Discuss background and upcoming hiring tasks.  email ▶️"faradeen@outlook.com" ',
    /* you can import you image from a cdn like Linkedin or Github,  copy paste image url/link */
    website:"https://fj360.dev",
    location: "Online",
    startTime: "2023-03-15T10:00:00-04:00",
    endTime: "2023-03-15T11:00:00-04:00",
  });

  /* outlook */
  const constructOutlookUrl = () => {
    const outlookCalendarBaseUrl =
      "https://outlook.office.com/calendar/0/deeplink/compose";
    const outlookCalendarParams = new URLSearchParams({
      subject: event.title,
      location: event.location,
      body: event.description + event.website,
      startdt: new Date(event.startTime).toISOString(),
      enddt: new Date(event.endTime).toISOString(),
      allday: false,
    });
    return `${outlookCalendarBaseUrl}?${outlookCalendarParams.toString()}`;
  };

  const constructAppleUrl = () => {
    const calendarData = `BEGIN:VCALENDAR
  PRODID:-//My Company//EN
  VERSION:2.0
  CALSCALE:GREGORIAN
  BEGIN:VEVENT
  UID:${event.id}
  DTSTART:${new Date(event.startTime).toISOString().replace(/[:-]/g, "")}
  DTEND:${new Date(event.endTime).toISOString().replace(/[:-]/g, "")}
  SUMMARY:${event.title}
  LOCATION:${event.location}
  DESCRIPTION:${event.description}
  END:VEVENT
  END:VCALENDAR`;
  
    return URL.createObjectURL(new Blob([calendarData], { type: 'text/calendar' }));
  };
  

  const openCalendar = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="calendar-footer flex justify-center   mt-0">
      <div className="btn-gradient">
        <button
          className="outlook-btn btn  hover:bg-white hover:text-black opacity-95 hover:opacity-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => openCalendar(constructOutlookUrl())}
        >
          <span className="add-to-cal-plus">+</span> Outlook Calendar
        </button>
      </div>
      <button
        className="apple-btn  hover:bg-white hover:text-black opacity-95 hover:opacity-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => openCalendar(constructAppleUrl())}
      >
        <span className="add-to-cal-plus">+</span> Apple Calendar
      </button>
    </div>
  );
};

export default AddToCalendar;
