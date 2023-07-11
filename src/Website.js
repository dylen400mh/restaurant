const Website = (() => {
    
    const content = document.querySelector("#content");

    const clearPage = () => {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    return { clearPage };
})();

export default Website;