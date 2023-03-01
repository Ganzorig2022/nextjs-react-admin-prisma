import { Admin, Resource } from 'react-admin';
import { dataProvider } from '@/providers/dataProvider';
import { BookCreate, BookEdit, BookList, BookShow } from '@/components/Book';

const ReactAdmin = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name='book'
      // list={BookList}
      // create={BookCreate}
      // edit={BookEdit}
      // show={BookShow}
    />
  </Admin>
);

export default ReactAdmin;
