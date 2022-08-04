!(function (e) {
  var t,
    n,
    o,
    i,
    a,
    c =
      '<svg><symbol id="icon-pinglun" viewBox="0 0 1024 1024"><path d="M157.568 751.296c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288z m65.301333 3.786667l-17.258666 63.306666 63.306666-17.258666a32 32 0 0 1 24.522667 3.210666 4515.84 4515.84 0 0 1 32.352 18.944A360.789333 360.789333 0 0 0 512 874.666667c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512c0 60.586667 14.848 118.954667 42.826667 171.136 3.712 6.912 12.928 22.826667 27.370667 47.232a32 32 0 0 1 3.338666 24.714667z m145.994667-70.773334a32 32 0 1 1 40.917333-49.205333A159.189333 159.189333 0 0 0 512 672c37.888 0 73.674667-13.173333 102.186667-36.885333a32 32 0 0 1 40.917333 49.216A223.178667 223.178667 0 0 1 512 736a223.178667 223.178667 0 0 1-143.136-51.690667z"  ></path></symbol><symbol id="icon-shequ" viewBox="0 0 1024 1024"><path d="M512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667z m0-64c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667zM368.864 684.309333a32 32 0 1 1 40.917333-49.205333A159.189333 159.189333 0 0 0 512 672c37.888 0 73.674667-13.173333 102.186667-36.885333a32 32 0 0 1 40.917333 49.216A223.178667 223.178667 0 0 1 512 736a223.178667 223.178667 0 0 1-143.136-51.690667z"  ></path></symbol><symbol id="icon-shouye" viewBox="0 0 1024 1024"><path d="M155.584 342.56l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333z m37.322667 51.989333A53.333333 53.333333 0 0 0 170.666667 437.877333V800a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V437.877333a53.333333 53.333333 0 0 0-22.24-43.328L518.218667 169.984a10.666667 10.666667 0 0 0-12.437334 0L192.906667 394.56z"  ></path></symbol></svg>',
    d = (d = document.getElementsByTagName('script'))[
      d.length - 1
    ].getAttribute('data-injectcss'),
    l = function (e, t) {
      t.parentNode.insertBefore(e, t)
    }
  if (d && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      )
    } catch (e) {
      console && console.log(e)
    }
  }
  function s() {
    a || ((a = !0), o())
  }
  function m() {
    try {
      i.documentElement.doScroll('left')
    } catch (e) {
      return void setTimeout(m, 50)
    }
    s()
  }
  ;(t = function () {
    var e,
      t = document.createElement('div')
    ;(t.innerHTML = c),
      (c = null),
      (t = t.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (t = t),
        (e = document.body).firstChild ? l(t, e.firstChild) : e.appendChild(t))
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t()
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (a = !1),
        m(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), s())
        }))
})(window)
