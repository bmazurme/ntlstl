import {Layout, NoteType} from '../../../components/notes/note/layout';
import {notes} from '../../../../data/notes';

export default async function Page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const note: NoteType = notes.find((x) => x.id === Number(id))!;
  return <Layout note={note} />;
}
