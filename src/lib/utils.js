export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateForm = (data, errorsText) => {
  const errors = {};

  if (!data.name?.trim()) {
    errors.name = errorsText?.name || 'Nama wajib diisi';
  }

  if (!data.email?.trim()) {
    errors.email = errorsText?.email || 'Email wajib diisi';
  } else if (!isValidEmail(data.email)) {
    errors.email =
      errorsText?.emailInvalid || 'Format email tidak valid';
  }

  if (!data.whatsapp?.trim()) {
    errors.whatsapp =
      errorsText?.whatsapp || 'Nomor WhatsApp wajib diisi';
  }

  if (!data.service) {
    errors.service =
      errorsText?.service || 'Pilih layanan';
  }

  return errors;
};

export const sendWhatsAppMessage = (phone, message) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
