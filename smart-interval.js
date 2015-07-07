function timer()
{
    var timer = {
        running: false,
        iv: 5000,
        timeout: false,
        cb : function(){},
        start : function(cb,iv,sd){
            var elm = this;
            clearInterval(this.timeout);
            this.running = true;
            if(cb) this.cb = cb;
            if(iv) this.iv = iv;
            if(sd) elm.execute(elm);
            this.timeout = setTimeout(function(){elm.execute(elm)}, this.iv);
        },
        execute : function(e){
            if(!e.running) return false;
            e.cb();
            e.start();
        },
        stop : function(){
            this.running = false;
        },
        set_interval : function(iv){
            clearInterval(this.timeout);
            this.start(false, iv);
        }
    };
    return timer;
}
