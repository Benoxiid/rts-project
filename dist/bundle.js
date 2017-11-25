(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleGame = /** @class */ (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('logo', 'phaser2.png');
    };
    SimpleGame.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    };
    return SimpleGame;
}());
exports.SimpleGame = SimpleGame;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
window.onload = function () {
    var game = new game_1.SimpleGame();
};

},{"./game":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ2FtZS50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtJQUVJO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBSUQsNEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSxnQ0FBVTs7Ozs7QUNBdkIsK0JBQW9DO0FBRXBDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFFWixJQUFJLElBQUksR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztBQUVoQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIFNpbXBsZUdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsIDYwMCwgUGhhc2VyLkFVVE8sICdjb250ZW50JywgeyBwcmVsb2FkOiB0aGlzLnByZWxvYWQsIGNyZWF0ZTogdGhpcy5jcmVhdGUgfSk7XG4gICAgfVxuXG4gICAgZ2FtZTogUGhhc2VyLkdhbWU7XG5cbiAgICBwcmVsb2FkKCkge1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnbG9nbycsICdwaGFzZXIyLnBuZycpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdmFyIGxvZ28gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclksICdsb2dvJyk7XG4gICAgICAgIGxvZ28uYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFNpbXBsZUdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cbiAgICB2YXIgZ2FtZSA9IG5ldyBTaW1wbGVHYW1lKCk7XG5cbn07XG4iXX0=
