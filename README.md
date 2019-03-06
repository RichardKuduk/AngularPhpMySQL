# Cars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.
Reproduced using
(https://phpenthusiast.com/blog/develop-angular-php-app-getting-the-list-of-items)
# INSTRUCTION 
1. Download the whole code. 
2. Paste api folder (src/app/api) in the xamp/htdocs directory. You may update database crednetials and create your table in the xamp. 
3. Run Angular app project in the cmd. (ng serve)
4.  If you come across error saying 
"XMLHttpRequest cannot load http://myApiUrl/login. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access."
in Windows, paste this command in run window
chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security.
(https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present) 


If database was created , and the credentials are ok and the table contains record if you run
localhost/api/list.php you should see some output. After serving the app you should see the output in the localhost:4200.


