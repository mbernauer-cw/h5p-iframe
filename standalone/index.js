import { H5P } from 'h5p-standalone';

const el = document.getElementById('h5p-container');
const options = {
    h5pJsonPath: '../package',
    frameJs: 'frame.bundle.js',
    frameCss: 'h5p.css',
};

new H5P(el, options);