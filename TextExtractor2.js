brython();
from browser import document, alert

def hello(ev):
    alert("Hello !")

document.bind("click", hello)