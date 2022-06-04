from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('main.html')

@app.route("/techos-registrables")
def techos():
    return render_template('techos.html')

@app.route("/aislamientos")
def aislamientos():
    return render_template('aislamientos.html')

@app.route("/pladur")
def pladur():
    return render_template('pladur.html')

@app.route("/contact", methods=['POST'])
def contacto():
    pass
