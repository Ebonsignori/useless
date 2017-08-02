// Useless Video JS
function chooseSite() {
  document.getElementById('frame').src = randomSite();
}


function randomSite() {
  currentSite = document.getElementById("frame").src;
  if (!hasCycled()) {
    while (true) {
      randomPick = Math.floor(Math.random() * sitesList.length);
      if (sitesList[randomPick][1] !== true) {
        sitesList[randomPick][1] = true;
        return sitesList[randomPick][0].toString();
      }
    }
  } else {
    resetPlayed();
    return randomSite();
  }
}

//Checks to see if every video in sitesList has been played
function hasCycled() {
    for (i = 0; i < sitesList.length; i++) {
      if (!sitesList[i][1]) {
        return false;
      }
    }
    return true;
}

//Resets all booleans in sitesList to false to reset played
function resetPlayed() {
  for (i = 0; i < sitesList.length; i++) {
    sitesList[i][1] = false;
  }
}

var sitesList = [
    ['http://isfycsmn.ytmnd.com/', false],
    ['http://yeahboi.me/', false],
    ['http://adultcatfinder.com/', false],
		['http://heeeeeeeey.com/',                                    false],
		['http://thatsthefinger.com/',                                false],
		['http://cant-not-tweet-this.com/',                           false],
		['http://weirdorconfusing.com/',                              false],
		['http://eelslap.com/',                                       false],
		['http://www.staggeringbeauty.com/',                          false],
 		['http://burymewithmymoney.com/',                             false],
 		['http://endless.horse/',                                     false],
		['http://www.fallingfalling.com/',                            false],
		['http://ducksarethebest.com/',                               false],
		['http://www.trypap.com/',                                    false],
		['http://www.republiquedesmangues.fr/',                       false],
		['http://www.movenowthinklater.com/',                         false],
		['http://www.partridgegetslucky.com/',                        false],
		['http://www.rrrgggbbb.com/',                                 false],
		['http://beesbeesbees.com/',                                  false],
		['http://www.sanger.dk/',                                     false],
		['http://www.koalastothemax.com/',                            false],
		['http://www.everydayim.com/',                                false],
		['http://www.leduchamp.com/',                                 false],
		['http://r33b.net/',                                          false],
		['http://randomcolour.com/',                                  false],
		['http://cat-bounce.com/',                                    false],
		['http://www.sadforjapan.com/',                               false],
		['http://www.taghua.com/',                                    false],
		['http://chrismckenzie.com/',                                  false],
		['http://hasthelargehadroncolliderdestroyedtheworldyet.com/', false],
		['http://ninjaflex.com/',                                     false],
		['http://iloveyoulikeafatladylovesapples.com/',               false],
		['http://ihasabucket.com/',                                   false],
		['http://corndogoncorndog.com/',                              false],
		['http://www.ringingtelephone.com/',                          false],
		['http://www.pointerpointer.com/',                            false],
		['http://imaninja.com/',                                      false],
		['http://willthefuturebeaweso.me/',                           false],
		['http://www.ismycomputeron.com/',                            false],
		['http://www.nullingthevoid.com/',                            false],
		['http://www.muchbetterthanthis.com/',                        false],
		['http://www.ouaismaisbon.ch/',                               false],
		['http://www.yesnoif.com/', false],
		['http://iamawesome.com/',                                    false],
		['http://www.pleaselike.com/',                                false],
		['http://crouton.net/',                                       false],
		['http://corgiorgy.com/',                                     false],
		['http://www.electricboogiewoogie.com/',                      false],
		['http://www.wutdafuk.com/',                                  false],
		['http://unicodesnowmanforyou.com/',                          false],
		['http://www.crossdivisions.com/', false],
		['http://tencents.info/',                                     false],
		['http://intotime.com/',                                      false],
		['http://leekspin.com/',                                      false],
		['http://www.patience-is-a-virtue.org/',                      false],
		['http://whitetrash.nl/',                                     false],
		['http://www.theendofreason.com/',                            false],
		['http://zombo.com',                                          false],
		['http://pixelsfighting.com/',                                false],
		['http://baconsizzling.com/',                                 false],
		['http://isitwhite.com/',                                     false],
		['http://onemillionlols.com/',                                false],
		['http://www.omfgdogs.com/',                                  false],
		['http://oct82.com/',                                         false],
		['http://semanticresponsiveillustration.com/',                false],
		['http://chihuahuaspin.com/',                false],
		['http://potato.io/',                false],
		['http://www.blankwindows.com/',                false],
		['http://www.biglongnow.com/',                                false],
		['http://dogs.are.the.most.moe/',                             false],
		['http://tunnelsnakes.com/', false],
		['http://www.infinitething.com/', false],
		['http://www.trashloop.com/', false],
		['http://www.coloursquares.com/', false],
		['http://spaceis.cool/', false],
		['https://thebigdog.club/', false],
		['http://buildshruggie.com/', false],
		['http://buzzybuzz.biz/', false],
		['http://yeahlemons.com/', false],
		['http://burnie.com/', false],
		['http://www.sealspin.com/', false]
  ];

// About Site window
function aboutSite() {
  document.getElementById('window').style.display = "block";
  document.getElementById('site-display').innerHTML = document.getElementById('frame').src;
  document.getElementById('site-display').href = document.getElementById('frame').src;
}

function closeWindow() {
  document.getElementById('window').style.display = "none";
}
