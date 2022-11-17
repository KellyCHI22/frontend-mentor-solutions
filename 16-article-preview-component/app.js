const shareOpen = document.getElementById('share-icon-open');
const shareClose = document.getElementById('share-icon-close');
const shareOptions = document.getElementById('share-options');


shareOpen.addEventListener('click', () => {
    shareOptions.style.display = 'block';
});

shareClose.addEventListener('click', () => {
    shareOptions.style.display = 'none';
});