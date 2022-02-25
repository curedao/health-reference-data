
var model = {
    "amazon_product_category": "",
    "cause_only": false,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:05",
    "duration_of_action": 86400,
    "filling_type": "none",
    "filling_value": -1,
    "font_awesome": "fas fa-brain",
    "id": 9,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/brain-96.png",
    "ion_icon": "ion-arrow-graph-up-right",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": false,
    "more_info": "See what factors could be harming or enhancing your cognitive performance.",
    "name": "Cognitive Performance",
    "name_singular": "",
    "number_of_measurements": 627,
    "number_of_outcome_case_studies": 72,
    "number_of_outcome_population_studies": 70,
    "number_of_predictor_case_studies": 541,
    "number_of_predictor_population_studies": 376,
    "number_of_user_variables": 27,
    "number_of_variables": 19,
    "onset_delay": 0,
    "outcome": true,
    "predictor": 0,
    "sort_order": 0,
    "synonyms": [
        "Cognitive Performance"
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
