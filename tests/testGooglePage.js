module.exports = {
  'Demo test Google' : function (browser) {
    var d = browser
      .url('https://mehany.io')
      .waitForElementVisible('body', 1000)
      //.setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('.btn.btn-info.btn-lg', 1000)
      //.click('button[name=btnG]')
      .pause(1000)
      .verify.containsText('.btn.btn-info.btn-lg', 'Start A Project')
      .waitForElementNotVisible('.baby', 1000)
      .session(function(result) {
        console.log(result);
      }).elements('.nav.navbar-nav li', 'icon_checkmark', function (result) {
            result.value.map(function (v, k) {
                browser.elementIdAttribute(v.ELEMENT, 'aria-hidden', function (res) {
                    // true
                    console.log(res.value)
                });
            });
        })
      .end();
      //.end();
  }
};

git init && git remote add origin https://git.mehany.io/eslammehany/night-watch-test.git && git add . && git commit -m "initial commit" && git push -u origin master