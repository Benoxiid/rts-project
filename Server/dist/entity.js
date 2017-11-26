"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity;
(function (Entity) {
    var Player = /** @class */ (function () {
        function Player(id, name) {
            this.id = id;
            this.name = name;
            this.lvl = 1;
            this.energy = 0;
            this.data = 0;
        }
        Player.prototype.get_energy = function () {
            return this.energy;
        };
        Player.prototype.get_data = function () {
            return this.data;
        };
        Player.prototype.set_energy = function (energy) {
            this.energy = energy;
        };
        Player.prototype.set_data = function (data) {
            this.data = data;
        };
        return Player;
    }());
    Entity.Player = Player;
    var AI = /** @class */ (function () {
        function AI() {
            this.id = 0;
        }
        AI.prototype.create_minions = function (nb) {
            for (var i = 0; i < nb; i++) {
                this.army.push(new Minion(100));
            }
        };
        return AI;
    }());
    Entity.AI = AI;
    var Minion = /** @class */ (function () {
        function Minion(hp) {
            this.hp = hp;
        }
        return Minion;
    }());
    Entity.Minion = Minion;
})(Entity = exports.Entity || (exports.Entity = {}));
