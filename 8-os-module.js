const { log } = require("console");
const os = require("os");

//info about current user

const user = os.userInfo();

console.log(user);

//method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime() / 60 / 60} hours`);

const currenOS = {
  name: os.type(),
  realease: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currenOS);
