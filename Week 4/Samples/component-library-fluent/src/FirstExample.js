import * as React from "react";
import { Dropdown, Option, makeStyles } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { DayOfWeek } from "@fluentui/react-calendar-compat";

const days = [
  { text: "Sunday", key: DayOfWeek.Sunday },
  { text: "Monday", key: DayOfWeek.Monday },
  { text: "Tuesday", key: DayOfWeek.Tuesday },
  { text: "Wednesday", key: DayOfWeek.Wednesday },
  { text: "Thursday", key: DayOfWeek.Thursday },
  { text: "Friday", key: DayOfWeek.Friday },
  { text: "Saturday", key: DayOfWeek.Saturday },
];

// Styling
const useStyles = makeStyles({
  root: {
    display: "inline-flex",
    flexDirection: "column",
    rowGap: "15px",
  },
  firstDaySelector: {
    display: "inline-flex",
    flexDirection: "column",
    rowGap: "5px",
  },
});

const FirstExample = () => {
  const styles = useStyles();
  const [firstDayOfWeek, setFirstDayOfWeek] = React.useState(DayOfWeek.Sunday);

  const onDropdownChange = React.useCallback((event, data) => {
    setFirstDayOfWeek(data.optionValue);
  }, []);

  return (
    <div className={styles.root}>
      <DatePicker
        firstDayOfWeek={firstDayOfWeek}
        placeholder="Select a date..."
        ariaLabel="Select a date"
      />
      <div className={styles.firstDaySelector}>
        <label htmlFor="dropdownId">Select the first day of the week</label>
        <Dropdown
          id="dropdownId"
          defaultValue={"Sunday"}
          defaultSelectedOptions={[DayOfWeek.Sunday]}
          onOptionSelect={onDropdownChange}
        >
          {days.map((day) => (
            <Option value={day.key}>{day.text}</Option>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default FirstExample;
