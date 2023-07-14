import * as React from "react";
import { DatePicker, DayOfWeek, Dropdown, mergeStyles } from "@fluentui/react";
import { Stack } from "@fluentui/react";

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
const rootClass = mergeStyles({
  maxWidth: 300,
  selectors: { "> *": { marginBottom: 15 } },
  padding: 15,
});

const FirstExample = () => {
  const [firstDayOfWeek, setFirstDayOfWeek] = React.useState(DayOfWeek.Sunday);

  const onDropdownChange = React.useCallback((event, option) => {
    setFirstDayOfWeek(option.key);
  }, []);

  return (
    <Stack>
      <div className={rootClass}>
        <DatePicker
          firstDayOfWeek={firstDayOfWeek}
          placeholder="Select a date..."
          ariaLabel="Select a date"
        />
        <Dropdown
          label="Select the first day of the week"
          options={days}
          selectedKey={firstDayOfWeek}
          onChange={onDropdownChange}
        />
      </div>
    </Stack>
  );
};

export default FirstExample;
