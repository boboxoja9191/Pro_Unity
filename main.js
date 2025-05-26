function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Test uchun oddiy tekshiruv
  if (username === "Boboxoja" && password === "11111") {
    alert("Muvaffaqiyatli kirdingiz!");
    // bu yerda bosh sahifaga yo'naltirish kiritishingiz mumkin
    window.location.href = "dashboard.html"; // bu faylni keyin yaratish mumkin
    return false;
  } else {
    alert("Login yoki parol noto‘g‘ri!");
    return false;
  }
}
