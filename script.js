let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa fa-solid fa-circle-xmark"></i>Please fix the error';
let warnMsg = '<i class="fa fa-solid fa-circle-exclamation"></i>Invalid input, check again';

function showToast(button) {
    let msg = '';
    let toast = document.createElement('div');

    // Determine the type of toast based on the button clicked
    if (button.classList.contains('toast-success')) {
        msg = successMsg;
        toast.classList.add('toast', 'success');
    } else if (button.classList.contains('toast-warn')) {
        msg = warnMsg;
        toast.classList.add('toast', 'warning');
    } else {
        msg = errorMsg;
        toast.classList.add('toast', 'error');
    }

    toast.innerHTML = `
        ${msg}
        <i class="fa fa-solid fa-circle-xmark close-toast"></i>
    `;

    // Add the toast to the DOM
    toastBox.appendChild(toast);

    // Add click event listener to the close icon
    toast.querySelector('.close-toast').addEventListener('click', function() {
        toast.remove();  // Remove the toast when the close icon is clicked
    });

    // Automatically fade out and remove the toast after 6 seconds
    setTimeout(() => {
        toast.classList.add('fade-out');
    }, 5500);

    setTimeout(() => {
        toast.remove();
    }, 6000);
}
