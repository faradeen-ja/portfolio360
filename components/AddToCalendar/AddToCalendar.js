import { useState } from "react";

const AddToCalendar = () => {
  const [event, setEvent] = useState({
    title: "Schedule a hiring meeting",
    description:
      "Discuss job details with candidate. Discuss background and qualifications. Applicant website: https://fj360.dev Applicant social: https://linkedin.com/in/faradeen",
    location: "Online",
    startTime: "2023-04-10T04:15:00+00:00",
    endTime: "2023-04-10T04:15:00+00:00",
  });

  const constructGoogleUrl = () => {
    const googleCalendarBaseUrl =
      "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const googleCalendarParams = new URLSearchParams({
      text: event.title,
      details: event.description,
      location: event.location,
      dates: `${new Date(event.startTime).toISOString()}/${new Date(
        event.endTime
      ).toISOString()}`,
    });
    return `${googleCalendarBaseUrl}&${googleCalendarParams.toString()}`;
  };

  const constructOutlookLiveUrl = () => {
    const outlookLiveCalendarBaseUrl =
      "https://outlook.live.com/calendar/0/deeplink/compose";
    const outlookLiveCalendarParams = new URLSearchParams({
      subject: event.title,
      body: event.description,
      location: event.location,
      startdt: new Date(event.startTime).toISOString(),
      enddt: new Date(event.endTime).toISOString(),
      path: "/calendar/action/compose",
      rru: "addevent",
    });
    return `${outlookLiveCalendarBaseUrl}?${outlookLiveCalendarParams.toString()}`;
  };

  const constructOutlookUrl = () => {
    const outlookCalendarBaseUrl =
      "https://outlook.office.com/calendar/0/deeplink/compose";
    const outlookCalendarParams = new URLSearchParams({
      subject: event.title,
      body: event.description,
      location: event.location,
      startdt: new Date(event.startTime).toISOString(),
      enddt: new Date(event.endTime).toISOString(),
      path: "/calendar/action/compose",
      rru: "addevent",
    });
    return `${outlookCalendarBaseUrl}?${outlookCalendarParams.toString()}`;
  };

  const openCalendar = (url) => {
    window.open(url, "_blank");
  };

  return (
    <><div className="calendar-bts-box calendar-footer flex justify-center   mt-0">
      <button className="calendar-btns  hover:bg-white hover:text-black font- opacity-95 hover:opacity-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
       onClick={() => openCalendar(constructGoogleUrl())}>
        Google Calendar
      </button>
      <button className="calendar-btns hover:bg-white hover:text-black font- opacity-95 hover:opacity-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       onClick={() => openCalendar(constructOutlookLiveUrl())}>
        365 Live Calendar
      </button>
      <button className="calendar-btns hover:bg-white hover:text-black font- opacity-95 hover:opacity-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
       onClick={() => openCalendar(constructOutlookUrl())}>
        Outlook Calendar
      </button>
    </div></>
   
  
  );
};


export default AddToCalendar;




