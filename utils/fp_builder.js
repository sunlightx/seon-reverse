import { canvas_hash } from "./canvas_hash.js";
import { browser_hash } from "./browser_hash.js";
import { device_hash } from "./device_hash.js";
import crypto from 'crypto'

export class FpBuilder {
  constructor (netFp, ipInfo) {
    this.cookie_hash = this.random_hash()
    this.session_id = crypto.randomUUID()
    this.request_id = this.random_hash()
    this.netFp = netFp
  }
  random_hash = () => {
    function r() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return r() + r() + r() + r() + r() + r() + r() + r()
  }
  fpInit = () => {
    const template = {
      cookie_hash: this.cookie_hash,
      source: "js-5.11.3",
      version_code: "03051103",
      session_id: this.session_id,
      request_id: this.request_id,
      region_timezone: "+03:00",
      cookie_enabled: true,
      window_size: "1920x919",
      os: "Windows",
      flash_enabled: false,
      java_enabled: false,
      device_type: "desktop",
      timestamp: new Date().toISOString(),
      window_location: "https://app.koyeb.com/auth/signup",
      referrer: "",
      has_focus: true,
      browser: [],
      priv_browser: [],
      extensions: [],
      browser_hash: browser_hash,
      device_hash: device_hash,
      document: [
        "exitFullscreen"
      ],
      documentDocumentElementAttributes: [
        "lang",
        "class",
        "data-theme"
      ],
      documentDocumentElementStyle: [],
      documentRegexMatch: false,
      plugins: [
        {
          "name": "PDF Viewer",
          "description": "Portable Document Format"
        },
        {
          "name": "Chrome PDF Viewer",
          "description": "Portable Document Format"
        },
        {
          "name": "Chromium PDF Viewer",
          "description": "Portable Document Format"
        },
        {
          "name": "Microsoft Edge PDF Viewer",
          "description": "Portable Document Format"
        },
        {
          "name": "WebKit built-in PDF",
          "description": "Portable Document Format"
        }
      ],
      runtime: [],
      screen: { x: 1920, y: 1080, devicePixelRatio: 1, orientationType: "landscape-primary", orientationAngle: 0 },
      webGlCategory: "real",
      webdriver: false,
      fakeCreateElement: false,
      inconsistentCloneError: false,
      wrongChromeOrder: false,
      window: [
        "ongotpointercapture",
        "onlostpointercapture",
        "onpointerdown",
        "onpointermove",
        "onpointerup",
        "onpointercancel",
        "onpointerover",
        "onpointerout",
        "onpointerenter",
        "onpointerleave",
        "chrome",
        "webkitResolveLocalFileSystemURL",
        "webkitMediaStream",
        "VisualViewport",
        "Scheduler",
        "RTCTrackEvent",
        "RTCStatsReport",
        "RTCSessionDescription",
        "RTCRtpTransceiver",
        "RTCRtpSender",
        "RTCRtpReceiver",
        "RTCPeerConnectionIceEvent",
        "RTCPeerConnection",
        "RTCIceCandidate",
        "RTCDtlsTransport",
        "RTCDataChannelEvent",
        "RTCDTMFToneChangeEvent",
        "RTCDTMFSender",
        "RTCCertificate",
        "PointerEvent",
        "PerformancePaintTiming",
        "PerformanceNavigationTiming",
        "BatteryManager",
        "IdleDetector",
        "ImageTrack",
        "ServiceWorker",
        "ServiceWorkerContainer",
        "ServiceWorkerRegistration",
        "RTCDataChannel",
        "SharedWorker",
        "webkitSpeechGrammar"
      ],
      headlessFirefox: false,
      device_model: "",
      device_vendor: "",
      audioSampleRate: 48000,
      botsAndAutomation: false,
      browserFeatures: [
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0
      ],
      canvasNoise: false,
      isMobile: false,
      speechVoices: [
        "ru-RU|Microsoft Irina - Russian (Russia) - default - local",
        "ru-RU|Microsoft Pavel - Russian (Russia) - local"
      ],
      experimental_params: {},
      incognito: false,
      mediaQuery: { audioinput: 1, audiooutput: 1, videoinput: 1 },
      permissionStatus: { navigator: {}, notification: "default" },
      normalizedKeyboardLayout: "d7bfbeb03788de803a5dbd14d1f8a247",
      canvas_hash: canvas_hash,
      device_memory: 8,
      font_hash: "d8d1922cc13641e0fbcc53e970b702d2",
      hardware_concurrency: 4,
      navigator: [
        "vendorSub",
        "productSub",
        "vendor",
        "maxTouchPoints",
        "scheduling",
        "userActivation",
        "doNotTrack",
        "geolocation",
        "connection",
        "plugins",
        "mimeTypes",
        "pdfViewerEnabled",
        "webkitTemporaryStorage",
        "webkitPersistentStorage",
        "windowControlsOverlay",
        "hardwareConcurrency",
        "cookieEnabled",
        "appCodeName",
        "appName",
        "appVersion",
        "platform",
        "product",
        "userAgent",
        "language",
        "languages",
        "onLine",
        "webdriver",
        "getGamepads",
        "javaEnabled",
        "sendBeacon",
        "vibrate",
        "deprecatedRunAdAuctionEnforcesKAnonymity",
        "protectedAudience",
        "bluetooth",
        "storageBuckets",
        "clipboard",
        "credentials",
        "keyboard",
        "managed",
        "mediaDevices",
        "storage",
        "serviceWorker",
        "virtualKeyboard",
        "wakeLock",
        "deviceMemory",
        "userAgentData",
        "login",
        "ink",
        "mediaCapabilities",
        "hid",
        "locks",
        "gpu",
        "mediaSession",
        "permissions",
        "presentation",
        "usb",
        "xr",
        "serial",
        "adAuctionComponents",
        "runAdAuction",
        "canLoadAdAuctionFencedFrame",
        "canShare",
        "share",
        "clearAppBadge",
        "getBattery",
        "getUserMedia",
        "requestMIDIAccess",
        "requestMediaKeySystemAccess",
        "setAppBadge",
        "webkitGetUserMedia",
        "clearOriginJoinedAdInterestGroups",
        "createAuctionNonce",
        "joinAdInterestGroup",
        "leaveAdInterestGroup",
        "updateAdInterestGroups",
        "deprecatedReplaceInURN",
        "deprecatedURNToURL",
        "getInstalledRelatedApps",
        "registerProtocolHandler",
        "unregisterProtocolHandler"
      ],
      navigatorLanguages: [
        "nl-BE",
        "nl",
        "en-US",
        "en"
      ],
      user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      vendor: "Google Inc.",
      webgl_hash: "9f8d5aa561171cd5655114331c68996a",
      webgl_vendor: "Google Inc. (NVIDIA)~ANGLE (NVIDIA, NVIDIA GeForce RTX 2070 (0x00001F07) Direct3D11 vs_5_0 ps_5_0, D3D11)",
      windowNavigatorUserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      windowUtils: [],
      auto_generated_session_id: false,
      textMetricsSample: 173.9521484375,
      emoji: [
        98.9,
        10.1,
        71.9,
        -9,
        90,
        105.2,
        82.6,
        28.5,
        159.5
      ],
      fontList: [
        "Cambria Math",
        "Lucida Console",
        "MS Serif",
        "Segoe UI",
        "Tahoma"
      ],
      platform: "Win32",
      spoofed_apis: {},
      // netfp: this.netFp
    };
  
    return JSON.stringify(template);
  };
  finalFp = (dynamic, ip) => {
    const template = {
      "cookie_hash": this.cookie_hash,
      "source": "js-5.11.3",
      "version_code": "03051103",
      "session_id": this.session_id,
      "request_id": this.request_id,
      "region_timezone": "+03:00",
      "cookie_enabled": true,
      "window_size": "1920x919",
      "os": "Windows",
      "flash_enabled": false,
      "java_enabled": false,
      "device_type": "desktop",
      "timestamp": new Date().toISOString(),
      "window_location": "https://app.koyeb.com/auth/signup",
      "referrer": "",
      "has_focus": true,
      "system_colors_hash": "f3199080f2d4df73fe2de09d4e4b3ba2",
      "experimental_payload": {
        "audio_noise": false,
        "canvas_noise": false,
        "col_scheme": "light",
        "disp_mode": "browser",
        "reduced_motion": "no-preference",
        "max_touch_points": 0,
        "drm": [
          "org.w3.clearkey"
        ],
        "media_constraints_hash": "da1693da0024bd11c1cfdf31a3240a7e",
        "nav_type": 1,
        "architecture": 255,
        "subpixelfont": true,
        "user_length": -1,
        "spoofed_apis": {},
        "ff_dbg": false,
        "to_string_spoofed": false,
        "netfp": this.netFp,
        "netfp_delay": Math.floor(Math.random() * (3000 - 300 + 1)) + 300
      },
      "keyboard_layout_hash": "a21b84620bc2c83572b8c45a20102a4e",
      "uadata_architecture": "x86",
      "uadata_platform_version": "10.0.0",
      "model": "",
      "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      "region_language": 'en',
      "screen_color_depth": 24,
      "device_memory": 8,
      "screen_pixel_ratio": 1,
      "hardware_concurrency": 16,
      "platform": "Win32",
      "do_not_track": null,
      "plugin_count": 5,
      "plugin_list": [
        "PDF Viewer",
        "Chrome PDF Viewer",
        "Chromium PDF Viewer",
        "Microsoft Edge PDF Viewer",
        "WebKit built-in PDF"
      ],
      "plugin_hash": "29b51cf1619fb6943f256c2c6da59432",
      "canvas_hash": canvas_hash,
      "webgl_hash": "9f8d5aa561171cd5655114331c68996a",
      "webgl_vendor": "Google Inc. (NVIDIA)~ANGLE (NVIDIA, NVIDIA GeForce RTX 2070 (0x00001F07) Direct3D11 vs_5_0 ps_5_0, D3D11)",
      "touch_support": false,
      "font_count": 58,
      "font_hash": "d8d1922cc13641e0fbcc53e970b702d2",
      "font_list": [],
      "font_list_minified": "ZH89pBl4/98AQAgAIAIAIAfB6AAAEAAAACIZ",
      "font_noise": false,
      "audio_hash": "124.04347527516074",
      "screen_resolution": "1920x1080",
      "screen_available_resolution": "1920x1040",
      "outer_window_size": "1920x1040",
      "browser_hash": browser_hash,
      "device_hash": device_hash,
      "private": false,
      "math_hash": "4cff7c1646e312d6b032559239b9d1d9",
      "mime_types_hash": "5623c22fad17e9439e21dd1e36c7cf57",
      "devtools": false,
      "webrtc_count": 2,
      "webrtc_ips": [
        ip,
        "0.0.0.0"
      ],
      "webrtc_activated": true,
      "battery_charging": true,
      "battery_level": 100,
      "dynamic_evaluator_results": dynamic,
      "adblock": true,
      "similarity_hash": [
        5347396,
        3999205,
        3206387,
        5432670,
        12671,
        1284825,
        4076151,
        2229853,
        6086106,
        8090566,
        2878729,
        24870583,
        4391025,
        11142569,
        1487060,
        5951632,
        3410220,
        3370536,
        2886164,
        49853915,
        925298,
        4018734,
        1684748,
        142753,
        12960266,
        10145507,
        2212872,
        2038518,
        14676196,
        1282718,
        109024,
        179031,
        865827,
        2531580,
        2913227,
        20975550,
        14959603,
        10991497,
        24132653,
        2624457,
        3670178,
        5324719,
        2664580,
        2525841,
        26935914,
        2357093,
        1638183,
        3973697,
        6196677,
        8200238,
        16593334,
        5416837,
        3524320,
        4614174,
        1330522,
        214594,
        18172485,
        4646217,
        9842648,
        6089844,
        5885252,
        3606020,
        852886,
        270363,
        10294920,
        91833,
        2664559,
        11622896,
        10079586,
        3547692,
        4818131,
        5319434,
        867102,
        686807,
        2560861,
        3123368,
        10227858,
        3366319,
        7116084,
        556702,
        4198689,
        2605136,
        5260154,
        3620072,
        5753098,
        3169355,
        4500372,
        694100,
        1527618,
        11365739,
        22172740,
        2768275,
        16776884,
        6274588,
        2402086,
        770105,
        4333934,
        10982361,
        3980947,
        37918
      ],
      "open_ports": []
    }

    return JSON.stringify(template);
  }
}