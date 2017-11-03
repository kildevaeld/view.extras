"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
function ViewTemplate(Base) {
    return class extends Base {
        getTemplateData() {
            let data = view_1.result(this, 'data') || {};
            return data;
        }
        render() {
            if (!this.el)
                return this;
            this.undelegateEvents();
            this.renderTemplate();
            super.render();
            return this;
        }
        destroy() {
            let data = this.getTemplateData();
            let template = view_1.result(this, 'template', data);
            if (template && this.el)
                this.el.innerHTML = '';
            super.destroy();
        }
        renderTemplate() {
            if (!this.el)
                return;
            let data = this.getTemplateData();
            let template = view_1.result(this, 'template', data);
            if (!template)
                return;
            this.el.innerHTML = template;
        }
    };
}
exports.ViewTemplate = ViewTemplate;
