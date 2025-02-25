(function() {
  function addPermalinkToHeader(header) {
    if (header.id) {
      var permalink = document.createElement('a');
      permalink.href = '#' + header.id;
      permalink.innerHTML = '&sect;';
      header.appendChild(permalink);
      header.tabIndex = 0;
      permalink.onfocus = function() { this.style.display = 'block'; };
      permalink.onblur = function() { this.style.display = ''; };
    }
  }
  var headers = document.getElementsByTagName('h3');
  for (var i = headers.length; i--; ) {
    addPermalinkToHeader(headers[i]);
  }
  headers = document.getElementsByTagName('h4');
  for (var i = headers.length; i--; ) {
    addPermalinkToHeader(headers[i]);
  }
  headers = document.getElementsByTagName('h5');
  for (var i = headers.length; i--; ) {
    addPermalinkToHeader(headers[i]);
  }
})();

document.documentElement.onclick = function(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var clearAll;

  if (target.className.indexOf('topic') > -1) {

    // only add class if not clicking on the same one
    if (target.className.indexOf('selected') === -1) {
      clearAll = false;
    }
    else {
      clearAll = true;
    }

    var topicEls = [].slice.call(document.getElementsByClassName('topic'));
    for (var i = 0, len = topicEls.length; i < len; i++) {
      topicEls[i].className = topicEls[i].className.replace('selected', '');
    }

    if (!clearAll) {
      target.className += ' selected';
    }

    var tagName = target.getAttribute('data-name');
    var liEls = document.getElementsByClassName('posts')[0].getElementsByTagName('li');

    var numShown = 0;

    for (var i = 0, len = liEls.length; i < len; i++) {
      var content = liEls[i].getElementsByClassName('tags')[0].textContent;
      if (content.indexOf(tagName) > -1 || clearAll) {
        liEls[i].className = liEls[i].className.replace(/hidden/g, '');
        numShown++;
      }
      else {
        liEls[i].className += ' hidden';
      }
    }

    document.getElementById('shown').innerHTML = numShown;

    return false;
  }
};

