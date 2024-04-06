import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy', { locale: ptBR })}</time>
}
