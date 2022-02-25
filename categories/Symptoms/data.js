
var model = {
    "amazon_product_category": "",
    "cause_only": false,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:03",
    "default_unit_id": 10,
    "duration_of_action": 86400,
    "filling_type": "none",
    "filling_value": -1,
    "font_awesome": "fas fa-head-side-cough",
    "id": 10,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/sad-96.png",
    "ion_icon": "ion-sad-outline",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": true,
    "minimum_allowed_seconds_between_measurements": 60,
    "more_info": "Symptom severity can be influence by hundreds of factors in daily life. The human mind can only hold 7 numbers in working memory at a time.  I can hold a billion in my mind! If you regularly record your symptoms, add them so I can use this data to determi",
    "name": "Symptoms",
    "name_singular": "",
    "number_of_measurements": 105242,
    "number_of_outcome_case_studies": 12453,
    "number_of_outcome_population_studies": 6916,
    "number_of_predictor_case_studies": 61382,
    "number_of_predictor_population_studies": 38959,
    "number_of_user_variables": 8167,
    "number_of_variables": 13336,
    "onset_delay": 0,
    "outcome": true,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Symptoms",
        "Symptom"
    ],
    "valence": "negative"
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
