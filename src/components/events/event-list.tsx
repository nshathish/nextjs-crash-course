import EventItem, { EventItemProps } from '@/components/events/event-item';

import classes from './event-list.module.css';

export interface EventListProps {
  items: EventItemProps[];
}

export default function EventList({ items }: EventListProps) {
  return (
    <ul className={classes.list}>
      {items.map(event =>
        <EventItem key={event.id} {...event} />
      )}
    </ul>
  );
}