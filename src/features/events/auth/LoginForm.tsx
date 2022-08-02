import { Formik, yupToFormErrors, Form } from "formik";
import ModalWrapper from "../../../app/common/form/modals/ModalWrapper";
import * as Yup from "yup";
import { getWeekYearWithOptions } from "date-fns/fp";
import { Button } from "semantic-ui-react";
import MyTextInput from "../../../app/common/form/MyTextInput";
import { useDispatch } from "react-redux";
import { signInUser } from "../../../app/api/re-dux/authSlice";
import { closeModal } from "../../../app/api/re-dux/modalSlice";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  return (
    <ModalWrapper size="mini" header="Sign in to Re-vents">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(signInUser(values));
          setSubmitting(false);
          dispatch(closeModal());
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <MyTextInput name="email" placeholder="Email Address" />
            <MyTextInput
              name="password"
              placeholder="Password"
              type="password"
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              size="large"
              color="teal"
              content="Login"
            ></Button>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}
