
var model = {
    "id": 86865,
    "name": "Migraine",
    "number_of_user_variables": 3,
    "variable_category_id": 10,
    "default_unit_id": 10,
    "cause_only": 0,
    "client_id": "ct",
    "combination_operation": "MEAN",
    "created_at": "2000-01-01 00:00:00",
    "duration_of_action": 86400,
    "image_url": "https:\/\/images-na.ssl-images-amazon.com\/images\/I\/419eFm6kS9L._SL160_.jpg",
    "ion_icon": "ion-sad-outline",
    "maximum_allowed_value": 5,
    "maximum_recorded_value": 1,
    "mean": 1,
    "median": 1,
    "minimum_allowed_value": 1,
    "minimum_recorded_value": 1,
    "number_of_aggregate_correlations_as_cause": 0,
    "most_common_original_unit_id": 10,
    "most_common_value": 1,
    "number_of_aggregate_correlations_as_effect": 0,
    "number_of_unique_values": 1,
    "onset_delay": 0,
    "outcome": 1,
    "price": 15,
    "product_url": "https:\/\/www.amazon.com\/Migrastil-Migraine-0-3-ounce-Essential-Aromatherapy\/dp\/B01BT8VCOY?SubscriptionId=AKIAJSWU3RSJTDQWCXDQ&tag=quantimodo05-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BT8VC",
    "standard_deviation": 0,
    "status": "UPDATED",
    "variance": 0,
    "synonyms": "[\"Migraine\"]",
    "valence": "negative",
    "number_of_tracking_reminders": 1,
    "upc_14": "612524714044",
    "number_common_tagged_by": 0,
    "number_of_common_tags": 0,
    "most_common_source_name": "Vv7HymHq6PkTrZfM",
    "data_sources_count": "{\"Vv7HymHq6PkTrZfM\":1}",
    "optimal_value_message": "0",
    "number_of_raw_measurements_with_tags_joins_children": 1,
    "manual_tracking": 1,
    "analysis_settings_modified_at": "2020-06-19 03:11:23",
    "newest_data_at": "2020-10-02 11:52:00",
    "reason_for_analysis": "STALE: analysis_ended_at before newest_data_at",
    "analysis_started_at": "2020-10-09 02:03:38",
    "analysis_ended_at": "2020-10-09 02:03:38",
    "latest_tagged_measurement_start_at": "2017-06-23 17:00:00",
    "earliest_tagged_measurement_start_at": "2017-06-23 17:00:00",
    "latest_non_tagged_measurement_start_at": "2017-06-23 17:00:00",
    "earliest_non_tagged_measurement_start_at": "2017-06-23 17:00:00",
    "charts": {
        "distributionColumnChart": {
            "chartId": "daily-migraine-distribution",
            "chartTitle": "Daily Migraine Distribution",
            "explanation": "Each column represents the number of days this value occurred.",
            "highchartConfig": {
                "chart": {
                    "animation": {
                        "duration": 0
                    },
                    "renderTo": "daily-migraine-distribution-chart-container",
                    "type": "column",
                    "zoomType": "xy"
                },
                "title": {
                    "text": "Daily Migraine Distribution",
                    "enabled": true,
                    "style": []
                },
                "subtitle": {
                    "text": "Each column represents the number of days this value occurred.",
                    "style": []
                },
                "xAxis": {
                    "title": {
                        "text": "Daily Values (\/5)",
                        "style": []
                    },
                    "categories": [
                        1
                    ]
                },
                "yAxis": {
                    "max": 1,
                    "min": 1,
                    "title": {
                        "text": "Number of Days",
                        "style": [],
                        "enabled": true
                    }
                },
                "legend": {
                    "enabled": false
                },
                "series": [
                    {
                        "data": [
                            1
                        ],
                        "name": "Migraine Distribution",
                        "marker": {
                            "enabled": true,
                            "radius": 5
                        }
                    }
                ],
                "tooltip": {
                    "formatter": {
                        "_expression": "function() {\n            return this.y +' days where the <br\/> average daily value is '+this.x+'\/5';\n        }"
                    }
                },
                "colors": [
                    "#000000",
                    "#3467d6",
                    "#dd4b39",
                    "#0f9d58",
                    "#f09402",
                    "#d34836"
                ],
                "credits": {
                    "enabled": false
                },
                "lang": {
                    "loading": ""
                },
                "loading": {
                    "hideDuration": 10,
                    "showDuration": 10
                },
                "plotOptions": {
                    "column": {
                        "borderWidth": 0,
                        "colorByPoint": true,
                        "pointPadding": 0.2,
                        "enableMouseTracking": true
                    }
                },
                "useHighStocks": false,
                "exporting": {
                    "enabled": true
                },
                "id": "daily-migraine-distribution",
                "themeName": "white",
                "divHeight": null,
                "type": "Chart"
            },
            "id": "daily-migraine-distribution",
            "imageGeneratedAt": null,
            "imageUrl": "https:\/\/static.quantimo.do\/variables\/86865\/daily-migraine-distribution-distribution-column-chart.png",
            "jpgUrl": null,
            "pngUrl": "https:\/\/static.quantimo.do\/variables\/86865\/daily-migraine-distribution-distribution-column-chart.png",
            "subtitle": null,
            "svgUrl": null,
            "title": null,
            "validImageOnS3": true,
            "variableName": "Migraine"
        },
        "weekdayColumnChart": {
            "chartId": "average-migraine-by-day-of-week",
            "chartTitle": "Average Migraine by Day of Week",
            "explanation": "Typical Migraine value on each day of the week.",
            "highchartConfig": {
                "chart": {
                    "animation": {
                        "duration": 0
                    },
                    "renderTo": "average-migraine-by-day-of-week-chart-container",
                    "type": "column",
                    "zoomType": "xy"
                },
                "title": {
                    "text": "Average Migraine by Day of Week",
                    "enabled": true,
                    "style": []
                },
                "subtitle": {
                    "text": "Typical Migraine value seen on each day of the week. ",
                    "style": []
                },
                "xAxis": {
                    "title": {
                        "text": "Day",
                        "style": []
                    },
                    "categories": [
                        "Fri"
                    ]
                },
                "yAxis": {
                    "max": 1,
                    "min": 1,
                    "title": {
                        "text": "Average (\/5)",
                        "style": [],
                        "enabled": true
                    }
                },
                "legend": {
                    "enabled": false
                },
                "series": [
                    {
                        "data": [
                            1
                        ],
                        "name": "Average Migraine By Day of Week",
                        "marker": {
                            "enabled": true,
                            "radius": 5
                        }
                    }
                ],
                "tooltip": {
                    "formatter": {
                        "_expression": "function() {\n            return this.y +'\/5 <br\/>on average<br\/>on '+this.x;\n        }"
                    }
                },
                "colors": [
                    "#000000",
                    "#3467d6",
                    "#dd4b39",
                    "#0f9d58",
                    "#f09402",
                    "#d34836"
                ],
                "credits": {
                    "enabled": false
                },
                "lang": {
                    "loading": ""
                },
                "loading": {
                    "hideDuration": 10,
                    "showDuration": 10
                },
                "plotOptions": {
                    "column": {
                        "borderWidth": 0,
                        "colorByPoint": true,
                        "pointPadding": 0.2,
                        "enableMouseTracking": true
                    }
                },
                "useHighStocks": false,
                "exporting": {
                    "enabled": true
                },
                "id": "average-migraine-by-day-of-week",
                "themeName": "white",
                "divHeight": null,
                "type": "Chart"
            },
            "id": "average-migraine-by-day-of-week",
            "imageGeneratedAt": null,
            "imageUrl": "https:\/\/static.quantimo.do\/variables\/86865\/average-migraine-by-day-of-week-weekday-column-chart.png",
            "jpgUrl": null,
            "pngUrl": "https:\/\/static.quantimo.do\/variables\/86865\/average-migraine-by-day-of-week-weekday-column-chart.png",
            "subtitle": null,
            "svgUrl": null,
            "title": null,
            "validImageOnS3": true,
            "variableName": "Migraine"
        },
        "monthlyColumnChart": {
            "chartId": "average-migraine-by-month",
            "chartTitle": "Average Migraine by Month",
            "explanation": "Typical Migraine value for each month.",
            "highchartConfig": {
                "chart": {
                    "animation": {
                        "duration": 0
                    },
                    "renderTo": "average-migraine-by-month-chart-container",
                    "type": "column",
                    "zoomType": "xy"
                },
                "title": {
                    "text": "Average Migraine by Month",
                    "enabled": true,
                    "style": []
                },
                "subtitle": {
                    "text": "Typical Migraine value for each month.",
                    "style": []
                },
                "xAxis": {
                    "title": {
                        "text": "Month",
                        "style": []
                    },
                    "categories": [
                        "June"
                    ]
                },
                "yAxis": {
                    "max": 1,
                    "min": 1,
                    "title": {
                        "text": "Daily Average (\/5)",
                        "style": [],
                        "enabled": true
                    }
                },
                "legend": {
                    "enabled": false
                },
                "series": [
                    {
                        "data": [
                            1
                        ],
                        "name": "Daily Average Migraine By Month",
                        "marker": {
                            "enabled": true,
                            "radius": 5
                        }
                    }
                ],
                "tooltip": {
                    "formatter": {
                        "_expression": "function() {\n            return this.y +'\/5 <br\/>on average<br\/>in '+this.x;\n        }"
                    }
                },
                "colors": [
                    "#000000",
                    "#3467d6",
                    "#dd4b39",
                    "#0f9d58",
                    "#f09402",
                    "#d34836"
                ],
                "credits": {
                    "enabled": false
                },
                "lang": {
                    "loading": ""
                },
                "loading": {
                    "hideDuration": 10,
                    "showDuration": 10
                },
                "plotOptions": {
                    "column": {
                        "borderWidth": 0,
                        "colorByPoint": true,
                        "pointPadding": 0.2,
                        "enableMouseTracking": true
                    }
                },
                "useHighStocks": false,
                "exporting": {
                    "enabled": true
                },
                "id": "average-migraine-by-month",
                "themeName": "white",
                "divHeight": null,
                "type": "Chart"
            },
            "id": "average-migraine-by-month",
            "imageGeneratedAt": null,
            "imageUrl": "https:\/\/static.quantimo.do\/variables\/86865\/average-migraine-by-month-monthly-column-chart.png",
            "jpgUrl": null,
            "pngUrl": "https:\/\/static.quantimo.do\/variables\/86865\/average-migraine-by-month-monthly-column-chart.png",
            "subtitle": null,
            "svgUrl": null,
            "title": null,
            "validImageOnS3": true,
            "variableName": "Migraine"
        },
        "yearlyColumnChart": {
            "chartId": "average-migraine-by-year",
            "chartTitle": "Average Migraine by Year",
            "explanation": "Typical Migraine value for each year.",
            "highchartConfig": {
                "chart": {
                    "animation": {
                        "duration": 0
                    },
                    "renderTo": "average-migraine-by-year-chart-container",
                    "type": "column",
                    "zoomType": "xy"
                },
                "title": {
                    "text": "Average Migraine by Year",
                    "enabled": true
                },
                "subtitle": {
                    "text": "Typical Migraine value for each year."
                },
                "xAxis": {
                    "categories": [
                        "2017"
                    ],
                    "title": {
                        "text": "Year"
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Daily Average (\/5)",
                        "enabled": true
                    },
                    "min": 1,
                    "max": 1
                },
                "legend": {
                    "enabled": false
                },
                "series": [
                    {
                        "name": "Daily Average Migraine By Year",
                        "data": [
                            {
                                "y": 1,
                                "color": "#0f9d58"
                            }
                        ],
                        "marker": {
                            "enabled": true,
                            "radius": 5
                        },
                        "color": "#000000",
                        "visible": true
                    }
                ],
                "tooltip": {
                    "formatter": {
                        "_expression": "function() {\n            var series = this.series || this.points[0].series || this.points[0].chart.series;\n            var tooltips = series.options.tooltips;\n            if(tooltips){\n                var x = this.x || this.point.x\n                var tooltip = tooltips[x] || null;\n                if(tooltip){\n                    \/\/console.warn(this.point)\n                    \/\/debugger\n                    return tooltip\n                }\n            }\n            \n            return this.y +'\/5 <br\/>on average<br\/>in '+this.x;\n        \n        }"
                    }
                },
                "colors": [
                    "#000000",
                    "#3467d6",
                    "#dd4b39",
                    "#0f9d58",
                    "#f09402",
                    "#d34836",
                    "#886aea"
                ],
                "credits": {
                    "enabled": false
                },
                "lang": {
                    "loading": ""
                },
                "loading": {
                    "hideDuration": 10,
                    "showDuration": 10
                },
                "plotOptions": {
                    "column": {
                        "enableMouseTracking": true,
                        "colorByPoint": true,
                        "pointPadding": 0.2,
                        "borderWidth": 0
                    }
                },
                "useHighStocks": false,
                "exporting": {
                    "enabled": true
                },
                "id": "average-migraine-by-year",
                "themeName": "white",
                "divHeight": null,
                "type": "Yearly Column Chart"
            },
            "id": "average-migraine-by-year",
            "imageGeneratedAt": null,
            "imageUrl": "https:\/\/static.quantimo.do\/testing\/variables\/Migraineaverage-migraine-by-year-yearly-column-chart.png",
            "jpgUrl": null,
            "pngUrl": "https:\/\/static.quantimo.do\/testing\/variables\/Migraineaverage-migraine-by-year-yearly-column-chart.png",
            "subtitle": null,
            "svgUrl": null,
            "title": "Average Migraine by Year",
            "validImageOnS3": null,
            "variableName": "Migraine"
        },
        "aggregateCorrelationsSankeyChart": {
            "chartId": null,
            "chartTitle": null,
            "explanation": "I generally need about a month of varying data that overlaps with varying data for another variable in order to perform an analysis. \n\nMIGRAINE Data Quantity:\nThere are 1 raw Migraine measurements. \nThere are 1 Migraine measurements when you include those derived from tagged duplicate, child or ingredient variables and those derived from zero filling gaps in data.\n\n\n",
            "highchartConfig": {
                "chart": {
                    "renderTo": "migraine-predictors-flow-chart-chart-container",
                    "type": "sankey",
                    "zoomType": "xy"
                },
                "title": {
                    "text": "Migraine Predictors Flow Chart",
                    "enabled": true
                },
                "subtitle": {
                    "text": "I generally need about a month of varying data that overlaps with varying data for another variable in order to perform an analysis. \n\nMIGRAINE Data Quantity:\nThere are 1 raw Migraine measurements. \nThere are 1 Migraine measurements when you include those derived from tagged duplicate, child or ingredient variables and those derived from zero filling gaps in data.\n\n\n"
                },
                "legend": {
                    "enabled": true
                },
                "series": [
                    {
                        "keys": [
                            "from",
                            "to",
                            "weight",
                            "tooltip",
                            "url",
                            "color"
                        ],
                        "linkOpacity": 0.9,
                        "name": "Migraine Predictors Flow Chart",
                        "data": [],
                        "marker": {
                            "enabled": true,
                            "radius": 5
                        },
                        "dataLabels": {
                            "enabled": true,
                            "style": {
                                "fontWeight": "normal",
                                "color": "black",
                                "textOutline": false
                            }
                        },
                        "type": "sankey",
                        "events": {
                            "click": {
                                "_expression": "function(e){\n    var p = e.point;\n    if(p.url){\n        showLoader();\n        window.location.href = p.url\n    } else if (p.linksTo[0]) {\n        showLoader();\n        window.location.href = p.linksTo[0].url\n    } else if (p.linksFrom[0]) {\n        showLoader();\n        window.location.href = p.linksFrom[0].url\n    } else {\n        debugger\n        console.error(\"Could not find url on event:\", event);\n    }\n}"
                            }
                        },
                        "visible": true
                    }
                ],
                "tooltip": {
                    "nodeFormat": "{point.name}: <b>{point.sum}<\/b><br\/>",
                    "formatter": {
                        "_expression": "function() {\n            \/\/debugger;\n            var data = this.point.series.data;\n            var i = this.point.index;\n            var point = data[i];\n            if(!point){\n                return this.point.name;\n            }\n            return point.tooltip;\n        }"
                    },
                    "followPointer": false,
                    "style": {
                        "pointerEvents": "auto"
                    },
                    "useHtml": true,
                    "hideDelay": 2000
                },
                "colors": [
                    "#dd4b39",
                    "#3467d6",
                    "#0f9d58",
                    "#f09402",
                    "#d34836",
                    "#886aea"
                ],
                "credits": {
                    "enabled": false
                },
                "lang": {
                    "loading": ""
                },
                "loading": {
                    "hideDuration": 10,
                    "showDuration": 10
                },
                "plotOptions": null,
                "useHighStocks": false,
                "exporting": {
                    "enabled": true,
                    "filename": "migraine-predictors-flow-chart"
                },
                "id": "migraine-predictors-flow-chart",
                "themeName": "dark",
                "divHeight": 200,
                "type": "sankey"
            },
            "id": "migraine-predictors-flow-chart",
            "imageGeneratedAt": null,
            "imageUrl": null,
            "jpgUrl": null,
            "pngUrl": null,
            "subtitle": null,
            "svgUrl": null,
            "title": "Migraine Predictors Flow Chart",
            "validImageOnS3": null,
            "variableName": null
        },
        "aggregateCorrelationsNetworkGraphChart": {
            "chartId": null,
            "chartTitle": null,
            "explanation": null,
            "highchartConfig": {
                "chart": {
                    "renderTo": "migraine-predictors-network-graph-chart-container",
                    "type": "networkgraph",
                    "zoomType": "xy"
                },
                "title": {
                    "text": "Migraine Predictors Network Graph",
                    "enabled": true
                },
                "subtitle": {
                    "text": "I generally need about a month of varying data that overlaps with varying data for another variable in order to perform an analysis. \n\nMIGRAINE Data Quantity:\nThere are 1 raw Migraine measurements. \nThere are 1 Migraine measurements when you include those derived from tagged duplicate, child or ingredient variables and those derived from zero filling gaps in data.\n\n\n"
                },
                "xAxis": null,
                "yAxis": {
                    "title": {
                        "enabled": true
                    }
                },
                "legend": {
                    "enabled": true
                },
                "series": [
                    {
                        "keys": [
                            "from",
                            "to",
                            "weight",
                            "tooltip",
                            "url",
                            "color"
                        ],
                        "linkOpacity": 0.9,
                        "name": "Migraine Predictors Network Graph",
                        "data": [],
                        "marker": {
                            "enabled": true,
                            "radius": 5
                        },
                        "dataLabels": {
                            "enabled": true,
                            "style": {
                                "fontWeight": "normal",
                                "color": "black",
                                "textOutline": false
                            }
                        },
                        "type": "networkgraph",
                        "events": {
                            "click": {
                                "_expression": "function(e){\n    var p = e.point;\n    if(p.url){\n        showLoader();\n        window.location.href = p.url\n    } else if (p.linksTo[0]) {\n        showLoader();\n        window.location.href = p.linksTo[0].url\n    } else if (p.linksFrom[0]) {\n        showLoader();\n        window.location.href = p.linksFrom[0].url\n    } else {\n        debugger\n        console.error(\"Could not find url on event:\", event);\n    }\n}"
                            }
                        },
                        "visible": true
                    }
                ],
                "tooltip": {
                    "nodeFormat": "{point.name}: <b>{point.sum}<\/b><br\/>",
                    "formatter": {
                        "_expression": "function() {\n            \/\/debugger;\n            var data = this.point.series.data;\n            var i = this.point.index;\n            var point = data[i - 1];\n            if(!point){\n                return this.point.name;\n            }\n            return point.tooltip;\n        }"
                    },
                    "followPointer": false,
                    "style": {
                        "pointerEvents": "auto"
                    },
                    "useHtml": true,
                    "hideDelay": 2000
                },
                "colors": [
                    "#000000",
                    "#3467d6",
                    "#dd4b39",
                    "#0f9d58",
                    "#f09402",
                    "#d34836",
                    "#886aea"
                ],
                "credits": {
                    "enabled": false
                },
                "lang": {
                    "loading": ""
                },
                "loading": {
                    "hideDuration": 10,
                    "showDuration": 10
                },
                "plotOptions": null,
                "useHighStocks": false,
                "exporting": {
                    "enabled": true,
                    "filename": "migraine-predictors-network-graph"
                },
                "id": "migraine-predictors-network-graph",
                "themeName": "white",
                "divHeight": null,
                "type": "Aggregate Correlations Network Graph Chart"
            },
            "id": null,
            "imageGeneratedAt": null,
            "imageUrl": null,
            "jpgUrl": null,
            "pngUrl": null,
            "subtitle": null,
            "svgUrl": null,
            "title": "Migraine Predictors Network Graph",
            "validImageOnS3": null,
            "variableName": null
        },
        "id": null
    },
    "creator_user_id": 7,
    "number_of_measurements": 1,
    "record_size_in_kb": 4,
    "is_public": 1,
    "sort_order": 0,
    "slug": "migraine",
    "image": "https:\/\/images-na.ssl-images-amazon.com\/images\/I\/419eFm6kS9L._SL160_.jpg",
    "avatar": "https:\/\/images-na.ssl-images-amazon.com\/images\/I\/419eFm6kS9L._SL160_.jpg",
    "badge_text": "0",
    "url": "https:\/\/staging.quantimo.do\/variables\/Migraine",
    "title": "Migraine",
    "sorting_score": 3,
    "keywords": "Migraine, Symptoms",
    "description": "Migraine overview with data visualizations and likely outcomes based on the anonymously aggregated data donated by 110 participants",
    "font_awesome": "fas fa-head-side-cough",
    "predictors": [],
    "outcomes": [],
    "variableCategory": {
        "cause_only": false,
        "combination_operation": "MEAN",
        "default_unit_id": 10,
        "duration_of_action": 86400,
        "filling_type": "none",
        "filling_value": -1,
        "font_awesome": "fas fa-head-side-cough",
        "id": 10,
        "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/sad-96.png",
        "ion_icon": "ion-sad-outline",
        "manual_tracking": true,
        "minimum_allowed_seconds_between_measurements": 60,
        "more_info": "Symptom severity can be influence by hundreds of factors in daily life. The human mind can only hold 7 numbers in working memory at a time.  I can hold a billion in my mind! If you regularly record your symptoms, add them so I can use this data to determine which hidden and imperceptible factors might be worsening or improving them.",
        "name": "Symptoms",
        "onset_delay": 0,
        "outcome": true,
        "predictor": true,
        "synonyms": [
            "Symptoms",
            "Symptom"
        ],
        "valence": "negative",
        "image": "https:\/\/static.quantimo.do\/img\/variable_categories\/sad-96.png",
        "avatar": "https:\/\/static.quantimo.do\/img\/variable_categories\/sad-96.png",
        "badge_text": null,
        "url": "https:\/\/staging.quantimo.do\/categories\/Symptoms",
        "title": "Symptoms",
        "sorting_score": 0,
        "keywords": "Symptoms, Symptom",
        "description": "Symptom severity can be influence by hundreds of factors in daily life. The human mind can only hold 7 numbers in working memory at a time.  I can hold a billion in my mind! If you regularly record your symptoms, add them so I can use this data to determine which hidden and imperceptible factors might be worsening or improving them."
    }
}
var host = window.location.host;
if(host === ""){host = "local.quantimo.do"} // We just opened the file locally
if(host.indexOf('quantimo.do') !== -1 || host.indexOf('crowdsourcingcures.org') !== -1){
    var str = JSON.stringify(model)
        .replaceAll('staging.quantimo.do', host)
        .replaceAll('local.quantimo.do', host)
        .replaceAll('app.quantimo.do', host);
    variable = JSON.parse(str);
}
