import { forwardRef } from "react";
import { Dayjs } from "dayjs";
import { PickerTimeProps } from "antd/es/date-picker/generatePicker";
import DatePicker from "./date-picker";

export type TimePickerProps = Omit<PickerTimeProps<Dayjs>, "picker">;

const TimePicker = forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = "TimePicker";

export default TimePicker;
