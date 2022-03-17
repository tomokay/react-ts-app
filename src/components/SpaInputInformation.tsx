import React from "react";
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
import { Spa } from "src/components/Types";
import { useForm, Controller } from "react-hook-form";

type SpaInputInfomationProps = {
  spa: Spa[];
  setSpa: React.Dispatch<React.SetStateAction<Spa[]>>;
  spaName: string;
  setSpaName: React.Dispatch<React.SetStateAction<string>>;
  spaAddress: string;
  setSpaAddress: React.Dispatch<React.SetStateAction<string>>;
  spaPhoneNumber: string;
  setSpaPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  spaBusinessHours: string;
  setSpaBusinessHours: React.Dispatch<React.SetStateAction<string>>;
  spaRegularHoliday: string;
  setSpaRegularHoliday: React.Dispatch<React.SetStateAction<string>>;
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
  customSpa: string;
  setCustomSpa: React.Dispatch<React.SetStateAction<string>>;
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
  customFacility: string;
  setCustomFacility: React.Dispatch<React.SetStateAction<string>>;
  picture: string;
  setPicture: React.Dispatch<React.SetStateAction<string>>;
  handleNext: any;
};

const SpaInputInfomation = (props: SpaInputInfomationProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  //基本情報関数
  const handleInputSpaNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSpaName(e.target.value);
  };

  const handleInputSpaAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setSpaAddress(e.target.value);
  };

  const handleInputSpaPhoneNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setSpaPhoneNumber(e.target.value);
  };

  const handleInputSpaBusinessHoursChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setSpaBusinessHours(e.target.value);
  };
  const handleInputSpaRegularHolidayChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setSpaRegularHoliday(e.target.value);
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
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "60ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h2" gutterBottom component="div">
          温泉情報入力
        </Typography>
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
                value: 15,
                message: "15字以内で入力してください",
              },
              onBlur: handleInputSpaNameChange,
            }}
            defaultValue={props.spaName}
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
          error={errors?.hasOwnProperty("spaAddress")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.spaAddress && errors?.spaAddress.message}
          </FormHelperText>
          <Controller
            name="spaAddress"
            control={control}
            rules={{
              required: "住所を入力してください",
              maxLength: {
                value: 15,
                message: "15字以内で入力してください",
              },
              onBlur: handleInputSpaAddressChange,
            }}
            defaultValue={props.spaAddress}
            render={({ field }) => (
              <TextField {...field} variant="outlined" label="住所" required />
            )}
          />
        </FormControl>
        <FormControl
          required
          error={errors?.hasOwnProperty("spaPhoneNumber")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.spaPhoneNumber && errors?.spaPhoneNumber.message}
          </FormHelperText>
          <Controller
            name="spaPhoneNumber"
            control={control}
            rules={{
              required: "電話番号を入力してください",
              maxLength: {
                value: 15,
                message: "15字以内で入力してください",
              },
              onBlur: handleInputSpaPhoneNumberChange,
              pattern: {
                value: /[0-9]{4}/,
                message: "数字とハイフンで入力してください",
              },
            }}
            defaultValue={props.spaPhoneNumber}
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
          error={errors?.hasOwnProperty("spaBusinessHours")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.spaBusinessHours && errors?.spaBusinessHours.message}
          </FormHelperText>
          <Controller
            name="spaBusinessHours"
            control={control}
            rules={{
              required: "営業時間を入力してください",
              maxLength: {
                value: 15,
                message: "15字以内で入力してください",
              },
              onBlur: handleInputSpaBusinessHoursChange,
            }}
            defaultValue={props.spaBusinessHours}
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
          error={errors?.hasOwnProperty("spaRegularHoliday")}
          component="fieldset"
          fullWidth
        >
          <FormHelperText>
            {errors?.spaRegularHoliday && errors?.spaRegularHoliday.message}
          </FormHelperText>
          <Controller
            name="spaRegularHoliday"
            control={control}
            rules={{
              required: "定休日を入力してください",
              maxLength: {
                value: 15,
                message: "15字以内で入力してください",
              },
              onBlur: handleInputSpaRegularHolidayChange,
            }}
            defaultValue={props.spaRegularHoliday}
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
            defaultValue={props.adultPrice}
            rules={{
              required: "入力してください",
              maxLength: {
                value: 6,
                message: "10万円以内で入力してください",
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
            defaultValue={props.childPrice}
            rules={{
              required: "入力してください",
              maxLength: {
                value: 6,
                message: "10万円以内で入力してください",
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
            defaultValue={props.adultWeekendPrice}
            rules={{
              required: "入力してください",
              maxLength: {
                value: 6,
                message: "10万円以内で入力してください",
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
            defaultValue={props.childWeekendPrice}
            rules={{
              required: "入力してください",
              maxLength: {
                value: 6,
                message: "10万円以内で入力してください",
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
            control={<Checkbox />}
            id="freeShampoo"
            label="無料シャンプー"
            onChange={handleInputHasFreeShampoo}
            value={props.hasFreeShampoo}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="paidShampoo"
            label="有料シャンプー"
            onChange={handleInputHasPaidShampoo}
            value={props.hasPaidShampoo}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="towel"
            label="タオル"
            onChange={handleInputHasTowel}
            value={props.hasTowel}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="freeHairdryer"
            label="無料ドライヤー"
            onChange={handleInputHasFreeHairdryer}
            value={props.hasFreeHairdryer}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="paidHairdryer"
            label="有料ドライヤー"
            onChange={handleInputHasPaidHairdryer}
            value={props.hasPaidHairdryer}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="creditCard"
            label="クレジットカード"
            onChange={handleInputHasCreditCard}
            value={props.hasCreditCard}
          />
        </FormGroup>
        <Typography variant="h5" gutterBottom component="div">
          温泉施設
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            id="opneAirBath"
            label="露天風呂"
            onChange={handleInputHasOpenAirBath}
            value={props.hasOpenAirBath}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="waterBath"
            label="水風呂"
            onChange={handleInputHasWaterBath}
            value={props.hasWaterBath}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="sauna"
            label="サウナ"
            onChange={handleInputHasSauna}
            value={props.hasSauna}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="bubbleBath"
            label="泡風呂"
            onChange={handleInputHasBubbleBath}
            value={props.hasBubbleBath}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="jetBathSpa"
            label="ジェットバス"
            onChange={handleInputHasJetBathSpa}
            value={props.hasJetBathSpa}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="shoulderHittingShower"
            label="打たせ湯"
            onChange={handleInputHasShoulderHittingShower}
            value={props.hasShoulderHittingShower}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="sleepingBath"
            label="寝湯"
            onChange={handleInputHasSleepingBath}
            value={props.hasSleepingBath}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="cypressBath"
            label="檜風呂"
            onChange={handleInputHasCypressBath}
            value={props.hasCypressBath}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="bedrockBath"
            label="岩盤浴"
            onChange={handleInputHasBedrockBath}
            value={props.hasBedrockBath}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="electricBath"
            label="電気風呂"
            onChange={handleInputHasElectricBath}
            value={props.hasElectricBath}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="familyBath"
            label="家族風呂"
            onChange={handleInputHasFamilyBath}
            value={props.hasFamilyBath}
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
                value: 15,
                message: "15字以内で入力してください",
              },
              onBlur: handleInputCustomSpa,
            }}
            defaultValue={props.customSpa}
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
            control={<Checkbox />}
            id="restaurant"
            label="レストラン"
            onChange={handleInputHasRestaurant}
            value={props.hasRestaurant}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="breakPlace"
            label="休憩所"
            onChange={handleInputHasBreakPlace}
            value={props.hasBreakPlace}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="massageMachine"
            label="マッサージ機"
            onChange={handleInputHasMassageMachine}
            value={props.hasMassageMachine}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="vendingMachine"
            label="自動販売機"
            onChange={handleInputHasVendingMachine}
            value={props.hasVendingMachine}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="store"
            label="売店"
            onChange={handleInputHasStore}
            value={props.hasStore}
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
                value: 15,
                message: "15字以内で入力してください",
              },
              onBlur: handleInputCustomFacility,
            }}
            defaultValue={props.customFacility}
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
