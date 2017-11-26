"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Construction;
(function (Construction) {
    var Block = /** @class */ (function () {
        function Block(player_id, data_needed) {
            this.player_id = player_id;
            this.data_needed = data_needed;
        }
        Block.prototype.build = function (data_provided) {
        };
        return Block;
    }());
    Construction.Block = Block;
    var Bus = /** @class */ (function (_super) {
        __extends(Bus, _super);
        function Bus(player_id, data_needed) {
            return _super.call(this, player_id, data_needed) || this;
        }
        return Bus;
    }(Block));
    Construction.Bus = Bus;
    var Building = /** @class */ (function (_super) {
        __extends(Building, _super);
        function Building(player_id, data_needed, energy_consuption) {
            var _this = _super.call(this, player_id, data_needed) || this;
            _this.energy_consuption = energy_consuption;
            return _this;
        }
        Building.prototype.consume = function () {
            return this.data_needed;
        };
        return Building;
    }(Block));
    Construction.Building = Building;
})(Construction = exports.Construction || (exports.Construction = {}));
