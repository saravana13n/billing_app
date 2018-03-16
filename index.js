var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement  = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        // Our code start here
        var opts = {
            type: "share",         //Open a context menu and ask the user what to do next (print, mail, etc..).
            fileName: 'v8-tutorial.pdf' //it will use this filename as a place-holder
        }
        pdf.fromURL('http://cesarvr.github.io/2015/11/20/javascript-v8.html', opts)
        .then((status) => console.log('success->', status))
        .catch((error) => console.log(error));
  // It end here
        console.log('Received Event: ' + id);
    }
};
app.initialize();
