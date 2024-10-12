let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error';
let warnMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again'

function showToast(){
    let msg = '';
    if(button.classList.contains('toast-success')){
        msg = successMsg;
    } else if(button.classList.contains('toast-warn')){
        msg = warnMsg;
    }else{
        msg = errorMsg;
    }
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
}