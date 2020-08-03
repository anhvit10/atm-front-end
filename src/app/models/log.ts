import { Cards } from './cards';
import { LogType } from './log-type';

export class Log {
    logID : number;
    logDate: Date;
    amount: number;
    cardId: Cards;
    logtype: LogType;
    description: any;
    constructor(log?: object) {
        for (const key in log) {
          if (log.hasOwnProperty(key)) {
            this[key] = log[key];
          }
        }
      }
}
