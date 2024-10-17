export const formattedDate = () =>
  new Date(Date.now()).toLocaleString("en-US", {
    // year: "numeric",
    // month: "long",
    // day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
