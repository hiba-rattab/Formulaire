let myform = document.getElementById('aform');


myform.addEventListener("submit", function(e){
    e.preventDefault();
    form_verify();
})
let myname = document.getElementById('name');
let myprenom=document.getElementById('prenom');
let myage=document.getElementById('age');
let mymail=document.getElementById('mail');
let myadress=document.getElementById('adr');
let myobjectif=document.getElementById('obj');

function seterror(elem,message)
{
    const formcontrol=elem.parentElement;
    const small=formcontrol.queryselector('small');
    small.innertext=message
    formcontrol.className="form-control error";
}
function setsuccess(elem)
{
    const formcontrol=elem.parentElement;
    formcontrol.className="form-control error";

}
function email_verify(mail)
{
    const formcontrol=elem.parentElement;
    formcontrol.className="form-control error";
}

function form_verify()
{
if (myname==="")
{
    let message="cette case ne dois pas etre page";
    seterror(myname,message);
}
else{
    setsuccess(myname)
}
var str="myname";
for(var i=0; i<str.length;i++)
{
    if(!myname.toUppercase[i]===myname[i]){
        let message="le nom doit etre en majuscule";
        seterror(myname,message);
    }
    else{
        setsuccess(myname)
    }
}
if (myprenom==="")
{
    let message="cette case ne dois pas etre page";
    seterror(myprenom,message);
}
else if(!myprenom.toUpperCase[0]===myprenom[0])
{
    let message="la premiere lettre du prenom doit etre en majuscule";
    seterror(myprenom,message);
}
else{
    setsuccess(myprenom,message)
}
var number=age
if(number.value<=18)
{
    let message="le candidat doit avoir plus de 18ans";
    seterror(age,message);
}
else{
    setsuccess(age)
}
var str="mymail"
if(!email_verify(mail))
{
    let message="l'email n'est pas valide";
    seterror(mail,message);
}
else{
    setsuccess(mail)
}
var str="adresse"
if(!myadresse==="")
{
    letmessage="cette case ne doit pas etre vide";
    seterror(myadresse,message);
}
else if((str.value.length>300))
{
    let message="cette case ne doit pas dépasser 300 caractères";
    seterror(myadress,message)
}
else{
    setsuccess(myadress)
}
var str="myobjectif"
for(i=0;i<str.length;i++)
{
    if(033<str[i].charCodeAt<193)
    {
        let message="l'objectif ne doit pas contenir des caractères spéciaux";
        seterror(myobjectif,message);
    }
    else{
        setsuccess(myobjectif)
    }
}
}

