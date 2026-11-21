// Floating chatbot widget - loads my Lab 3 Chatling bot (KNIME Study Buddy)
(function () {
  const BOT_URL = "https://share.chatling.ai/s/xKdzfq1g5KT7gqK";

  const panel = document.createElement("div");
  panel.className = "chat-panel";
  panel.innerHTML =
    '<iframe title="KNIME Study Buddy chatbot" src="' + BOT_URL + '" allow="clipboard-write"></iframe>';

  const launcher = document.createElement("button");
  launcher.className = "chat-launcher";
  launcher.setAttribute("aria-label", "Open chatbot");
  launcher.textContent = "💬";

  const hint = document.createElement("div");
  hint.className = "chat-hint";
  hint.textContent = "Stuck on a node? Ask me!";

  document.body.append(panel, launcher, hint);

  function toggle(open) {
    panel.classList.toggle("open", open);
    launcher.textContent = open ? "✕" : "💬";
    hint.style.display = "none";
  }
  launcher.onclick = () => toggle(!panel.classList.contains("open"));

  // any element with data-open-chat opens the bot too
  document.querySelectorAll("[data-open-chat]").forEach(el =>
    el.addEventListener("click", e => { e.preventDefault(); toggle(true); })
  );
})();
