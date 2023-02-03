import React from "react";

export default function FormattedFirstdate(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  let year = props.date.getFullYear();
  return (
    <div>
      {month} {date}, {year}
    </div>
  );
}
