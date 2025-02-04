@echo off

:: Initialize Git repository
git init .

:: Remove the .next/ directory from Git's tracking
git rm -r --cached client/.next

:: Commit the changes
git commit -m "push"


:: Push to the remote repository
git push origin master