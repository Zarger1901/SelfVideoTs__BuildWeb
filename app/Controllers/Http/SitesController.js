"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
class SitesController {
    async index({ request, view }) {
        const page = request.input('page', 1);
        const limit = 15;
        const users = await Database_1.default.query().from('help_topic').paginate(page, limit);
        return view.render('index', {
            users,
        });
    }
}
exports.default = SitesController;
//# sourceMappingURL=SitesController.js.map