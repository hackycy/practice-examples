import * as Queue from 'bull';
import { Application } from 'egg';

export default (app: Application) => {
  app.logger.info('queue');
  const q = new Queue('testqueue', {
    redis: {
      port: 6379,
      host: '127.0.0.1',
      db: 0,
    },
  });
  q.process(function(job, done) {
    app.logger.info('[queue]', job.data);
    done();
  });
  return q;
};
