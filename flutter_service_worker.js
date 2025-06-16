'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b51bf782f7360401d13dc5b1dbb0d161",
"version.json": "73efc4aa26f2b064e87dd28bbad36ffc",
"index.html": "f5824cda99bffe8a24ad32b9c2c75c07",
"/": "f5824cda99bffe8a24ad32b9c2c75c07",
"main.dart.js": "a4a444b0367af342bb1cd6752c558376",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c4a0512cf9bbda522cacba8b3565fa9a",
".git/config": "78ebb107374fabac0473859f91080972",
".git/objects/0d/5384813c39a60f7c6e0b69f2c1525296deb0f0": "e07620c391bca64ecbe2535bead89892",
".git/objects/92/15c2791438bdff0243d188bb8e4cc620e9758b": "ed61f40a3d23373e24b446d4f58d5459",
".git/objects/0c/e22cb3b907884deb18d1bcd4551a03cb1ffaf5": "c182586cd6a8b4d75bcc9ca7f93bdad2",
".git/objects/0c/17602f8518eb483899a9e7eb9b47a8e30778c9": "76e2a6ff620e7d050bbf22ff5afe56be",
".git/objects/9b/844b102f7758d2b7ace7d77de14d296ed2ceea": "b1b65f2c2280fe4e4134e400a62592bb",
".git/objects/60/e35e132ccec94ad1385272cb35aae6d92dd963": "dc0f7982916fc4fc3be1e406c78796a9",
".git/objects/5a/b511d46b7fd046d2675b03cff14fab13cc7294": "ee6e360cd505cda6b6f01ea15fd3fcc6",
".git/objects/33/7d2dc2a3a466f586e4e3f37c1cc6938f6e8c3a": "0eb1748275bad22803a5f1426d0da7d4",
".git/objects/9d/981079a12561a94098c4d7cf35cc72fb18bf7d": "1df14ecf9a4ae197b04fd176606b0001",
".git/objects/d0/5f396a597a9017ab5b00b698e89ab66c82a554": "8c4d605f967abc2410bfc1fb5fc25888",
".git/objects/a2/0fb7cbb043bd51c90bfc4d0ca0c34b66b2c966": "fe2688744c3103fa89eec8a4f6649769",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/67a08f83f02fc816e00daf02581fda56124d57": "7e804f9b1d535ef5fd14c0bf21422dd6",
".git/objects/f3/9546e622c089b0e2cf2b1c0579f6cf24450ff8": "b0a130db57fbd1f43a05461b798686d6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c8/be1e4c6504ff484bf302686387aadb2e674d93": "fc7245a2b176fce34df2e2819df390e2",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7d/fbb63a97956e066c6805e1f721df93211afa20": "ee98ad7ab065c55e088c999003bf96bf",
".git/objects/7d/af011c9568d51075e603d1e9099fa55925ffe9": "2ef69284a63492f4c60c13df25bbe73d",
".git/objects/29/88e74d836f6dbc7cf28f7fd83a3d317ca49037": "a7c48037d53539090088583cf4ea0b68",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1c2e723192e3c54410dd151996444e6c00ec8e": "da9ef99ac404d582b29c60d2a89ac327",
".git/objects/26/26f328d37e63b8f507dd7813f7d52e6f18690f": "804158b0588e08e66949e22dee4994fc",
".git/objects/4d/d18b47a55a9be7dc7037b52f87f894e3d3d3ae": "c4e0dba32e2341269460de929b5f2e96",
".git/objects/75/495b9a73e9024ed7cda32b5e37ead03daf1bae": "83e10d8f2549e4951e2fe60bfde1956e",
".git/objects/2f/6515b00e688b970218f1f43bbff73fd0537c10": "afd4ccab128ba0844352da76b7a11a9f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/5c/f8c3c6552c5a1963302f4c338c6976cbf5d8b1": "3764e5ab27bcc95926ce8a7b811c255a",
".git/objects/5d/db2d68c9d952a95100869664a08ba206fd025b": "f6b1008880cfc8eb66161e1b0f63c5f1",
".git/objects/96/8fa7df957445effc9aeef949ec1f0306355a57": "f89e4115b4e9ce79cd8d23a3a19713a2",
".git/objects/96/bb9ada54a9fea5ed86af482663a3756492b32a": "b56f98c2cc351bac7c80fbf138e4dcd5",
".git/objects/54/fa2368c1bd47258808a07809ac239393f3e56e": "1d49a7e044c0a4ac795d11b9de7fddb5",
".git/objects/3f/e037a6d2307fafd92df360e4ee0e6f64e6a18e": "4f4dc1ef8c9cd5c35ba4cefe0f8a257d",
".git/objects/37/2e63420e2e81f5546581c608cef97edf0d4d2d": "d26fda05d63b7ec05ff288bf5d1d07d1",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/9eaab0ff786528b54f16d18074a6647ec2e2ee": "7f97057729f592db752e9c0664622310",
".git/objects/01/b449afe23133efa5966b6bed7e36655b6380a5": "2b24cec3adc6eeb9669a31a85908d3cf",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/bf/25c8d28b54dbda249189a98e1b4ed5a78d2111": "e83c1f6ad978e32301c290bd2c158abe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/041ee6eb162cd968fb37268f1c745d8fae40be": "8b786677f1dd34254e83c18412e30cfd",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/17003d5ba26600f3ee26f60577f9d770a6508f": "96e09256d841eb4ace5a83f2ae1e83c5",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/c400ac2892bdad2745e67930f124cdeba0a508": "075f628eb22ba1eb8dc057dfed7041bb",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/f5e55db034acfd76dcb01afcbdeb42f2ee09ad": "1254ad7777d299cedd9536875314e4ce",
".git/objects/c4/45d454ee1a31eb9ce71318c3d598c28501cf9c": "0f5e35ec611e951e2bde5dc757365e5c",
".git/objects/ea/1abde4b9df89cc5f798d203e2350bbb5b2c8d6": "6d03ef91ad9da1e1bbc739cad30bc7f6",
".git/objects/f0/7f79032f67b902046bbf9011329cdf3a2f218f": "219ffab8118743829e6dcf744158a952",
".git/objects/fa/81ae535f56d2efcd32ecbf7dbb8a84de21dbb6": "1f19642924c91a2fc001d815a4764f74",
".git/objects/ff/de223aaf20b46af75afffff0636bf43e94708c": "2cb32017fa6b0a0ea7f81ecf4d4e5669",
".git/objects/f1/bc98ccf17654437335711c87e0abbd74eb9538": "d60226668d46dec803b2f0a69b51d4d0",
".git/objects/cb/cb3953bf8ef26592e3219af652fffcef1ee1be": "a8d0ff09a7e76bb1e2360f593b8b1e39",
".git/objects/ce/882c68a16951fdcb097684484a9dbfc32ce842": "39c47488ee09715bdab2912eec5d3e3f",
".git/objects/2c/ca153e0eb12aa2bf1e829b9642cf0186246283": "0ad63c2bd57c25ca3a8b61325c3d426f",
".git/objects/79/6fefc1e021253fab1a5c88b89c914a044381d0": "3d927e36d454b7006dbddf09a09f16df",
".git/objects/79/e55ea8b089df28cfe993e9e29cfb5c995bd958": "3a6616a3007e14f80863bf3aaf2ecda1",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/3e4596a0810ecf9b3c1d844d200e6454e6042e": "09f6bac37dac5656f389370cc8249e70",
".git/objects/48/fafb54ac333e9531247aed46633f5bc420ebf7": "4a6fad3f173c26b86dc13d5ab4e9a457",
".git/objects/24/6fa560897fc73f6f4eb5dd0f4c18cdd370214e": "4b25f5def90128bd9de3d27ba8a37e33",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/4f/1cb86035ef7f4aaba5f11c011cd277deb97be3": "53f2e2e7845525a1c734462861ce86d0",
".git/objects/8c/5fc5a24c32e5a5dd569c75d8a58907aa7490b5": "a6ded266c132f35fdc0349b9c050111e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/70a43f698897bb5a4b03ef352466e65c6cdf17": "22337ed1f976518e05f6a35f4b8d7f78",
".git/objects/7a/445a5ea40a1e89762fda1512ba0adc96d8e0f5": "597d40ce17338ef67058f0e736ff69c8",
".git/objects/22/1dd86fbaa27ed8056006744a7619ee1353834f": "8d1119980db882c125b1905d008e665a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9185178279d83690617867168828ee88",
".git/logs/refs/heads/main": "9185178279d83690617867168828ee88",
".git/logs/refs/remotes/origin/main": "0acd2360b874346bc6d40fa7394b054b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "64425a664712912325d2de0fa327e961",
".git/refs/remotes/origin/main": "64425a664712912325d2de0fa327e961",
".git/index": "2a50372a0e069720d5495d5ef484ce65",
".git/COMMIT_EDITMSG": "9848f2193f875767263936cf56f3d813",
"assets/AssetManifest.json": "60ba0161d1eebb410d16eeb7a888ead5",
"assets/NOTICES": "c882b09736773a2af5a0045b33d187de",
"assets/FontManifest.json": "e5ea468750ba67e543aa3c5ef5b2a96f",
"assets/AssetManifest.bin.json": "faad70c79bfa7ce93f01bb5a47a661a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/qms_core/assets/images/qube.png": "34bf11c0e3fee72c0d47533d62688b95",
"assets/packages/qms_core/assets/icons/lock.png": "fc703a4a662027f76ff2e86edc2843ac",
"assets/packages/qms_core/assets/icons/ph_flag_circular.png": "d87f8ef7afca21d1a2d6abed4082ba84",
"assets/packages/qms_core/assets/icons/person.png": "77f9b215e09eeba540eddcb427c7a58b",
"assets/packages/qms_core/assets/icons/qube_text.png": "cc43a831c46fc4077f75a301a8390006",
"assets/packages/qms_core/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "835c13ef63687a8a36356b178b9a5c24",
"assets/fonts/MaterialIcons-Regular.otf": "ada5d478489dd8f71c1ceda130a4cb57",
"assets/assets/icons/calendar.png": "7f26681e66ad3f138606cb9fb7613854",
"assets/assets/waybill/qube_icon.png": "d0dc2445ca43d7a15fba38b90ddc5459",
"assets/assets/lottie/comforter-gray.json": "2f3cbb637f7152d1d4fc2ce8a25cd44a",
"assets/assets/lottie/dry-clean.json": "596390ff9daf182c21184c56a6052f75",
"assets/assets/lottie/shoe-care.json": "92d4cc2b78e645bdf401bcb67ff4c91a",
"assets/assets/lottie/comforter.json": "6b734d824ae9057955e183833822f568",
"assets/assets/lottie/shoe-care-red.json": "5fc0167689d98299d564f7114699369c",
"assets/assets/lottie/pet-care.json": "41ae170fcc48a03817b0c37ad3167fef",
"assets/assets/lottie/washed.json": "165ada6e0873d63f966878eaa580459c",
"assets/assets/lottie/bag-care.json": "bd8b7ad5e57b5d9d5eefae0120d61d8c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
