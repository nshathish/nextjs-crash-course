import EventList from '@/components/events/event-list';

import { getFeaturedEvents } from '../../data/dummy';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
