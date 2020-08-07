(function () {
    const clickedClass = 'clicked';
    const hoveredClass = 'hovered';
    const hiddenClass = 'd-none';

    let infoBoxes;
    let mapAreas;
    let flags;

    // hide country info and set all flags and map areas to unclicked
    function reset () {
        infoBoxes.forEach((box) => {
            box.classList.add(hiddenClass);
        });

        flags.forEach((flag) => {
            flag.classList.remove(clickedClass);
        });

        mapAreas.forEach((area) => {
            area.classList.remove(clickedClass);
        });
    }

    // toggle hovered class for flag and corresponding map area
    function toggleHovered (country) {
        document.querySelector('#' + country).classList.toggle(hoveredClass);
        document.querySelector('#flag-' + country).classList.toggle(hoveredClass);
    }

    // show country info and active map and flag
    function setClicked (country) {'hovered'
        reset ();
        let el = document.querySelector('#info-' + country).classList.remove(hiddenClass);
        document.querySelector('#' + country).classList.add(clickedClass);
        document.querySelector('#flag-' + country).classList.add(clickedClass);
    }

    // initialize click listeners
    function initClickListeners () {
        flags.forEach((flag) => {
            flag.addEventListener('click', () => {
                setClicked(flag.dataset.country);
            });
        });

        mapAreas.forEach((area) => {
            area.addEventListener('click', () => {
                setClicked(area.id);
            });
        });
    }

    // initialize hover listeners
    function initHoverListeners () {
        flags.forEach((flag) => {
            flag.addEventListener('mouseover', () => {
                toggleHovered(flag.dataset.country);
            });
        });

        flags.forEach((flag) => {
            flag.addEventListener('mouseout', () => {
                toggleHovered(flag.dataset.country);
            });
        });

        mapAreas.forEach((area) => {
            area.addEventListener('mouseover', () => {
                toggleHovered(area.id);
            });
        });

        mapAreas.forEach((area) => {
            area.addEventListener('mouseout', () => {
                toggleHovered(area.id);
            });
        });
    }

    // initialize elements
    function init () {
        flags = document.querySelectorAll('.flag');
        mapAreas = document.querySelectorAll('.country');
        infoBoxes = document.querySelectorAll('.country-info');

        initClickListeners();
        initHoverListeners();
    }

    document.addEventListener('DOMContentLoaded', function(){
        init();
    }, false);
})();
