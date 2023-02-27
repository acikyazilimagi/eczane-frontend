export const calculateCenter = (fetchedData) => {
  const latlongsSum = fetchedData?.data?.reduce(
    (acc, curr) => {
      acc.latitude += curr.latitude;
      acc.longitude += curr.longitude;
      return acc;
    },
    { latitude: 0, longitude: 0 }
  );
  const len = fetchedData?.data?.length;
  const centerLatLong = {
    latitude: latlongsSum.latitude / len,
    longitude: latlongsSum.longitude / len,
  };
  return centerLatLong;
};
