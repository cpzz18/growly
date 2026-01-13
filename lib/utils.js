import { WHATSAPP_NUMBER } from './constants'

export const sendWhatsAppMessage = (formData) => {
  const message = `Halo Growly! 

Nama: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Layanan: ${formData.service}

Saya tertarik dengan layanan Growly.`
  
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank')
}

export const validateForm = (formData) => {
  const errors = {}
  
  if (!formData.name.trim()) {
    errors.name = 'Nama harus diisi'
  }
  
  if (!formData.email.trim()) {
    errors.email = 'Email harus diisi'
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email tidak valid'
  }
  
  if (!formData.whatsapp.trim()) {
    errors.whatsapp = 'WhatsApp harus diisi'
  }
  
  if (!formData.service) {
    errors.service = 'Pilih layanan'
  }
  
  return errors
}