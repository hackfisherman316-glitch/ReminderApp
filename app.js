let selectedTime = null;

function setQuickReminder(hours) {
  const now = new Date();
  selectedTime = new Date(now.getTime() + hours * 60 * 60 * 1000);

  document.getElementById("status").innerText =
    "Reminder set for: " + selectedTime;
}

function saveReminder() {
  alert("Triggered");

  try {
    if (typeof firebase === "undefined") {
      alert("❌ Firebase NOT loaded");
      return;
    }

    if (typeof db === "undefined") {
      alert("❌ db NOT defined");
      return;
    }

    alert("✅ Firebase loaded");

  } catch (err) {
    alert("JS Crash: " + err.message);
  }
}

setInterval(checkReminders, 60000);

function checkReminders() {
  const now = new Date();

  db.collection("reminders")
    .where("remindAt", "<=", now)
    .where("done", "==", false)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();

        showNotification(data.text);

        db.collection("reminders")
          .doc(doc.id)
          .update({ done: true });
      });
    });
}

function showNotification(text) {
  if (Notification.permission === "granted") {
    new Notification("Reminder", { body: text });
  } else {
    Notification.requestPermission();
  }
}
