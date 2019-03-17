import Component from '@ember/component';

export default Component.extend({
    selectedOption: null,
    selectedTheme: 'default',

    actions: {
        setTheme: function(theme) {
            this.set('selectedTheme', theme)
        },
        setSelection: function(selected) {
            this.set('selectedOption', selected)
        },
        logSnippet(snippet) {
            alert(snippet);
        }
    }
});
