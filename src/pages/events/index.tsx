import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';

import { getAllEvents } from '../../../data/dummy';


export default function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventSearch />
      <EventList items={events} />
    </div>
  );
}