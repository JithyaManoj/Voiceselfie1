var recognition=new window.webkitSpeechRecognition();

function startlistening(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(result){
    console.log(result);
    content=result.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    text_speech();
}

function text_speech(){
    speech_text=content;
    speech_audio=new SpeechSynthesisUtterance(speech_text);
    window.speechSynthesis.speak(speech_audio);
    Webcam.attach("#camera");
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});