document.addEventListener('DOMContentLoaded', function () {
  const reviewCards = document.querySelectorAll('.customers-card');
  const paginationLinks = document.querySelectorAll(
    '.customer-carousel-pagination .page-link'
  );
  const numReviews = reviewCards.length;
  let currentIndex = 0;

  // Initially hide all reviews except the first one
  reviewCards.forEach((card, index) => {
    if (index !== 0) {
      card.style.display = 'none';
    }
  });

  // Initially set the first pagination dot as active
  if (paginationLinks.length > 0) {
    paginationLinks[0].querySelector('span').classList.add('active');
  }

  function showReview(index) {
    // Hide all reviews
    reviewCards.forEach(card => {
      card.style.display = 'none';
    });

    // Show the review at the given index
    if (reviewCards[index]) {
      reviewCards[index].style.display = 'flex';
    }

    // Update pagination dots
    paginationLinks.forEach(link => {
      link.querySelector('span').classList.remove('active');
    });

    if (paginationLinks[index]) {
      paginationLinks[index].querySelector('span').classList.add('active');
    }

    currentIndex = index;
  }

  // Add event listeners to pagination links
  paginationLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const pageNumber = parseInt(this.dataset.page);
      showReview(pageNumber - 1); // Adjust for 0-based index
    });
  });
});
