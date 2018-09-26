# ffox_profile_tools

firefox profiles with security presets &amp; userchrome styles

## Summary

The purpose of this project is to provide a way to create new firefox profiles with security & privacy settings already preset.

It also includes some style customizations using userChrome.css.

## Usage

Clone this repo and copy the files somewhere accessible.

You can then rename/copy the script to the profile name required (script filename = profile name).

Optionally you may also want to change the `profile_folder` variable (default is $HOME/.ffox_profiles)

## Features

creation of new profiles with:

* security & privacy related settings
* custom style overrides
* use RAM for caching
* custom find (top-right drop-down)
* checks for user namespaces (used for sandboxing)

## Screenshot

![](https://raw.githubusercontent.com/equk/ffox_profile_tools/master/screenshots/ffox_styles_62.png)

## Changelog

    # 19-05-2015 -  initial script with tweaks
    # ref: https://equk.co.uk/2015/05/19/firefox-scripts/
    # 06-06-2015 -  disable pocket (bundled with firefox)
    # ----------------------------------------------------------------
    #               enable OffMainThreadCompositing
    #               added new tweaks ref: fingerprinting
    # 2018          enabled tracking protection globally
    #               enabled always send DoNotTrack
    # 08-09-2018    added userChrome.css
    #               added style - bookmark item spacing
    #               added style - move find bar to top
    # 09-09-2018    added style - adwaita folder icon
    # 11-09-2018    added style - find dropdown on right
    # 25-09-2018    added style - gtk folder icon

---

<details><summary>Mozilla References</summary>

[MozillaWiki](https://wiki.mozilla.org/Main_Page)

[Security/Sandbox - Mozilla Wiki](https://wiki.mozilla.org/Security/Sandbox)

[Garf's blog: Linux sandboxing improvements in Firefox 60](https://www.morbo.org/2018/05/linux-sandboxing-improvements-in_10.html)</details>