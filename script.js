const updateButton = document.querySelector('#updateButton');
const versionLabel = document.querySelector('#version');

updateButton.addEventListener('click', () => {
  versionLabel.textContent = 'Phiên bản 2.0';
  updateButton.textContent = 'Đã cập nhật';
});
