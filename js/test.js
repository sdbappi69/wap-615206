describe("Account", function(){
    let account = new Account('123456789');
    it("Create new account", function(){
        assert.equal(account.toString(), 'Account 123456789: balance 0');
    });
    it("Get Number", function(){
        assert.equal(account.getNumber(), '123456789');
    });
    it("Get Balance", function(){
        assert.equal(account.getBalance(), '0');
    });
    it("Deposit", function(){
        account.deposit(500);
        assert.equal(account.toString(), 'Account 123456789: balance 500');
    });
    it("Withdraw", function(){
        account.withdraw(200);
        assert.equal(account.toString(), 'Account 123456789: balance 300');
    }); 
    it("End Of Month", function(){
        assert.equal(account.endOfMonth(), '');
    });
});

describe("Savings Account", function(){
    let sa = new SavingsAccount('123456789', 10);
    sa.deposit(500);
    it("Get Interest", function(){
        assert.equal(sa.getInterest(), '10');
    });
    it("Set Interest", function(){
        sa.setInterest(20);
        assert.equal(sa.getInterest(), '20');
    });
    it("Add Interest", function(){
        sa.addInterest();
        assert.equal(sa.toString(), 'Account 123456789: balance with interest 600');
    });
});

describe("Checking Account", function(){
    let ca = new CheckingAccount('123456789', 100);
    ca.deposit(500);
    it("Get Overdraft", function(){
        assert.equal(ca.getOverdraft(), '100');
    });
    it("Set Overdraft", function(){
        ca.setOverdraft(200);
        assert.equal(ca.getOverdraft(), '200');
    });
    it("Withdraw", function(){
        ca.withdraw(50);
        assert.equal(ca.toString(), 'Account 123456789: balance 450');
        // chai.expect(ca.withdraw.bind(ca,350)).to.throw("Exceed the minimum balance");
        // chai.expect(ca.withdraw.bind(ca,0)).to.throw("Withdraw amount has to be greater than zero");
    });
});

describe("Bank", function(){
    it("add Account", function(){
        let bank = new Bank();        
        let actual = bank.addAccount();
        assert.equal(actual,1);
    });
    it("add Savings Account", function(){
        let bank = new Bank();        
        let actual = bank.addSavingsAccount(15);
        assert.equal(actual,1);
    });
    it("add Checking Account", function(){
        let bank = new Bank();        
        let actual = bank.addCheckingAccount(100);
        assert.equal(actual,1);
    });
    it("close Account", function(){
        let bank = new Bank();        
        let actual = bank.closeAccount(1);
        assert.equal(actual,0);
    });  
});

describe("Bank Class Test",function(){
    it("Testing Bank Getter, Setter and other Method",function(){
      let account = new Account(12343);
      let account2 = new Account(12344);
      let savingsAccount1 = new SavingsAccount(12345, 0.10);
      let savingsAccount2 = new SavingsAccount(12346, 0.10);
      let checkingsAccount = new CheckingAccount(12347, 200);
      let accounts = [account,savingsAccount1];
      let bank = new Bank(...accounts);
  
  
  
     //addAccount
      bank.addAccount(account2);
      let bankAccountAdded = bank.getAccounts().filter(el=> el.getNumber() == account2.getNumber());
  
  
  
     bank.addSavingsAccount(savingsAccount2);
      let savingsAccountAdded = bank.getAccounts().filter(el=> el.getNumber() == savingsAccount2.getNumber());
  
  
  
     // addCheckingAccount
      bank.addCheckingAccount(checkingsAccount);
      let checkingsAccountAdded = bank.getAccounts().filter(el=> el.getNumber() == checkingsAccount.getNumber());
  
  
  
     // closeAccount
      bank.closeAccount(12345);
      let givenAccountClosed = bank.getAccounts().filter(el=> el.getNumber() == 12345).length == 0;
  
  
  
     // accountReport
      let reportString = bank.accountReport();
      // let reportString = bank.getAccounts().reduce((acc,el)=> acc+el.toString()+",   ","");
      // console.log(reportString);
  
  
  
     let eodString = bank.endOfMonth();
      // console.log(eodString);
  
  
  
     if (!bankAccountAdded)
        {
          assert.fail(0, 1, 'Add Account getter and setter is not working');
        }
        else if (!savingsAccountAdded)
        {
          assert.fail(0, 1, 'savingsAccountAdded method is not working');
        }
        else if (!checkingsAccount)
        {
          assert.fail(0, 1, 'checkingsAccount method is not working');
        }
        else if (!givenAccountClosed)
        {
          assert.fail(0, 1, 'closeAccount method is not working');
        }
        else if (!givenAccountClosed)
        {
          assert.fail(0, 1, 'accountReport method is not working');
        }
        else if (!givenAccountClosed)
        {
          assert.fail(0, 1, 'endOfMonth method is not working');
        }
      assert.equal(true, true);
    });
  });