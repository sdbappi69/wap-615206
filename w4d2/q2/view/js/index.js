$(eventHandler);

function eventHandler() {
  $("#btn").click(getAnswer);
}

function getAnswer() {
  fetch("/8ball")
    .then((res) => res.json())
    .then((data) => {
      showAnswer(data.answer);
      $("#txtQ").focus(() => this.select());
      $("#txtQ").focus();
      return false;
    });
}

function showAnswer(answer) {
  $("#txtQ").val(answer);
}
