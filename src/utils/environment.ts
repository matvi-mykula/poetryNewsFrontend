function figureAPI() {
  //   console.log(window.location);
  console.log(process.env.NODE_ENV);
  const devBackend = 'http://localhost:8080/';
  const prodBackend = 'https://icy-river-1119.fly.dev'; ///replace with new url

  const prodEnv = process.env.NODE_ENV === 'production';
  let environment;
  prodEnv ? (environment = prodBackend) : (environment = devBackend);
  console.log({ prodEnv });
  console.log(environment);
  return environment;
}

const environment = figureAPI();
export { environment };
