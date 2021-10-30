import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormPicker from "../components/AppFormPicker";
import AppFormButton from "../components/AppFormButton";
import AppFormImageInput from "../components/AppFormImageInput";
import listingsApi from "../api/listings";
import UploadView from "../components/UploadView";

const validationSchema = Yup.object().shape({
  images: Yup.array().required().min(1, "Please select at least 1 image"),
  title: Yup.string().required().label("Title"),
  price: Yup.string().required().label("Price"),
  category: Yup.object().required().nullable().label("Category"),
});

function ListingEditScreen(props) {
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);

  const onUploadProgress = (progress) => {
    setProgress(progress);
  };

  const addListing = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const response = await listingsApi.addListings(listing, onUploadProgress);

    if (!response.ok) {
      setUploadVisible(false);
      setTimeout(() => {
        alert("Listing couldn't be added. Please try again");
      }, 1000);

      return;
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadView
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={addListing}
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
