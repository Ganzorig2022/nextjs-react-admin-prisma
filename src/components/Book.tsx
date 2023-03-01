import * as React from 'react';
import {
  ChipField,
  Create,
  CreateProps,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditProps,
  List,
  ListProps,
  NumberInput,
  ReferenceManyField,
  Show,
  SimpleForm,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  TextInput,
  useTranslate,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

interface IBookProps {}

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.title) {
    errors.title = 'Title is required';
  }
  if (!values.subtitle) {
    errors.subtitle = 'Title is required';
  }
  return errors;
};

export const BookCreate = (props: CreateProps) => (
  <Create {...props} sx={{ maxWidth: 500 }}>
    <SimpleForm validate={validateForm} translate='no'>
      {/* <SectionTitle label='Identity' /> */}
      <Typography variant='h6' gutterBottom>
        Identity
      </Typography>
      <TextInput type='text' source='title' isRequired fullWidth />
      <TextInput type='text' source='subtitle' isRequired fullWidth />
      <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          <TextInput type='text' source='type' isRequired fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
          <TextInput type='text' source='author' isRequired fullWidth />
        </Box>
      </Box>
      <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          {/* <TextInput type='text' source='published' isRequired fullWidth /> */}
          <DateInput source='published' />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
          <TextInput type='text' source='publisher' isRequired fullWidth />
        </Box>
      </Box>
      <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
        <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          <TextInput type='text' source='pages' isRequired fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
          <TextInput type='text' source='description' isRequired fullWidth />
        </Box>
      </Box>
    </SimpleForm>
  </Create>
);

const bookFilters = [
  // <NumberInput key='1' label='Id (exact)' source='id' alwaysOn />,
  <TextInput label='Title (contains)' source='title' translate='no' />,
];

export const BookList = (props: ListProps) => (
  <List {...props} filters={bookFilters}>
    <Datagrid rowClick='edit'>
      {/* <TextField source='id' /> */}
      <TextField source='title' />
      <TextField source='subtitle' />
      <TextField source='type' />
      <TextField source='author' />
      <TextField source='published' />
      <TextField source='publisher' />
      <TextField source='pages' />
      <TextField source='description' />
      {/* <ReferenceManyField label='Posts' reference='post' target='BookId'>
        <SingleFieldList>
          <ChipField source='text' />
        </SingleFieldList>
      </ReferenceManyField> */}
    </Datagrid>
  </List>
);

export const BookEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <TextField source='id' /> */}
      <TextField source='title' />
      <TextField source='subtitle' />
      <TextField source='type' />
      <TextField source='author' />
      <TextField source='published' />
      <TextField source='publisher' />
      <TextField source='pages' />
      <TextField source='description' />
    </SimpleForm>
  </Edit>
);

export const BookShow = () => (
  <Show>
    <SimpleShowLayout>
      {/* <TextField source='id' /> */}
      <TextField source='title' />
      <TextField source='subtitle' />
      <TextField source='type' />
      <TextField source='author' />
      <TextField source='published' />
      <TextField source='publisher' />
      <TextField source='pages' />
      <TextField source='description' />
    </SimpleShowLayout>
  </Show>
);

// const SectionTitle = ({ label }: { label: string }) => {
//   const translate = useTranslate();

//   return (
//     <Typography variant='h6' gutterBottom>
//       {translate(label as string)}
//     </Typography>
//   );
// };
