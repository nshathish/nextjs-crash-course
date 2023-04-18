import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';


import { getEventById } from '../../../data/dummy';


export default function EventDetailPage() {
  const { query: { id } } = useRouter();
  const event = getEventById(id);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}