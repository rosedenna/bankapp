function login(){
    window.location.replace("login.html")
}


function genACno(){
    acnumber = Math.floor(Math.random() * 5000);
    acnumber++;
    alert(`Your Account Number is ${acnumber}`)
   return acnumber
}

function regAcc(){
    
    // acnt=document.getElementById('acnt').value
    name= document.getElementById('name').value
    pass=document.getElementById('pass').value
    ph=document.getElementById('phno').value
    acno=genACno();
    acc = {
        acno:acno,
        name : name,
        pass : pass,
        ph:phno,
        balance:0
    }

    if(acc.ph == '' || acc.name == '' || acc.pass==''){
        alert("Please fill all fields")
        return;
    }
    else{
        localStorage.setItem(acc.acno,JSON.stringify(acc))
        alert("Registered")
        alert(`Welcome ${acc.name}`)
    }
    
    acnt=acnumber
}

function logintoAcc(){
     acnt=document.getElementById('acnt').value
     name= document.getElementById('name').value
     pass=document.getElementById('pass').value

     logAcc={
        lacno:acnt,
        lname:name,
        lpass:pass
     }
     if (logAcc.lacno === '' || logAcc.lname === '' || logAcc.lpass === '') {
        alert("Please fill in all fields.");
        return; 
    }
     let acc = JSON.parse(localStorage.getItem(logAcc.lacno));
     if(acc){
     if(logAcc.lacno==acc.acno && logAcc.lname==acc.name && logAcc.lpass == acc.pass){
        alert("Logged in")
        window.location.replace("account.html")
     }
     else
     alert("Check Your Credentials")
     }
    else
    alert("Account not found.Register")
    }



// caches.balance=0
function deposit(){
    acnum=document.getElementById('acnum').value
    amt = parseFloat(document.getElementById('amount').value);
    let acc = JSON.parse(localStorage.getItem(acnum));
        if(acc){
            acc.balance += amt;   
            localStorage.setItem(acnum,JSON.stringify(acc)); 
            alert(`${amt} deposited`)
            alert(`Your current balance is ${acc.balance}`)
    }
    else{
        alert("Invalid Account Number")
    }
}
function withdraw(){
    
    acnum=document.getElementById('a_num').value
    amt = parseFloat(document.getElementById('amnt').value);
    let acc = JSON.parse(localStorage.getItem(acnum));
        if(acc){
            if(amt<=acc.balance){
            acc.balance -= amt;   
            localStorage.setItem(acnum,JSON.stringify(acc)); 
            alert(`${amt} withdrawed`)
            alert(`Your current balance is ${acc.balance}`)
        }

            else{
                alert("Insufficient Funds")
            }
        }
    
    else{
        alert("Invalid Account Number")
    }
}
function home(){
    window.location.replace("index.html")
}