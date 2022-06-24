
const todaysDate = new Date();

const formatTime = (date) => {
  return new Date(date).toLocaleString(
    'en-US', { hour: 'numeric', hour12: false})
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString().slice(0, -5);
}

export { todaysDate, formatTime, formatDate };
