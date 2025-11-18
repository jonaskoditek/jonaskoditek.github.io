
// --- Copy Email Functionality ---
export function copyEmailToClipboard(email) {
    const btn = document.getElementById('copyEmailBtn');
    const originalText = 'Copy Email';
    const copiedText = 'Copied ✓';
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    let successful = false;
    try {
        successful = document.execCommand('copy');
    } catch (err) {
        console.error('Fallback: Unable to copy email.', err);
    }
    document.body.removeChild(textArea);
    if (successful) {
        btn.textContent = copiedText;
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 1500);
    } else {
        console.error('Copying failed. Please copy manually:', email);
    }
}

// --- setFooterYear ---
export function setFooterYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// --- Get Parameter from URL Hash ---
export function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Make copyEmailToClipboard available globally for onclick handler
window.copyEmailToClipboard = copyEmailToClipboard;