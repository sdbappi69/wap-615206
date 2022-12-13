class CheckingAccount extends Account{
    constructor(number, overdraft){
        super(number);
        this._overdraft = overdraft;
    }

    getOverdraft(){
        return this._overdraft;
    }

    setOverdraft(overdraft){
        this._overdraft = overdraft;
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if((super.getBalance() - amount) >= super.getBalance() + this._overdraft){
            throw Error("Exceed the minimum balance");
        }
        super.withdraw(amount);
    }

    endOfMonth(){
        let message = "";
        if (this.getBalance() < 0) message += "Warning, low balance ";
        message += this.toString();
        return message;
    }
}