(() => {
    'use strict';
    const stylizeIt = () => {
        const styleBlock = document.createElement('style');
        styleBlock.innerHTML = `
            body, .blob-code, div, pre {
                font-family: 'IBM Plex Mono', NovaMono, monospace !important;
            }
        `;
        document.body.appendChild(styleBlock);
    };
    window.addEventListener('load', () => {
        stylizeIt();
    });
})();
