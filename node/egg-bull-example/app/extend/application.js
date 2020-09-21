'use strict';

const Bull = require('bull');
const QUENE = Symbol('Application#bar');

// app/extend/application.js
module.exports = {
  get quene() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    if (!this[QUENE]) {
      const quene = new Bull('my-first-quene', { redis: this.config.redis });
      quene.process(function(job, done) {
        console.log(job);
        this.logger.info('[bull]', job);
        done();
      });
      this[QUENE] = quene;
    }
    return this[QUENE];
  },
};
