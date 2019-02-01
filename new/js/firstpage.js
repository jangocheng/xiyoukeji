document.getElementById('close-dialog').onclick = function() {
    document.getElementById('firstpage-dialog').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('firstpage-dialog').style.display = 'none';
    }, 1000)
}