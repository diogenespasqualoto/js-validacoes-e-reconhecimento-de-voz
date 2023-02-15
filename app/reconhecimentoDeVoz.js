const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognitiion = new SpeechRecognition();
recognitiion.lang='pt-Br'
recognitiion.start()