
var model = {
    "amazon_product_category": "",
    "cause_only": false,
    "combination_operation": "MEAN",
    "controllable": "",
    "created_at": "2020-07-28 17:56:03",
    "duration_of_action": 86400,
    "filling_type": "none",
    "filling_value": -1,
    "font_awesome": "fas fa-bed",
    "id": 6,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/sleeping_in_bed-96.png",
    "ion_icon": "ion-ios-cloudy-night-outline",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": false,
    "minimum_allowed_seconds_between_measurements": 86400,
    "more_info": "I can talk to many of the most popular sleep trackers like Fitbit, Jawbone, Sleep as Android, and Withings",
    "name": "Sleep",
    "name_singular": "",
    "number_of_measurements": 547942,
    "number_of_outcome_case_studies": 11864,
    "number_of_outcome_population_studies": 2638,
    "number_of_predictor_case_studies": 56491,
    "number_of_predictor_population_studies": 22705,
    "number_of_user_variables": 2014,
    "number_of_variables": 111,
    "onset_delay": 0,
    "outcome": true,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Sleep"
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
