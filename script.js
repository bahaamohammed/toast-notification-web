let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa fa-solid fa-circle-xmark"></i>Please fix the error';
let warnMsg = '<i class="fa fa-solid fa-circle-exclamation"></i>Invalid input, check again'

function showToast(button){
    let msg = '';
    let toast = document.createElement('div');
    if(button.classList.contains('toast-success')){
        msg = successMsg;
        toast.classList.add('toast');
        toast.classList.add('success');
    } else if(button.classList.contains('toast-warn')){
        msg = warnMsg;
        toast.classList.add('toast');
        toast.classList.add('warning');
    }else{
        msg = errorMsg;
        toast.classList.add('toast');
        toast.classList.add('error');
    }
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    }, 6000);
}