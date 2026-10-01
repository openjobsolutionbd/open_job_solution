#!/usr/bin/env bash
# monorepo-র মূল স্ক্রিপ্টে পাঠায়, স্কোপ = current-affairs (পুরনো open_current_affairs রিপোর কপি আর ব্যবহার হয় না)
# পুরো (absolute) পাথ বের করে নেওয়া হয়: মূল স্ক্রিপ্ট নিজে রিপো-রুটে cd করে, তাই আপেক্ষিক পাথ দিলে তার রিপোর্ট-ফাইল খুঁজে পেত না।
DIR="$(cd "$(dirname "$0")" && pwd)"
exec bash "$DIR/../../_dev/scripts/session_status.sh" "${1:-current-affairs}"
