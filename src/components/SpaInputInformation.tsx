import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { CardActionArea, FormControl, FormHelperText } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type SpaInputInfomationProps = {
  spaName: string;
  setSpaName: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  businessHours: string;
  setBusinessHours: React.Dispatch<React.SetStateAction<string>>;
  regularHoliday: string;
  setRegularHoliday: React.Dispatch<React.SetStateAction<string>>;
  adultPrice: number;
  setAdultPrice: React.Dispatch<React.SetStateAction<number>>;
  childPrice: number;
  setChildPrice: React.Dispatch<React.SetStateAction<number>>;
  adultWeekendPrice: number;
  setAdultWeekendPrice: React.Dispatch<React.SetStateAction<number>>;
  childWeekendPrice: number;
  setChildWeekendPrice: React.Dispatch<React.SetStateAction<number>>;
  hasFreeShampoo: boolean;
  setHasFreeShampoo: React.Dispatch<React.SetStateAction<boolean>>;
  hasPaidShampoo: boolean;
  setHasPaidShampoo: React.Dispatch<React.SetStateAction<boolean>>;
  hasTowel: boolean;
  setHasTowel: React.Dispatch<React.SetStateAction<boolean>>;
  hasFreeHairdryer: boolean;
  setHasFreeHairdryer: React.Dispatch<React.SetStateAction<boolean>>;
  hasPaidHairdryer: boolean;
  setHasPaidHairdryer: React.Dispatch<React.SetStateAction<boolean>>;
  hasCreditCard: boolean;
  setHasCreditCard: React.Dispatch<React.SetStateAction<boolean>>;
  hasOpenAirBath: boolean;
  setHasOpenAirBath: React.Dispatch<React.SetStateAction<boolean>>;
  hasWaterBath: boolean;
  setHasWaterBath: React.Dispatch<React.SetStateAction<boolean>>;
  hasSauna: boolean;
  setHasSauna: React.Dispatch<React.SetStateAction<boolean>>;
  hasBubbleBath: boolean;
  setHasBubbleBath: React.Dispatch<React.SetStateAction<boolean>>;
  hasJetBathSpa: boolean;
  setHasJetBathSpa: React.Dispatch<React.SetStateAction<boolean>>;
  hasShoulderHittingShower: boolean;
  setHasShoulderHittingShower: React.Dispatch<React.SetStateAction<boolean>>;
  hasSleepingBath: boolean;
  setHasSleepingBath: React.Dispatch<React.SetStateAction<boolean>>;
  hasCypressBath: boolean;
  setHasCypressBath: React.Dispatch<React.SetStateAction<boolean>>;
  hasBedrockBath: boolean;
  setHasBedrockBath: React.Dispatch<React.SetStateAction<boolean>>;
  hasElectricBath: boolean;
  setHasElectricBath: React.Dispatch<React.SetStateAction<boolean>>;
  hasFamilyBath: boolean;
  setHasFamilyBath: React.Dispatch<React.SetStateAction<boolean>>;
  customSpa: string | null;
  setCustomSpa: React.Dispatch<React.SetStateAction<string | null>>;
  hasRestaurant: boolean;
  setHasRestaurant: React.Dispatch<React.SetStateAction<boolean>>;
  hasBreakPlace: boolean;
  setHasBreakPlace: React.Dispatch<React.SetStateAction<boolean>>;
  hasMassageMachine: boolean;
  setHasMassageMachine: React.Dispatch<React.SetStateAction<boolean>>;
  hasVendingMachine: boolean;
  setHasVendingMachine: React.Dispatch<React.SetStateAction<boolean>>;
  hasStore: boolean;
  setHasStore: React.Dispatch<React.SetStateAction<boolean>>;
  customFacility: string | null;
  setCustomFacility: React.Dispatch<React.SetStateAction<string | null>>;
  picture: string;
  setPicture: React.Dispatch<React.SetStateAction<string>>;
  handleNext: any;
};

const SpaInputInfomation = (props: SpaInputInfomationProps) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    shouldUnregister: false,
    defaultValues: {
      spaName: props.spaName,
      address: props.address,
      phoneNumber: props.phoneNumber,
      businessHours: props.businessHours,
      regularHoliday: props.regularHoliday,
      adultPrice: props.adultPrice,
      childPrice: props.childPrice,
      adultWeekendPrice: props.adultWeekendPrice,
      childWeekendPrice: props.childWeekendPrice,
      hasFreeShampoo: props.hasFreeShampoo,
      hasPaidShampoo: props.hasPaidShampoo,
      hasTowel: props.hasTowel,
      hasFreeHairdryer: props.hasFreeHairdryer,
      hasPaidHairdryer: props.hasPaidHairdryer,
      hasCreditCard: props.hasCreditCard,
      hasOpenAirBath: props.hasOpenAirBath,
      hasWaterBath: props.hasWaterBath,
      hasSauna: props.hasSauna,
      hasBubbleBath: props.hasBubbleBath,
      hasJetBathSpa: props.hasJetBathSpa,
      hasShoulderHittingShower: props.hasShoulderHittingShower,
      hasSleepingBath: props.hasSleepingBath,
      hasCypressBath: props.hasCypressBath,
      hasBedrockBath: props.hasBedrockBath,
      hasElectricBath: props.hasElectricBath,
      hasFamilyBath: props.hasFamilyBath,
      customSpa: props.customSpa,
      hasRestaurant: props.hasRestaurant,
      hasBreakPlace: props.hasBreakPlace,
      hasMassageMachine: props.hasMassageMachine,
      hasVendingMachine: props.hasVendingMachine,
      hasStore: props.hasStore,
      customFacility: props.customFacility,
      picture: props.picture,
    },
  });
  useEffect(() => {
    if (props) {
      setValue("spaName", props.spaName);
      setValue("address", props.address);
      setValue("phoneNumber", props.phoneNumber);
      setValue("businessHours", props.businessHours);
      setValue("regularHoliday", props.regularHoliday);
      setValue("adultPrice", props.adultPrice);
      setValue("childPrice", props.childPrice);
      setValue("adultWeekendPrice", props.adultWeekendPrice);
      setValue("childWeekendPrice", props.childWeekendPrice);
      setValue("hasFreeShampoo", props.hasFreeShampoo);
      setValue("hasPaidShampoo", props.hasPaidShampoo);
      setValue("hasTowel", props.hasTowel);
      setValue("hasFreeHairdryer", props.hasFreeHairdryer);
      setValue("hasPaidHairdryer", props.hasPaidHairdryer);
      setValue("hasCreditCard", props.hasCreditCard);
      setValue("hasOpenAirBath", props.hasOpenAirBath);
      setValue("hasWaterBath", props.hasWaterBath);
      setValue("hasSauna", props.hasSauna);
      setValue("hasBubbleBath", props.hasBubbleBath);
      setValue("hasJetBathSpa", props.hasJetBathSpa);
      setValue("hasShoulderHittingShower", props.hasShoulderHittingShower);
      setValue("hasSleepingBath", props.hasSleepingBath);
      setValue("hasCypressBath", props.hasCypressBath);
      setValue("hasBedrockBath", props.hasBedrockBath);
      setValue("hasElectricBath", props.hasElectricBath);
      setValue("hasFamilyBath", props.hasFamilyBath);
      setValue("customSpa", props.customSpa);
      setValue("hasRestaurant", props.hasRestaurant);
      setValue("hasBreakPlace", props.hasBreakPlace);
      setValue("hasMassageMachine", props.hasMassageMachine);
      setValue("hasVendingMachine", props.hasVendingMachine);
      setValue("hasStore", props.hasStore);
      setValue("customFacility", props.customFacility);
    }
  }, [props]);

  //基本情報関数
  const handleInputSpaNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSpaName(e.target.value);
  };

  const handleInputSpaAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setAddress(e.target.value);
  };

  const handleInputSpaPhoneNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setPhoneNumber(e.target.value);
  };

  const handleInputSpaBusinessHoursChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setBusinessHours(e.target.value);
  };
  const handleInputSpaRegularHolidayChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setRegularHoliday(e.target.value);
  };
  //料金関数
  const handleInputAdultPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setAdultPrice(Number(e.target.value));
  };
  const handleInputChildPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setChildPrice(Number(e.target.value));
  };
  const handleInputAdultWeekendPrice = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setAdultWeekendPrice(Number(e.target.value));
  };
  const handleInputChildWeekendPrice = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setChildWeekendPrice(Number(e.target.value));
  };

  // //備品関数
  const handleInputHasFreeShampoo = (e: any) => {
    props.setHasFreeShampoo(e.target.checked);
  };
  const handleInputHasPaidShampoo = (e: any) => {
    props.setHasPaidShampoo(e.target.checked);
  };
  const handleInputHasTowel = (e: any) => {
    props.setHasTowel(e.target.checked);
  };
  const handleInputHasFreeHairdryer = (e: any) => {
    props.setHasFreeHairdryer(e.target.checked);
  };
  const handleInputHasPaidHairdryer = (e: any) => {
    props.setHasPaidHairdryer(e.target.checked);
  };
  const handleInputHasCreditCard = (e: any) => {
    props.setHasCreditCard(e.target.checked);
  };

  //温泉施設関数
  const handleInputHasOpenAirBath = (e: any) => {
    props.setHasOpenAirBath(e.target.checked);
  };
  const handleInputHasWaterBath = (e: any) => {
    props.setHasWaterBath(e.target.checked);
  };
  const handleInputHasSauna = (e: any) => {
    props.setHasSauna(e.target.checked);
  };
  const handleInputHasBubbleBath = (e: any) => {
    props.setHasBubbleBath(e.target.checked);
  };
  const handleInputHasJetBathSpa = (e: any) => {
    props.setHasJetBathSpa(e.target.checked);
  };
  const handleInputHasShoulderHittingShower = (e: any) => {
    props.setHasShoulderHittingShower(e.target.checked);
  };
  const handleInputHasSleepingBath = (e: any) => {
    props.setHasSleepingBath(e.target.checked);
  };
  const handleInputHasCypressBath = (e: any) => {
    props.setHasCypressBath(e.target.checked);
  };
  const handleInputHasBedrockBath = (e: any) => {
    props.setHasBedrockBath(e.target.checked);
  };
  const handleInputHasElectricBath = (e: any) => {
    props.setHasElectricBath(e.target.checked);
  };
  const handleInputHasFamilyBath = (e: any) => {
    props.setHasFamilyBath(e.target.checked);
  };
  const handleInputCustomSpa = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setCustomSpa(e.target.value);
  };
  //その他施設
  const handleInputHasRestaurant = (e: any) => {
    props.setHasRestaurant(e.target.checked);
  };
  const handleInputHasBreakPlace = (e: any) => {
    props.setHasBreakPlace(e.target.checked);
  };
  const handleInputHasMassageMachine = (e: any) => {
    props.setHasMassageMachine(e.target.checked);
  };
  const handleInputHasVendingMachine = (e: any) => {
    props.setHasVendingMachine(e.target.checked);
  };
  const handleInputHasStore = (e: any) => {
    props.setHasStore(e.target.checked);
  };

  const handleInputCustomFacility = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setCustomFacility(e.target.value);
  };

  //画像関数
  const handleInputPicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files === null || files.length === 0) {
      return;
    }
    const url: string = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    });
    props.setPicture(url);
  };

  const Input = styled("input")({
    display: "none",
  });

  const UploadButtons = () => {
    return (
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleInputPicture}
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
        </label>
      </Stack>
    );
  };

  const onSubmit = handleSubmit(() => {
    props.handleNext();
  });

  return (
    <>
      <Box component="form" onSubmit={onSubmit} noValidate autoComplete="off">
        <Typography variant="h5" gutterBottom component="div">
          基本情報
        </Typography>
        <FormControl
          required
          error={errors?.hasOwnProperty("spaName")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.spaName && errors?.spaName.message}
          </FormHelperText>
          <Controller
            name="spaName"
            control={control}
            rules={{
              required: "温泉名を入力してください",
              maxLength: {
                value: 50,
                message: "50字以内で入力してください",
              },
              onBlur: handleInputSpaNameChange,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="温泉名"
                required
              />
            )}
          />
        </FormControl>
        <FormControl
          required
          error={errors?.hasOwnProperty("address")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.address && errors?.address.message}
          </FormHelperText>
          <Controller
            name="address"
            control={control}
            rules={{
              required: "住所を入力してください",
              maxLength: {
                value: 50,
                message: "50字以内で入力してください",
              },
              onBlur: handleInputSpaAddressChange,
            }}
            render={({ field }) => (
              <TextField {...field} variant="outlined" label="住所" required />
            )}
          />
        </FormControl>
        <FormControl
          required
          error={errors?.hasOwnProperty("phoneNumber")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.phoneNumber && errors?.phoneNumber.message}
          </FormHelperText>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: "電話番号を入力してください",
              maxLength: {
                value: 30,
                message: "30字以内で入力してください",
              },
              onBlur: handleInputSpaPhoneNumberChange,
              pattern: {
                value: /[0-9]{4}/,
                message: "数字とハイフンで入力してください",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="電話番号"
                required
              />
            )}
          />
        </FormControl>
        <FormControl
          required
          error={errors?.hasOwnProperty("businessHours")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.businessHours && errors?.businessHours.message}
          </FormHelperText>
          <Controller
            name="businessHours"
            control={control}
            rules={{
              required: "営業時間を入力してください",
              maxLength: {
                value: 50,
                message: "50字以内で入力してください",
              },
              onBlur: handleInputSpaBusinessHoursChange,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="営業時間"
                required
              />
            )}
          />
        </FormControl>
        <FormControl
          required
          error={errors?.hasOwnProperty("regularHoliday")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.regularHoliday && errors?.regularHoliday.message}
          </FormHelperText>
          <Controller
            name="regularHoliday"
            control={control}
            rules={{
              required: "定休日を入力してください",
              maxLength: {
                value: 50,
                message: "50字以内で入力してください",
              },
              onBlur: handleInputSpaRegularHolidayChange,
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="定休日"
                required
              />
            )}
          />
        </FormControl>
        <Typography variant="h5" gutterBottom component="div">
          入浴料
        </Typography>
        <FormControl
          required
          error={errors?.hasOwnProperty("adultPrice")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.adultPrice && errors?.adultPrice.message}
          </FormHelperText>
          <Controller
            name="adultPrice"
            control={control}
            rules={{
              required: "入力してください",
              max: {
                value: 9999999,
                message: "9999999円以内で入力してください",
              },
              onBlur: handleInputAdultPrice,
              pattern: {
                value: /^[0-9\b]+$/,
                message: "半角数字のみの入力",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="大人料金：平日"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">円</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </FormControl>
        <FormControl
          required
          error={errors?.hasOwnProperty("childPrice")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.childPrice && errors?.childPrice.message}
          </FormHelperText>
          <Controller
            name="childPrice"
            control={control}
            rules={{
              required: "入力してください",
              max: {
                value: 9999999,
                message: "9999999円以内で入力してください",
              },
              onBlur: handleInputChildPrice,
              pattern: {
                value: /^[0-9\b]+$/,
                message: "半角数字のみの入力",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="子ども料金：平日"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">円</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </FormControl>
        <FormControl
          required
          error={errors?.hasOwnProperty("adultWeekendPrice")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.adultWeekendPrice && errors?.adultWeekendPrice.message}
          </FormHelperText>
          <Controller
            name="adultWeekendPrice"
            control={control}
            rules={{
              required: "入力してください",
              max: {
                value: 9999999,
                message: "9999999円以内で入力してください",
              },
              onBlur: handleInputAdultWeekendPrice,
              pattern: {
                value: /[0-9_]/,
                message: "半角数字のみの入力",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="大人料金：休日"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">円</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </FormControl>
        <FormControl
          required
          error={errors?.hasOwnProperty("childWeekendPrice")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.childWeekendPrice && errors?.childWeekendPrice.message}
          </FormHelperText>
          <Controller
            name="childWeekendPrice"
            control={control}
            rules={{
              required: "入力してください",
              max: {
                value: 9999999,
                message: "9999999円以内で入力してください",
              },
              onBlur: handleInputChildWeekendPrice,
              pattern: {
                value: /[0-9_]/,
                message: "半角数字のみの入力",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="子ども料金：休日"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">円</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </FormControl>
        <Typography variant="h5" gutterBottom component="div">
          備品
        </Typography>
        <FormGroup>
          <FormControlLabel
            name="hasFreeShampoo"
            label="無料シャンプー"
            onClick={handleInputHasFreeShampoo}
            control={
              <Controller
                name="hasFreeShampoo"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasPaidShampoo"
            label="有料シャンプー"
            onClick={handleInputHasPaidShampoo}
            control={
              <Controller
                name="hasPaidShampoo"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasTowel"
            label="タオル"
            onClick={handleInputHasTowel}
            control={
              <Controller
                name="hasTowel"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasFreeHairdryer"
            label="無料ドライヤー"
            onClick={handleInputHasFreeHairdryer}
            control={
              <Controller
                name="hasFreeHairdryer"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasPaidHairdryer"
            label="有料ドライヤー"
            onClick={handleInputHasPaidHairdryer}
            control={
              <Controller
                name="hasPaidHairdryer"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasCreditCard"
            label="クレジットカード"
            onClick={handleInputHasCreditCard}
            control={
              <Controller
                name="hasCreditCard"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
        </FormGroup>
        <Typography variant="h5" gutterBottom component="div">
          温泉施設
        </Typography>
        <FormGroup>
          <FormControlLabel
            name="hasOpenAirBath"
            label="露天風呂"
            onClick={handleInputHasOpenAirBath}
            control={
              <Controller
                name="hasOpenAirBath"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasWaterBath"
            label="水風呂"
            onClick={handleInputHasWaterBath}
            control={
              <Controller
                name="hasWaterBath"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasSauna"
            label="サウナ"
            onClick={handleInputHasSauna}
            control={
              <Controller
                name="hasSauna"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasBubbleBath"
            label="泡風呂"
            onClick={handleInputHasBubbleBath}
            control={
              <Controller
                name="hasBubbleBath"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasJetBathSpa"
            label="ジェットバス"
            onClick={handleInputHasJetBathSpa}
            control={
              <Controller
                name="hasJetBathSpa"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasShoulderHittingShower"
            label="打たせ湯"
            onClick={handleInputHasShoulderHittingShower}
            control={
              <Controller
                name="hasShoulderHittingShower"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasSleepingBath"
            label="寝湯"
            onClick={handleInputHasSleepingBath}
            control={
              <Controller
                name="hasSleepingBath"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasCypressBath"
            label="檜風呂"
            onClick={handleInputHasCypressBath}
            control={
              <Controller
                name="hasCypressBath"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasBedrockBath"
            label="岩盤浴"
            onChange={handleInputHasBedrockBath}
            control={
              <Controller
                name="hasBedrockBath"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasElectricBath"
            label="電気風呂"
            onClick={handleInputHasElectricBath}
            control={
              <Controller
                name="hasElectricBath"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasFamilyBath"
            label="家族風呂"
            onClick={handleInputHasFamilyBath}
            control={
              <Controller
                name="hasFamilyBath"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
        </FormGroup>
        <FormControl
          required
          error={errors?.hasOwnProperty("customSpa")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.customSpa && errors?.customSpa.message}
          </FormHelperText>
          <Controller
            name="customSpa"
            control={control}
            rules={{
              maxLength: {
                value: 50,
                message: "50字以内で入力してください",
              },
              onBlur: handleInputCustomSpa,
            }}
            render={({ field }) => (
              <TextField {...field} variant="outlined" label="独自施設" />
            )}
          />
        </FormControl>
        <Typography variant="h5" gutterBottom component="div">
          その他の施設
        </Typography>
        <FormGroup>
          <FormControlLabel
            name="hasRestaurant"
            label="レストラン"
            onClick={handleInputHasRestaurant}
            control={
              <Controller
                name="hasRestaurant"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasBreakPlace"
            label="休憩所"
            onClick={handleInputHasBreakPlace}
            control={
              <Controller
                name="hasBreakPlace"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasMassageMachine"
            label="マッサージ機"
            onClick={handleInputHasMassageMachine}
            control={
              <Controller
                name="hasMassageMachine"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasVendingMachine"
            label="自動販売機"
            onClick={handleInputHasVendingMachine}
            control={
              <Controller
                name="hasVendingMachine"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
          <FormControlLabel
            name="hasStore"
            label="売店"
            onClick={handleInputHasStore}
            control={
              <Controller
                name="hasStore"
                control={control}
                render={(props) => (
                  <Checkbox
                    checked={props.field.value}
                    onClick={props.field.onChange}
                  />
                )}
              />
            }
          />
        </FormGroup>
        <FormControl
          required
          error={errors?.hasOwnProperty("customFacility")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.customFacility && errors?.customFacility.message}
          </FormHelperText>
          <Controller
            name="customFacility"
            control={control}
            rules={{
              maxLength: {
                value: 50,
                message: "50字以内で入力してください",
              },
              onBlur: handleInputCustomFacility,
            }}
            render={({ field }) => (
              <TextField {...field} variant="outlined" label="独自施設" />
            )}
          />
        </FormControl>
        <Typography variant="h5" gutterBottom component="div">
          写真
        </Typography>
        <UploadButtons />
        <CardActionArea>
          <img width="50%" src={props.picture} />
        </CardActionArea>
        <Typography variant="h5" gutterBottom component="div">
          MAP
        </Typography>
        <Button variant="contained" color="primary" type="submit">
          次へ
        </Button>
      </Box>
    </>
  );
};

export default SpaInputInfomation;
