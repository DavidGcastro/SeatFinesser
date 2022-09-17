import Geolocation from 'react-native-geolocation-service';
import {GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_API_ENDPOINT} from '@env';
const {requestAuthorization, getCurrentPosition} = Geolocation;
const getCurrentPositionAsync = options =>
  new Promise((resolve, reject) => {
    getCurrentPosition(
      ({coords}) => {
        const {latitude, longitude} = coords;
        resolve([latitude, longitude]);
      },
      error => {
        reject(error);
      },
      options,
    );
  });

const getAuthorization = async () => await requestAuthorization('whenInUse');

const location = async ([latitude, longitude]) => {
  const endpoint = `${GOOGLE_MAPS_API_ENDPOINT}&latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;
  let locationData = await fetch(endpoint);
  let {results} = await locationData.json();
  return results.length && results[0].address_components[0].long_name;
};

const getCoords = async () => {
  try {
    if ((await getAuthorization()) === 'granted') {
      const options = {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      };
      return await getCurrentPositionAsync(options);
    }
  } catch (err) {
    throw Error(err);
  }
};

const getLocation = async () => {
  try {
    const coords = await getCoords();
    return await location(coords);
  } catch (err) {
    throw Error(err);
  }
};

export default getLocation;
