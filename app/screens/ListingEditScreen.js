import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField as FormField,
  SubmitButton,
  AppFormPicker as Picker,
} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {
    color: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1,
  },
  {
    color: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 2,
  },
  {
    color: '#fed330',
    icon: 'camera',
    label: 'Camera',
    value: 3,
  },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.field}>
          <FormField maxLength={255} name="title" placeholder="Title" />
        </View>
        <View style={styles.field}>
          <FormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
            style={styles.price}
          />
        </View>
        <View style={styles.field}>
          <Picker
            items={categories}
            name="category"
            placeholder="Category"
            style={styles.category}
          />
        </View>
        <View style={styles.field}>
          <FormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
        </View>
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  category: {
    width: 200,
  },
  container: {
    padding: 10,
  },
  field: {
    marginVertical: 10,
  },
  price: {
    width: 120,
  },
});

export default ListingEditScreen;
