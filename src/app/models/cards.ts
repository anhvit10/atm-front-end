import { Account } from './account';

export class Cards {
    cardNo: string;
    status: boolean;
    pinCode: string;
    startDate: string;
    expiredDate: string;
    attempt: number;
    account: Account;
}
