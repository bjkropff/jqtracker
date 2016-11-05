var NewAccount = {
  username: 'bnkUser',
  password: 'p1a2s3s4',
  balance: 1000000,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};
//Change #manage FORM to manageForm


$(document).ready(function() {
  // $('#managed').hide();
  $('#manage').hide();
  $('#withdraw').hide();
  $('.account').hide();
  $('.signin').hide();

  var newAccount = Object.create(NewAccount);
  $('form#create').submit(function(event) {
    event.preventDefault();
    var inputtedName = $('input#name').val();
    // if( !( username == 'bnkUser') && !( password == 'p1a2s3s4') && !( balance = 1000000)){
    //   NewAccount.balance = 0;
    // }
    var inputtedBalance = parseInt($('input#initial').val());
    newAccount.name = inputtedName;
    newAccount.deposit(-1000000);
    newAccount.deposit(inputtedBalance);
    $('.balance').text(newAccount.balance);
    $('.display').text(inputtedName);
    // $('#manage').show();
    $('#create').hide();
    $('.login').hide();
    $('#manage').show();
    $('#withdraw').show();
    $('.account').show();
  });

//When login button is clicked, this will hide the starting fields and show the signin field
  $('.login').click(function(event){
    event.preventDefault();
    $('#create').hide();
    $('.login').hide();
    $('.signin').show();
  });

//When signin button is clicked, this will hide the signin fields and show the NewAccount with withdraw/deposit fields
  $('form#signin').submit(function(event) {
    event.preventDefault();
    var userCheck = $('input#username').val();
    var passCheck = $('input#password').val();
    if( userCheck == 'bnkUser' && passCheck == 'p1a2s3s4'){
      $('.display').text(userCheck);
      $('.balance').text(newAccount.balance);
      $('.signin').hide();
      $('#manage').show();
      $('#withdraw').show();
      $('.account').show();
    } else {
      alert('Username or Password incorrect');
      $('#create').hide();
      $('.login').hide();
      $('.signin').show();
    }
  });

  $('form#manage').submit(function(event) {
    event.preventDefault();
    var newBalance = parseInt($('input#deposit').val());
    newAccount.deposit(newBalance);
    $('.balance').text(newAccount.balance);
    $('input#deposit').val('');
  });

  $('form#withdraw').submit(function(event) {
    event.preventDefault();
    var newBalance = parseInt($('input#withdraw').val());
    newAccount.withdraw(newBalance);
    $('.balance').text(newAccount.balance);
    $('input#withdraw').val('');
  });
});



<!DOCTYPE html>
<html>
  <head>
  <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/styles.css" rel="stylesheet" type="text/css">
    <script src="js/jquery-1.11.2.js"></script>
    <script src="js/scripts.js"></script>
    <title>B&K Bank</title>
  </head>
  <body>
    <div class="row header">
      <div class="col-sm-5 title">
        <h1>
          <a href="index.html">
            B&K Bank
          </a>
        </h1>
      </div>
      <div class="col-sm-5 login">
          <button type="submit" class="btn btn-info">Login</button>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Get Started with B&K Bank</h1>
          <hr>
          <form id="create">
            <div class="form-group">
              <label for="name">Your Name</label>
              <br>
              <input id="name" type="text" required>
            </div>
            <div class="form-group">
              <label for="initial">Initial Deposit</label>
              <br>
              <input id="initial" type="number" placeholder="number" required>
            </div>
            <div class="form-group">
              <label for="user">Username</label>
              <br>
              <input id="user" type="text" required>
            </div>
            <div class="form-group">
              <label for="pass">Password</label>
              <br>
              <input id="pass" type="text" required>
            </div>
            <button type="submit" class="btn btn-info">Submit</button>

          </form>
        </div>
        <div class="col-md-12 signin">
          <form id="signin">
            <h2>Sign In</h2>
            <div class="form-group">
              <label for="username">Username</label>
              <br>
              <input id="username" type="text" placeholder="bnkUser" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <br>
              <input id="password" type="text" placeholder="p1a2s3s4" required>
            </div>
            <button type="submit" class="btn btn-info">Submit</button>
          </form>
          <p>
            (This is just for validating imput. Use this username and password:   username: bnkUser, p1a2s3s4)
          </p>
        </div>
        <div class="col-md-6" class="managed">
            <!-- Change this id -->
          <form id="manage">
            <div class="form-group">
              <label for="deposit">Deposit</label>
              <br>
              <input id="deposit" type="number" required>
            </div>
            <button type="submit" class="btn btn-info">Submit</button>
          </form>
          <form id="withdraw">
            <div class="form-group">
              <label for="withdraw">Withdraw</label>
              <br>
              <input id="withdraw" type="number" required>
            </div>
            <button type="submit" class="btn btn-info">Submit</button>
          </form>
        </div>
        <div class="account col-md-6">
          <div class="row">
            <h2>Hello <span class="display"></span></h2>
            <h3>Your Account Balance is:</h2>
            <h1 class="balance"></h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row about-us">
      <div class="col-md-2">&nbsp</div>
      <div class="col-md-8">
        <h2>Here at B&K Bank We make a Promise</h2>
        <p>
          Blimey easy peasy nigh Essex girls oo ecky thump you mean it ain't me noggin' absolute penny-dreadful, Elementary my dear Watson Shakespeare Prince Charles rambunctious lad. Dr. Watson ever so by 'eck love fish and chips Weeping Angels make a brew The Doctor muck about, her Majesty's pleasure tip-top two weeks on't trot golly pulled a right corker two weeks on't trot. How's your father pot noodle chav flip flops a bottle of plonk ear hole, terribly ear hole loo how's your father.
        </p>
      </div>
    </div>
  </body>
</html>
