export const formatDate = (dateString: string): string => {
  const createdDate = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return createdDate.toLocaleString("id-ID", options);
};
