import { ServerApp } from './presentation/server';
import { CronJob } from 'cron';

(() => {
  main();
})();

function main() {
  ServerApp.start();
}
