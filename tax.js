//start change background color===============================

function colors() {
    let color = document.getElementById('color').value;
    document.getElementById('main').style.background = color;
}
//End change background color===============================





function result() {
    let Tax = document.getElementById('city').value.trim();
    let numberOfItem = document.getElementById('quantity').value;
    if (numberOfItem == '') {
        document.getElementById('qu').innerHTML = 'Please Enter Quantity!...';
    } else {
        document.getElementById('qu').innerHTML = '';
    }
    let orderPrice = document.getElementById('price').value;


    let sameOrder = (numberOfItem * orderPrice);

    let addTax = (sameOrder * Tax) / 100;
    let totalWithTax = sameOrder + addTax;

    if (Tax == '') {
        document.getElementById('prsnt').innerHTML = "Please Select County!...";
    } else {
        document.getElementById("prsnt").innerHTML = " TAX  : => " + '  ' + Tax + ' ' + '%';
        document.getElementById('total').value = totalWithTax.toFixed(2);

    }
}


document.getElementById('btn').addEventListener('click', result);
//========================================================================


function answer(num) {
    var myAnswer = document.form.textView.value;
    var lastChar = myAnswer[myAnswer.length - 1];
    if (myAnswer.length < 48) {
        if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
            document.form.textView.value = myAnswer + num;

        } else if (num != lastChar) {
            document.form.textView.value = myAnswer.replace(lastChar, num);
        }
    }
}

function equal() {
    var sum = document.form.textView.value;
    if (sum) {
        document.form.textView.value = eval(sum);
    }
}
function clearOutPut() {
    document.form.textView.value = "";
}
function goBack() {
    var del = document.form.textView.value;
    document.form.textView.value = del.substring(0, del.length - 1);
}

function tax2() {
    let taxValue = document.querySelectorAll('form').value;
    console.log(taxValue);
}


function goBack() {

    let transfer = document.getElementsByTagName('form').value;
    console.log(transfer);
    // document.getElementById('price').value = transfer;

}




