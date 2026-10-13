# Third-party HEIC decoder attribution

The locally hosted file `vendor/heic2any.min.js` is unmodified heic2any v0.0.4 (MIT License, Alex Corvi, Copyright 2020), original source and license: https://github.com/alexcorvi/heic2any

The distributed heic2any bundle embeds libheif and libde265 components which are licensed under **LGPL-3.0**. Source / notices and corresponding source repositories:
- libheif https://github.com/strukturag/libheif
- libde265 https://github.com/strukturag/libde265
- LGPL-3.0 full text https://www.gnu.org/licenses/lgpl-3.0.html

The compiled HEIC decoder is distributed as a separate replaceable browser script. It has not been modified. You may replace the standalone vendor script with your own compatible build. See these repositories for source code and rebuilding information.

Photos are decoded entirely in the user's browser without network uploads. HEVC codec patent/format and HDR/10bit compatibility limitations may apply.