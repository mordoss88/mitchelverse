#!/usr/bin/env bash
# Opens a tmux session with three panes: dev server, portraits, shell.
set -e
cd "$(dirname "$0")/.."
S=mitchelverse
tmux has-session -t "$S" 2>/dev/null && exec tmux attach -t "$S"
tmux new-session -d -s "$S" -n main "npm run dev"
tmux split-window -h -t "$S" -c "$PWD/portraits-src"
tmux split-window -v -t "$S" -c "$PWD"
tmux select-pane -t "$S":0.2
tmux attach -t "$S"
