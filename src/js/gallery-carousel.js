document.addEventListener('DOMContentLoaded', function () {
  const galleryImages = document.querySelectorAll('.gallery-img');
  const intervalTime = 3000; // Change image every 3 seconds (adjust as needed)
  let currentIndex = 0;

  function showImage(index) {
    // Remove active class from the current image
    galleryImages.forEach(img => img.classList.remove('active'));

    // Add active class to the image at the given index
    galleryImages[index].classList.add('active');

    currentIndex = index;
  }

  function nextImage() {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    showImage(nextIndex);
  }

  // Show the first image initially
  showImage(currentIndex);

  // Set up the automatic image change interval
  setInterval(nextImage, intervalTime);
});
