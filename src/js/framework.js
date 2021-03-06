import { Dark, Dialog, Notify, QSpinnerGears } from "quasar";

const pushNotification = (title, body) => {
  const { protocol, host } = window.location;
  const icon = `${protocol}//${host}/icons/favicon-32x32.png`;

  const swNotify = () => {
    if (!("serviceWorker" in navigator))
      return console.error("No service worker");

    navigator.serviceWorker.getRegistration().then(registration => {
      if (registration) registration.showNotification(title, { body, icon });
      else new Notification(title, { body, icon });
    });
  };

  if (!("Notification" in window))
    return console.error("No notification support");

  if (Notification.permission === "granted") swNotify();
  else if (Notification.permission !== "denied")
    Notification.requestPermission().then(
      permission => permission === "granted" && swNotify()
    );
};

const notify = (message, type = "negative", timeout = 5000) => {
  return Notify.create({
    type,
    message,
    timeout
  });
};

const confirm = message => {
  return Dialog.create({
    message,
    title: "Confirmation",
    dark: Dark.isActive,
    preventClose: true,
    cancel: true
  });
};

const loader = (title, message) => {
  return Dialog.create({
    title,
    message,
    dark: Dark.isActive,
    persistent: true,
    ok: false,
    progress: {
      spinner: QSpinnerGears,
      color: "primary"
    }
  });
};

export { pushNotification, notify, confirm, loader };
