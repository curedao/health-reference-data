
var model = {
    "amazon_product_category": "",
    "cause_only": true,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:05",
    "duration_of_action": 86400,
    "filling_type": "none",
    "font_awesome": "fas fa-cloud-sun-rain",
    "id": 17,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/environment.png",
    "ion_icon": "ion-ios-partlysunny",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": false,
    "minimum_allowed_seconds_between_measurements": 86400,
    "more_info": "By recording your local weather conditions, I might be able to figure out how the amount of sunlight or temperature is affecting you.",
    "name": "Environment",
    "name_singular": "",
    "number_of_measurements": 4102930,
    "number_of_outcome_case_studies": 34521,
    "number_of_outcome_population_studies": 7364,
    "number_of_predictor_case_studies": 32,
    "number_of_predictor_population_studies": 32,
    "number_of_user_variables": 12947,
    "number_of_variables": 564,
    "onset_delay": 0,
    "outcome": false,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Environment"
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
