# Mini Task Logger

Mini Task Logger is a lightweight terminal-based CLI tool to log small tasks, thoughts, and focus sessions — built as a fun learning project to explore Python 🐍 and Tailwind CSS 🎨.

---

<div align="center">

# `Mini Task Logger`

![Badge](https://img.shields.io/badge/built%20for-learning%20%26%20practice-blue)
![Top Language](https://img.shields.io/badge/language-python-yellow)
![UI Ready](https://img.shields.io/badge/ui-tailwind%20ready-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Pankaj-Shrestha/mini-task-logger)

<h4><code>Mini Task Logger</code> is a terminal-based tracker I built while learning how to combine Python scripting with clean UI plans using Tailwind CSS.</h4>

[Purpose](#purpose) • [Features](#features) • [Installation](#installation) • [Usage](#usage) • [Example-output](#example-output)

</div>

---

## Navigation

- [Purpose](#purpose)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Example Output](#example-output)

---

## Purpose

This project started as a hands-on way to:

- Learn Python scripting by building something practical
- Practice CLI design and timestamped logging
- Explore how I might later style this tool with **Tailwind CSS**
- Improve my productivity while studying or coding

It's simple, fast, and actually useful in my daily flow.

---

## Features

- ✅ Start/stop logging sessions from the terminal
- 🕒 Timestamp every action (start, log, end)
- 🗒️ Add quick notes or distractions mid-task
- 💾 Save everything to a local file (`task_log.txt`)
- 🌱 No external Python packages required

---

## Installation

```bash
# Clone the repo
git clone https://github.com/Pankaj-Shrestha/mini-task-logger.git
cd mini-task-logger

# (Optional) Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

That's it. It's 100% standard-library Python!

---

## Usage

Run the logger from your terminal:

```bash
python task_logger.py start "Studying for exam"
python task_logger.py log "Took a coffee break"
python task_logger.py end
python task_logger.py export
```

### Commands

| Command         | What It Does                                |
|----------------|----------------------------------------------|
| `start <task>` | Starts a new task with the current timestamp |
| `log <note>`   | Logs a message with timestamp                |
| `end`          | Ends the task with timestamp                 |
| `export`       | Displays all entries in the log file         |

---

## Example Output

```
[2025-06-17 10:00] START: Studying for exam
[2025-06-17 10:20] LOG: Took a coffee break
[2025-06-17 11:15] END
```

All logs are saved to `task_log.txt` in the project directory.

---

## Contact

Feel free to reach out or follow my projects here:

- GitHub: [@Pankaj-Shrestha](https://github.com/Pankaj-Shrestha)
- Email: pankaj.shrestha@smail.th-koeln.com

---

> Made for myself, shared for fun — with Python, curiosity, and coffee ☕️
