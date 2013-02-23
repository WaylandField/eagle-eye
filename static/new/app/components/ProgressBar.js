Ext.define('Kitchensink.components.ProgressBar', {
    extend : 'Ext.Component',
    xtype: 'progressbar',
    template : [{
        tag : 'input',
        reference:'progress',
        value : 50,
        max: 100
    }]
});