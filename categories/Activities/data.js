
var model = {
    "amazon_product_category": "",
    "boring": 0,
    "cause_only": false,
    "combination_operation": "SUM",
    "controllable": "",
    "created_at": "2020-07-28 17:56:03",
    "default_unit_id": 2,
    "duration_of_action": 86400,
    "filling_type": "zero",
    "filling_value": 0,
    "font_awesome": "far fa-calendar-check",
    "id": 14,
    "image_url": "https:\/\/static.quantimo.do\/img\/basic-flat-icons\/png\/clock.png",
    "ion_icon": "ion-ios-body-outline",
    "is_goal": "",
    "is_public": 0,
    "manual_tracking": false,
    "more_info": "Non-physical activities like studying.",
    "name": "Activities",
    "name_singular": "Activity",
    "number_of_measurements": 1325498,
    "number_of_outcome_case_studies": 46999,
    "number_of_outcome_population_studies": 14294,
    "number_of_predictor_case_studies": 16384,
    "number_of_predictor_population_studies": 6406,
    "number_of_user_variables": 9345,
    "number_of_variables": 1637,
    "onset_delay": 0,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Activities",
        "Activity"
    ],
    "valence": ""
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
