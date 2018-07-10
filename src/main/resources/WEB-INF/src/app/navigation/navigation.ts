export const navigation = [
    {
        'id'       : 'applications',
        'title'    : 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type'     : 'group',
        'icon'     : 'apps',
        'children' : [
            {
                'id'       : 'contacts',
                'title'    : 'Contacts',
                'translate': 'NAV.CONTACTS',
                'type'     : 'item',
                'icon'     : 'account_box',
                'url'      : '/apps/contacts'
            },
			{
				'id'       : 'records',
				'title'    : 'Records',
				'translate': 'NAV.RECORDS',
				'type'     : 'item',
				'icon'     : 'assignment',
				'url'      : '/apps/records'
			}
        ]
    },
    {
        'id'      : 'user-interface',
        'title'   : 'User Interface',
        'type'    : 'group',
        'icon'    : 'web',
        'children': [
            {
                'id'   : 'forms',
                'title': 'Forms',
                'type' : 'item',
                'icon' : 'web_asset',
                'url'  : '/ui/forms'
            },
            {
                'id'   : 'icons',
                'title': 'Icons',
                'type' : 'item',
                'icon' : 'photo',
                'url'  : '/ui/icons'
            },
            {
                'id'   : 'typography',
                'title': 'Typography',
                'type' : 'item',
                'icon' : 'text_fields',
                'url'  : '/ui/typography'
            },
            {
                'id'   : 'helper-classes',
                'title': 'Helper Classes',
                'type' : 'item',
                'icon' : 'help',
                'url'  : '/ui/helper-classes'
            },
            {
                'id'      : 'page-layouts',
                'title'   : 'Page Layouts',
                'type'    : 'collapse',
                'icon'    : 'view_quilt',
                'children': [
                    {
                        'id'      : 'carded',
                        'title'   : 'Carded',
                        'type'    : 'collapse',
                        'badge'   : {
                            'title': 10,
                            'bg'   : '#525e8a',
                            'fg'   : '#FFFFFF'
                        },
                        'children': [
                            {
                                'id'   : 'full-width',
                                'title': 'Full Width',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/full-width'
                            },
                            {
                                'id'   : 'full-width-2',
                                'title': 'Full Width 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/full-width-2'
                            },
                            {
                                'id'   : 'left-sidenav',
                                'title': 'Left Sidenav',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidenav'
                            },
                            {
                                'id'   : 'left-sidenav-tabbed',
                                'title': 'Left Sidenav Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidenav-tabbed'
                            },
                            {
                                'id'   : 'left-sidenav-2',
                                'title': 'Left Sidenav 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidenav-2'
                            },
                            {
                                'id'   : 'left-sidenav-2-tabbed',
                                'title': 'Left Sidenav 2 Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/left-sidenav-2-tabbed'
                            },
                            {
                                'id'   : 'right-sidenav',
                                'title': 'Right Sidenav',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidenav'
                            },
                            {
                                'id'   : 'right-sidenav-tabbed',
                                'title': 'Right Sidenav Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidenav-tabbed'
                            },
                            {
                                'id'   : 'right-sidenav-2',
                                'title': 'Right Sidenav 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidenav-2'
                            },
                            {
                                'id'   : 'right-sidenav-2-tabbed',
                                'title': 'Right Sidenav 2 Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/carded/right-sidenav-2-tabbed'
                            }
                        ]
                    },
                    {
                        'id'      : 'simple',
                        'title'   : 'Simple',
                        'type'    : 'collapse',
                        'badge'   : {
                            'title': 8,
                            'bg'   : '#525e8a',
                            'fg'   : '#FFFFFF'
                        },
                        'children': [
                            {
                                'id'   : 'full-width',
                                'title': 'Full Width',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/full-width'
                            },
                            {
                                'id'   : 'left-sidenav',
                                'title': 'Left Sidenav',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/left-sidenav'
                            },
                            {
                                'id'   : 'left-sidenav-2',
                                'title': 'Left Sidenav 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/left-sidenav-2'
                            },
                            {
                                'id'   : 'left-sidenav-3',
                                'title': 'Left Sidenav 3',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/left-sidenav-3'
                            },
                            {
                                'id'   : 'right-sidenav',
                                'title': 'Right Sidenav',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/right-sidenav'
                            },
                            {
                                'id'   : 'right-sidenav-2',
                                'title': 'Right Sidenav 2',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/right-sidenav-2'
                            },
                            {
                                'id'   : 'right-sidenav-3',
                                'title': 'Right Sidenav 3',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/right-sidenav-3'
                            },
                            {
                                'id'   : 'tabbed',
                                'title': 'Tabbed',
                                'type' : 'item',
                                'url'  : '/ui/page-layouts/simple/tabbed'
                            }
                        ]
                    },
                    {
                        'id'   : 'blank',
                        'title': 'Blank',
                        'type' : 'item',
                        'url'  : '/ui/page-layouts/blank'
                    }
                ]
            },
            {
                'id'   : 'colors',
                'title': 'Colors',
                'type' : 'item',
                'icon' : 'color_lens',
                'url'  : '/ui/colors'
            }
        ]
    },
    {
        'id'      : 'services',
        'title'   : 'Services',
        'type'    : 'group',
        'icon'    : 'settings',
        'children': [
            {
                'id'   : 'config',
                'title': 'Config',
                'type' : 'item',
                'icon' : 'settings',
                'url'  : '/services/config'
            },
            {
                'id'   : 'splash-screen',
                'title': 'Splash Screen',
                'type' : 'item',
                'icon' : 'settings',
                'url'  : '/services/splash-screen'
            }
        ]
    },
    {
        'id'      : 'components',
        'title'   : 'Components',
        'type'    : 'group',
        'icon'    : 'settings_input_component',
        'children': [
            {
                'id'      : 'angular-material-elements',
                'title'   : 'Angular Material Elements',
                'type'    : 'collapse',
                'icon'    : 'layers',
                'children': [
                    {
                        'id'      : 'form-controls',
                        'title'   : 'Form Controls',
                        'type'    : 'group',
                        'children': [
                            {
                                'id'   : 'autocomplete',
                                'title': 'Autocomplete',
                                'type' : 'item',
                                'url'  : '/components/angular-material/autocomplete'
                            },
                            {
                                'id'   : 'checkbox',
                                'title': 'Checkbox',
                                'type' : 'item',
                                'url'  : '/components/angular-material/checkbox'
                            },
                            {
                                'id'   : 'datepicker',
                                'title': 'Datepicker',
                                'type' : 'item',
                                'url'  : '/components/angular-material/datepicker'
                            },
                            {
                                'id'   : 'form-field',
                                'title': 'Form field',
                                'type' : 'item',
                                'url'  : '/components/angular-material/form-field'
                            },
                            {
                                'id'   : 'input',
                                'title': 'Input',
                                'type' : 'item',
                                'url'  : '/components/angular-material/input'
                            },
                            {
                                'id'   : 'radio-button',
                                'title': 'Radio button',
                                'type' : 'item',
                                'url'  : '/components/angular-material/radio-button'
                            },
                            {
                                'id'   : 'select',
                                'title': 'Select',
                                'type' : 'item',
                                'url'  : '/components/angular-material/select'
                            },
                            {
                                'id'   : 'slider',
                                'title': 'Slider',
                                'type' : 'item',
                                'url'  : '/components/angular-material/slider'
                            },
                            {
                                'id'   : 'slide-toggle',
                                'title': 'Slide toggle',
                                'type' : 'item',
                                'url'  : '/components/angular-material/slide-toggle'
                            }
                        ]
                    },
                    {
                        'id'      : 'navigation',
                        'title'   : 'Navigation',
                        'type'    : 'group',
                        'children': [
                            {
                                'id'   : 'menu',
                                'title': 'Menu',
                                'type' : 'item',
                                'url'  : '/components/angular-material/menu'
                            },
                            {
                                'id'   : 'sidenav',
                                'title': 'Sidenav',
                                'type' : 'item',
                                'url'  : '/components/angular-material/sidenav'
                            },
                            {
                                'id'   : 'toolbar',
                                'title': 'Toolbar',
                                'type' : 'item',
                                'url'  : '/components/angular-material/toolbar'
                            }
                        ]
                    },
                    {
                        'id'      : 'layout',
                        'title'   : 'Layout',
                        'type'    : 'group',
                        'children': [
                            {
                                'id'   : 'badge',
                                'title': 'Badge',
                                'type' : 'item',
                                'url'  : '/components/angular-material/badge'
                            },
                            {
                                'id'   : 'bottom-sheet',
                                'title': 'Bottom Sheet',
                                'type' : 'item',
                                'url'  : '/components/angular-material/bottom-sheet'
                            },
                            {
                                'id'   : 'card',
                                'title': 'Card',
                                'type' : 'item',
                                'url'  : '/components/angular-material/card'
                            },
                            {
                                'id'   : 'divider',
                                'title': 'Divider',
                                'type' : 'item',
                                'url'  : '/components/angular-material/divider'
                            },
                            {
                                'id'   : 'elevation',
                                'title': 'Elevation',
                                'type' : 'item',
                                'url'  : '/components/angular-material/elevation'
                            },
                            {
                                'id'   : 'expansion-panel',
                                'title': 'Expansion Panel',
                                'type' : 'item',
                                'url'  : '/components/angular-material/expansion-panel'
                            },
                            {
                                'id'   : 'grid-list',
                                'title': 'Grid list',
                                'type' : 'item',
                                'url'  : '/components/angular-material/grid-list'
                            },
                            {
                                'id'   : 'list',
                                'title': 'List',
                                'type' : 'item',
                                'url'  : '/components/angular-material/list'
                            },
                            {
                                'id'   : 'stepper',
                                'title': 'Stepper',
                                'type' : 'item',
                                'url'  : '/components/angular-material/stepper'
                            },
                            {
                                'id'   : 'tabs',
                                'title': 'Tabs',
                                'type' : 'item',
                                'url'  : '/components/angular-material/tabs'
                            }
                        ]
                    },
                    {
                        'id'      : 'buttons-indicators',
                        'title'   : 'Buttons & Indicators',
                        'type'    : 'group',
                        'children': [
                            {
                                'id'   : 'button',
                                'title': 'Button',
                                'type' : 'item',
                                'url'  : '/components/angular-material/button'
                            },
                            {
                                'id'   : 'button-toggle',
                                'title': 'Button toggle',
                                'type' : 'item',
                                'url'  : '/components/angular-material/button-toggle'
                            },
                            {
                                'id'   : 'chips',
                                'title': 'Chips',
                                'type' : 'item',
                                'url'  : '/components/angular-material/chips'
                            },
                            {
                                'id'   : 'icon',
                                'title': 'Icon',
                                'type' : 'item',
                                'url'  : '/components/angular-material/icon'
                            },
                            {
                                'id'   : 'progress-spinner',
                                'title': 'Progress spinner',
                                'type' : 'item',
                                'url'  : '/components/angular-material/progress-spinner'
                            },
                            {
                                'id'   : 'progress-bar',
                                'title': 'Progress bar',
                                'type' : 'item',
                                'url'  : '/components/angular-material/progress-bar'
                            }
                        ]
                    },
                    {
                        'id'      : 'popups-modals',
                        'title'   : 'Popups & Modals',
                        'type'    : 'group',
                        'children': [
                            {
                                'id'   : 'dialog',
                                'title': 'Dialog',
                                'type' : 'item',
                                'url'  : '/components/angular-material/dialog'
                            },
                            {
                                'id'   : 'snackbar',
                                'title': 'Snackbar',
                                'type' : 'item',
                                'url'  : '/components/angular-material/snackbar'
                            },
                            {
                                'id'   : 'tooltip',
                                'title': 'Tooltip',
                                'type' : 'item',
                                'url'  : '/components/angular-material/tooltip'
                            }
                        ]
                    },
                    {
                        'id'      : 'data-table',
                        'title'   : 'Data table',
                        'type'    : 'group',
                        'children': [
                            {
                                'id'   : 'paginator',
                                'title': 'Paginator',
                                'type' : 'item',
                                'url'  : '/components/angular-material/paginator'
                            },
                            {
                                'id'   : 'sort-header',
                                'title': 'Sort header',
                                'type' : 'item',
                                'url'  : '/components/angular-material/sort-header'
                            },
                            {
                                'id'   : 'table',
                                'title': 'Table',
                                'type' : 'item',
                                'url'  : '/components/angular-material/table'
                            }
                        ]
                    },
                    {
                        'id'   : 'tree',
                        'title': 'Tree',
                        'type' : 'item',
                        'url'  : '/components/angular-material/tree'
                    }
                ]
            },
            {
                'id'   : 'cards',
                'title': 'Cards',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/cards'
            },
            {
                'id'   : 'countdown',
                'title': 'Countdown',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/countdown'
            },
            {
                'id'   : 'highlight',
                'title': 'Highlight',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/highlight'
            },
            {
                'id'   : 'material-color-picker',
                'title': 'Material Color Picker',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/material-color-picker'
            },
            {
                'id'   : 'multi-language',
                'title': 'Multi Language',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/multi-language'
            },
            {
                'id'   : 'navigation',
                'title': 'Navigation',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/navigation'
            },
            {
                'id'   : 'search-bar',
                'title': 'Search Bar',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/search-bar'
            },
            {
                'id'   : 'sidebar',
                'title': 'Sidebar',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/sidebar'
            },
            {
                'id'   : 'shortcuts',
                'title': 'Shortcuts',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/shortcuts'
            },
            {
                'id'   : 'widget',
                'title': 'Widget',
                'type' : 'item',
                'icon' : 'settings_input_component',
                'url'  : '/components/widget'
            }
        ]
    },
    {
        'id'      : '3rd-party-components',
        'title'   : '3rd Party components',
        'type'    : 'group',
        'icon'    : 'settings_input_component',
        'children': [
            {
                'id'      : 'datatables',
                'title'   : 'Datatables',
                'type'    : 'collapse',
                'icon'    : 'border_all',
                'children': [
                    {
                        'id'   : 'ngxdatatable',
                        'title': 'ngx-datatable',
                        'type' : 'item',
                        'url'  : '/components-third-party/datatables/ngx-datatable'
                    }
                ]
            },
            {
                'id'   : 'google-maps',
                'title': 'Google Maps',
                'type' : 'item',
                'icon' : 'place',
                'url'  : '/components-third-party/google-maps'
            }
        ]
    }
];
