onEvent("button2", "click", function( ) {
  showElement("image2");
});
onEvent("button1", "click", function( ) {
  setScreen("screen2");
});
onEvent("button3", "click", function( ) {
  setScreen("screenai");
});
var data = {};
onEvent("VideoRecommender_predict", "click", function() {
    addPair(data, "Withintherangesbelowwhichdurationrangewouldyouclickon", getText("Withintherangesbelowwhichdurationrangewouldyouclickon_dropdown"));
		addPair(data, "Whichofthesehashtagswouldyouprefertowatch", getText("Whichofthesehashtagswouldyouprefertowatch_dropdown"));
		addPair(data, "Whatmoodareyouin", getText("Whatmoodareyouin_dropdown"));
    setText("VideoRecommender_prediction", '');
    setScreen("screen3");
    getPrediction("Video Recommender", "jBev3JwlkQWB", data, function(value) {
      setText("label10", value);
    });
  });
onEvent("button1", "click", function( ) {
  playSound("assets/category_bell/bells_win.mp3", true);
});
