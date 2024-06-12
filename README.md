# StudyPro

StudyPro is a web application designed to help students manage their studying and reduce procrastination. It includes tools such as a Pomodoro timer and task management with abstraction and decomposition.

## Features

- **Pomodoro Timer**: Customise work and rest intervals to boost productivity.
- **Task Management**: Break down large assignment/tasks into smaller, manageable subproblems.
- **Clean and Minimalist Design**: Focus on studying with an intuitive and distraction-free interface.

## Usage

### Pomodoro Timer
- **Set Work and Break Intervals**: Customise the length of your work and break intervals using the input fields provided.
- **Start the Timer**: Click the "Start" button to begin the timer. The timer will count down from the work interval you set. NOTE: Only click "Start" once.
- **Timer Alerts**: When the work interval ends, an alert will notify you to take a break. The timer will then count down from the break interval you set.
- **Reset the Timer**: Click the "Reset" button to reset the timer to the initial work interval.

### Task Management
- **Add a Task**: Use the input field to enter a new task and click the "Add" button to add it to your task list.
- **Complete a Task**: Click the "Complete" button next to a task to mark it as completed. Completed tasks will be crossed-through to indicate their status.
- **Delete a Task**: Click the "Delete" button next to a task to remove it from your task list.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JJoaoPauloP/StudyPro.git
   cd StudyPro

2. **Set up the virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate 

3. **Install requirements:**
   ```bash
   pip install -r requirements.txt