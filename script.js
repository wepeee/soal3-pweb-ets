document.getElementById("form").addEventListener("submit", function (event) {
  let isValid = true;

  alert("terimakasih");

  document.getElementById("namaError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("telError").textContent = "";
  document.getElementById("pesanError").textContent = "";

  const nama = document.getElementById("nama");
  if (nama.value.trim() === "") {
    document.getElementById("namaError").textContent = "Nama harus diisi.";
    isValid = false;
  }

  const email = document.getElementById("email");
  if (!email.validity.valid) {
    document.getElementById("emailError").textContent = "Email tidak valid.";
    isValid = false;
  }

  const notelp = document.getElementById("notelp");
  if (!notelp.validity.valid) {
    document.getElementById("telError").textContent =
      "Nomor telepon harus terdiri dari 10-12 digit.";
    isValid = false;
  }

  const pesan = document.getElementById("pesan");
  if (pesan.value.trim() === "") {
    document.getElementById("pesanError").textContent = "Pesan harus diisi.";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});
