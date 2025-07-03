import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/47751ea86b2dad4cb2960b3c39f967af", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New contact form submission!",
          _template: "table"
        })
      });

      const data = await response.json();
      if (data.success === "true") {
        setFormData({ name: "", email: "", message: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }
    } catch (err) {
      console.error("Error sending form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section" id="contact">
      {/* Centered Thank You Popup */}
      {showPopup && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="popup-box">
            <p>🎉 Thank you <b>{formData.name || "dear user"}</b>!<br /> I'll get back to you soon.</p>
          </div>
        </motion.div>
      )}

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>

      <div className="contact-content">
        <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
          <center><FaEnvelope className="contact-icon" /></center>
          <h3>Email</h3>
          <p>yerukumkarthik@gmail.com</p>
        </motion.div>

        <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
          <center><FaPhone className="contact-icon" /></center>
          <h3>Phone</h3>
          <p>+91 8977238447</p>
        </motion.div>

        <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
          <center><FaMapMarkerAlt className="contact-icon" /></center>
          <h3>Location</h3>
          <p>Andhra Pradesh, India</p>
        </motion.div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          className="contact-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ display: "inline-block" }}
            >
              ⏳
            </motion.span>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>

      <div className="social-links">
        <motion.a href="https://github.com/yerukumkarthik" target="_blank" whileHover={{ scale: 1.2 }}>
          <FaGithub />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/karthik-yerukum-557b44254/" target="_blank" whileHover={{ scale: 1.2 }}>
          <FaLinkedin />
        </motion.a>
        <motion.a href="https://www.instagram.com/kihtrak108/" target="_blank" whileHover={{ scale: 1.2 }}>
          <FaInstagram />
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
