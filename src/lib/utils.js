export const validateForm = (data) => {
  const errors = {}

  if (!data.name?.trim()) {
    errors.name = 'Nama wajib diisi'
  }

  if (!data.email?.trim()) {
    errors.email = 'Email wajib diisi'
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Format email tidak valid'
  }

  if (!data.whatsapp?.trim()) {
    errors.whatsapp = 'Nomor WhatsApp wajib diisi'
  }

  if (!data.service) {
    errors.service = 'Pilih layanan'
  }

  return errors
}

export const sendWhatsAppMessage = (data) => {
  const phone = '6281234567890' // GANTI KE NOMOR KAMU
  const message = `
Halo Growly 👋
Nama: ${data.name}
Email: ${data.email}
WhatsApp: ${data.whatsapp}
Layanan: ${data.service}
  `.trim()

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
