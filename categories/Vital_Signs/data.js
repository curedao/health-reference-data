
var model = {
    "amazon_product_category": "",
    "cause_only": false,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:03",
    "duration_of_action": 86400,
    "filling_type": "none",
    "filling_value": -1,
    "font_awesome": "fas fa-heartbeat",
    "id": 8,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/heart_monitor-96.png",
    "ion_icon": "ion-ios-pulse",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": false,
    "more_info": "Your vital signs show how well your body is functioning. They include blood pressure, heart rate, respiratory rate (or pulse), and temperature.",
    "name": "Vital Signs",
    "name_singular": "",
    "number_of_measurements": 97812,
    "number_of_outcome_case_studies": 3265,
    "number_of_outcome_population_studies": 976,
    "number_of_predictor_case_studies": 14680,
    "number_of_predictor_population_studies": 6916,
    "number_of_user_variables": 654,
    "number_of_variables": 110,
    "onset_delay": 0,
    "outcome": true,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Vital Signs",
        "Vital Sign"
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
