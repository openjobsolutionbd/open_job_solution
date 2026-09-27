#!/usr/bin/env bash
# monorepo-র মূল স্ক্রিপ্টে পাঠায়, স্কোপ = current-affairs (পুরনো open_current_affairs রিপোর কপি আর ব্যবহার হয় না)
exec bash "$(dirname "$0")/../../_dev/scripts/session_status.sh" "${1:-current-affairs}"
