// Mobile Bottom Sheet Toggle and UI Management
document.addEventListener('DOMContentLoaded', function() {
    // Localization
    const lang = document.documentElement.lang || 'en';
    const translations = {
        en: {
            placeholder: 'Select answers to see possible types'
        },
        ru: {
            placeholder: 'Выберите ответы, чтобы увидеть возможные типы'
        }
    };
    const t = translations[lang] || translations.en;

    // Set localized placeholders via data attributes (read by CSS)
    const resultsElement = document.getElementById('results');
    const mobileResultsElement = document.getElementById('mobileResults');

    if (resultsElement) {
        resultsElement.setAttribute('data-placeholder', t.placeholder);
    }
    if (mobileResultsElement) {
        mobileResultsElement.setAttribute('data-placeholder', t.placeholder);
    }

    // Mobile Bottom Sheet
    const bottomSheet = document.getElementById('mobileBottomSheet');
    const bottomSheetHandle = document.getElementById('bottomSheetHandle');
    const bottomSheetToggle = document.getElementById('bottomSheetToggle');

    function toggleBottomSheet() {
        if (bottomSheet) {
            bottomSheet.classList.toggle('collapsed');
        }
    }

    if (bottomSheetHandle) {
        bottomSheetHandle.addEventListener('click', toggleBottomSheet);
    }

    if (bottomSheetToggle) {
        bottomSheetToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleBottomSheet();
        });
    }

    // Sync results between desktop and mobile
    const observer = new MutationObserver(function() {
        const desktopResults = document.getElementById('results');
        const mobileResults = document.getElementById('mobileResults');
        if (desktopResults && mobileResults) {
            mobileResults.innerHTML = desktopResults.innerHTML;
        }
    });

    if (resultsElement) {
        observer.observe(resultsElement, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }

    // Sync reset buttons
    const desktopResetBtn = document.getElementById('resetBtn');
    const mobileResetBtn = document.getElementById('mobileResetBtn');

    if (mobileResetBtn && desktopResetBtn) {
        mobileResetBtn.addEventListener('click', function() {
            desktopResetBtn.click();
        });
    }

    // Update progress bar (integrate this with your quiz logic)
    function updateProgressBar(percentage) {
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
    }

    // Expose to global scope
    window.updateProgressBar = updateProgressBar;
});
