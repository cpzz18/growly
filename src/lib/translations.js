export const translations = {
    id: {
      // Navbar
      nav: {
        services: 'LAYANAN',
        benefits: 'KEUNTUNGAN',
        packages: 'PAKET',
        contact: 'HUBUNGI KAMI'
      },
      
      // Hero Section
      hero: {
        badge: 'TERSEDIA UNTUK PROJECT',
        title1: 'Transformasi',
        title2: 'Visi Digital Anda',
        subtitle: 'Spesialis pembuatan website profesional dan bantuan pengerjaan tugas programming.',
        highlight: 'Cepat, berkualitas, terpercaya.',
        cta1: 'MULAI PROJECT',
        cta2: 'LIHAT PAKET',
        stats: {
          projects: 'PROJECT SELESAI',
          satisfaction: 'KEPUASAN KLIEN',
          experience: 'TAHUN PENGALAMAN',
          response: 'WAKTU RESPON'
        }
      },
      
      // Services Section
      services: {
        badge: 'LAYANAN KAMI',
        title: 'Apa yang Kami Tawarkan',
        subtitle: 'Solusi lengkap untuk kebutuhan digital Anda',
        web: {
          title: 'Pembuatan Website',
          desc: 'Website profesional dengan teknologi modern seperti React, Next.js, dan WordPress. Dari landing page hingga e-commerce.',
          features: [
            'Responsive Design',
            'SEO Optimized',
            'Fast Loading',
            'Custom Design'
          ],
          tag: 'WEB DEV'
        },
        coding: {
          title: 'Joki Tugas & Project',
          desc: 'Bantuan pengerjaan tugas kuliah, skripsi, project akhir dengan kualitas terjamin dan tepat waktu.',
          features: [
            'Berbagai Bahasa Pemrograman',
            'Dokumentasi Lengkap',
            'Revisi Gratis',
            'Konsultasi'
          ],
          tag: 'CODING'
        }
      },
      
      // Benefits Section
      benefits: {
        badge: 'MENGAPA MEMILIH KAMI',
        title: 'Keunggulan Kami',
        subtitle: 'Keunggulan yang membuat kami berbeda',
        items: [
          {
            title: 'Kualitas Terjamin',
            desc: 'Tim berpengalaman dengan portfolio yang terbukti'
          },
          {
            title: 'Tepat Waktu',
            desc: 'Komitmen deadline yang sesuai kesepakatan'
          },
          {
            title: 'Privasi Terjaga',
            desc: 'Data dan project Anda dijamin kerahasiaannya'
          },
          {
            title: 'Support 24/7',
            desc: 'Tim support siap membantu kapan saja'
          }
        ]
      },
      
      // How It Works
      workflow: {
        badge: 'ALUR KERJA',
        title: 'Cara Kerja',
        subtitle: 'Proses mudah dalam 4 langkah',
        steps: [
          {
            title: 'Konsultasi',
            desc: 'Ceritakan kebutuhan Anda'
          },
          {
            title: 'Penawaran',
            desc: 'Dapatkan estimasi biaya & waktu'
          },
          {
            title: 'Pengerjaan',
            desc: 'Tim kami mulai bekerja'
          },
          {
            title: 'Selesai',
            desc: 'Project selesai & siap digunakan'
          }
        ]
      },
      
      // Packages
      packages: {
        badge: 'HARGA',
        title: 'Pilih Paket Anda',
        subtitle: 'Pilih paket yang sesuai dengan kebutuhan Anda',
        popular: 'PALING POPULER',
        selectPlan: 'PILIH PAKET',
        plans: [
          {
            name: 'STARTER',
            price: '500K',
            priceDetail: 'mulai dari',
            desc: 'Cocok untuk project sederhana',
            features: [
              'Landing Page / Tugas Sederhana',
              'Responsive Design',
              '1x Revisi',
              'Delivery 3-5 hari'
            ]
          },
          {
            name: 'PRO',
            price: '2JT',
            priceDetail: 'mulai dari',
            desc: 'Untuk kebutuhan bisnis',
            features: [
              'Multi-page Website / Project Kompleks',
              'Custom Design',
              '3x Revisi',
              'SEO Basic',
              'Delivery 1-2 minggu'
            ]
          },
          {
            name: 'ENTERPRISE',
            price: 'CUSTOM',
            priceDetail: 'harga',
            desc: 'Solusi lengkap untuk bisnis besar',
            features: [
              'Full Website / Sistem Kompleks',
              'Premium Design',
              'Unlimited Revisi',
              'SEO Advanced',
              'Maintenance 1 Bulan'
            ]
          }
        ]
      },
      
      // Contact Form
      contact: {
        badge: 'MULAI SEKARANG',
        title: 'Mulai Project Anda',
        subtitle: 'Hubungi kami sekarang dan dapatkan konsultasi gratis',
        form: {
          name: 'NAMA LENGKAP',
          namePlaceholder: 'John Doe',
          email: 'EMAIL',
          emailPlaceholder: 'john@example.com',
          whatsapp: 'WHATSAPP',
          whatsappPlaceholder: '08123456789',
          service: 'LAYANAN',
          servicePlaceholder: 'Pilih layanan',
          services: [
            { value: '', label: 'Pilih layanan' },
            { value: 'Pembuatan Website', label: 'Pembuatan Website' },
            { value: 'Joki Tugas', label: 'Joki Tugas' },
            { value: 'Keduanya', label: 'Keduanya' }
          ],
          submit: 'KIRIM PESAN VIA WHATSAPP',
          errors: {
            name: 'Nama harus diisi',
            email: 'Email harus diisi',
            emailInvalid: 'Email tidak valid',
            whatsapp: 'WhatsApp harus diisi',
            service: 'Pilih layanan'
          }
        },
        whatsappMessage: (data) => `Halo Growly! 
  
  Nama: ${data.name}
  Email: ${data.email}
  WhatsApp: ${data.whatsapp}
  Layanan: ${data.service}
  
  Saya tertarik dengan layanan Growly.`
      },
      
      // Footer
      footer: {
        copyright: 'Semua hak dilindungi.',
        social: {
          instagram: 'INSTAGRAM',
          twitter: 'TWITTER',
          linkedin: 'LINKEDIN'
        }
      }
    },
    
    en: {
      // Navbar
      nav: {
        services: 'SERVICES',
        benefits: 'BENEFITS',
        packages: 'PACKAGES',
        contact: 'CONTACT US'
      },
      
      // Hero Section
      hero: {
        badge: 'AVAILABLE FOR PROJECTS',
        title1: 'Transform Your',
        title2: 'Digital Vision',
        subtitle: 'Specialists in professional website development and programming assignment assistance.',
        highlight: 'Fast, quality, trusted.',
        cta1: 'START PROJECT',
        cta2: 'VIEW PACKAGES',
        stats: {
          projects: 'PROJECTS DONE',
          satisfaction: 'CLIENT SATISFACTION',
          experience: 'YEARS EXPERIENCE',
          response: 'RESPONSE TIME'
        }
      },
      
      // Services Section
      services: {
        badge: 'OUR SERVICES',
        title: 'What We Offer',
        subtitle: 'Complete solutions for your digital needs',
        web: {
          title: 'Website Development',
          desc: 'Professional websites with modern technologies like React, Next.js, and WordPress. From landing pages to e-commerce.',
          features: [
            'Responsive Design',
            'SEO Optimized',
            'Fast Loading',
            'Custom Design'
          ],
          tag: 'WEB DEV'
        },
        coding: {
          title: 'Assignment & Project Help',
          desc: 'Assistance with college assignments, thesis, final projects with guaranteed quality and on-time delivery.',
          features: [
            'Various Programming Languages',
            'Complete Documentation',
            'Free Revisions',
            'Consultation'
          ],
          tag: 'CODING'
        }
      },
      
      // Benefits Section
      benefits: {
        badge: 'WHY CHOOSE US',
        title: 'Our Advantages',
        subtitle: 'What makes us different',
        items: [
          {
            title: 'Guaranteed Quality',
            desc: 'Experienced team with proven portfolio'
          },
          {
            title: 'On Time',
            desc: 'Committed to agreed deadlines'
          },
          {
            title: 'Privacy Protected',
            desc: 'Your data and projects are guaranteed confidential'
          },
          {
            title: '24/7 Support',
            desc: 'Support team ready to help anytime'
          }
        ]
      },
      
      // How It Works
      workflow: {
        badge: 'WORKFLOW',
        title: 'How It Works',
        subtitle: 'Easy process in 4 steps',
        steps: [
          {
            title: 'Consultation',
            desc: 'Tell us your needs'
          },
          {
            title: 'Quotation',
            desc: 'Get cost & time estimation'
          },
          {
            title: 'Development',
            desc: 'Our team starts working'
          },
          {
            title: 'Delivery',
            desc: 'Project completed & ready to use'
          }
        ]
      },
      
      // Packages
      packages: {
        badge: 'PRICING',
        title: 'Choose Your Plan',
        subtitle: 'Select the package that suits your needs',
        popular: 'MOST POPULAR',
        selectPlan: 'SELECT PLAN',
        plans: [
          {
            name: 'STARTER',
            price: '$50',
            priceDetail: 'starting from',
            desc: 'Perfect for simple projects',
            features: [
              'Landing Page / Simple Assignment',
              'Responsive Design',
              '1x Revision',
              'Delivery 3-5 days'
            ]
          },
          {
            name: 'PRO',
            price: '$200',
            priceDetail: 'starting from',
            desc: 'For business needs',
            features: [
              'Multi-page Website / Complex Project',
              'Custom Design',
              '3x Revisions',
              'Basic SEO',
              'Delivery 1-2 weeks'
            ]
          },
          {
            name: 'ENTERPRISE',
            price: 'CUSTOM',
            priceDetail: 'price',
            desc: 'Complete solution for large businesses',
            features: [
              'Full Website / Complex System',
              'Premium Design',
              'Unlimited Revisions',
              'Advanced SEO',
              '1 Month Maintenance'
            ]
          }
        ]
      },
      
      // Contact Form
      contact: {
        badge: 'GET STARTED',
        title: 'Start Your Project',
        subtitle: 'Contact us now and get free consultation',
        form: {
          name: 'FULL NAME',
          namePlaceholder: 'John Doe',
          email: 'EMAIL',
          emailPlaceholder: 'john@example.com',
          whatsapp: 'WHATSAPP',
          whatsappPlaceholder: '08123456789',
          service: 'SERVICE',
          servicePlaceholder: 'Select service',
          services: [
            { value: '', label: 'Select service' },
            { value: 'Website Development', label: 'Website Development' },
            { value: 'Assignment Help', label: 'Assignment Help' },
            { value: 'Both', label: 'Both' }
          ],
          submit: 'SEND MESSAGE VIA WHATSAPP',
          errors: {
            name: 'Name is required',
            email: 'Email is required',
            emailInvalid: 'Invalid email',
            whatsapp: 'WhatsApp is required',
            service: 'Select a service'
          }
        },
        whatsappMessage: (data) => `Hello Growly! 
  
  Name: ${data.name}
  Email: ${data.email}
  WhatsApp: ${data.whatsapp}
  Service: ${data.service}
  
  I'm interested in Growly's services.`
      },
      
      // Footer
      footer: {
        copyright: 'All rights reserved.',
        social: {
          instagram: 'INSTAGRAM',
          twitter: 'TWITTER',
          linkedin: 'LINKEDIN'
        }
      }
    }
  }