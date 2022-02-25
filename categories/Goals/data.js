
var model = {
    "amazon_product_category": "",
    "cause_only": false,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:04",
    "duration_of_action": 86400,
    "filling_type": "none",
    "filling_value": -1,
    "font_awesome": "fas fa-bullseye",
    "id": 12,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/work-96.png",
    "ion_icon": "ion-laptop",
    "is_goal": "",
    "is_public": 0,
    "manual_tracking": false,
    "minimum_allowed_seconds_between_measurements": 60,
    "more_info": "Setting goals gives your life direction, and boosts your motivation and self-confidence. ",
    "name": "Goals",
    "name_singular": "",
    "number_of_measurements": 192800,
    "number_of_outcome_case_studies": 3190,
    "number_of_outcome_population_studies": 873,
    "number_of_predictor_case_studies": 27989,
    "number_of_predictor_population_studies": 12061,
    "number_of_user_variables": 494,
    "number_of_variables": 126,
    "onset_delay": 0,
    "outcome": true,
    "predictor": 0,
    "sort_order": 0,
    "synonyms": [
        "Work",
        "Productivity",
        "Goals",
        "Goal"
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
