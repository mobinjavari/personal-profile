function openLink(url, action, target = '_blank')
{
    switch (action) {
        case "local":
            window.open(url, target);
            break;

        case "http":
            window.open('http://'+url, target);
            break;

        default:
            window.open('https://'+url, target);
            break;
    }
}

function backHistory() {
    history.back();
}

var copyrightYear = document.getElementById('copyright-year');
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (!event.target.matches('[role="button"]')) return;

    event.preventDefault();
    event.target.click();
});