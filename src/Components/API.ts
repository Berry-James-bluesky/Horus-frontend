import axios, { AxiosResponse } from "axios";

const baseURL: string =
  "http://my-json-server.typicode.com/Berry-James/horus-data/data";

export const postTimer = async (
  value: any
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const timer: AxiosResponse<ApiDataType> = await axios.post(baseURL, value);
    return timer;
  } catch (error) {
    //throw new Error(error);
    return error;
  }
};
export const getTimers = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const timers: AxiosResponse<ApiDataType> = await axios.get(baseURL);
    console.log(baseURL);
    return timers;
  } catch (error) {
    throw new Error(error);
  }
};

export const startClock = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const meals: AxiosResponse<ApiDataType> = await axios.get(
      baseURL + "random.php"
    );
    return meals;
  } catch (error) {
    throw new Error(error);
  }
};

export const stopClock = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const meals: AxiosResponse<ApiDataType> = await axios.get(
      baseURL + "random.php"
    );
    return meals;
  } catch (error) {
    throw new Error(error);
  }
};
