
var model = {
    "amazon_product_category": "",
    "cause_only": false,
    "combination_operation": "SUM",
    "controllable": "",
    "created_at": "2020-07-28 17:56:03",
    "duration_of_action": 86400,
    "filling_type": "zero",
    "filling_value": 0,
    "font_awesome": "fas fa-running",
    "id": 3,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/weightlifting-96.png",
    "ion_icon": "ion-ios-body-outline",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": false,
    "minimum_allowed_seconds_between_measurements": 3600,
    "more_info": "I get steps from a variety of sources like Fitbit & Jawbone. Even if you don't have any fitness trackers, you can manually record any physical activity, like running, cycling, or going to the gym.",
    "name": "Physical Activity",
    "name_singular": "",
    "number_of_measurements": 579833,
    "number_of_outcome_case_studies": 19243,
    "number_of_outcome_population_studies": 4455,
    "number_of_predictor_case_studies": 16453,
    "number_of_predictor_population_studies": 5791,
    "number_of_user_variables": 2407,
    "number_of_variables": 1719,
    "onset_delay": 0,
    "outcome": true,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Physical Activity",
        "Physical Activities"
    ],
    "valence": "positive"
}
var host = window.location.host;
if(host === ""){host = "local.quantimo.do"} // We just opened the file locally
if(host.indexOf('quantimo.do') !== -1 || host.indexOf('crowdsourcingcures.org') !== -1){
    var str = JSON.stringify(model)
        .replaceAll('staging.quantimo.do', host)
        .replaceAll('local.quantimo.do', host)
        .replaceAll('app.quantimo.do', host);
    variableCategory = JSON.parse(str);
}
