const flexTestContainer = document.getElementById('flex-test-container');
const selectFlexDirection = document.getElementById('select-flex-direction');
const selectAlignItems = document.getElementById('select-align-items');
const selectJustifyContent = document.getElementById('select-justify-content');
const selectFlexWrap = document.getElementById('select-flex-wrap');
const inputGap = document.getElementById('input-gap');

//inner divs
const div1 = document.getElementById('div-1');
const div2 = document.getElementById('div-2');
const div3 = document.getElementById('div-3');
const div4 = document.getElementById('div-4');

//inner div inputs
const inputHeight = document.getElementById('input-height');
const inputWidth = document.getElementById('input-width');
const inputMaxHeight = document.getElementById('input-max-height');
const inputMaxWidth = document.getElementById('input-max-width');

const inputFlexGrowDiv1 = document.getElementById('input-flex-grow-div-1');
const inputFlexGrowDiv2 = document.getElementById('input-flex-grow-div-2');
const inputFlexGrowDiv3 = document.getElementById('input-flex-grow-div-3');
const inputFlexGrowDiv4 = document.getElementById('input-flex-grow-div-4');

//css code elements
const cssCodeTestContainer = document.getElementById('css-code-flex-test-container');
const cssCodeDiv1 = document.getElementById('css-code-div1');
const cssCodeDiv2 = document.getElementById('css-code-div2');
const cssCodeDiv3 = document.getElementById('css-code-div3');
const cssCodeDiv4 = document.getElementById('css-code-div4');

function applyFlexStyles() {
    applyTestContainerFlexStyles();
    applyDivStyles();
    updateCSSCode();
}

function applyTestContainerFlexStyles() {
    flexTestContainer.style.display = 'flex';
    flexTestContainer.style.flexDirection = selectFlexDirection.value;
    flexTestContainer.style.alignItems = selectAlignItems.value;
    flexTestContainer.style.justifyContent = selectJustifyContent.value;
    flexTestContainer.style.flexWrap = selectFlexWrap.value;
    flexTestContainer.style.gap = inputGap.value + 'px';
}

function applyDivStyles() {
    const height = inputHeight.disabled
                    ? 'unset'
                    : inputHeight.value + 'px';

    const width = inputWidth.disabled
                    ? 'unset'
                    : inputWidth.value + 'px';

    const maxHeight = inputMaxHeight.disabled
                    ? 'unset'
                    : inputMaxHeight.value + 'px';

    const maxWidth = inputMaxWidth.disabled
                    ? 'unset'
                    : inputMaxWidth.value + 'px';

    div1.style.height = height;
    div1.style.maxHeight = maxHeight;
    div1.style.width = width;
    div1.style.maxWidth = maxWidth;

    div2.style.height = height;
    div2.style.maxHeight = maxHeight;
    div2.style.width = width;
    div2.style.maxWidth = maxWidth;

    div3.style.height = height;
    div3.style.maxHeight = maxHeight;
    div3.style.width = width;
    div3.style.maxWidth = maxWidth;

    div4.style.height = height;
    div4.style.maxHeight = maxHeight;
    div4.style.width = width;
    div4.style.maxWidth = maxWidth;

    div1.style.flexGrow = inputFlexGrowDiv1.value;
    div2.style.flexGrow = inputFlexGrowDiv2.value;
    div3.style.flexGrow = inputFlexGrowDiv3.value;
    div4.style.flexGrow = inputFlexGrowDiv4.value;

    updateCSSCode();
}

function enableDisableInput(checkbox, inputId) {

    const input = document.getElementById(inputId);

    console.log(checkbox.checked)

    if(checkbox.checked) {
        input.disabled = false;
    } else {
        input.disabled = true;
    }

    applyDivStyles();
}

function updateCSSCode() {
    

    cssCodeTestContainer.innerHTML = `
#flex-test-container {
    display: ${flexTestContainer.style.display};
    flex-direction: ${flexTestContainer.style.flexDirection};
    align-items: ${flexTestContainer.style.alignItems};
    justify-content: ${flexTestContainer.style.justifyContent};
    flex-wrap: ${flexTestContainer.style.flexWrap};
    gap: ${flexTestContainer.style.gap};
}`;

    cssCodeDiv1.innerHTML = `
#div-1 {
${getDivCSS(div1)}
}`;

    cssCodeDiv2.innerHTML = `
#div-2 {
${getDivCSS(div2)}
}`;

    cssCodeDiv3.innerHTML = `
#div-3 {
${getDivCSS(div3)}
}`;

    cssCodeDiv4.innerHTML = `
#div-4 {
${getDivCSS(div4)}
}`; 

    hljs.highlightAll();
}

function getDivCSS(div) {
    let divCSS = '';

    if(div.style.height !== 'unset') {
        divCSS = divCSS.concat('    height: ' + div.style.height + ';\r\n');
    }

    if(div.style.width !== 'unset') {
        divCSS = divCSS.concat('    width: ' + div.style.width + ';\r\n');
    }

    if(div.style.maxHeight !== 'unset') {
        divCSS = divCSS.concat('    max-height: ' + div.style.maxHeight + ';\r\n');
    }

    if(div.style.maxWidth !== 'unset') {
        divCSS = divCSS.concat('    max-width: ' + div.style.maxWidth + ';\r\n');
    }

    divCSS = divCSS.concat('    flex-grow: ' + div.style.flexGrow + ';');

    return divCSS;
}

$('[data-bs-toggle="tooltip"]');

setTimeout(function () {
    hljs.highlightAll();

    const options = {
        copyIconClass: "bi bi-files",
        checkIconClass: "bi bi-check-lg text-success",
    };
    window.highlightJsBadge(options);
}, 10);

applyFlexStyles();