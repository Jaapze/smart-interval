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
	        else this.timeout = setTimeout(function(){elm.execute(elm)}, this.iv);
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

//MINIFIED VERSION:
function timer(){var t={running:!1,iv:5e3,timeout:!1,cb:function(){},start:function(t,i,n){var e=this;clearInterval(this.timeout),this.running=!0,t&&(this.cb=t),i&&(this.iv=i),n?e.execute(e):this.timeout=setTimeout(function(){e.execute(e)},this.iv)},execute:function(t){return t.running?(t.cb(),void t.start()):!1},stop:function(){this.running=!1},set_interval:function(t){clearInterval(this.timeout),this.start(!1,t)}};return t}
