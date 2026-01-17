"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { isValidEmail } from "@/lib/utils";

const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.errors.name;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.errors.email;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t.contact.form.errors.emailInvalid;
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = t.contact.form.errors.whatsapp;
    }

    if (!formData.service) {
      newErrors.service = t.contact.form.errors.service;
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    const message = t.contact.whatsappMessage(formData);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  
    window.open(url, "_blank");
  };
  
  

  return (
    <section id="contact" className="relative px-4 py-20">
      <div className="absolute inset-0 mx-auto -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl w-96 h-96 top-1/2" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="p-8 border md:p-12 rounded-2xl border-slate-800/50 bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-sm">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="block mb-4 text-sm font-bold tracking-widest text-cyan-400">
              {t.contact.badge}
            </span>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="text-lg text-slate-400">{t.contact.subtitle}</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <InputField
              label={t.contact.form.name}
              name="name"
              value={formData.name}
              error={errors.name}
              placeholder={t.contact.form.namePlaceholder}
              onChange={handleChange}
            />

            <InputField
              label={t.contact.form.email}
              name="email"
              type="email"
              value={formData.email}
              error={errors.email}
              placeholder={t.contact.form.emailPlaceholder}
              onChange={handleChange}
            />

            <InputField
              label={t.contact.form.whatsapp}
              name="whatsapp"
              value={formData.whatsapp}
              error={errors.whatsapp}
              placeholder={t.contact.form.whatsappPlaceholder}
              onChange={handleChange}
            />

            {/* Service */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-400">
                {t.contact.form.service}
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 rounded-lg bg-slate-950/50 border text-white ${
                  errors.service
                    ? "border-red-500/50"
                    : "border-slate-800/50 focus:border-cyan-500/50"
                }`}
              >
                <option value="" disabled>
                  {t.contact.form.servicePlaceholder}
                </option>

                {t.contact.form.services.map((service) => (
                  <option
                    key={service.value}
                    value={service.value}
                    className="bg-slate-900"
                  >
                    {service.label}
                  </option>
                ))}
              </select>

              {errors.service && (
                <p className="mt-1 text-xs text-red-400">{errors.service}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center justify-center w-full gap-2 py-4 font-bold transition bg-green-500 rounded-lg shadow-xl hover:bg-green-600 text-slate-950 shadow-green-500/20 hover:shadow-green-500/40 group"
            >
              {t.contact.form.submit}
              <ArrowRight className="w-5 h-5 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* ===== Reusable Input ===== */
const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-slate-400">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-3.5 rounded-lg bg-slate-950/50 border text-white placeholder-slate-600 transition ${
        error
          ? "border-red-500/50"
          : "border-slate-800/50 focus:border-cyan-500/50"
      }`}
    />
    {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
  </div>
);
