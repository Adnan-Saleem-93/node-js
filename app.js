let os = require('os')
const local = {
  'Home Directory': os.homedir(),
  'Operating System': os.type(),
  'Last Reboot': os.uptime(),
  'Host name': os.hostname(),
  'Project Directory': os.homedir()
}
console.log(local)
