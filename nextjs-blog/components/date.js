import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    let content = '';

    content = <time dateTime={ dateString }>
        { format(date, 'MMMM d, yyyy')}
    </time>;

    return content;
}