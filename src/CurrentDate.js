import React from "react";

export default function CurrentDate(props) {
    let days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];

    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];


    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let day = days[props.date.getDay()];
    let calendar = props.date.getDate();
    let month = months[props.date.getMonth()];
    return (
        <div className="current-time">
            {hours}:{minutes} {day} {calendar} {month}
        </div>);
}