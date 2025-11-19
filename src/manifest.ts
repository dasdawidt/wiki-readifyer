import type { ManifestV3 } from 'rollup-plugin-chrome-extension';

const manifest: ManifestV3 = {
    manifest_version: 3,
    name: 'Wiki Readifyer',
    permissions: ['storage'],
    content_scripts: [
        {
            js: ['content.ts'],
            matches: ['*://*.wikipedia.org/*'],
        },
    ],
    web_accessible_resources: [
        {
            resources: ['style.css'],
            matches: ['*://*.wikipedia.org/*'],
        },
    ],
    background: {
        service_worker: 'background.ts',
    },
    action: {
        default_icon: {
            '128': 'assets/128.png',
            '512': 'assets/512.png',
        },
    },
    icons: {
        '128': 'assets/128.png',
        '512': 'assets/512.png',
    },
};

export default manifest;
