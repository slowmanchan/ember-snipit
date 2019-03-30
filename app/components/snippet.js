import Component from '@ember/component';

export default Component.extend({
    selectedOption: null,
    selectedTheme: 'default',
    myCode: 'hello',

    actions: {
        setTheme: function(theme) {
            this.set('selectedTheme', theme)
        },
        setSelection: function(selected) {
            this.set('selectedOption', selected)
        },
        logSnippet(snippet) {
            alert(snippet);
        },
        logCode() {
            alert(this.model.code)
        },
    }
});
