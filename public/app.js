"use strict";

var Engine = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_Phaser$Sprite) {
  _inherits(ProgressBar, _Phaser$Sprite);

  function ProgressBar(game, x, y, color, isHorizontal) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, game, x, y, 'progress-bar'));

    _this.data.color = color;
    _this.data.isHorizontal = isHorizontal;
    return _this;
  }

  return ProgressBar;
}(Phaser.Sprite);

Engine.ProgressBar = ProgressBar;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RectangleButton = function (_Phaser$Sprite) {
  _inherits(RectangleButton, _Phaser$Sprite);

  function RectangleButton(game, x, y, color, text) {
    _classCallCheck(this, RectangleButton);

    var maxTextLength = 4;

    var _this = _possibleConstructorReturn(this, (RectangleButton.__proto__ || Object.getPrototypeOf(RectangleButton)).call(this, game, x, y, 'rect-button'));

    if (text.length > maxTextLength) {
      text = text.splice(0, maxTextLength);
    }

    _this.data.text = text;
    _this.data.color = color;

    _this.tint = _this.data.color;

    _this.addText();
    return _this;
  }

  _createClass(RectangleButton, [{
    key: 'addText',
    value: function addText() {
      var style = {
        font: '21px Open Sans',
        fill: 'white'
      };

      this.lable = this.game.make.text(this.width / 2, this.height / 2, this.data.text, style);
      this.lable.anchor.setTo(0.5);
      this.addChild(this.lable);
    }
  }]);

  return RectangleButton;
}(Phaser.Sprite);

Engine.RectangleButton = RectangleButton;
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Time = function (_Phaser$Text) {
  _inherits(Time, _Phaser$Text);

  function Time(game, x, y, time) {
    _classCallCheck(this, Time);

    var style = {
      font: '41px Open Sans',
      fill: 'rgb(236, 241, 0)'
    };

    return _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, game, x, y, time, style));
  }

  return Time;
}(Phaser.Text);

Engine.Time = Time;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$State) {
  _inherits(Game, _Phaser$State);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
  }

  _createClass(Game, [{
    key: 'preload',
    value: function preload() {
      this.load.image('rect-button', 'assets/img/rect-button.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;

      this.btn = new Engine.RectangleButton(this.game, 250, 250, 0xda0c0c, 'NcS7');

      this.add.existing(this.btn);
    }
  }, {
    key: 'render',
    value: function render() {
      this.game.debug.spriteBounds(this.btn.lable, 'rgba(43, 215, 66, 0.3)');
    }
  }]);

  return Game;
}(Phaser.State);

Engine.Game = Game;
'use strict';

Engine.game = new Phaser.Game(600, 800, Phaser.AUTO);

Engine.game.state.add('Game', Engine.Game);
Engine.game.state.start('Game');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZ2luZS5qcyIsInByb2dyZXNzLWJhci5qcyIsInJlY3QtYnV0dG9uLmpzIiwidGltZS5qcyIsImdhbWUuanMiLCJhcHAuanMiXSwibmFtZXMiOlsiRW5naW5lIiwiUHJvZ3Jlc3NCYXIiLCJnYW1lIiwieCIsInkiLCJjb2xvciIsImlzSG9yaXpvbnRhbCIsImRhdGEiLCJQaGFzZXIiLCJTcHJpdGUiLCJSZWN0YW5nbGVCdXR0b24iLCJ0ZXh0IiwibWF4VGV4dExlbmd0aCIsImxlbmd0aCIsInNwbGljZSIsInRpbnQiLCJhZGRUZXh0Iiwic3R5bGUiLCJmb250IiwiZmlsbCIsImxhYmxlIiwibWFrZSIsIndpZHRoIiwiaGVpZ2h0IiwiYW5jaG9yIiwic2V0VG8iLCJhZGRDaGlsZCIsIlRpbWUiLCJ0aW1lIiwiVGV4dCIsIkdhbWUiLCJsb2FkIiwiaW1hZ2UiLCJzY2FsZSIsInBhZ2VBbGlnbkhvcml6b250YWxseSIsInBhZ2VBbGlnblZlcnRpY2FsbHkiLCJidG4iLCJhZGQiLCJleGlzdGluZyIsImRlYnVnIiwic3ByaXRlQm91bmRzIiwiU3RhdGUiLCJBVVRPIiwic3RhdGUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLEVBQWI7Ozs7Ozs7OztJQ0FNQzs7O0FBQ0osdUJBQVlDLElBQVosRUFBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkMsS0FBeEIsRUFBK0JDLFlBQS9CLEVBQTZDO0FBQUE7O0FBQUEsMEhBQ3JDSixJQURxQyxFQUMvQkMsQ0FEK0IsRUFDNUJDLENBRDRCLEVBQ3pCLGNBRHlCOztBQUczQyxVQUFLRyxJQUFMLENBQVVGLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0EsVUFBS0UsSUFBTCxDQUFVRCxZQUFWLEdBQXlCQSxZQUF6QjtBQUoyQztBQUs1Qzs7O0VBTnVCRSxPQUFPQzs7QUFTakNULE9BQU9DLFdBQVAsR0FBcUJBLFdBQXJCOzs7Ozs7Ozs7OztJQ1RNUzs7O0FBQ0osMkJBQVlSLElBQVosRUFBa0JD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YXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgY29sb3IsIGlzSG9yaXpvbnRhbCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ3Byb2dyZXNzLWJhcicpO1xyXG5cclxuICAgIHRoaXMuZGF0YS5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5kYXRhLmlzSG9yaXpvbnRhbCA9IGlzSG9yaXpvbnRhbDtcclxuICB9XHJcbn1cclxuXHJcbkVuZ2luZS5Qcm9ncmVzc0JhciA9IFByb2dyZXNzQmFyO1xyXG4iLCJjbGFzcyBSZWN0YW5nbGVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBjb2xvciwgdGV4dCkge1xyXG4gICAgY29uc3QgbWF4VGV4dExlbmd0aCA9IDQ7XHJcblxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ3JlY3QtYnV0dG9uJyk7XHJcblxyXG4gICAgaWYgKHRleHQubGVuZ3RoID4gbWF4VGV4dExlbmd0aCkge1xyXG4gICAgICB0ZXh0ID0gdGV4dC5zcGxpY2UoMCwgbWF4VGV4dExlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kYXRhLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5kYXRhLmNvbG9yID0gY29sb3I7XHJcblxyXG4gICAgdGhpcy50aW50ID0gdGhpcy5kYXRhLmNvbG9yO1xyXG5cclxuICAgIHRoaXMuYWRkVGV4dCgpO1xyXG4gIH1cclxuXHJcbiAgYWRkVGV4dCgpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBmb250OiAnMjFweCBPcGVuIFNhbnMnLFxyXG4gICAgICBmaWxsOiAnd2hpdGUnXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYWJsZSA9IHRoaXMuZ2FtZS5tYWtlLnRleHQodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5kYXRhLnRleHQsIHN0eWxlKTtcclxuICAgIHRoaXMubGFibGUuYW5jaG9yLnNldFRvKDAuNSk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMubGFibGUpO1xyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLlJlY3RhbmdsZUJ1dHRvbiA9IFJlY3RhbmdsZUJ1dHRvbjtcclxuIiwiY2xhc3MgVGltZSBleHRlbmRzIFBoYXNlci5UZXh0IHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCB0aW1lKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgZm9udDogJzQxcHggT3BlbiBTYW5zJyxcclxuICAgICAgZmlsbDogJ3JnYigyMzYsIDI0MSwgMCknXHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgdGltZSwgc3R5bGUpO1xyXG4gIH1cclxufVxyXG5cclxuRW5naW5lLlRpbWUgPSBUaW1lO1xyXG4iLCJjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICBwcmVsb2FkKCkge1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdyZWN0LWJ1dHRvbicsICdhc3NldHMvaW1nL3JlY3QtYnV0dG9uLnBuZycpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmJ0biA9IG5ldyBFbmdpbmUuUmVjdGFuZ2xlQnV0dG9uKHRoaXMuZ2FtZSwgMjUwLCAyNTAsIDB4ZGEwYzBjLCAnTmNTNycpO1xyXG5cclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuYnRuKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy5zcHJpdGVCb3VuZHModGhpcy5idG4ubGFibGUsICdyZ2JhKDQzLCAyMTUsIDY2LCAwLjMpJyk7XHJcbiAgfVxyXG59XHJcblxyXG5FbmdpbmUuR2FtZSA9IEdhbWU7XHJcbiIsIkVuZ2luZS5nYW1lID0gbmV3IFBoYXNlci5HYW1lKDYwMCwgODAwLCBQaGFzZXIuQVVUTyk7XHJcblxyXG5FbmdpbmUuZ2FtZS5zdGF0ZS5hZGQoJ0dhbWUnLCBFbmdpbmUuR2FtZSk7XHJcbkVuZ2luZS5nYW1lLnN0YXRlLnN0YXJ0KCdHYW1lJyk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
