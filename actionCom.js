module.exports = {

    get : function(server, shell){
        //Pinger_ping('192.168.0.125', null)
        var messagge = 'pinggg';
        shell.exec('pinger.sh')
        console.log(messagge);
    }
}
