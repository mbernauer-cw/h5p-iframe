import "./style/main.scss";
import App from './App.svelte';

export default class Svelte extends H5P.EventDispatcher {
    constructor(params, contentId, extras = {}) {
        super();
        let username = H5PIntegration && H5PIntegration.user && H5PIntegration.user.name || 'world';
        this.element = document.createElement('div');

        this.app = new App({
            target: this.element,
            props: {
                username: username,
            }
        });

        this.attach = function ($wrapper) {
            $wrapper.get(0).classList.add('h5p-svelte');
            $wrapper.get(0).appendChild(this.element);
        };
    }
}

// Load library
H5P = H5P || {};
H5P.Svelte = Svelte;