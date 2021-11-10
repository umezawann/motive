import type { NextPage } from 'next';
import AuthLayout from '@/components/templates/Layouts/AuthLayout';
import { Form, Field } from 'react-final-form';
import Button, { ButtonProps } from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from 'next/link';

const Signup: NextPage = () => {
  const onSubmit = (values) => {
    console.log('hogehoge', values);
  };

  return (
    <AuthLayout>
      <div>
        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          // validate={validate}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <div>
                <label>username</label>
                <Field name="username">
                  {(props) => (
                    <div>
                      <TextField
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                      />
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <label>password</label>
                <Field name="password">
                  {(props) => (
                    <div>
                      <TextField
                        type="password"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
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
                >
                  Submit
                </Button>
              </div>
            </form>
          )}
        />

        <div>
          すでにサインアップ済みですか？
          <Link href="/login">
            <a>ログイン</a>
          </Link>
          に移動する
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
