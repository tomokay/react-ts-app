import { InputAdornment, OutlinedInput, TextField } from "@mui/material";

interface InputFormProps {
  label: string;
  type: string;
  required: boolean;
  updateState: (value: any) => void;
  handleSpa: (key: string, value: string) => void;
}

interface DefaultInputFormProps extends InputFormProps {
  defaultValue: string;
  state: string;
  validation: (input: string) => {
    isError: boolean;
    errorCode?: string;
    message?: string;
  };
}

interface DefaultInputNumberFormProps extends InputFormProps {
  defaultValue: number;
  state: number;
  validation: (input: number) => {
    isError: boolean;
    errorCode?: string;
    message?: string;
  };
}

export const DefaultInputForm = (props: DefaultInputFormProps) => {
  return (
    <TextField
      required={props.required}
      id={props.type}
      label={props.label}
      defaultValue={props.defaultValue}
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
      defaultValue={props.defaultValue}
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
