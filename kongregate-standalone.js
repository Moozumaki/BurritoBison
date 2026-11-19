(function(global) {
  if (global.kongregate) return;

  var listeners = {};
  var mtx = {
    addEventListener: function(eventName, callback) {
      (listeners[eventName] || (listeners[eventName] = [])).push(callback);
    },
    initializeIncentivizedAds: function() {},
    requestItemList: function(items, callback) {
      setTimeout(function() {
        callback({success: true, data: []});
      }, 0);
    },
    requestUserItemList: function(filter, callback) {
      setTimeout(function() {
        callback({success: true, data: []});
      }, 0);
    },
    useItemInstance: function(itemId, callback) {
      setTimeout(function() {
        callback({success: false});
      }, 0);
    },
    purchaseItems: function(items, callback) {
      setTimeout(function() {
        callback({success: false, purchase_id: 0});
      }, 0);
    },
    showIncentivizedAd: function() {
      (listeners.adAbandoned || []).forEach(function(callback) {
        callback({});
      });
    }
  };

  global.kongregate = {
    mtx: mtx,
    analytics: {
      finishPurchase: function() {}
    }
  };
})(window);