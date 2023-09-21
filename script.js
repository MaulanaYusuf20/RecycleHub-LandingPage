function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status, // checkbox
  };
}

// validasi inputan kode pos pasti number
function isNumber(str) {
  return !isNaN(str); // true / false
}

// validasi jika checkbox sudah di ceklis
function checkboxIsChecked() {
  const checkbox = document.getElementById("status");
  return checkbox.checked; // true / false
}

// validasi jika form terisi semua
function validateFormData(formData) {
  // validasi form terisi semua
  if (!formData.name || !formData.email || !formData.city) {
    return false;
  }

  // validasi jika zipcode bukan angka
  if (!isNumber(formData.zipCode)) {
    return false;
  }

  // validasi jika checkbox belum dicentang
  if (!checkboxIsChecked()) {
    return false;
  }

  return true;
}

// ketika tombol submit di klik
function submit() {
  const warning = document.getElementById("warning");
  if (!validateFormData(handleGetFormData())) {
    warning.innerHTML = "Periksa form anda sekali lagi";
  } else {
    warning.innerHTML = "";
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", submit);
