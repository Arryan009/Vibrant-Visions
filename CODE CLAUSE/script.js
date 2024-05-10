function filterImages(tag) {
    var images = document.querySelectorAll('.image-container img');
    images.forEach(function(image) {
        if (tag === '' || image.dataset.tags.includes(tag)) {
            image.classList.remove('hidden');
        } else {
            image.classList.add('hidden');
        }
    });
}