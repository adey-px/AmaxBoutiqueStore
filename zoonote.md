### Process
- Client files and logic runs normally without npm & node modules
- Development live server in package.json is done by npm install
- Configured in package.json, live server runs main.js with localhost 
  & port, thereby skipping long file paths in browser address bar
- Main.js contains core logic & routes running in Client
- Files in feeders folder supplies strings in templates

### To do
Find out where /#/ is affecting the url, remove it