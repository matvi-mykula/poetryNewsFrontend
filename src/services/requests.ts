import axios from 'axios';

// function figureAPI() {
//   console.log(process.env.NODE_ENV);
//   const devBackend = 'http://localhost:3000/';
//   const prodBackend = 'https://dry-silence-9236.fly.dev/';

//   const prodEnv = process.env.NODE_ENV === 'production';
//   let environment;
//   prodEnv ? (environment = prodBackend) : (environment = devBackend);
//   return environment;
// }

// const environment = figureAPI();

const fetchHaiku = async (topWords: any) => {
  console.log({ topWords });
  //   const response = await axios.post('http://localhost:3000/', {});
  //   return response;
  return {
    success: true,
    code: 200,
    response:
      '\n\nTwo authorities | Silenced a transgender voice | Montana lawmaker guilty',
  };
};

export { fetchHaiku };
