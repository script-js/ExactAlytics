function analyticsInit(id,apiKey,logLoc) {
  var anframe = document.createElement("iframe")
  anframe.style = "display:none";
  if (logLoc) {
    anframe.src = logLoc + "?metaID=" + id + "&metaPage=" + location.href.split(location.host)[1].split("?")[0].split("#")[0] + "&key=" + apiKey;
  } else {
    anframe.src = "https://exactalytics.pages.dev/log?metaID=" + id + "&metaPage=" + location.href.split(location.host)[1].split("?")[0].split("#")[0] + "&key=" + apiKey;
  }
  document.documentElement.appendChild(anframe)
}
