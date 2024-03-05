const butInstall = document.getElementById('buttonInstall');

/* logic for when and how to install the PWA.  */

window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// This listener fires when the user clicks the "install" button.
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null; //  sets window.deferredPrompt to null after the prompt.
  butInstall.classList.toggle('hidden', true); // hides the install button after the prompt.
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
