let selectedTime = null;

function setQuickReminder(hours) {
  const now = new Date();
  selectedTime = new Date(now.getTime() + hours * 60 * 60 * 1000);

  document.getElementById("status").innerText =
    "Reminder set for: " + selectedTime;
}

function saveReminder() {
  const text = document.getElementById("text").value;

  if (!text || !selectedTime) {
    alert("Please enter text and select time");
    return;
  }

  db.collection("reminders").add({
    text: text,
    remindAt: selectedTime,
    done: false,
    createdAt: new Date()
  })
  .then(() => {
    document.getElementById("status").innerText = "✅ Saved!";
  });
}
