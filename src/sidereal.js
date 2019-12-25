function SiderealClock() {

	// Some useful constants
	this.sidereal_day = (23 * 3600) + (56 * 60) + 4.091 // 23h 56m 4.091s
	this.julian_epoch = new Date(-4713, 0, 1, 12, 00, 00);
	this.j2000 = new Date(2000, 1, 1, 12, 00, 00);
	this.unix_epoch = new Date(1970, 1, 1, 0, 0, 0);
	
	// Geolocation properties
	this.location = "";
	this.lat = 0.0;
	this.lon = 0.0;

	// Time params
	this.utc = undefined;
	this.lt = undefined;
	this.jd = undefined;
	this.gmst = undefined;
	this.lmst = undefined;

	// See if the geolocation API is available
	this.canGeolocate = false;
	if ( "geolocation" in navigator ) this.canGeolocate = true;

	// Event Handler information
	this.handlers = [];
}

SiderealClock.prototype.start = function() {
	this.dispatchEvent('start', {});
	var that = this;
	this.tick(that);
}

SiderealClock.prototype.tick = function(that) {

	var now = new Date();
	that.lt = now;
	that.utc = that.get_utc(now, that.lat, that.lon);
	
	// Get the Greenwich mean sidereal time (GMST)
	that.jd = that.get_jd(that.utc);
	that.gmst = that.get_gmst(that.jd);
	that.lmst = that.get_lmst(that.gmst, that.lon);

	var tick_obj = {
		'utc' : that.utc,
		'lt' : that.lt,
		'jd' : that.jd,
		'gmst' : that.deg_to_hms(that.gmst),
		'lmst' : that.deg_to_hms(that.lmst)
	};

	that.dispatchEvent('tick', tick_obj);

	// Let's set the timer for the next tick on the second
	var now = new Date();
	that.timeout = window.setTimeout(that.tick, 1000 - now.getMilliseconds(), that);
}

SiderealClock.prototype.addEventListener = function(event, handler) {
	if ( event in this.handlers ) {
		this.handlers[event].push(handler);
	} else {
		this.handlers[event] = [handler];
	}
}

SiderealClock.prototype.dispatchEvent = function(event, obj) {
	if ( event in this.handlers ) {
		for(var i = 0; i < this.handlers[event].length; i++) {
			this.handlers[event][i](obj);
		}
	}
}

/**
 * This performs geolocation using the geolocation API (if available).
 * @return none
 */
SiderealClock.prototype.geolocate = function() {
	var that = this;
	if ( this.canGeolocate ) {
		navigator.geolocation.getCurrentPosition(function(pos) {
			that.setLocation(pos.coords.latitude, pos.coords.longitude);
		});
	} else {
		console.log("[SiderealClock] Unable to perform geolocation, as the geolocation API is unavailable in this browser.");
	}
}

/**
 * This sets the current location that we are to calculate the time for.
 * @param {float} lat The latitude of the location.
 * @param {float} lon The longitude of the location.
 */
SiderealClock.prototype.setLocation = function(lat, lon, name) {
	this.lat = lat;
	this.lon = lon;
	this.location = (typeof name === 'undefined') ? "" : name;
	console.log("[SiderealClock] Set Location: ", this.lat, this.lon);

	// Dispatch an event
	var obj = {'location' : { 'name' : this.location, 'lat' : this.lat, 'lon' : this.lon }};
	this.dispatchEvent('locationchange', obj);
}


SiderealClock.prototype.get_jd = function(date) {
	var diff = 2440587.5 + ( date / (60 * 60 * 24 * 1000) );
	return diff;
} 

/**
 * Calculates the Greenwich Mean Sidereal Time (GMST), from which can calculate
 * the local mean sidereal time by shifting angle.
 * @param  {float} jd  The instantaneous Julian date.
 * @return {float}     The current GMST in degrees.
 */
SiderealClock.prototype.get_gmst = function(jd) {
	var T = (jd - 2451545.0) / (36525);
	var st = 280.46061837 + 360.98564736629 * ( jd - 2451545.0 );
	st += 0.000387933 * (T * T) - (T * T * T) / 38710000;
	st = st % 360.;

	return st;
}

/**
 * A very basic calculation of Local Mean Sidereal Time (LMST).
 * TODO: This needs to be more robust to silly values being input. 
 * @param  {float} gmst The current Greenwich Mean Sidereal Time in degrees.
 * @param  {float} lon  The longitude of the observer in degrees.
 * @return {float}      The current local mean sidereal time in degrees.
 */
SiderealClock.prototype.get_lmst = function(gmst, lon) {
	if ( lon < 0) lon = -360. - (lon % 360.)
	var lmst = (gmst - lon) % 360.
	return lmst;
}

/**
 * This will take a local time and convert to the corresponding UTC. 
 * @param  {[type]} lt  [description]
 * @param  {[type]} lat [description]
 * @param  {[type]} lon [description]
 * @return {[type]}     [description]
 */
SiderealClock.prototype.get_utc = function(lt, lat, lon) {
	return lt;
}

SiderealClock.prototype.deg_to_hms = function(deg) {
	var pad = "00";
	var time = deg / 15;
	var hrs = Math.floor(time);
	var hrsrem = time - hrs;
	var min = Math.floor(hrsrem * 60);
	var minrem = (hrsrem * 60) - min;
	var sec = minrem * 60;
	var secint = Math.floor(sec)
	var secfrac = (sec - secint).toFixed(5);

	var out = {
		'h' : hrs,
		'm' : min,
		's' : sec
	}

	return out;
}

SiderealClock.prototype.hms_to_hms_string = function(hms) {
	var pad = "00";
	var secint = Math.floor(hms.s);
	var secfrac = (hms.s - secint).toFixed(5);
	var hstr = pad.substring(0, pad.length - String(hms.h).length) + String(hms.h)
	var mstr = pad.substring(0, pad.length - String(hms.m).length) + String(hms.m)
	var sstr = pad.substring(0, pad.length - String(secint).length) + String(secint)
	sstr += String(secfrac).substring(1, String(secfrac).length);
	var out = hstr + ':' + mstr + ':' + sstr;
	return out;
}

SiderealClock.prototype.deg_to_hms_string = function(deg) {
	var pad = "00";
	var time = deg / 15;
	var hrs = Math.floor(time);
	var hrsrem = time - hrs;
	var min = Math.floor(hrsrem * 60);
	var minrem = (hrsrem * 60) - min;
	var sec = minrem * 60;
	var secint = Math.floor(sec)
	var secfrac = (sec - secint).toFixed(5);

	var hstr = pad.substring(0, pad.length - String(hrs).length) + String(hrs)
	var mstr = pad.substring(0, pad.length - String(min).length) + String(min)
	var sstr = pad.substring(0, pad.length - String(secint).length) + String(secint)
	sstr += String(secfrac).substring(1, String(secfrac).length);
	var out = hstr + ':' + mstr + ':' + sstr;
	return out;
}
