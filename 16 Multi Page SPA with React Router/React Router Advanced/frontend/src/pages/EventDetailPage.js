import { json, useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function loader({ params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId
  );

  if (!response.ok) {
    throw json(
      { message: "Could Not Fetch Details For The Selected Event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    { method: request.method }
  );

  if (!response.ok) {
    throw json({ message: "Could Not Delete Event" }, { status: 500 });
  }

  return redirect("/events");
}
