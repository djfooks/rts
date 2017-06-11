
var App = function ()
{
    window.onerror = this.onError.bind(this);
    this.debugText = "";

    this.fps = 30;
    this.intervalId = setInterval(this.update.bind(this), 1000 / this.fps);

    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.addEventListener("mousedown", this.mousedown.bind(this));
    document.addEventListener("mouseup",   this.mouseup.bind(this));
    document.addEventListener("mousemove", this.mousemove.bind(this));

    var that = this;
    var gameDropButton = document.getElementById("gameDropButton");
    gameDropButton.onclick = function ()
    {
        document.getElementById("gameDrop").classList.toggle("show");
    };
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
            var myDropdown = document.getElementById("gameDrop");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    };
    document.getElementById("newButton").onclick = function ()
    {
        document.getElementById("gameDrop").classList.remove("show");
    };
};

App.prototype.mousedown = function mousedown(button, e)
{
    document.getElementById("gameDrop").classList.remove("show");
};

App.prototype.mouseup = function mouseup(button, e)
{
};

App.prototype.mousemove = function mousemove(e)
{
};

App.prototype.update = function update()
{
};

App.prototype.updateGame = function updateGame()
{
};

App.prototype.debugInfo = function debugInfo(str)
{
    this.debugMsg += str + "<br>";
    document.getElementById("debugText").innerHTML = this.debugMsg;
}

App.prototype.onError = function onError(message, source, lineno, colno, error)
{
    this.debugInfo("Error: " + source + ":" + lineno + " " + message);
}

new App();
