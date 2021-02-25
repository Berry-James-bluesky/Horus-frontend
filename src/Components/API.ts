import axios, { AxiosResponse } from "axios";
import test from "../test.json";

const baseURL: string = "./test.json";

export const getTimers = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const timers: AxiosResponse<ApiDataType> = await axios.get(baseURL);
    return timers;
  } catch (error) {
    throw new Error(error);
  }
};

export const postTimer = async (
  value: any
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const timer: AxiosResponse<ApiDataType> = await axios.post(baseURL, value, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return timer;
  } catch (error) {
    //throw new Error(error);
    return error;
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
