// Generated by CoffeeScript 1.6.2
(function() {
  this.login = function(url_after_login) {
    var dialog_args, offset, status, url;

    offset = -(new Date()).getTimezoneOffset() / 60.0;
    url = '/login?auto_close=true&utc_offset=' + offset;
    if (url_after_login) {
      url += '&redirect=' + url_after_login;
    }
    dialog_args = 'dialogWidth=1018px;dialogHeight=680px;dialogTop=122px';
    status = window.showModalDialog(url, null, dialog_args);
    if (status === void 0) {
      status = window.returnValue;
    }
    if (status) {
      if (typeof Essage !== "undefined" && Essage !== null) {
        Essage.hide();
      }
      this.is_login = true;
      return true;
    }
    if (typeof status === 'string') {
      window.location.href = status;
    }
    return false;
  };

  this.new_post = function() {
    var now, today, url;

    now = new Date();
    today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    url = '/post/' + today + '?action=create';
    window.location.href = url;
    return false;
  };

  this.get_text = function(key, keys) {
    var lang, texts;

    if ((typeof lang_keys !== "undefined" && lang_keys !== null) && !keys) {
      keys = lang_keys;
    }
    lang = navigator.language.toLowerCase().replace('-', '_');
    texts = keys[lang];
    if (texts) {
      return texts[key + '_' + lang] || texts[key] || key;
    } else {
      return key;
    }
  };

}).call(this);