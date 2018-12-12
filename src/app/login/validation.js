function validation(inputText)
{
    console.log('sdfsdf');
    alert("working")
  var mailformat =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
if(inputText.value.match(mailformat))
{
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}
