(() => {
    'use strict';
    const stylizeIt = () => {
        const styleBlock = document.createElement('style');
        styleBlock.innerHTML = `
            .view-lines {
                font-family: 'IBM Plex Mono', NovaMono, monospace !important;
            }
        `;
        document.body.appendChild(styleBlock);
    };
    window.addEventListener('load', () => {
        stylizeIt();
    });
})();
