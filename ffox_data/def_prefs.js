// Mozilla User Preferences

/* Default Profile Preferences
 * ---------------------------
 *
 * https://github.com/equk/linux/blob/master/bin/ffox_data/def_prefs.js
 *
 * Main changes:
 *                  + Use RAM for cache (Disable disk caching)
 *                  + Disable PDFJS
 *                  + Block 3rd party cookies
 *                  + Disable saving of passwords
 *                  + Disable network prefetching
 *                  + Disable Search Suggestions
 *                  + Disable Sponsored Suggestions
 *                  + Disable Geolocation
 *                  + Disable Google Safebrowsing
 *                  + Disable Pocket
 *                  + Disable network (fingerprinting)
 *                  + Disable WebRTC (fingerprinting)
 *                  + Disable beacon (analytics)
 *                  + Disable clipboard event detection
 *                  + Disable matchos for locale
 *                  + Disable Mozilla telemetry
 *                  + Disable Firefox Health Reports
 *                  + Enable Tracking Protection
 *                  + Always Send Do Not Track
 *                  + Disable Pocket Recommendations on New Tabs
 *                  + Disable remote url for google safebrowsing checking downloads
 *                  + Display language as en-US for all users (fingerprinting)
 *                  + Disable region specific updates
 *                  + Disable builtin password manager (autofill)
 *                  + Disable recommendations for addons
 *                  + Enable Global Privacy Control (CCPA GDPR)
 *                  + Connect using HTTPS first (default: private only)
 *                  + Enable seperate search provider on private tabs
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
 * Force HTTPS Only
 * (breaks mixed content & http sites)
 * user_pref("dom.security.https_only_mode", true);
 *
 * Force DoH (DNS-over-HTTPS)
 * user_pref("network.trr.mode", 3);
 * Use Custom DoH Server
 * user_pref("network.trr.custom_uri", "https://cusom-server-uri/dns-query")
 * user_pref("network.trr.uri", "https://cusom-server-uri/dns-query");
 *
 */

/*
 * Clear Everything On Closing Browser
 * -----------------------------------
 *
 * This can be useful for a testing profile
 *
 * user_pref("privacy.sanitize.sanitizeOnShutdown", true);
 *
 * user_pref("privacy.clearOnShutdown.cache", true);
 * user_pref("privacy.clearOnShutdown.cookies", true);
 * user_pref("privacy.clearOnShutdown.downloads", true);
 * user_pref("privacy.clearOnShutdown.formdata", true);
 * user_pref("privacy.clearOnShutdown.history", true);
 * user_pref("privacy.clearOnShutdown.offlineApps", true);
 * user_pref("privacy.clearOnShutdown.sessions", true);
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
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"hidden\":true}");
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.pocket.enabled", false);
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.update1",false);
user_pref("browser.urlbar.groupLabels.enabled",false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("dom.event.clipboardevents.enabled",false);
user_pref("dom.network.enabled",false);
user_pref("dom.security.https_first",true);
user_pref("dom.security.https_first_pbm",true);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("geo.enabled", false);
user_pref("intl.locale.matchOS",false);
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true);
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
user_pref("pdfjs.disabled", true);
user_pref("pdfjs.enableScripting", false);
user_pref("privacy.donottrackheader.enabled",true);
user_pref("privacy.firstparty.isolate",true);
user_pref("privacy.globalprivacycontrol.enabled",true);
user_pref("privacy.globalprivacycontrol.functionality.enabled",true);
user_pref("privacy.resistFingerprinting",false);
user_pref("privacy.trackingprotection.enabled",true);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("security.family_safety.mode", 0);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.tls.version.enable-deprecated", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("toolkit.telemetry.enabled",false);
user_pref("toolkit.telemetry.unified",false);
