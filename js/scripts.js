$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    var sentenceArray = sentence.split(" ");
    var largeWords = sentenceArray.map(function(word) {
      if(word.length >= 3) {
        return word;
      }
    })
    largeWords.reverse();
    var result = largeWords.join(" ");
    $("#output").text(result);
    })
})