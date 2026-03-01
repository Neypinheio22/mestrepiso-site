const SUPPORT_EMAIL = "ney.comercial@gmail.com";

function openSupportModal() {
  const modal = document.getElementById("supportModal");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("supportEmail")?.focus(), 50);
}

function closeSupportModal() {
  const modal = document.getElementById("supportModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Fecha clicando fora
document.addEventListener("click", (e) => {
  const modal = document.getElementById("supportModal");
  if (!modal || !modal.classList.contains("is-open")) return;
  if (e.target === modal) closeSupportModal();
});

// Fecha com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSupportModal();
});

// Submit -> mailto
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("supportForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("supportName").value.trim();
    const email = document.getElementById("supportEmail").value.trim();
    const type = document.getElementById("supportType").value;
    const phone = document.getElementById("supportPhone").value.trim();
    const message = document.getElementById("supportMessage").value.trim();

    if (!email || !message) {
      alert("Preencha o e-mail e a descrição.");
      return;
    }

    const subject = encodeURIComponent(`[Mestre Piso] ${type}`);
    const body = encodeURIComponent(
`Olá Ney,

Nova mensagem enviada pelo site Mestre Piso:

Nome: ${name || "Não informado"}
E-mail: ${email}
WhatsApp: ${phone || "Não informado"}
Assunto: ${type}

Descrição:
${message}

-------------------------
Enviado pela landing page.`
    );

    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    closeSupportModal();
  });
});
