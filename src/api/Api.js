import axios from "axios";

const API_KEY = 'AIzaSyBb1oSawvu-itpm6yTjf1EpW6kOjm4T7d4';
const SPREADSHEET_ID = '1qbglRueU3Ztkfmb2MdgOtWatxHW-in0x1tvRGLKKGKg';

export const fetchData = async (range) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/1qbglRueU3Ztkfmb2MdgOtWatxHW-in0x1tvRGLKKGKg/values/sheet1!A1:D100?key=AIzaSyBb1oSawvu-itpm6yTjf1EpW6kOjm4T7d4`;
    try {
      const response = await axios.get(url);
      return response.data.values; // Return the data in a usable format
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };