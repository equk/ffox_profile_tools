// Mozilla User Preferences

/* Default Profile Preferences
 * ---------------------------
 *
 * https://github.com/equk/linux/blob/master/bin/ffox_data/def_prefs.js
 *
 * Main changes:
 *                  + Use RAM for cache (disable disk caching)
 *                  + PDFJS disabled
 *                  + 3rd party cookies blocked
 *                  + Disable saving of passwords
 *                  + Disable network prefetching
 *                  + Disable search engine suggestions
 *                  + Disable Geolocation
 *                  + Disable Google Safebrowsing
 *                  + Disable Pocket
 *                  + Enable OMTC to fix tearing
 *                  + Disable network (fingerprinting)
 *                  + Disable WebRTC (fingerprinting)
 *                  + Disable beacon (analytics)
 *                  + Disable clipboard event detection
 *                  + Disable matchos for locale
 *                  + Disable Mozilla telemetry
 *                  + Enable Tracking Protection
 *                  + Always Send Do Not Track
 */

user_pref("browser.cache.disk.capacity", 358400);
user_pref("browser.cache.disk.enable", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("privacy.firstparty.isolate",true);
user_pref("network.cookie.thirdparty.sessionOnly",true);
user_pref("pdfjs.disabled", true);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.max_entry_size", -1);
user_pref("signon.rememberSignons", false);
user_pref("network.prefetch-next", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("geo.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.pocket.enabled", false);
user_pref("layers.acceleration.force-enabled", true);
user_pref("dom.network.enabled",false);
user_pref("media.peerconnection.enabled",false);
user_pref("media.navigator.enabled",false);
user_pref("beacon.enabled",false);
user_pref("dom.event.clipboardevents.enabled",false);
user_pref("intl.locale.matchOS",false);
user_pref("toolkit.telemetry.enabled",false);
user_pref("toolkit.telemetry.unified",false);
user_pref("network.http.referer.spoofSource",true);
user_pref("privacy.trackingprotection.enabled",true);
user_pref("privacy.donottrackheader.enabled",true);