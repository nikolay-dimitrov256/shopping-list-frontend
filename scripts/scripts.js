window.addEventListener('DOMContentLoaded', initPage);

function initPage() {
    initActionsToggles();
}

function initActionsToggles() {
    const bodyElement = document.querySelector('body');

    bodyElement.addEventListener('click', (event) => {
        const actionsToggleAElement = event.target.closest('.actions-toggle');

        if (!actionsToggleAElement) {
            const activeActionsDivElements = document.querySelectorAll('.actions.visible');
            activeActionsDivElements.forEach(element => {
                element.classList.toggle('visible');
            });
            return;
        }

        const actionsDivElement = actionsToggleAElement.nextElementSibling;
        
        actionsDivElement.classList.toggle('visible');
    });
}