
var model = {
    "amazon_product_category": "HealthPersonalCare",
    "cause_only": true,
    "combination_operation": "SUM",
    "controllable": "",
    "created_at": "2020-07-28 17:56:03",
    "default_unit_id": 23,
    "duration_of_action": 86400,
    "filling_type": "zero",
    "filling_value": 0,
    "font_awesome": "fas fa-briefcase-medical",
    "id": 13,
    "image_url": "https:\/\/static.quantimo.do\/img\/variable_categories\/treatments.png",
    "ion_icon": "ion-ios-medkit-outline",
    "is_goal": "",
    "is_public": 1,
    "manual_tracking": true,
    "minimum_allowed_seconds_between_measurements": 60,
    "minimum_allowed_value": 0,
    "more_info": "Often the effects of medications and treatments aren't intuitively perceptible. That's where I come in!  If you regularly record your treatments,  I can analyze the data so we can get a better idea which ones are helping you,which one may be harming you, ",
    "name": "Treatments",
    "name_singular": "",
    "number_of_measurements": 119431,
    "number_of_outcome_case_studies": 46932,
    "number_of_outcome_population_studies": 32391,
    "number_of_predictor_case_studies": 37,
    "number_of_predictor_population_studies": 42,
    "number_of_user_variables": 5715,
    "number_of_variables": 9356,
    "onset_delay": 1800,
    "outcome": false,
    "predictor": 1,
    "sort_order": 0,
    "synonyms": [
        "Health and Beauty",
        "Health & Beauty",
        "Treatments",
        "Treatment",
        "HealthPersonalCare",
        "Baby Product",
        "Home"
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
