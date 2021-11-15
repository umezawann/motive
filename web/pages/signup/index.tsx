import type { NextPage } from "next";
import AuthLayout from "@/components/templates/Layouts/AuthLayout";
import { Form, Field } from "react-final-form";
import Button, { ButtonProps } from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useHooks } from "./hooks";
import { styled } from "@mui/material/styles";

const Signup: NextPage = () => {
  const { onSubmit } = useHooks();

  const Container = styled("div")({
    width: "400px",
    height: "500px",
    margin: "auto",
    padding: "30px 0",
  });

  return (
    <AuthLayout>
      <Container>
        <div style={{ fontSize: "25px", fontWeight: "bold" }}>サインアップ</div>
        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          // validate={validate}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ margin: "10px 0" }}>
                <label>username</label>
                <Field name="username">
                  {(props) => (
                    <div>
                      <TextField
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                        fullWidth
                      />
                    </div>
                  )}
                </Field>
              </div>
              <div style={{ margin: "10px 0" }}>
                <label>password</label>
                <Field name="password">
                  {(props) => (
                    <div>
                      <TextField
                        type="password"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                        style={{
                          width: "100%",
                          margin: "auto",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: "100%",
                    margin: "20px 0",
                    borderRadius: "5px",
                    backgroundColor: "green",
                  }}
                >
                  新規登録
                </Button>
              </div>
            </form>
          )}
        />

        <div>
          すでにサインアップ済みですか？
          <Link href="/login">
            <a style={{ color: "green" }}>ログイン</a>
          </Link>
          に移動する
        </div>
      </Container>
    </AuthLayout>
  );
};

export default Signup;
