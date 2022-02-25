
var model = {
    "amazon_product_category": "",
    "cause_only": false,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:05",
    "duration_of_action": 86400,
    "filling_type": "zero",
    "filling_value": 0,
    "font_awesome": "fas fa-disease",
    "id": 18,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/virus-96.png",
    "ion_icon": "ion-ios-medkit",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": false,
    "more_info": "Factors leading or increasing the severity of illness or disease. ",
    "name": "Causes of Illness",
    "name_singular": "",
    "number_of_measurements": 2913,
    "number_of_outcome_case_studies": 557,
    "number_of_outcome_population_studies": 487,
    "number_of_user_variables": 133,
    "number_of_variables": 2289,
    "onset_delay": 0,
    "outcome": false,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Causes of Illness",
        "Cause of Illness"
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
