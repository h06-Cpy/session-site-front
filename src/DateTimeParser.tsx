const DateTimeParser = (dateTime: string) => {
  const date = dateTime.slice(0, 10);
  const time = dateTime.slice(11, 19);
  return date.concat(" / ", time);
};

export default DateTimeParser;
