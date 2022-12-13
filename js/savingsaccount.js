class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    setInterest(interest){
        this._interest = interest;
    }

    addInterest(){
        let interest = (super.getBalance() * this._interest) / 100;
        super.deposit(interest);
    }

    toString() {
        return "Account " + super.getNumber() + ": balance with interest " + super.getBalance();
    }

    endOfMonth(){
        let intrestAdded = this.addInterest();
        return "Interest added"+ this.toString() + " with interest amount : " + intrestAdded;
    }

}