function OpenLink(url,protocol)
{
    switch (protocol) {
        case "page":
            location.href = url;
            break;

        case "http":
            location.href = 'http://'+url;
            break;
    
        default:
            location.href = 'https://'+url;
            break;
    }
}

function Back() {
    history.back();
}