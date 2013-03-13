/**
 * @class Kitchensink.controller.Main
 * @extends Ext.app.Controller
 *
 * This is an abstract base class that is extended by both the phone and tablet versions. This controller is
 * never directly instantiated, it just provides a set of common functionality that the phone and tablet
 * subclasses both extend.
 */
Ext.define('Kitchensink.controller.Main', {
    extend: 'Ext.app.Controller',
    requires : ['Kitchensink.view.RoleView','Kitchensink.view.UserView'],
    config: {
        /**
         * @private
         */
        viewCache: [],

        refs: {
            nav: '#reportsNavi',
            main: 'mainview',
            toolbar: '#mainNavigationBar',
            launchscreen : "#launchscreen",
            mapButton: 'button[action=showMap]',
            roleChart : '#roleChart',
            popupDialog:'#popupDialog',
            backBtn:'#backBtn',

            sourceOverlay: {
                selector: 'sourceoverlay',
                xtype: 'sourceoverlay',
                autoCreate: true
            }
        },

        control: {
            mapButton: {
                tap: 'onMapTap'
            },
            nav: {
                select: 'onNavTap'
            },
            roleChart : {
            	roleSelected: 'onRoleSelected'
            },
            backBtn : {
                tap:'backToMain'
            }
        },

        routes: {
            'demo/:id': 'showViewById',
            'menu/:id': 'showMenuById',
            'report/:id': 'showReportById',
            'role/:id':'showReportById',
            'user/:id':'showUserById',
            'cool/:id':'showCarouselById',
            'org/:id':'showOrgChart'
            
        },

        /**
         * @cfg {Ext.data.Model} currentDemo The Demo that is currently loaded. This is set whenever showViewById
         * is called and used by functions like onSourceTap to fetch the source code for the current demo.
         */
        currentDemo: undefined
    },

    backToMain: function(){
        this.showView({get:function get(t){
    		var jj = {
                text: 'Team Member Readiness for the Role "Dev Manager"',
                card: false,
                id: 'canvasView',
                view: 'CanvasView',
                animation: {
                    type: 'slide',
                    direction: 'up'
                }
    		};
    		return jj[t];
    	}});
    },

    /**
     * Finds a given view by ID and shows it. End-point of the "demo/:id" route
     */
    showViewById: function(id) {
        var nav = this.getNav(),
            view = nav.getStore().getNodeById(id);

        this.showView(view);
        this.setCurrentDemo(view);
        this.hideSheets();
    },
    
    showReportById : function(id){
    	this.showView({get:function get(t){
    		var jj = {
                text: 'Team Member Readiness for the Role "Dev Manager"',
                card: false,
                id: 'roleView',
                view: 'RoleView',
                animation: {
                    type: 'slide',
                    direction: 'up'
                }
    		};
    		return jj[t];
    	}});
    },
    showUserById : function(id){
    	this.showView({get:function get(t){
    		var jj = {
                text: 'Is User Ready To Be "Dev Manager"',
                card: false,
                id: 'userView',
                view: 'UserView',
                animation: {
                    type: 'slide',
                    direction: 'up'
                }
    		};
    		return jj[t];
    	}});
    },

    showCarouselById : function(id){
    	this.showView({get:function get(t){
    		var jj = {
                view: 'UserCarousel',
                animation: {
                    type: 'slide',
                    direction: 'up'
                }
    		};
    		return jj[t];
    	}});
    },
    showOrgChart: function(){
        this.showView({get:function(t){
            var jj = {
                view:'OrgChartView',
                'animation' : {
                    type:'slide',
                    Direction:'up'
                }
            };
            return jj[t];
        }});
    },

    

    /**
     * Shows the source code for the {@link #currentDemo} in an overlay
     */
    onMapTap: function() {
        var popup = this.getPopupDialog();
        if(!popup.map){
            popup.map = Ext.create('Kitchensink.components.BingMap',{
                id:'mapObj',
                border:1
            });
            var roleChart = Ext.getCmp('roleChart');
            popup.map.on({
                'change':function(){
                    roleChart.paint();
                    popup.hide();
                }
            });
            popup.add(popup.map);
        }
        popup.setSize(550, 400);
        popup.showBy(this.getMapButton());

    },

    onRoleSelected: function(role){
        this.showCarouselById();
        return;
        var popup = this.getPopupDialog();
        popup.setSize(200, 600);
        popup.setRight(0);
        popup.setTop(0);
        popup.setItems([
            {
                xtype:'list',
                itemTpl:'{username}',
                model:'Kitchensink.model.User',
                data:role.data.users
            }
        ]);
        popup.show();
    },

    /**
     * @private
     * In the kitchen sink we have a large number of dynamic views. If we were to keep all of them rendered
     * we'd risk causing the browser to run out of memory, especially on older devices. If we destroy them as
     * soon as we're done with them, the app can appear sluggish. Instead, we keep a small number of rendered
     * views in a viewCache so that we can easily reuse recently used views while destroying those we haven't
     * used in a while.
     * @param {String} name The full class name of the view to create (e.g. "Kitchensink.view.Forms")
     * @return {Ext.Component} The component, which may be from the cache
     */
    createView: function(name) {
        var cache = this.getViewCache(),
            ln = cache.length,
            limit = 20,
            view, i, oldView;

        Ext.each(cache, function(item) {
            if (item.viewName === name) {
                view = item;
                return;
            }
        }, this);

        if (view) {
            return view;
        }

        if (ln >= limit) {
            for (i = 0; i < ln; i++) {
                oldView = cache[i];
                if (!oldView.isPainted()) {
                    oldView.destroy();
                    cache.splice(i, 1);
                    break;
                }
            }
        }

        view = Ext.create(name);
        view.viewName = name;
        cache.push(view);
        this.setViewCache(cache);

        return view;
    },

    /**
     * @private
     * Returns the full class name of the view to construct for a given Demo
     * @param {Kitchensink.model.Demo} item The demo
     * @return {String} The full class name of the view
     */
    getViewName: function(item) {
        var name = item.get('view') || item.get('text'),
            ns   = 'Kitchensink.view.';

        if (name == 'TouchEvents') {
            if (this.getApplication().getCurrentProfile().getName() === 'Tablet') {
                return ns + 'tablet.' + name;
            } else {
                return ns + 'phone.' + name;
            }
        } else {
            return ns + name;
        }
    },
    
    /**
     * we iterate over all of the floating sheet components and make sure they're hidden when we
     * navigate to a new view. This stops things like Picker overlays staying visible when you hit
     * the browser's back button
     */
    hideSheets: function() {
        Ext.each(Ext.ComponentQuery.query('sheet'), function(sheet) {
            sheet.setHidden(true);
        });
    }
});
