import winston from 'winston';

const { combine, timestamp, json } = winston.format;

export const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    //defaultMeta: { service: 'user-service' },
    transports: [

      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });