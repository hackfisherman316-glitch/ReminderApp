let selectedTime = null;

function setQuickReminder(hours) {
  const now = new Date();
  selectedTime = new Date(now.getTime() + hours * 60 * 60 * 1000);

  document.getElementById("status").innerText =
    "Reminder set for: " + selectedTime;
}

function saveReminder() {
  const text = document.getElementById("text").value;

  console.log("Text:", text);
  console.log("Time:", selectedTime);

  if (!text || !selectedTime) {
    alert("Missing input");
    return;
  }

  db.collection("reminders").add({
    text: text,
    remindAt: selectedTime,
    done: false,
    createdAt: new Date()
  })
  .then(() => {
    console.log("Saved successfully");
    document.getElementById("status").innerText = "✅ Saved!";
  })
  .catch(err => {
    console.error("Firebase error:", err);
    alert("Error: " + err.message);
  });
}

function testClick() {
  alert("Button works!");
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
