import Vue from "vue";
import { extend, localize } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";
import vi from "vee-validate/dist/locale/vi.json";
import en from "vee-validate/dist/locale/en.json";

// Install required rule.
extend("required", required);

// Install email rule.
extend("email", email);

// Install min rule.
extend("min", min);

// Install English and VN localizations.
localize({
    en: {
        messages: en.messages,

    },
    vi: {
        messages: vi.messages,
    }
});

let LOCALE = "vi";

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, "locale", {
    get() {
        return LOCALE;
    },
    set(val) {
        LOCALE = val;
        localize(val);
    }
});
