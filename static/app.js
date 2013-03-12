/**
 * Ext.application is the heart of your app. It sets the application name, can specify the icon and startup images to
 * use when your app is added to the home screen, and sets up your application's dependencies - usually the models,
 * views and controllers that your app uses.
 */
Ext.application({
    name: 'Kitchensink',

    //sets up the icon and startup screens for when the app is added to a phone/tablet home screen

    glossOnIcon: false,
    icon: {
        57: 'resources/images/eagleEye.ico',
        72: 'resources/images/eagleEye.ico',
        114: 'resources/images/eagleEye.ico',
        144: 'resources/images/eagleEye.ico'
    },

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    //loads the views used by the app from the app/view folder
    views: [
        //component demos
        'CanvasView', 'RoleChart', 'RoleView', 'UserChart', 'OrgChartView',
        'UserDetailView', 'UserSlider', 'UserView','UserCarousel'
    ],

    //loads app/store/Demos.js, which contains the tree data for our main navigation NestedList
    stores: ['UserListStore', 'Roles'],

    //the Kitchen Sink has Phone and Tablet modes, which rearrange the screen based on the type
    //of device detected
    profiles: ['Tablet', 'Phone']
});
Ext.Loader.setConfig({disableCaching: false});
