import { TextField } from "@mui/material";

type DefaultInputFormProps = {
  label: string;
  type: string;
  required: boolean;
  defaultValue: string;
  state: string;
  updateState: (value: any) => void;
  validation: (input: string) => {
    isError: boolean;
    errorCode?: string;
    message?: string;
  };
  handleSpa: (key: string, value: string) => void;
};

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
          : ""
      }
    />
  );
};
