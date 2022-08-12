(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"MAPA INTERACTIVO ANIMATE_atlas_", frames: [[0,0,56,54],[58,41,32,30],[58,0,39,39]]}
];


// symbols:



(lib.APPROVINCIALIMAGEN102 = function() {
	this.initialize(img.APPROVINCIALIMAGEN102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2842,1403);


(lib.APPROVINCIALLUGAR1CONTENIDO102 = function() {
	this.initialize(img.APPROVINCIALLUGAR1CONTENIDO102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5684,2804);


(lib.APPROVINCIALLUGAR101 = function() {
	this.initialize(img.APPROVINCIALLUGAR101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2843,1403);


(lib.copiaimagenpruebalugar102 = function() {
	this.initialize(img.copiaimagenpruebalugar102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2842,1403);


(lib.copiaimagenpruebalugar602 = function() {
	this.initialize(img.copiaimagenpruebalugar602);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2842,1403);


(lib.flash0ai = function() {
	this.initialize(ss["MAPA INTERACTIVO ANIMATE_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiActivos = function() {
	this.initialize(ss["MAPA INTERACTIVO ANIMATE_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash0aiActivos_1 = function() {
	this.initialize(ss["MAPA INTERACTIVO ANIMATE_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.FONDOMAPAINTERACTIVO101 = function() {
	this.initialize(img.FONDOMAPAINTERACTIVO101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5684,2804);


(lib.imagenpruebalugar1302 = function() {
	this.initialize(img.imagenpruebalugar1302);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2842,1403);


(lib.imagenpruebalugar140202 = function() {
	this.initialize(img.imagenpruebalugar140202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2842,1403);


(lib.SILUETAJUJUY0101 = function() {
	this.initialize(img.SILUETAJUJUY0101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2843,1403);


(lib.sig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.flash0aiActivos_1();
	this.instance.parent = this;
	this.instance.setTransform(-19.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-19.5,39,39);


(lib.LUGARAPP1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.APPROVINCIALLUGAR101();
	this.instance.parent = this;
	this.instance.setTransform(-257,-318,0.4785,0.4779);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257,-318,1360.3,670.5);


(lib.btn_volver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.flash0aiActivos();
	this.instance.parent = this;
	this.instance.setTransform(-16,-15);

	this.instance_1 = new lib.flash0ai();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-28,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-27,56,54);


(lib.atr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.flash0aiActivos_1();
	this.instance.parent = this;
	this.instance.setTransform(19.5,-19.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-19.5,39,39);


(lib.GALERIALUGAR1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.sig1.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(1);
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.atr1.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(4);
		});
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.sig2.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(2);
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.atr2.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(0);
		});
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_2 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.sig3.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(3);
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.atr3.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(1);
		});
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_3 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.sig4.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(4);
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.atr4.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(2);
		});
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_4 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.sig5.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(5);
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.atr5.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(3);
		});
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// BOTONES
	this.atr1 = new lib.atr();
	this.atr1.name = "atr1";
	this.atr1.parent = this;
	this.atr1.setTransform(-442.5,-104.5);
	new cjs.ButtonHelper(this.atr1, 0, 1, 1);

	this.sig1 = new lib.sig();
	this.sig1.name = "sig1";
	this.sig1.parent = this;
	this.sig1.setTransform(433.5,-104.5);
	new cjs.ButtonHelper(this.sig1, 0, 1, 1);

	this.atr2 = new lib.atr();
	this.atr2.name = "atr2";
	this.atr2.parent = this;
	this.atr2.setTransform(-442.5,-104.5);
	new cjs.ButtonHelper(this.atr2, 0, 1, 1);

	this.sig2 = new lib.sig();
	this.sig2.name = "sig2";
	this.sig2.parent = this;
	this.sig2.setTransform(433.5,-104.5);
	new cjs.ButtonHelper(this.sig2, 0, 1, 1);

	this.atr3 = new lib.atr();
	this.atr3.name = "atr3";
	this.atr3.parent = this;
	this.atr3.setTransform(-442.5,-104.5);
	new cjs.ButtonHelper(this.atr3, 0, 1, 1);

	this.sig3 = new lib.sig();
	this.sig3.name = "sig3";
	this.sig3.parent = this;
	this.sig3.setTransform(433.5,-104.5);
	new cjs.ButtonHelper(this.sig3, 0, 1, 1);

	this.atr4 = new lib.atr();
	this.atr4.name = "atr4";
	this.atr4.parent = this;
	this.atr4.setTransform(-442.5,-104.5);
	new cjs.ButtonHelper(this.atr4, 0, 1, 1);

	this.sig4 = new lib.sig();
	this.sig4.name = "sig4";
	this.sig4.parent = this;
	this.sig4.setTransform(433.5,-104.5);
	new cjs.ButtonHelper(this.sig4, 0, 1, 1);

	this.atr5 = new lib.atr();
	this.atr5.name = "atr5";
	this.atr5.parent = this;
	this.atr5.setTransform(-442.5,-104.5);
	new cjs.ButtonHelper(this.atr5, 0, 1, 1);

	this.sig5 = new lib.sig();
	this.sig5.name = "sig5";
	this.sig5.parent = this;
	this.sig5.setTransform(433.5,-104.5);
	new cjs.ButtonHelper(this.sig5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sig1},{t:this.atr1}]}).to({state:[{t:this.sig2},{t:this.atr2}]},1).to({state:[{t:this.sig3},{t:this.atr3}]},1).to({state:[{t:this.sig4},{t:this.atr4}]},1).to({state:[{t:this.sig5},{t:this.atr5}]},1).wait(1));

	// IMAGENES
	this.instance = new lib.APPROVINCIALIMAGEN102();
	this.instance.parent = this;
	this.instance.setTransform(-680,-336,0.4784,0.4784);

	this.instance_1 = new lib.copiaimagenpruebalugar102();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-679,-336,0.4781,0.4781);

	this.instance_2 = new lib.imagenpruebalugar1302();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-681,-336,0.4797,0.4797);

	this.instance_3 = new lib.imagenpruebalugar140202();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-680,-336,0.4788,0.4788);

	this.instance_4 = new lib.copiaimagenpruebalugar602();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-678,-336,0.4753,0.4753);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-681,-336,1363.2,673);


// stage content:
(lib.MAPAINERACTIVOANIMATE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ini:0,c1:9});

	// timeline functions:
	this.frame_0 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btn1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop("c1");
		}
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_9 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btn_volver1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("ini");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(31));

	// SILUETA_JUJUY
	this.instance = new lib.SILUETAJUJUY0101();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.479,0.479);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},9).wait(31));

	// APP_LUGAR_1_boton
	this.btn1 = new lib.LUGARAPP1();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(258.8,319.85);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.LUGARAPP1(), 3);

	this.btn_volver1 = new lib.btn_volver();
	this.btn_volver1.name = "btn_volver1";
	this.btn_volver1.parent = this;
	this.btn_volver1.setTransform(1568.9,-56.7,1,1,0,0,0,284.9,-118.7);
	new cjs.ButtonHelper(this.btn_volver1, 0, 1, 2, false, new lib.btn_volver(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1}]}).to({state:[{t:this.btn_volver1}]},9).to({state:[{t:this.btn_volver1}]},30).wait(1));

	// IMAGEN_LUGAR_1
	this.instance_1 = new lib.GALERIALUGAR1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(681.85,336.6);

	this.instance_2 = new lib.APPROVINCIALIMAGEN102();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2,1,0.4784,0.4784);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},30).wait(1));

	// Contenido
	this.instance_3 = new lib.APPROVINCIALLUGAR1CONTENIDO102();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,0,0.2397,0.2397);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(31));

	// FONDO
	this.instance_4 = new lib.FONDOMAPAINTERACTIVO101();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,0,0.2398,0.2398);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(681.5,336,682.5,336.4);
// library properties:
lib.properties = {
	id: 'D5B439D2609DFC4CAF7E15377E7D7C5C',
	width: 1363,
	height: 672,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"APPROVINCIALIMAGEN102.png", id:"APPROVINCIALIMAGEN102"},
		{src:"APPROVINCIALLUGAR1CONTENIDO102.jpg", id:"APPROVINCIALLUGAR1CONTENIDO102"},
		{src:"APPROVINCIALLUGAR101.png", id:"APPROVINCIALLUGAR101"},
		{src:"copiaimagenpruebalugar102.png", id:"copiaimagenpruebalugar102"},
		{src:"copiaimagenpruebalugar602.png", id:"copiaimagenpruebalugar602"},
		{src:"FONDOMAPAINTERACTIVO101.jpg", id:"FONDOMAPAINTERACTIVO101"},
		{src:"imagenpruebalugar1302.png", id:"imagenpruebalugar1302"},
		{src:"imagenpruebalugar140202.png", id:"imagenpruebalugar140202"},
		{src:"SILUETAJUJUY0101.png", id:"SILUETAJUJUY0101"},
		{src:"MAPA INTERACTIVO ANIMATE_atlas_.png", id:"MAPA INTERACTIVO ANIMATE_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D5B439D2609DFC4CAF7E15377E7D7C5C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;