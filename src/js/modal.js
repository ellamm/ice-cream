document.addEventListener('DOMContentLoaded', function () {
  const actionArrows = document.querySelectorAll('.action-arrow');
  const closeButtons = document.querySelectorAll('.modal .close-btn');
  const modals = document.querySelectorAll('.modal');

  actionArrows.forEach(arrow => {
    arrow.addEventListener('click', function () {
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function () {
      const modal = this.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});
