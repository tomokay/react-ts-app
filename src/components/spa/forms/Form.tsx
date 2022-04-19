import { TextField } from "@mui/material";

interface InputFormProps {
  label: string;
  type: string;
  required: boolean;
  updateState: (value: any) => void;
}

interface DefaultInputFormProps extends InputFormProps {
  state: string;
  validation: (input: string) => {
    isError: boolean;
    errorCode?: string;
    message?: string;
  };
  handleSpa: (key: any, value: string) => void;
}

interface DefaultInputNumberFormProps extends InputFormProps {
  state: number;
  validation: (input: number) => {
    isError: boolean;
    errorCode?: string;
    message?: string;
  };
  handleSpa: (key: string, value: number) => void;
}

export const DefaultInputForm = (props: DefaultInputFormProps) => {
  return (
    <TextField
      required={props.required}
      id={props.type}
      label={props.label}
      value={props.state}
      onChange={(event) => props.updateState(event.target.value)}
      onBlur={(event) => {
        if (!props.validation(props.state).isError) {
          props.handleSpa(props.type, event.target.value);
        }
      }}
      error={props.validation(props.state).isError}
      helperText={
        props.validation(props.state).isError
          ? props.validation(props.state).message
          : " "
      }
    />
  );
};

export const DefaultInputNumberForm = (props: DefaultInputNumberFormProps) => {
  return (
    <TextField
      type={"number"}
      required={props.required}
      id={props.type}
      label={props.label}
      value={props.state}
      onChange={(event) => props.updateState(event.target.value)}
      onBlur={(event) => {
        if (!props.validation(props.state).isError) {
          props.handleSpa(props.type, Number(event.target.value));
        }
      }}
      error={props.validation(props.state).isError}
      helperText={
        props.validation(props.state).isError
          ? props.validation(props.state).message
          : " "
      }
    />
  );
};
