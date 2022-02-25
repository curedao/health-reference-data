
var model = {
    "amazon_product_category": "GourmetFood",
    "cause_only": true,
    "combination_operation": "SUM",
    "controllable": "",
    "created_at": "2020-07-28 17:56:03",
    "default_unit_id": 44,
    "duration_of_action": 864000,
    "filling_type": "zero",
    "filling_value": 0,
    "font_awesome": "fas fa-utensils",
    "id": 15,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/vegetarian_food-96.png",
    "ion_icon": "ion-fork",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": true,
    "minimum_allowed_value": 0,
    "more_info": "Diet can have a significant impact on your health. It's important to enter any foods that you regularly eat to see how they might be affecting you.",
    "name": "Foods",
    "name_singular": "",
    "number_of_measurements": 129670,
    "number_of_outcome_case_studies": 47146,
    "number_of_outcome_population_studies": 27730,
    "number_of_user_variables": 8938,
    "number_of_variables": 13415,
    "onset_delay": 1800,
    "outcome": false,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Grocery",
        "Foods",
        "Food",
        "GourmetFood"
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
