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
 *                  + Disable DoH (DNS-over-HTTPS)
 *                  + Disable Pocket Recommendations on New Tabs
 */

/*
 * Optional Preferences
 * --------------------
 *
 * Adjust number of lines scrolled on mouse
 * user_pref("mousewheel.min_line_scroll_amount", 60);
 *
 * Disable website notifications (eg: reddit)
 * user_pref("dom.webnotifications.enabled", false);
 *
 * Enable U2F (FIDO) Authentication
 * user_pref("security.webauth.u2f", true);
 *
 * Disable Ugly URL Bar Zoom
 * user_pref("browser.urlbar.update1",false);
 *
 * Enable Darkmode (prefers-color-scheme)
 * user_pref("ui.systemUsesDarkTheme", 1);
 *
 * Set DevTools Dark Theme
 * user_pref("devtools.theme", "dark");
 *
 */

user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("beacon.enabled",false);
user_pref("browser.cache.disk.capacity", 358400);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.max_entry_size", -1);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "{}");
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.pocket.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.update1",false);
user_pref("browser.urlbar.groupLabels.enabled",false);
user_pref("dom.event.clipboardevents.enabled",false);
user_pref("dom.network.enabled",false);
user_pref("extensions.pocket.enabled", false);
user_pref("geo.enabled", false);
user_pref("intl.locale.matchOS",false);
user_pref("keyword.enabled", true);
user_pref("layers.acceleration.force-enabled", true);
user_pref("media.navigator.enabled",false);
user_pref("media.peerconnection.enabled",false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled",false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.thirdparty.sessionOnly",true);
user_pref("network.gio.supported-protocols", "");
user_pref("network.http.referer.spoofSource",false);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.prefetch-next", false);
user_pref("network.trr.mode", 5);
user_pref("pdfjs.disabled", true);
user_pref("pdfjs.enableScripting", false);
user_pref("privacy.donottrackheader.enabled",true);
user_pref("privacy.firstparty.isolate",true);
user_pref("privacy.resistFingerprinting",false);
user_pref("privacy.trackingprotection.enabled",true);
user_pref("security.family_safety.mode", 0);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.tls.version.enable-deprecated", false);
user_pref("signon.rememberSignons", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("toolkit.telemetry.enabled",false);
user_pref("toolkit.telemetry.unified",false);
