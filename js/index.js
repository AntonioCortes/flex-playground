function applyFlexStyles() {
    applyTestContainerFlexStyles();
    applyDivStyles();
}

function applyTestContainerFlexStyles() {
    const flexTestContainer = document.getElementById('flex-test-container');
    const selectFlexDirection = document.getElementById('select-flex-direction');
    const selectAlignItems = document.getElementById('select-align-items');
    const selectJustifyContent = document.getElementById('select-justify-content');
    const selectFlexWrap = document.getElementById('select-flex-wrap');
    const inputGap = document.getElementById('input-gap');

    flexTestContainer.style.flexDirection = selectFlexDirection.value;
    flexTestContainer.style.alignItems = selectAlignItems.value;
    flexTestContainer.style.justifyContent = selectJustifyContent.value;
    flexTestContainer.style.flexWrap = selectFlexWrap.value;
    flexTestContainer.style.gap = inputGap.value + 'px';
}

function applyDivStyles() {
    const div1 = document.getElementById('div-1');
    const div2 = document.getElementById('div-2');
    const div3 = document.getElementById('div-3');
    const div4 = document.getElementById('div-4');

    const inputHeight = document.getElementById('input-height');
    const inputWidth = document.getElementById('input-width');
    const inputMaxHeight = document.getElementById('input-max-height');
    const inputMaxWidth = document.getElementById('input-max-width');

    const inputFlexGrowDiv1 = document.getElementById('input-flex-grow-div-1');
    const inputFlexGrowDiv2 = document.getElementById('input-flex-grow-div-1');
    const inputFlexGrowDiv3 = document.getElementById('input-flex-grow-div-1');
    const inputFlexGrowDiv4 = document.getElementById('input-flex-grow-div-1');

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
}

function enableDisableInput(checkbox, inputId) {

    const input = document.getElementById(inputId);

    if(checkbox.value = true) {
        input.disabled = false;
    } else {
        input.disabled = true;
    }

    applyDivStyles();
}

applyFlexStyles();