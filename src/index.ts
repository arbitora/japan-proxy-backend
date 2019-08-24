import {JapanProxyBackendApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {JapanProxyBackendApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new JapanProxyBackendApplication(options);
  // Search through all artifacts and prepare them.
  await app.boot();

  // Create table definitions.
  await app.migrateSchema();

  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
