function openLink(url, action, target = '_blanck')
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