import React from "react";
import { StyleSheet, View } from "react-native";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormPicker from "../components/AppFormPicker";
import AppFormButton from "../components/AppFormButton";
import AppFormImageInput from "../components/AppFormImageInput";

const validationSchema = Yup.object().shape({
  images: Yup.array().required().min(1, "Please select at least 1 image"),
  title: Yup.string().required().label("Title"),
  price: Yup.string().required().label("Price"),
  category: Yup.string().required().label("Category"),
});

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          images: "",
          title: "",
          prices: "",
          category: "",
          description: "",
        }}
        onSubmit={() => console.log("Submitted")}
        validationSchema={validationSchema}
      >
        <AppFormImageInput name="images" />
        <AppFormField name="title" placeholder="Title" icon="edit" />
        <AppFormField
          name="price"
          placeholder="Price"
          icon="attach-money"
          keyboardType="decimal-pad"
          width={120}
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          icon="apps"
          width="70%"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          icon="event-note"
        />
        <AppFormButton title="POST" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default ListingEditScreen;
