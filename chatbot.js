/* ===== CHATBOT WIDGET – Sia Moda Evi Randevu ===== */
(function () {
  'use strict';

  /* ---------- Configuration ---------- */
  const TARGET_EMAIL = 'aysekeklik1073@gmail.com';

  const STEPS = [
    { key: 'name', question: 'Merhaba! 👋 Sia Moda Evi\'ne hoş geldiniz.\nRandevu almak için bilgilerinizi alayım.\n\nİsim ve soyisminizi yazabilir misiniz?' },
    { key: 'email', question: 'Teşekkürler! ✉️ E-posta adresinizi yazabilir misiniz?' },
    { key: 'phone', question: 'Harika! 📱 Telefon numaranızı alabilir miyim?' },
    { key: 'category', question: 'Hangi kategoriyle ilgileniyorsunuz?', options: ['Gelinlik', 'Kınalık', 'Aksesuar'] },
    { key: 'date', question: '📅 Randevu tarihini yazabilir misiniz?\n(gg.aa.yyyy formatında, ör: 15.04.2026)' },
    { key: 'time', question: '🕐 Saat kaçı tercih edersiniz?\n(ör: 14:00)' }
  ];

  const answers = {};
  let currentStep = 0;

  /* ---------- Build DOM ---------- */
  function createWidget() {
    // Toggle button
    const btn = document.createElement('button');
    btn.className = 'chatbot-toggle';
    btn.id = 'chatbot-toggle';
    btn.setAttribute('aria-label', 'Randevu Chatbot');
    btn.innerHTML = '<i class="fas fa-comments"></i><i class="fas fa-times"></i>';

    // Panel
    const panel = document.createElement('div');
    panel.className = 'chatbot-panel';
    panel.id = 'chatbot-panel';
    panel.innerHTML = `
      <div class="chatbot-header">
        <div class="chatbot-header-icon"><i class="fas fa-calendar-check"></i></div>
        <div class="chatbot-header-text">
          <h4>Sia Moda Evi</h4>
          <p>Randevu Asistanı</p>
        </div>
      </div>
      <div class="chatbot-messages" id="chatbot-messages"></div>
      <div class="chatbot-input" id="chatbot-input-area">
        <input type="text" id="chatbot-input" placeholder="Mesajınızı yazın..." autocomplete="off">
        <button id="chatbot-send" aria-label="Gönder"><i class="fas fa-paper-plane"></i></button>
      </div>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(panel);

    // Event listeners
    btn.addEventListener('click', togglePanel);
    document.getElementById('chatbot-send').addEventListener('click', handleSend);
    document.getElementById('chatbot-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleSend();
    });
  }

  /* ---------- Toggle ---------- */
  function togglePanel() {
    const btn = document.getElementById('chatbot-toggle');
    const panel = document.getElementById('chatbot-panel');
    const isOpen = panel.classList.contains('visible');

    if (isOpen) {
      panel.classList.remove('visible');
      btn.classList.remove('open');
    } else {
      panel.classList.add('visible');
      btn.classList.add('open');
      // Start conversation on first open
      const msgs = document.getElementById('chatbot-messages');
      if (msgs.children.length === 0) {
        showTypingThenMessage(STEPS[0].question, STEPS[0].options);
      }
      setTimeout(() => document.getElementById('chatbot-input').focus(), 400);
    }
  }

  /* ---------- Messages ---------- */
  function addMessage(text, sender, extra) {
    const msgs = document.getElementById('chatbot-messages');
    const div = document.createElement('div');
    div.className = 'chat-msg ' + sender;
    div.textContent = text;
    msgs.appendChild(div);

    if (extra) {
      msgs.appendChild(extra);
    }

    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTypingThenMessage(text, options) {
    const msgs = document.getElementById('chatbot-messages');

    // Typing indicator
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;

    setTimeout(() => {
      typing.remove();

      // Split multi-line bot messages
      const lines = text.split('\n');
      lines.forEach((line, i) => {
        if (line.trim()) {
          setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'chat-msg bot';
            div.textContent = line;
            msgs.appendChild(div);
            msgs.scrollTop = msgs.scrollHeight;
          }, i * 200);
        }
      });

      // Show category options if provided
      if (options) {
        setTimeout(() => {
          const optDiv = document.createElement('div');
          optDiv.className = 'chat-options';
          options.forEach(opt => {
            const b = document.createElement('button');
            b.textContent = opt;
            b.addEventListener('click', () => {
              optDiv.remove();
              selectOption(opt);
            });
            optDiv.appendChild(b);
          });
          msgs.appendChild(optDiv);
          msgs.scrollTop = msgs.scrollHeight;
        }, lines.length * 200 + 100);
      }
    }, 800);
  }

  /* ---------- Handle User Input ---------- */
  function handleSend() {
    const input = document.getElementById('chatbot-input');
    const val = input.value.trim();
    if (!val) return;

    input.value = '';
    processAnswer(val);
  }

  function selectOption(val) {
    processAnswer(val);
  }

  function processAnswer(val) {
    addMessage(val, 'user');

    const step = STEPS[currentStep];

    // Basic validation
    if (step.key === 'email' && !val.includes('@')) {
      showTypingThenMessage('Lütfen geçerli bir e-posta adresi girin. ✉️');
      return;
    }
    if (step.key === 'phone' && val.replace(/\D/g, '').length < 7) {
      showTypingThenMessage('Lütfen geçerli bir telefon numarası girin. 📱');
      return;
    }

    answers[step.key] = val;
    currentStep++;

    if (currentStep < STEPS.length) {
      const next = STEPS[currentStep];
      // Hide text input if category step (has options)
      if (next.options) {
        document.getElementById('chatbot-input-area').style.display = 'none';
      } else {
        document.getElementById('chatbot-input-area').style.display = '';
      }
      showTypingThenMessage(next.question, next.options);
    } else {
      // All done
      document.getElementById('chatbot-input-area').style.display = 'none';
      showSummaryAndSend();
    }
  }

  /* ---------- Summary & Email ---------- */
  function showSummaryAndSend() {
    const msgs = document.getElementById('chatbot-messages');

    setTimeout(() => {
      // Typing
      const typing = document.createElement('div');
      typing.className = 'typing-indicator';
      typing.innerHTML = '<span></span><span></span><span></span>';
      msgs.appendChild(typing);
      msgs.scrollTop = msgs.scrollHeight;

      setTimeout(() => {
        typing.remove();

        // Thank you message
        const thanks = document.createElement('div');
        thanks.className = 'chat-msg bot';
        thanks.textContent = 'Teşekkürler! Randevu bilgileriniz hazırlanıyor... ✨';
        msgs.appendChild(thanks);

        setTimeout(() => {
          // Summary card
          const summary = document.createElement('div');
          summary.className = 'chat-summary';
          summary.innerHTML = `
            <strong>📋 Randevu Özeti</strong><br><br>
            <strong>İsim:</strong> ${answers.name}<br>
            <strong>E-posta:</strong> ${answers.email}<br>
            <strong>Telefon:</strong> ${answers.phone}<br>
            <strong>Kategori:</strong> ${answers.category}<br>
            <strong>Tarih:</strong> ${answers.date}<br>
            <strong>Saat:</strong> ${answers.time}
          `;
          msgs.appendChild(summary);
          msgs.scrollTop = msgs.scrollHeight;

          // Send email
          sendEmail();

          setTimeout(() => {
            const confirm = document.createElement('div');
            confirm.className = 'chat-msg bot';
            confirm.textContent = 'Randevu talebiniz başarıyla gönderildi! 🎉 En kısa sürede size dönüş yapacağız.';
            msgs.appendChild(confirm);

            // Restart button
            const restart = document.createElement('div');
            restart.className = 'chat-restart';
            const rBtn = document.createElement('button');
            rBtn.textContent = '🔄 Yeni Randevu Al';
            rBtn.addEventListener('click', restartChat);
            restart.appendChild(rBtn);
            msgs.appendChild(restart);
            msgs.scrollTop = msgs.scrollHeight;
          }, 600);
        }, 500);
      }, 800);
    }, 300);
  }

  function sendEmail() {
    const subject = encodeURIComponent('Yeni Randevu Talebi - ' + answers.name);
    const body = encodeURIComponent(
      'Yeni Randevu Talebi\n' +
      '========================\n\n' +
      'İsim Soyisim: ' + answers.name + '\n' +
      'E-posta: ' + answers.email + '\n' +
      'Telefon: ' + answers.phone + '\n' +
      'İlgilendiği Kategori: ' + answers.category + '\n' +
      'Tarih: ' + answers.date + '\n' +
      'Saat: ' + answers.time + '\n\n' +
      '========================\n' +
      'Bu mesaj Sia Moda Evi web sitesi chatbot\'u tarafından gönderilmiştir.'
    );

    // Use mailto link (works universally without API keys)
    const mailtoLink = 'mailto:' + TARGET_EMAIL + '?subject=' + subject + '&body=' + body;

    // Open in hidden iframe to avoid navigation, fallback to window
    try {
      const a = document.createElement('a');
      a.href = mailtoLink;
      a.target = '_blank';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => a.remove(), 100);
    } catch (e) {
      window.location.href = mailtoLink;
    }
  }

  /* ---------- Restart ---------- */
  function restartChat() {
    currentStep = 0;
    Object.keys(answers).forEach(k => delete answers[k]);
    const msgs = document.getElementById('chatbot-messages');
    msgs.innerHTML = '';
    document.getElementById('chatbot-input-area').style.display = '';
    showTypingThenMessage(STEPS[0].question, STEPS[0].options);
  }

  /* ---------- Init ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }
})();
