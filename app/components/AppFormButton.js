import { useFormikContext } from "formik";
import React from "react";
import Colors from "../config/Colors";
import AppButton from "./AppButton";

function AppFormButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      color={Colors.PrimaryColor}
      onPress={handleSubmit}
    />
  );
}

export default AppFormButton;
