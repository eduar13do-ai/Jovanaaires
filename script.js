/**
 * JOVANA AIRES - BIOLINK / BIO SITE DE ALTO PADRÃO
 * Script de Controle de Modais e Redirecionamento WhatsApp
 */

// ==========================================
// CONFIGURAÇÕES WHATSAPP
// ==========================================
const WHATSAPP_CONFIG = {
  // Número fornecido pelo cliente: +55 47 8472-0975
  phoneNumber: "5547984720975", 
  defaultGreeting: "Olá Jovana! Vim através do seu site e gostaria de mais informações."
};

// ==========================================
// CONTROLE DE MODAIS
// ==========================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openWhatsAppDirect() {
  sendCustomWhatsApp('Olá Jovana! Gostaria de agendar um atendimento para minhas unhas.');
}

// Fechar ao clicar no backdrop
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Fechar ao pressionar Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const activeModals = document.querySelectorAll('.modal-overlay.active');
    activeModals.forEach(modal => modal.classList.remove('active'));
    document.body.style.overflow = '';
  }
});

// ==========================================
// ENVIO PERSONALIZADO DE WHATSAPP
// ==========================================

function sendCustomWhatsApp(message) {
  const text = message || WHATSAPP_CONFIG.defaultGreeting;
  const encoded = encodeURIComponent(text);
  const url = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Acessibilidade por teclado
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card-action, .card-whatsapp, .quiz-opt-btn, .course-btn, .service-item');
  buttons.forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
});
