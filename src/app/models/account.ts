import { Customer } from './customer';
import { overDraft } from './overDraft';

export class Account {
    accountID:number;
    accountNo: String;
    balance: number;
    customer: Customer;
    odID: number;
    wdID: number;
    overdraft: overDraft;
}
