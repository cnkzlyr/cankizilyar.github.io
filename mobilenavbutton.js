// Sayfa Yüklendiğinde ve Ekran Boyutu Değiştiğinde Mobil Menüyü Ayarla
window.onload = window.onresize = function () {
  var mobileMenuButton = document.querySelector('.mobile-menu-button');
  var mobileMenu = document.querySelector('.mobile-menu');

  if (window.innerWidth <= 768) {
    mobileMenuButton.style.display = 'block';
    mobileMenu.style.display = 'none';
  } else {
    mobileMenuButton.style.display = 'none';
    mobileMenu.style.display = 'flex'; // Flex olarak değiştirildi
  }
};

// Mobil Menü Durumunu Kontrol Etme
function toggleMobileMenu() {
  var mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex'; // Flex olarak değiştirildi
}
