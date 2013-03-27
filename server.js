express = require("express");
useragent = require("useragent");

http = require("http");
port = process.env.PORT || 2300;

http.createServer(function (req, res) {
   var agent = useragent.parse(req.headers["user-agent"]);

   home = "http://www.fannect.me"
   googlePlayUrl = "https://play.google.com/store/apps/details?id=io.trigger.forge68d916985b7a11e29d1422000a9f3c85"
   appStoreUrl = "https://itunes.apple.com/us/app/fannect/id601199141?ls=1&mt=8"

   family = agent.os.toJSON().family.toLowerCase();

   if (family.indexOf("android") != -1) {
      console.log("Redirecting to Google Play");
      res.writeHead(302, {"Location": googlePlayUrl});
   } else if (family.indexOf("ios") != -1) {
      console.log("Redirecting to App Store");
      res.writeHead(302, {"Location": appStoreUrl});
   } else {
      console.log("Redirecting to home");
      res.writeHead(302, {"Location": home});
   }
   
   res.end();

}).listen(port, function () {
   console.log("Fannect Download listening on " + port);
});