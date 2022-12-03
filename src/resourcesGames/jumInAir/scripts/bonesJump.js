var boneOpen = `
            <svg id="bone" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="400" viewBox="0 0 79.999993 400.00001" width="80" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/">
        `;
var boneMid = `
            <path id="path4855-9" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                d="m12.343 397.5-0.274-343.44c-0.066-8.49-9.569-14.59-9.569-27.05 0-12.457 7.957-24.615 21.609-24.551 7.448 0.0614 12.539 3.9094 15.891 8.055 3.352-4.1456 8.443-7.9937 15.891-8.055 13.652-0.0637 21.609 12.094 21.609 24.551s-9.5033 18.557-9.5692 27.044l-0.27382 343.41z"
                stroke="#333333" stroke-linecap="round" stroke-width="5" fill="#FFF4F1" />
            <g stroke-linejoin="round" stroke-linecap="round" stroke="#FFC300 " stroke-width="10" fill="none">
                <path id="path4855-2-0" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    d="m13.781 26.92a11.746 12.772 0 0 1 11.746 -12.78" />
                <path id="path5025" d="m56.472 115.85v78.183" />
                <path id="path5025-3-6" d="m56.472 92.06v10.609" />
                <path id="path5025-0" d="m56.472 253.62v126.19" />
                <path id="path5025-3-6-6" d="m56.472 212.25v24.515" />
            </g>
        `;
var boneClose = "</svg>";

var botBoneSVG = boneOpen + boneMid + boneClose;
var topBoneSVG =
  boneOpen +
  '<g transform="rotate(180) translate(-80, -400)">' +
  boneMid +
  "</g>" +
  boneClose;

export {boneOpen, boneMid, boneClose, botBoneSVG, topBoneSVG};