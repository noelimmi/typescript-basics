const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'Sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
