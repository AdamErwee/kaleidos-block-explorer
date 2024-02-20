const calculateTimeDifference = (timeString: string): string => {
  const currentTime = new Date();
  const pastTime = new Date(timeString);

  const timeDifference = Math.abs(currentTime.getTime() - pastTime.getTime());

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  } else {
    return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  }
};

export default calculateTimeDifference;
