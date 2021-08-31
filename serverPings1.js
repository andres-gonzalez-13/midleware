module.exports = {

    get : function(server, ){
        var messagge = 'haciendo pinga a server 1';
        console.log(messagge);
        shell.exec('pinger.sh')
        setTimeout(yourFunction, 1000);
    }
}
