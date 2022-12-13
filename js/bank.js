class Bank{
    static nextNumber= 1;
    constructor(){
         this._accounts = [];
    }
    getAccounts(){
        return this._accounts;
    }
    addAccount(){
        let account = new Account(this.nextNumber++);
        this._accounts.push(account);
        return this._accounts.length;
    }
    addSavingsAccount(interest){
        let savingAccount = new SavingsAccount(this.nextNumber++,interest);
        this._accounts.push(savingAccount);
        return this._accounts.length;
    }
    addCheckingAccount(overdraft){
        let checkingAccount = new CheckingAccount(this.nextNumber++,overdraft);
        this._accounts.push(checkingAccount);
        return this._accounts.length;
    }
    closeAccount(number){
         this._accounts = this._accounts.filter(x => x._number != number);  
         return this._accounts.length;
    }

    accountReport(){
        let accountDetail = '';
        for(let account of this._accounts){
            accountDetail += "Account number " + account.getNumber() + ": balance $" + account.getBalance() +"\n";
        }
        return accountDetail;
    }

    endOfMonth(){
        return this._accounts.reduce((acc,el)=> acc+el.endOfMonth()+", ","");
    }
}