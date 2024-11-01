(function(window, undefined) {
  var dictionary = {
    "4ca6faf7-8945-4b5f-98f7-8ea9d52e126d": "Send",
    "6033b3b2-34c9-4657-bf94-fec427bc4e85": "Balance",
    "6d89be45-467f-4848-a84c-f459e7bf4427": "Account's Summary",
    "6d4cfcfc-07e6-4203-b1c7-da0f3d0e816c": "Recent Transaction",
    "c49b6db0-0904-4a7c-854a-2f63a8131f6d": "Transfer",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);