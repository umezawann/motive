import type { NextPage } from "next";
import AuthLayout from "@/components/templates/Layouts/AuthLayout";
import { Form, Field } from "react-final-form";
import Button, { ButtonProps } from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useHooks } from "./hooks";
import { textAlign } from "@mui/system";

const Login: NextPage = () => {
  const { onSubmit } = useHooks();

  return (
    <AuthLayout>
      <div
        style={{
          width: "400px",
          height: "500px",
          margin: "auto",
          padding: "30px 0",
        }}
      >
        <div style={{ fontSize: "25px", fontWeight: "bold" }}>ログイン</div>
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
                  ログイン
                </Button>
              </div>
            </form>
          )}
        />

        <div>
          アカウントをお持ちではないですか？
          <Link href="/signup">
            <a style={{ color: "green" }}>サインアップ</a>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
