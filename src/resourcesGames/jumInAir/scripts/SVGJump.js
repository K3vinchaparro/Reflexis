var bgSVG = `
            <svg id="bg-svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="640" viewBox="0 0 360 640.00001" width="360" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/">
                <rect id="rect5189-8" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    height="640" width="500" y="0" x="0" fill="#d7eef4" />
                <g fill="#1C3144">
                    <path id="path10590-3-7-0" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m153.94 443.28c-1.6123 0-2.9194 1.2047-2.9194 2.6916v10.868c0 5.5017-2.7017 5.5166-4.9971 5.5166v-11.866c0-2.5165-1.8644-4.5558-4.1642-4.5558-2.2999 0-4.1643 2.0393-4.1643 4.5558v20.342c-2.2954 0-4.9971-0.015-4.9971-5.5165v-9.4802c0-1.4869-1.3071-2.6916-2.9193-2.6916-1.6123 0-2.9193 1.2047-2.9193 2.6916v12.354c0 5.6939 4.6336 9.0964 10.836 9.0964v15.213h8.3285v-23.689c6.2021 0 10.836-3.4012 10.836-9.0952v-13.743c0-1.4869-1.3071-2.6916-2.9193-2.6916z" />
                    <path id="path10590-3-5-8-4" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m225.91 447.5c2.2227 0 4.0245 1.9708 4.0245 4.4028v14.293c2.2182 0 4.8292-0.0145 4.8292-5.3313v-5.9423c0-1.4369 1.2632-2.6012 2.8213-2.6012s2.8213 1.1642 2.8213 2.6012v8.7195c0 5.5027-4.4781 8.7908-10.472 8.7908v20.068h-8.0489v-40.597c0-2.432 1.8018-4.4028 4.0244-4.4028z" />
                    <path id="path10590-3-4-6-4" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m46.842 445.94c-2.2999 0-4.1643 2.0403-4.1643 4.5568v20.342c-2.2954 0-4.9971-0.0161-4.9971-5.5176v-7.2581c0-1.4869-1.307-2.6927-2.9193-2.6927s-2.9193 1.2058-2.9193 2.6927v10.133c0 5.6939 4.6337 9.0952 10.836 9.0952v15.214h8.3285v-17.648c6.2021 0 10.836-3.4013 10.836-9.0952v-5.9699c0-1.4869-1.307-2.6916-2.9193-2.6916s-2.9193 1.2047-2.9193 2.6916v3.095c0 5.5016-2.7017 5.5165-4.9971 5.5165v-17.906c0-2.5165-1.8644-4.5568-4.1642-4.5568z" />
                    <path id="path10590-3-4-6-4-6" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m320.43 445.94c-2.2998 0-4.1642 2.0403-4.1642 4.5568v20.342c-2.2954 0-4.9972-0.0161-4.9972-5.5176v-7.2581c0-1.4869-1.307-2.6927-2.9193-2.6927-1.6122 0-2.9193 1.2058-2.9193 2.6927v10.133c0 5.6939 4.6337 9.0952 10.836 9.0952v15.214h8.3285v-17.648c6.2021 0 10.836-3.4013 10.836-9.0952v-5.9699c0-1.4869-1.307-2.6916-2.9193-2.6916s-2.9193 1.2047-2.9193 2.6916v3.095c0 5.5016-2.7018 5.5165-4.9971 5.5165v-17.906c0-2.5165-1.8644-4.5568-4.1643-4.5568z" />
                </g>
            </svg>
        `;

var fgSVG = `
            <svg id="fg-svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="150" viewBox="0 0 360 150" width="360" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/">
                <rect style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    height="147.5" width="360" y="2.5" x="0" fill="#8C8EB1" />
                <path stroke="#1C3144" stroke-width="5" fill="none" d="m-0.000001625 2.5h360" />
                <circle id="a" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    cx="-9.75" cy="11" r="2.5" fill="#fff" />
                <use xlink:href="#a" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 9.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 18.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(15 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 24.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 33.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(30 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 39.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 48.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(45 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 54.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 63.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(60 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 69.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 78.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(75 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 84.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 93.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(90 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 99.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 108.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(105 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 114.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 123.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(120 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 129.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 138.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(135 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 144.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 153.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(150 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 159.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 168.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(165 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 174.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 183.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(180 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 189.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 198.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(195 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 204.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 213.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(210 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 219.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 228.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(225 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 234.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 243.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(240 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 249.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 258.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(255 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 264.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 273.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(270 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 279.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 288.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(285 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 294.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 303.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(300 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 309.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 318.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(315 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 324.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 333.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(330 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 339.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 348.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(345 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 354.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 363.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(360 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 369.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 378.05 17.2)" height="100%" width="100%" y="0" x="0" />
            </svg>
        `;

export{bgSVG, fgSVG};