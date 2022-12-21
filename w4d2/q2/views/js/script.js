$(eventHandler);

function eventHandler(){
    $("#ask8ball").click(submitForm);
}

function submitForm(){
    let qna = $("#qna").val();
    fetch('/8ball/8ball?qna='+qna)
        .then(data => data.json())
        .then(showAnswer);
}

function showAnswer(data){
    $("#qna").val(data.answer);
}