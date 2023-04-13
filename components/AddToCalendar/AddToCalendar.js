import { useState } from "react";
import Image from "next/image";
import google from "/public/images/google-calendar.png"
import live365 from "/public/images/office.png"
import outlook from '/public/images/outlook.png'
/* Replace text/code to your own needs, Edit this part to display your personal information on calendar */
const AddToCalendar = () => {
  const [event, setEvent] = useState({
    title: "Chat meeting with candidate for tech position",
    description: `<p>😊Thanks for adding me (FJ) to your busy calendar, I know it can be tough finding an ideal candidate.<br>✅I am available for a 15-minute opportunity to present you my solutions demo, background and qualifications.</p>
    <h5>Applicant website:</h5> <a align="center" href="https://fj360.dev"><img src="   https://cdn-icons-png.flaticon.com/512/3059/3059997.png " width="25" height="25" alt="">fj360.dev</a>
    <h5>Applicant social:</h5>  <a align="center" href="https://www.linkedin.com/in/faradeen/"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png " width="25" height="25" alt="">LinkedIn</a>
    <h4>Simply connect with me on LinkedIn > Chat or Call</h4>
   
    <img src='https://media.licdn.com/dms/image/D5603AQGRTHIbNliotw/profile-displayphoto-shrink_400_400/0/1679771124043?e=1686787200&v=beta&t=7fe0JWmGApmxUF6JLwU1MhyTLkzRTlD42-0K5_FHmRg' width='100px' height='100px'/><h5>FJ /Salesforce Admin/Dev</h5>
    <h5>See you in the Cloud!</h5> `,

    location: "https://www.linkedin.com/in/faradeen/",
    startTime: "2023-04-10T04:15:00+00:00",
    endTime: "2023-04-10T04:30:00+00:00",
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
    <>
      <div className="calendar-btns-box calendar-footer flex justify-center   mt-0">
        <button
          className="calendar-btns  hover:bg-white hover:text-black font- opacity-95  hover:opacity-100  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => openCalendar(constructGoogleUrl())}
        >
          Google Calendar
          <Image
            src={google}
            width="50"
            height="50"
            alt="Google Calendar"
          />
        </button>
        <button
          className="calendar-btns hover:bg-white hover:text-black font- opacity-95 hover:opacity-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => openCalendar(constructOutlookLiveUrl())}
        >
          365 Live Calendar
          <Image
            src={live365}
            width="50"
            height="50"
            alt="365 Calendar"
          />
        </button>
        <button
          className="calendar-btns hover:bg-white hover:text-black font- opacity-95 hover:opacity-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => openCalendar(constructOutlookUrl())}
        >
          Outlook Calendar
          <Image
            src={outlook}
            width="50"
            height="50"
            alt="Outlook Calendar"
          />
        </button>
      </div>
    </>
  );
};

export default AddToCalendar;
