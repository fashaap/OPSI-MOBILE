import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const CountdownTimer = ({ countdown }) => {
  const targetDate = new Date(countdown);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  if (Object.keys(timeLeft).length === 0) {
    return <Text style={{ fontSize: 60, textAlign: "center", color: "red" }}>Waktu Habis</Text>;
  }

  return (
    <View>
      {timeLeft.days > 0 && (
        <Text style={{ fontSize: 75, textAlign: "center" }}>{`${timeLeft.days} hari ${addLeadingZero(
          timeLeft.hours
        )}:${addLeadingZero(timeLeft.minutes)}:${addLeadingZero(
          timeLeft.seconds
        )}`}</Text>
      )}
      {timeLeft.days === 0 && (
        <Text style={{ fontSize: 75, textAlign: "center" }}>{`${addLeadingZero(timeLeft.hours)}:${addLeadingZero(
          timeLeft.minutes
        )}:${addLeadingZero(timeLeft.seconds)}`}</Text>
      )}
    </View>
  );
};

export default CountdownTimer;
