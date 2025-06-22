# 📝 Mini Task Logger

> ⏱️ A minimalist command-line tool to track short tasks, logs, and sessions with timestamps — perfect for focused productivity bursts or personal accountability.

---

## 📌 What’s This?

This is a **terminal-based task logger** I built as a **learning project** while experimenting with **Tailwind CSS** and **Python**.

✅ Helps me stay organized while studying or coding  
✅ Great way to practice CLI tools, file handling, and timestamps  
✅ Inspired by my own need to track daily focus sessions  
✅ My intro to **Tailwind CSS** for future styling experiments

---

## 🧰 Tech Stack

- 🐍 Python 3.8+  
- 🎨 Tailwind CSS (learning phase, UI coming soon...)  
- 📦 Standard Python libraries (`datetime`, `argparse`, etc.)

---

## ⚙️ How to Install

```bash
# 1️⃣ Clone the repo
git clone https://github.com/Pankaj-Shrestha/mini-task-logger.git
cd mini-task-logger

# 2️⃣ (Optional) Create a virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

No extra packages needed — it’s pure Python!

---

## 🚀 How to Use

```bash
python task_logger.py start "📖 Reading Lecture Notes"
python task_logger.py log "☕️ Took a short break"
python task_logger.py end
python task_logger.py export
```

| 🛠️ Command       | 💬 Description                             |
|------------------|-------------------------------------------|
| `start <task>`   | Starts a new session with a task name     |
| `log <note>`     | Logs a note or interruption               |
| `end`            | Ends the current session                  |
| `export`         | Outputs the full session log              |

Logs are stored in `task_log.txt` in plain text format.

---

## 📂 Example Output

```
[2025-06-17 10:00] START: 📖 Reading Lecture Notes
[2025-06-17 10:15] LOG: ☕️ Took a short break
[2025-06-17 11:00] END
```

---

## 📬 Contact

- GitHub: [@Pankaj-Shrestha](https://github.com/Pankaj-Shrestha)
- Email: pankaj.shrestha@smail.th-koeln.de | pnkjstha124@gmail.com

---

> *Built out of necessity. Improved out of curiosity.* 😄
