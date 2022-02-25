
var model = {
    "amazon_product_category": "",
    "cause_only": true,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:04",
    "default_unit_id": 6,
    "duration_of_action": 86400,
    "filling_type": "none",
    "filling_value": -1,
    "font_awesome": "fab fa-nutritionix",
    "id": 11,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/vegetarian_food-96.png",
    "ion_icon": "ion-fork",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": false,
    "more_info": "Nutrients are compounds in foods essential to life and health, providing us with energy, the building blocks for repair and growth and substances necessary to regulate chemical processes.",
    "name": "Nutrients",
    "name_singular": "",
    "number_of_measurements": 315332,
    "number_of_outcome_case_studies": 28325,
    "number_of_outcome_population_studies": 9621,
    "number_of_predictor_case_studies": 2,
    "number_of_predictor_population_studies": 1,
    "number_of_user_variables": 6012,
    "number_of_variables": 313,
    "onset_delay": 0,
    "outcome": false,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Nutrients",
        "Nutrient"
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
