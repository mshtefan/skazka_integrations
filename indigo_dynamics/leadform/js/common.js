$(document).ready(function () {

  var _timeout_to_redirect;

  var WAIT_FOR_REDIRECT = 60000;

  var _states = [{"text": "State", "value": ""}, {"text": "Alabama", "value": "Alabama"}, {
    "text": "Alaska",
    "value": "Alaska"
  }, {"text": "Arizona", "value": "Arizona"}, {"text": "Arkansas", "value": "Arkansas"}, {
    "text": "California",
    "value": "California"
  }, {"text": "Colorado", "value": "Colorado"}, {"text": "Connecticut", "value": "Connecticut"}, {
    "text": "Delaware",
    "value": "Delaware"
  }, {"text": "Florida", "value": "Florida"}, {"text": "Georgia", "value": "Georgia"}, {
    "text": "Hawaii",
    "value": "Hawaii"
  }, {"text": "Idaho", "value": "Idaho"}, {"text": "Illinois", "value": "Illinois"}, {
    "text": "Indiana",
    "value": "Indiana"
  }, {"text": "Iowa", "value": "Iowa"}, {"text": "Kansas", "value": "Kansas"}, {
    "text": "Kentucky",
    "value": "Kentucky"
  }, {"text": "Louisiana", "value": "Louisiana"}, {"text": "Maine", "value": "Maine"}, {
    "text": "Maryland",
    "value": "Maryland"
  }, {"text": "Massachusetts", "value": "Massachusetts"}, {
    "text": "Michigan",
    "value": "Michigan"
  }, {"text": "Minnesota", "value": "Minnesota"}, {"text": "Mississippi", "value": "Mississippi"}, {
    "text": "Missouri",
    "value": "Missouri"
  }, {"text": "Montana", "value": "Montana"}, {"text": "Nebraska", "value": "Nebraska"}, {
    "text": "Nevada",
    "value": "Nevada"
  }, {"text": "New Hampshire", "value": "New Hampshire"}, {
    "text": "New Jersey",
    "value": "New Jersey"
  }, {"text": "New Mexico", "value": "New Mexico"}, {
    "text": "New York",
    "value": "New York"
  }, {"text": "North Carolina", "value": "North Carolina"}, {
    "text": "North Dakota",
    "value": "North Dakota"
  }, {"text": "Ohio", "value": "Ohio"}, {"text": "Oklahoma", "value": "Oklahoma"}, {
    "text": "Oregon",
    "value": "Oregon"
  }, {"text": "Pennsylvania", "value": "Pennsylvania"}, {
    "text": "Rhode Island",
    "value": "Rhode Island"
  }, {"text": "South Carolina", "value": "South Carolina"}, {
    "text": "South Dakota",
    "value": "South Dakota"
  }, {"text": "Tennessee", "value": "Tennessee"}, {"text": "Texas", "value": "Texas"}, {
    "text": "Utah",
    "value": "Utah"
  }, {"text": "Vermont", "value": "Vermont"}, {"text": "Virginia", "value": "Virginia"}, {
    "text": "Washington",
    "value": "Washington"
  }, {"text": "West Virginia", "value": "West Virginia"}, {
    "text": "Wisconsin",
    "value": "Wisconsin"
  }, {"text": "Wyoming", "value": "Wyoming"}];

  var _cities = [{"text": "Autauga", "value": "Autauga", "state": "Alabama"}, {
    "text": "Baldwin",
    "value": "Baldwin",
    "state": "Alabama"
  }, {"text": "Barbour", "value": "Barbour", "state": "Alabama"}, {
    "text": "Bibb",
    "value": "Bibb",
    "state": "Alabama"
  }, {"text": "Blount", "value": "Blount", "state": "Alabama"}, {
    "text": "Bullock",
    "value": "Bullock",
    "state": "Alabama"
  }, {"text": "Butler", "value": "Butler", "state": "Alabama"}, {
    "text": "Calhoun",
    "value": "Calhoun",
    "state": "Alabama"
  }, {"text": "Chambers", "value": "Chambers", "state": "Alabama"}, {
    "text": "Cherokee",
    "value": "Cherokee",
    "state": "Alabama"
  }, {"text": "Chilton", "value": "Chilton", "state": "Alabama"}, {
    "text": "Choctaw",
    "value": "Choctaw",
    "state": "Alabama"
  }, {"text": "Clarke", "value": "Clarke", "state": "Alabama"}, {
    "text": "Clay",
    "value": "Clay",
    "state": "Alabama"
  }, {"text": "Cleburne", "value": "Cleburne", "state": "Alabama"}, {
    "text": "Coffee",
    "value": "Coffee",
    "state": "Alabama"
  }, {"text": "Colbert", "value": "Colbert", "state": "Alabama"}, {
    "text": "Conecuh",
    "value": "Conecuh",
    "state": "Alabama"
  }, {"text": "Coosa", "value": "Coosa", "state": "Alabama"}, {
    "text": "Covington",
    "value": "Covington",
    "state": "Alabama"
  }, {"text": "Crenshaw", "value": "Crenshaw", "state": "Alabama"}, {
    "text": "Cullman",
    "value": "Cullman",
    "state": "Alabama"
  }, {"text": "Dale", "value": "Dale", "state": "Alabama"}, {
    "text": "Dallas",
    "value": "Dallas",
    "state": "Alabama"
  }, {"text": "DeKalb", "value": "DeKalb", "state": "Alabama"}, {
    "text": "Elmore",
    "value": "Elmore",
    "state": "Alabama"
  }, {"text": "Escambia", "value": "Escambia", "state": "Alabama"}, {
    "text": "Etowah",
    "value": "Etowah",
    "state": "Alabama"
  }, {"text": "Fayette", "value": "Fayette", "state": "Alabama"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Alabama"
  }, {"text": "Geneva", "value": "Geneva", "state": "Alabama"}, {
    "text": "Greene",
    "value": "Greene",
    "state": "Alabama"
  }, {"text": "Hale", "value": "Hale", "state": "Alabama"}, {
    "text": "Henry",
    "value": "Henry",
    "state": "Alabama"
  }, {"text": "Houston", "value": "Houston", "state": "Alabama"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Alabama"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Alabama"}, {
    "text": "Lamar",
    "value": "Lamar",
    "state": "Alabama"
  }, {"text": "Lauderdale", "value": "Lauderdale", "state": "Alabama"}, {
    "text": "Lawrence",
    "value": "Lawrence",
    "state": "Alabama"
  }, {"text": "Lee", "value": "Lee", "state": "Alabama"}, {
    "text": "Limestone",
    "value": "Limestone",
    "state": "Alabama"
  }, {"text": "Lowndes", "value": "Lowndes", "state": "Alabama"}, {
    "text": "Macon",
    "value": "Macon",
    "state": "Alabama"
  }, {"text": "Madison", "value": "Madison", "state": "Alabama"}, {
    "text": "Marengo",
    "value": "Marengo",
    "state": "Alabama"
  }, {"text": "Marion", "value": "Marion", "state": "Alabama"}, {
    "text": "Marshall",
    "value": "Marshall",
    "state": "Alabama"
  }, {"text": "Mobile", "value": "Mobile", "state": "Alabama"}, {
    "text": "Monroe",
    "value": "Monroe",
    "state": "Alabama"
  }, {"text": "Montgomery", "value": "Montgomery", "state": "Alabama"}, {
    "text": "Morgan",
    "value": "Morgan",
    "state": "Alabama"
  }, {"text": "Perry", "value": "Perry", "state": "Alabama"}, {
    "text": "Pickens",
    "value": "Pickens",
    "state": "Alabama"
  }, {"text": "Pike", "value": "Pike", "state": "Alabama"}, {
    "text": "Randolph",
    "value": "Randolph",
    "state": "Alabama"
  }, {"text": "Russell", "value": "Russell", "state": "Alabama"}, {
    "text": "Shelby",
    "value": "Shelby",
    "state": "Alabama"
  }, {"text": "St. Clair", "value": "St. Clair", "state": "Alabama"}, {
    "text": "Sumter",
    "value": "Sumter",
    "state": "Alabama"
  }, {"text": "Talladega", "value": "Talladega", "state": "Alabama"}, {
    "text": "Tallapoosa",
    "value": "Tallapoosa",
    "state": "Alabama"
  }, {"text": "Tuscaloosa", "value": "Tuscaloosa", "state": "Alabama"}, {
    "text": "Walker",
    "value": "Walker",
    "state": "Alabama"
  }, {"text": "Washington", "value": "Washington", "state": "Alabama"}, {
    "text": "Wilcox",
    "value": "Wilcox",
    "state": "Alabama"
  }, {"text": "Winston", "value": "Winston", "state": "Alabama"}, {
    "text": "Anchorage",
    "value": "Anchorage",
    "state": "Alaska"
  }, {"text": "Bethel", "value": "Bethel", "state": "Alaska"}, {
    "text": "Bristol Bay",
    "value": "Bristol Bay",
    "state": "Alaska"
  }, {"text": "Dillingham", "value": "Dillingham", "state": "Alaska"}, {
    "text": "Fairbanks North Star",
    "value": "Fairbanks North Star",
    "state": "Alaska"
  }, {"text": "Haines", "value": "Haines", "state": "Alaska"}, {
    "text": "Juneau",
    "value": "Juneau",
    "state": "Alaska"
  }, {"text": "Kenai Peninsula", "value": "Kenai Peninsula", "state": "Alaska"}, {
    "text": "Ketchikan Gateway",
    "value": "Ketchikan Gateway",
    "state": "Alaska"
  }, {"text": "Kodiak Island", "value": "Kodiak Island", "state": "Alaska"}, {
    "text": "Matanuska-Susitna",
    "value": "Matanuska-Susitna",
    "state": "Alaska"
  }, {"text": "Nome", "value": "Nome", "state": "Alaska"}, {
    "text": "North Slope",
    "value": "North Slope",
    "state": "Alaska"
  }, {
    "text": "Prince of Wales-Outer Ketchikan",
    "value": "Prince of Wales-Outer Ketchikan",
    "state": "Alaska"
  }, {"text": "Sitka", "value": "Sitka", "state": "Alaska"}, {
    "text": "Skagway-Hoonah-Angoon",
    "value": "Skagway-Hoonah-Angoon",
    "state": "Alaska"
  }, {"text": "Southeast Fairbanks", "value": "Southeast Fairbanks", "state": "Alaska"}, {
    "text": "Valdez-Cordova",
    "value": "Valdez-Cordova",
    "state": "Alaska"
  }, {"text": "Wade Hampton", "value": "Wade Hampton", "state": "Alaska"}, {
    "text": "Wrangell-Petersburg",
    "value": "Wrangell-Petersburg",
    "state": "Alaska"
  }, {"text": "Yakutat", "value": "Yakutat", "state": "Alaska"}, {
    "text": "Yukon-Koyukuk",
    "value": "Yukon-Koyukuk",
    "state": "Alaska"
  }, {"text": "Apache", "value": "Apache", "state": "Arizona"}, {
    "text": "Cochise",
    "value": "Cochise",
    "state": "Arizona"
  }, {"text": "Coconino", "value": "Coconino", "state": "Arizona"}, {
    "text": "Gila",
    "value": "Gila",
    "state": "Arizona"
  }, {"text": "Graham", "value": "Graham", "state": "Arizona"}, {
    "text": "Greenlee",
    "value": "Greenlee",
    "state": "Arizona"
  }, {"text": "La Paz", "value": "La Paz", "state": "Arizona"}, {
    "text": "Maricopa",
    "value": "Maricopa",
    "state": "Arizona"
  }, {"text": "Mohave", "value": "Mohave", "state": "Arizona"}, {
    "text": "Navajo",
    "value": "Navajo",
    "state": "Arizona"
  }, {"text": "Pima", "value": "Pima", "state": "Arizona"}, {
    "text": "Pinal",
    "value": "Pinal",
    "state": "Arizona"
  }, {"text": "Santa Cruz", "value": "Santa Cruz", "state": "Arizona"}, {
    "text": "Yavapai",
    "value": "Yavapai",
    "state": "Arizona"
  }, {"text": "Yuma", "value": "Yuma", "state": "Arizona"}, {
    "text": "Arkansas",
    "value": "Arkansas",
    "state": "Arkansas"
  }, {"text": "Ashley", "value": "Ashley", "state": "Arkansas"}, {
    "text": "Baxter",
    "value": "Baxter",
    "state": "Arkansas"
  }, {"text": "Benton", "value": "Benton", "state": "Arkansas"}, {
    "text": "Boone",
    "value": "Boone",
    "state": "Arkansas"
  }, {"text": "Bradley", "value": "Bradley", "state": "Arkansas"}, {
    "text": "Calhoun",
    "value": "Calhoun",
    "state": "Arkansas"
  }, {"text": "Carroll", "value": "Carroll", "state": "Arkansas"}, {
    "text": "Chicot",
    "value": "Chicot",
    "state": "Arkansas"
  }, {"text": "Clark", "value": "Clark", "state": "Arkansas"}, {
    "text": "Clay",
    "value": "Clay",
    "state": "Arkansas"
  }, {"text": "Cleburne", "value": "Cleburne", "state": "Arkansas"}, {
    "text": "Cleveland",
    "value": "Cleveland",
    "state": "Arkansas"
  }, {"text": "Columbia", "value": "Columbia", "state": "Arkansas"}, {
    "text": "Conway",
    "value": "Conway",
    "state": "Arkansas"
  }, {"text": "Craighead", "value": "Craighead", "state": "Arkansas"}, {
    "text": "Crawford",
    "value": "Crawford",
    "state": "Arkansas"
  }, {"text": "Crittenden", "value": "Crittenden", "state": "Arkansas"}, {
    "text": "Cross",
    "value": "Cross",
    "state": "Arkansas"
  }, {"text": "Dallas", "value": "Dallas", "state": "Arkansas"}, {
    "text": "Desha",
    "value": "Desha",
    "state": "Arkansas"
  }, {"text": "Drew", "value": "Drew", "state": "Arkansas"}, {
    "text": "Faulkner",
    "value": "Faulkner",
    "state": "Arkansas"
  }, {"text": "Franklin", "value": "Franklin", "state": "Arkansas"}, {
    "text": "Fulton",
    "value": "Fulton",
    "state": "Arkansas"
  }, {"text": "Garland", "value": "Garland", "state": "Arkansas"}, {
    "text": "Grant",
    "value": "Grant",
    "state": "Arkansas"
  }, {"text": "Greene", "value": "Greene", "state": "Arkansas"}, {
    "text": "Hempstead",
    "value": "Hempstead",
    "state": "Arkansas"
  }, {"text": "Hot Spring", "value": "Hot Spring", "state": "Arkansas"}, {
    "text": "Howard",
    "value": "Howard",
    "state": "Arkansas"
  }, {"text": "Independence", "value": "Independence", "state": "Arkansas"}, {
    "text": "Izard",
    "value": "Izard",
    "state": "Arkansas"
  }, {"text": "Jackson", "value": "Jackson", "state": "Arkansas"}, {
    "text": "Jefferson",
    "value": "Jefferson",
    "state": "Arkansas"
  }, {"text": "Johnson", "value": "Johnson", "state": "Arkansas"}, {
    "text": "Lafayette",
    "value": "Lafayette",
    "state": "Arkansas"
  }, {"text": "Lawrence", "value": "Lawrence", "state": "Arkansas"}, {
    "text": "Lee",
    "value": "Lee",
    "state": "Arkansas"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "Arkansas"}, {
    "text": "Little River",
    "value": "Little River",
    "state": "Arkansas"
  }, {"text": "Logan", "value": "Logan", "state": "Arkansas"}, {
    "text": "Lonoke",
    "value": "Lonoke",
    "state": "Arkansas"
  }, {"text": "Madison", "value": "Madison", "state": "Arkansas"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "Arkansas"
  }, {"text": "Miller", "value": "Miller", "state": "Arkansas"}, {
    "text": "Mississippi",
    "value": "Mississippi",
    "state": "Arkansas"
  }, {"text": "Monroe", "value": "Monroe", "state": "Arkansas"}, {
    "text": "Montgomery",
    "value": "Montgomery",
    "state": "Arkansas"
  }, {"text": "Nevada", "value": "Nevada", "state": "Arkansas"}, {
    "text": "Newton",
    "value": "Newton",
    "state": "Arkansas"
  }, {"text": "Ouachita", "value": "Ouachita", "state": "Arkansas"}, {
    "text": "Perry",
    "value": "Perry",
    "state": "Arkansas"
  }, {"text": "Phillips", "value": "Phillips", "state": "Arkansas"}, {
    "text": "Pike",
    "value": "Pike",
    "state": "Arkansas"
  }, {"text": "Poinsett", "value": "Poinsett", "state": "Arkansas"}, {
    "text": "Polk",
    "value": "Polk",
    "state": "Arkansas"
  }, {"text": "Pope", "value": "Pope", "state": "Arkansas"}, {
    "text": "Prairie",
    "value": "Prairie",
    "state": "Arkansas"
  }, {"text": "Pulaski", "value": "Pulaski", "state": "Arkansas"}, {
    "text": "Randolph",
    "value": "Randolph",
    "state": "Arkansas"
  }, {"text": "Saline", "value": "Saline", "state": "Arkansas"}, {
    "text": "Scott",
    "value": "Scott",
    "state": "Arkansas"
  }, {"text": "Searcy", "value": "Searcy", "state": "Arkansas"}, {
    "text": "Sebastian",
    "value": "Sebastian",
    "state": "Arkansas"
  }, {"text": "Sevier", "value": "Sevier", "state": "Arkansas"}, {
    "text": "Sharp",
    "value": "Sharp",
    "state": "Arkansas"
  }, {"text": "St. Francis", "value": "St. Francis", "state": "Arkansas"}, {
    "text": "Stone",
    "value": "Stone",
    "state": "Arkansas"
  }, {"text": "Union", "value": "Union", "state": "Arkansas"}, {
    "text": "Van Buren",
    "value": "Van Buren",
    "state": "Arkansas"
  }, {"text": "Washington", "value": "Washington", "state": "Arkansas"}, {
    "text": "White",
    "value": "White",
    "state": "Arkansas"
  }, {"text": "Woodruff", "value": "Woodruff", "state": "Arkansas"}, {
    "text": "Yell",
    "value": "Yell",
    "state": "Arkansas"
  }, {"text": "Alameda", "value": "Alameda", "state": "California"}, {
    "text": "Alpine",
    "value": "Alpine",
    "state": "California"
  }, {"text": "Amador", "value": "Amador", "state": "California"}, {
    "text": "Butte",
    "value": "Butte",
    "state": "California"
  }, {"text": "Calaveras", "value": "Calaveras", "state": "California"}, {
    "text": "Colusa",
    "value": "Colusa",
    "state": "California"
  }, {"text": "Contra Costa", "value": "Contra Costa", "state": "California"}, {
    "text": "Del Norte",
    "value": "Del Norte",
    "state": "California"
  }, {"text": "El Dorado", "value": "El Dorado", "state": "California"}, {
    "text": "Fresno",
    "value": "Fresno",
    "state": "California"
  }, {"text": "Glenn", "value": "Glenn", "state": "California"}, {
    "text": "Humboldt",
    "value": "Humboldt",
    "state": "California"
  }, {"text": "Imperial", "value": "Imperial", "state": "California"}, {
    "text": "Inyo",
    "value": "Inyo",
    "state": "California"
  }, {"text": "Kern", "value": "Kern", "state": "California"}, {
    "text": "Kings",
    "value": "Kings",
    "state": "California"
  }, {"text": "Lake", "value": "Lake", "state": "California"}, {
    "text": "Lassen",
    "value": "Lassen",
    "state": "California"
  }, {"text": "Los Angeles", "value": "Los Angeles", "state": "California"}, {
    "text": "Madera",
    "value": "Madera",
    "state": "California"
  }, {"text": "Marin", "value": "Marin", "state": "California"}, {
    "text": "Mariposa",
    "value": "Mariposa",
    "state": "California"
  }, {"text": "Mendocino", "value": "Mendocino", "state": "California"}, {
    "text": "Merced",
    "value": "Merced",
    "state": "California"
  }, {"text": "Modoc", "value": "Modoc", "state": "California"}, {
    "text": "Mono",
    "value": "Mono",
    "state": "California"
  }, {"text": "Monterey", "value": "Monterey", "state": "California"}, {
    "text": "Napa",
    "value": "Napa",
    "state": "California"
  }, {"text": "Nevada", "value": "Nevada", "state": "California"}, {
    "text": "Orange",
    "value": "Orange",
    "state": "California"
  }, {"text": "Placer", "value": "Placer", "state": "California"}, {
    "text": "Plumas",
    "value": "Plumas",
    "state": "California"
  }, {"text": "Riverside", "value": "Riverside", "state": "California"}, {
    "text": "Sacramento",
    "value": "Sacramento",
    "state": "California"
  }, {"text": "San Benito", "value": "San Benito", "state": "California"}, {
    "text": "San Bernardino",
    "value": "San Bernardino",
    "state": "California"
  }, {"text": "San Diego", "value": "San Diego", "state": "California"}, {
    "text": "San Francisco",
    "value": "San Francisco",
    "state": "California"
  }, {"text": "San Joaquin", "value": "San Joaquin", "state": "California"}, {
    "text": "San Luis Obispo",
    "value": "San Luis Obispo",
    "state": "California"
  }, {"text": "San Mateo", "value": "San Mateo", "state": "California"}, {
    "text": "Santa Barbara",
    "value": "Santa Barbara",
    "state": "California"
  }, {"text": "Santa Clara", "value": "Santa Clara", "state": "California"}, {
    "text": "Santa Cruz",
    "value": "Santa Cruz",
    "state": "California"
  }, {"text": "Shasta", "value": "Shasta", "state": "California"}, {
    "text": "Sierra",
    "value": "Sierra",
    "state": "California"
  }, {"text": "Siskiyou", "value": "Siskiyou", "state": "California"}, {
    "text": "Solano",
    "value": "Solano",
    "state": "California"
  }, {"text": "Sonoma", "value": "Sonoma", "state": "California"}, {
    "text": "Stanislaus",
    "value": "Stanislaus",
    "state": "California"
  }, {"text": "Sutter", "value": "Sutter", "state": "California"}, {
    "text": "Tehama",
    "value": "Tehama",
    "state": "California"
  }, {"text": "Trinity", "value": "Trinity", "state": "California"}, {
    "text": "Tulare",
    "value": "Tulare",
    "state": "California"
  }, {"text": "Tuolumne", "value": "Tuolumne", "state": "California"}, {
    "text": "Ventura",
    "value": "Ventura",
    "state": "California"
  }, {"text": "Yolo", "value": "Yolo", "state": "California"}, {
    "text": "Yuba",
    "value": "Yuba",
    "state": "California"
  }, {"text": "Adams", "value": "Adams", "state": "Colorado"}, {
    "text": "Alamosa",
    "value": "Alamosa",
    "state": "Colorado"
  }, {"text": "Arapahoe", "value": "Arapahoe", "state": "Colorado"}, {
    "text": "Archuleta",
    "value": "Archuleta",
    "state": "Colorado"
  }, {"text": "Baca", "value": "Baca", "state": "Colorado"}, {
    "text": "Bent",
    "value": "Bent",
    "state": "Colorado"
  }, {"text": "Boulder", "value": "Boulder", "state": "Colorado"}, {
    "text": "Broomfield",
    "value": "Broomfield",
    "state": "Colorado"
  }, {"text": "Chaffee", "value": "Chaffee", "state": "Colorado"}, {
    "text": "Cheyenne",
    "value": "Cheyenne",
    "state": "Colorado"
  }, {"text": "Clear Creek", "value": "Clear Creek", "state": "Colorado"}, {
    "text": "Conejos",
    "value": "Conejos",
    "state": "Colorado"
  }, {"text": "Costilla", "value": "Costilla", "state": "Colorado"}, {
    "text": "Crowley",
    "value": "Crowley",
    "state": "Colorado"
  }, {"text": "Custer", "value": "Custer", "state": "Colorado"}, {
    "text": "Delta",
    "value": "Delta",
    "state": "Colorado"
  }, {"text": "Denver", "value": "Denver", "state": "Colorado"}, {
    "text": "Dolores",
    "value": "Dolores",
    "state": "Colorado"
  }, {"text": "Douglas", "value": "Douglas", "state": "Colorado"}, {
    "text": "Eagle",
    "value": "Eagle",
    "state": "Colorado"
  }, {"text": "El Paso", "value": "El Paso", "state": "Colorado"}, {
    "text": "Elbert",
    "value": "Elbert",
    "state": "Colorado"
  }, {"text": "Fremont", "value": "Fremont", "state": "Colorado"}, {
    "text": "Garfield",
    "value": "Garfield",
    "state": "Colorado"
  }, {"text": "Gilpin", "value": "Gilpin", "state": "Colorado"}, {
    "text": "Grand",
    "value": "Grand",
    "state": "Colorado"
  }, {"text": "Gunnison", "value": "Gunnison", "state": "Colorado"}, {
    "text": "Hinsdale",
    "value": "Hinsdale",
    "state": "Colorado"
  }, {"text": "Huerfano", "value": "Huerfano", "state": "Colorado"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Colorado"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Colorado"}, {
    "text": "Kiowa",
    "value": "Kiowa",
    "state": "Colorado"
  }, {"text": "Kit Carson", "value": "Kit Carson", "state": "Colorado"}, {
    "text": "La Plata",
    "value": "La Plata",
    "state": "Colorado"
  }, {"text": "Lake", "value": "Lake", "state": "Colorado"}, {
    "text": "Larimer",
    "value": "Larimer",
    "state": "Colorado"
  }, {"text": "Las Animas", "value": "Las Animas", "state": "Colorado"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "Colorado"
  }, {"text": "Logan", "value": "Logan", "state": "Colorado"}, {
    "text": "Mesa",
    "value": "Mesa",
    "state": "Colorado"
  }, {"text": "Mineral", "value": "Mineral", "state": "Colorado"}, {
    "text": "Moffat",
    "value": "Moffat",
    "state": "Colorado"
  }, {"text": "Montezuma", "value": "Montezuma", "state": "Colorado"}, {
    "text": "Montrose",
    "value": "Montrose",
    "state": "Colorado"
  }, {"text": "Morgan", "value": "Morgan", "state": "Colorado"}, {
    "text": "Otero",
    "value": "Otero",
    "state": "Colorado"
  }, {"text": "Ouray", "value": "Ouray", "state": "Colorado"}, {
    "text": "Park",
    "value": "Park",
    "state": "Colorado"
  }, {"text": "Phillips", "value": "Phillips", "state": "Colorado"}, {
    "text": "Pitkin",
    "value": "Pitkin",
    "state": "Colorado"
  }, {"text": "Prowers", "value": "Prowers", "state": "Colorado"}, {
    "text": "Pueblo",
    "value": "Pueblo",
    "state": "Colorado"
  }, {"text": "Rio Blanco", "value": "Rio Blanco", "state": "Colorado"}, {
    "text": "Rio Grande",
    "value": "Rio Grande",
    "state": "Colorado"
  }, {"text": "Routt", "value": "Routt", "state": "Colorado"}, {
    "text": "Saguache",
    "value": "Saguache",
    "state": "Colorado"
  }, {"text": "San Juan", "value": "San Juan", "state": "Colorado"}, {
    "text": "San Miguel",
    "value": "San Miguel",
    "state": "Colorado"
  }, {"text": "Sedgwick", "value": "Sedgwick", "state": "Colorado"}, {
    "text": "Summit",
    "value": "Summit",
    "state": "Colorado"
  }, {"text": "Teller", "value": "Teller", "state": "Colorado"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Colorado"
  }, {"text": "Weld", "value": "Weld", "state": "Colorado"}, {
    "text": "Yuma",
    "value": "Yuma",
    "state": "Colorado"
  }, {"text": "Fairfield", "value": "Fairfield", "state": "Connecticut"}, {
    "text": "Hartford",
    "value": "Hartford",
    "state": "Connecticut"
  }, {"text": "Litchfield", "value": "Litchfield", "state": "Connecticut"}, {
    "text": "Middlesex",
    "value": "Middlesex",
    "state": "Connecticut"
  }, {"text": "New Haven", "value": "New Haven", "state": "Connecticut"}, {
    "text": "New London",
    "value": "New London",
    "state": "Connecticut"
  }, {"text": "Tolland", "value": "Tolland", "state": "Connecticut"}, {
    "text": "Windham",
    "value": "Windham",
    "state": "Connecticut"
  }, {"text": "Kent", "value": "Kent", "state": "Delaware"}, {
    "text": "New Castle",
    "value": "New Castle",
    "state": "Delaware"
  }, {"text": "Sussex", "value": "Sussex", "state": "Delaware"}, {
    "text": "Alachua",
    "value": "Alachua",
    "state": "Florida"
  }, {"text": "Baker", "value": "Baker", "state": "Florida"}, {
    "text": "Bay",
    "value": "Bay",
    "state": "Florida"
  }, {"text": "Bradford", "value": "Bradford", "state": "Florida"}, {
    "text": "Brevard",
    "value": "Brevard",
    "state": "Florida"
  }, {"text": "Broward", "value": "Broward", "state": "Florida"}, {
    "text": "Calhoun",
    "value": "Calhoun",
    "state": "Florida"
  }, {"text": "Charlotte", "value": "Charlotte", "state": "Florida"}, {
    "text": "Citrus",
    "value": "Citrus",
    "state": "Florida"
  }, {"text": "Clay", "value": "Clay", "state": "Florida"}, {
    "text": "Collier",
    "value": "Collier",
    "state": "Florida"
  }, {"text": "Columbia", "value": "Columbia", "state": "Florida"}, {
    "text": "DeSoto",
    "value": "DeSoto",
    "state": "Florida"
  }, {"text": "Dixie", "value": "Dixie", "state": "Florida"}, {
    "text": "Duval",
    "value": "Duval",
    "state": "Florida"
  }, {"text": "Escambia", "value": "Escambia", "state": "Florida"}, {
    "text": "Flagler",
    "value": "Flagler",
    "state": "Florida"
  }, {"text": "Franklin", "value": "Franklin", "state": "Florida"}, {
    "text": "Gadsden",
    "value": "Gadsden",
    "state": "Florida"
  }, {"text": "Gilchrist", "value": "Gilchrist", "state": "Florida"}, {
    "text": "Glades",
    "value": "Glades",
    "state": "Florida"
  }, {"text": "Gulf", "value": "Gulf", "state": "Florida"}, {
    "text": "Hamilton",
    "value": "Hamilton",
    "state": "Florida"
  }, {"text": "Hardee", "value": "Hardee", "state": "Florida"}, {
    "text": "Hendry",
    "value": "Hendry",
    "state": "Florida"
  }, {"text": "Hernando", "value": "Hernando", "state": "Florida"}, {
    "text": "Highlands",
    "value": "Highlands",
    "state": "Florida"
  }, {"text": "Hillsborough", "value": "Hillsborough", "state": "Florida"}, {
    "text": "Holmes",
    "value": "Holmes",
    "state": "Florida"
  }, {"text": "Indian River", "value": "Indian River", "state": "Florida"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Florida"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Florida"}, {
    "text": "Lafayette",
    "value": "Lafayette",
    "state": "Florida"
  }, {"text": "Lake", "value": "Lake", "state": "Florida"}, {
    "text": "Lee",
    "value": "Lee",
    "state": "Florida"
  }, {"text": "Leon", "value": "Leon", "state": "Florida"}, {
    "text": "Levy",
    "value": "Levy",
    "state": "Florida"
  }, {"text": "Liberty", "value": "Liberty", "state": "Florida"}, {
    "text": "Madison",
    "value": "Madison",
    "state": "Florida"
  }, {"text": "Manatee", "value": "Manatee", "state": "Florida"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "Florida"
  }, {"text": "Martin", "value": "Martin", "state": "Florida"}, {
    "text": "Miami-Dade",
    "value": "Miami-Dade",
    "state": "Florida"
  }, {"text": "Monroe", "value": "Monroe", "state": "Florida"}, {
    "text": "Nassau",
    "value": "Nassau",
    "state": "Florida"
  }, {"text": "Okaloosa", "value": "Okaloosa", "state": "Florida"}, {
    "text": "Okeechobee",
    "value": "Okeechobee",
    "state": "Florida"
  }, {"text": "Orange", "value": "Orange", "state": "Florida"}, {
    "text": "Osceola",
    "value": "Osceola",
    "state": "Florida"
  }, {"text": "Palm Beach", "value": "Palm Beach", "state": "Florida"}, {
    "text": "Pasco",
    "value": "Pasco",
    "state": "Florida"
  }, {"text": "Pinellas", "value": "Pinellas", "state": "Florida"}, {
    "text": "Polk",
    "value": "Polk",
    "state": "Florida"
  }, {"text": "Putnam", "value": "Putnam", "state": "Florida"}, {
    "text": "Santa Rosa",
    "value": "Santa Rosa",
    "state": "Florida"
  }, {"text": "Sarasota", "value": "Sarasota", "state": "Florida"}, {
    "text": "Seminole",
    "value": "Seminole",
    "state": "Florida"
  }, {"text": "St. Johns", "value": "St. Johns", "state": "Florida"}, {
    "text": "St. Lucie",
    "value": "St. Lucie",
    "state": "Florida"
  }, {"text": "Sumter", "value": "Sumter", "state": "Florida"}, {
    "text": "Suwannee",
    "value": "Suwannee",
    "state": "Florida"
  }, {"text": "Taylor", "value": "Taylor", "state": "Florida"}, {
    "text": "Union",
    "value": "Union",
    "state": "Florida"
  }, {"text": "Volusia", "value": "Volusia", "state": "Florida"}, {
    "text": "Wakulla",
    "value": "Wakulla",
    "state": "Florida"
  }, {"text": "Walton", "value": "Walton", "state": "Florida"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Florida"
  }, {"text": "Appling", "value": "Appling", "state": "Georgia"}, {
    "text": "Atkinson",
    "value": "Atkinson",
    "state": "Georgia"
  }, {"text": "Bacon", "value": "Bacon", "state": "Georgia"}, {
    "text": "Baker",
    "value": "Baker",
    "state": "Georgia"
  }, {"text": "Baldwin", "value": "Baldwin", "state": "Georgia"}, {
    "text": "Banks",
    "value": "Banks",
    "state": "Georgia"
  }, {"text": "Barrow", "value": "Barrow", "state": "Georgia"}, {
    "text": "Bartow",
    "value": "Bartow",
    "state": "Georgia"
  }, {"text": "Ben Hill", "value": "Ben Hill", "state": "Georgia"}, {
    "text": "Berrien",
    "value": "Berrien",
    "state": "Georgia"
  }, {"text": "Bibb", "value": "Bibb", "state": "Georgia"}, {
    "text": "Bleckley",
    "value": "Bleckley",
    "state": "Georgia"
  }, {"text": "Brantley", "value": "Brantley", "state": "Georgia"}, {
    "text": "Brooks",
    "value": "Brooks",
    "state": "Georgia"
  }, {"text": "Bryan", "value": "Bryan", "state": "Georgia"}, {
    "text": "Bulloch",
    "value": "Bulloch",
    "state": "Georgia"
  }, {"text": "Burke", "value": "Burke", "state": "Georgia"}, {
    "text": "Butts",
    "value": "Butts",
    "state": "Georgia"
  }, {"text": "Calhoun", "value": "Calhoun", "state": "Georgia"}, {
    "text": "Camden",
    "value": "Camden",
    "state": "Georgia"
  }, {"text": "Candler", "value": "Candler", "state": "Georgia"}, {
    "text": "Carroll",
    "value": "Carroll",
    "state": "Georgia"
  }, {"text": "Catoosa", "value": "Catoosa", "state": "Georgia"}, {
    "text": "Charlton",
    "value": "Charlton",
    "state": "Georgia"
  }, {"text": "Chatham", "value": "Chatham", "state": "Georgia"}, {
    "text": "Chattahoochee",
    "value": "Chattahoochee",
    "state": "Georgia"
  }, {"text": "Chattooga", "value": "Chattooga", "state": "Georgia"}, {
    "text": "Cherokee",
    "value": "Cherokee",
    "state": "Georgia"
  }, {"text": "Clarke", "value": "Clarke", "state": "Georgia"}, {
    "text": "Clay",
    "value": "Clay",
    "state": "Georgia"
  }, {"text": "Clayton", "value": "Clayton", "state": "Georgia"}, {
    "text": "Clinch",
    "value": "Clinch",
    "state": "Georgia"
  }, {"text": "Cobb", "value": "Cobb", "state": "Georgia"}, {
    "text": "Coffee",
    "value": "Coffee",
    "state": "Georgia"
  }, {"text": "Colquitt", "value": "Colquitt", "state": "Georgia"}, {
    "text": "Columbia",
    "value": "Columbia",
    "state": "Georgia"
  }, {"text": "Cook", "value": "Cook", "state": "Georgia"}, {
    "text": "Coweta",
    "value": "Coweta",
    "state": "Georgia"
  }, {"text": "Crawford", "value": "Crawford", "state": "Georgia"}, {
    "text": "Crisp",
    "value": "Crisp",
    "state": "Georgia"
  }, {"text": "Dade", "value": "Dade", "state": "Georgia"}, {
    "text": "Dawson",
    "value": "Dawson",
    "state": "Georgia"
  }, {"text": "Decatur", "value": "Decatur", "state": "Georgia"}, {
    "text": "DeKalb",
    "value": "DeKalb",
    "state": "Georgia"
  }, {"text": "Dodge", "value": "Dodge", "state": "Georgia"}, {
    "text": "Dooly",
    "value": "Dooly",
    "state": "Georgia"
  }, {"text": "Dougherty", "value": "Dougherty", "state": "Georgia"}, {
    "text": "Douglas",
    "value": "Douglas",
    "state": "Georgia"
  }, {"text": "Early", "value": "Early", "state": "Georgia"}, {
    "text": "Echols",
    "value": "Echols",
    "state": "Georgia"
  }, {"text": "Effingham", "value": "Effingham", "state": "Georgia"}, {
    "text": "Elbert",
    "value": "Elbert",
    "state": "Georgia"
  }, {"text": "Emanuel", "value": "Emanuel", "state": "Georgia"}, {
    "text": "Evans",
    "value": "Evans",
    "state": "Georgia"
  }, {"text": "Fannin", "value": "Fannin", "state": "Georgia"}, {
    "text": "Fayette",
    "value": "Fayette",
    "state": "Georgia"
  }, {"text": "Floyd", "value": "Floyd", "state": "Georgia"}, {
    "text": "Forsyth",
    "value": "Forsyth",
    "state": "Georgia"
  }, {"text": "Franklin", "value": "Franklin", "state": "Georgia"}, {
    "text": "Fulton",
    "value": "Fulton",
    "state": "Georgia"
  }, {"text": "Gilmer", "value": "Gilmer", "state": "Georgia"}, {
    "text": "Glascock",
    "value": "Glascock",
    "state": "Georgia"
  }, {"text": "Glynn", "value": "Glynn", "state": "Georgia"}, {
    "text": "Gordon",
    "value": "Gordon",
    "state": "Georgia"
  }, {"text": "Grady", "value": "Grady", "state": "Georgia"}, {
    "text": "Greene",
    "value": "Greene",
    "state": "Georgia"
  }, {"text": "Gwinnett", "value": "Gwinnett", "state": "Georgia"}, {
    "text": "Habersham",
    "value": "Habersham",
    "state": "Georgia"
  }, {"text": "Hall", "value": "Hall", "state": "Georgia"}, {
    "text": "Hancock",
    "value": "Hancock",
    "state": "Georgia"
  }, {"text": "Haralson", "value": "Haralson", "state": "Georgia"}, {
    "text": "Harris",
    "value": "Harris",
    "state": "Georgia"
  }, {"text": "Hart", "value": "Hart", "state": "Georgia"}, {
    "text": "Heard",
    "value": "Heard",
    "state": "Georgia"
  }, {"text": "Henry", "value": "Henry", "state": "Georgia"}, {
    "text": "Houston",
    "value": "Houston",
    "state": "Georgia"
  }, {"text": "Irwin", "value": "Irwin", "state": "Georgia"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Georgia"
  }, {"text": "Jasper", "value": "Jasper", "state": "Georgia"}, {
    "text": "Jeff Davis",
    "value": "Jeff Davis",
    "state": "Georgia"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Georgia"}, {
    "text": "Jenkins",
    "value": "Jenkins",
    "state": "Georgia"
  }, {"text": "Johnson", "value": "Johnson", "state": "Georgia"}, {
    "text": "Jones",
    "value": "Jones",
    "state": "Georgia"
  }, {"text": "Lamar", "value": "Lamar", "state": "Georgia"}, {
    "text": "Lanier",
    "value": "Lanier",
    "state": "Georgia"
  }, {"text": "Laurens", "value": "Laurens", "state": "Georgia"}, {
    "text": "Lee",
    "value": "Lee",
    "state": "Georgia"
  }, {"text": "Liberty", "value": "Liberty", "state": "Georgia"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "Georgia"
  }, {"text": "Long", "value": "Long", "state": "Georgia"}, {
    "text": "Lowndes",
    "value": "Lowndes",
    "state": "Georgia"
  }, {"text": "Lumpkin", "value": "Lumpkin", "state": "Georgia"}, {
    "text": "Macon",
    "value": "Macon",
    "state": "Georgia"
  }, {"text": "Madison", "value": "Madison", "state": "Georgia"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "Georgia"
  }, {"text": "McDuffie", "value": "McDuffie", "state": "Georgia"}, {
    "text": "McIntosh",
    "value": "McIntosh",
    "state": "Georgia"
  }, {"text": "Meriwether", "value": "Meriwether", "state": "Georgia"}, {
    "text": "Miller",
    "value": "Miller",
    "state": "Georgia"
  }, {"text": "Mitchell", "value": "Mitchell", "state": "Georgia"}, {
    "text": "Monroe",
    "value": "Monroe",
    "state": "Georgia"
  }, {"text": "Montgomery", "value": "Montgomery", "state": "Georgia"}, {
    "text": "Morgan",
    "value": "Morgan",
    "state": "Georgia"
  }, {"text": "Murray", "value": "Murray", "state": "Georgia"}, {
    "text": "Muscogee",
    "value": "Muscogee",
    "state": "Georgia"
  }, {"text": "Newton", "value": "Newton", "state": "Georgia"}, {
    "text": "Oconee",
    "value": "Oconee",
    "state": "Georgia"
  }, {"text": "Oglethorpe", "value": "Oglethorpe", "state": "Georgia"}, {
    "text": "Paulding",
    "value": "Paulding",
    "state": "Georgia"
  }, {"text": "Peach", "value": "Peach", "state": "Georgia"}, {
    "text": "Pickens",
    "value": "Pickens",
    "state": "Georgia"
  }, {"text": "Pierce", "value": "Pierce", "state": "Georgia"}, {
    "text": "Pike",
    "value": "Pike",
    "state": "Georgia"
  }, {"text": "Polk", "value": "Polk", "state": "Georgia"}, {
    "text": "Pulaski",
    "value": "Pulaski",
    "state": "Georgia"
  }, {"text": "Putnam", "value": "Putnam", "state": "Georgia"}, {
    "text": "Quitman",
    "value": "Quitman",
    "state": "Georgia"
  }, {"text": "Rabun", "value": "Rabun", "state": "Georgia"}, {
    "text": "Randolph",
    "value": "Randolph",
    "state": "Georgia"
  }, {"text": "Richmond", "value": "Richmond", "state": "Georgia"}, {
    "text": "Rockdale",
    "value": "Rockdale",
    "state": "Georgia"
  }, {"text": "Schley", "value": "Schley", "state": "Georgia"}, {
    "text": "Screven",
    "value": "Screven",
    "state": "Georgia"
  }, {"text": "Seminole", "value": "Seminole", "state": "Georgia"}, {
    "text": "Spalding",
    "value": "Spalding",
    "state": "Georgia"
  }, {"text": "Stephens", "value": "Stephens", "state": "Georgia"}, {
    "text": "Stewart",
    "value": "Stewart",
    "state": "Georgia"
  }, {"text": "Sumter", "value": "Sumter", "state": "Georgia"}, {
    "text": "Talbot",
    "value": "Talbot",
    "state": "Georgia"
  }, {"text": "Taliaferro", "value": "Taliaferro", "state": "Georgia"}, {
    "text": "Tattnall",
    "value": "Tattnall",
    "state": "Georgia"
  }, {"text": "Taylor", "value": "Taylor", "state": "Georgia"}, {
    "text": "Telfair",
    "value": "Telfair",
    "state": "Georgia"
  }, {"text": "Terrell", "value": "Terrell", "state": "Georgia"}, {
    "text": "Thomas",
    "value": "Thomas",
    "state": "Georgia"
  }, {"text": "Tift", "value": "Tift", "state": "Georgia"}, {
    "text": "Toombs",
    "value": "Toombs",
    "state": "Georgia"
  }, {"text": "Towns", "value": "Towns", "state": "Georgia"}, {
    "text": "Treutlen",
    "value": "Treutlen",
    "state": "Georgia"
  }, {"text": "Troup", "value": "Troup", "state": "Georgia"}, {
    "text": "Turner",
    "value": "Turner",
    "state": "Georgia"
  }, {"text": "Twiggs", "value": "Twiggs", "state": "Georgia"}, {
    "text": "Union",
    "value": "Union",
    "state": "Georgia"
  }, {"text": "Upson", "value": "Upson", "state": "Georgia"}, {
    "text": "Walker",
    "value": "Walker",
    "state": "Georgia"
  }, {"text": "Walton", "value": "Walton", "state": "Georgia"}, {
    "text": "Ware",
    "value": "Ware",
    "state": "Georgia"
  }, {"text": "Warren", "value": "Warren", "state": "Georgia"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Georgia"
  }, {"text": "Wayne", "value": "Wayne", "state": "Georgia"}, {
    "text": "Webster",
    "value": "Webster",
    "state": "Georgia"
  }, {"text": "Wheeler", "value": "Wheeler", "state": "Georgia"}, {
    "text": "White",
    "value": "White",
    "state": "Georgia"
  }, {"text": "Whitfield", "value": "Whitfield", "state": "Georgia"}, {
    "text": "Wilcox",
    "value": "Wilcox",
    "state": "Georgia"
  }, {"text": "Wilkes", "value": "Wilkes", "state": "Georgia"}, {
    "text": "Wilkinson",
    "value": "Wilkinson",
    "state": "Georgia"
  }, {"text": "Worth", "value": "Worth", "state": "Georgia"}, {
    "text": "Hawaii",
    "value": "Hawaii",
    "state": "Hawaii"
  }, {"text": "Honolulu", "value": "Honolulu", "state": "Hawaii"}, {
    "text": "Kalawao",
    "value": "Kalawao",
    "state": "Hawaii"
  }, {"text": "Kauai", "value": "Kauai", "state": "Hawaii"}, {
    "text": "Maui",
    "value": "Maui",
    "state": "Hawaii"
  }, {"text": "Ada", "value": "Ada", "state": "Idaho"}, {
    "text": "Adams",
    "value": "Adams",
    "state": "Idaho"
  }, {"text": "Bannock", "value": "Bannock", "state": "Idaho"}, {
    "text": "Bear Lake",
    "value": "Bear Lake",
    "state": "Idaho"
  }, {"text": "Benewah", "value": "Benewah", "state": "Idaho"}, {
    "text": "Bingham",
    "value": "Bingham",
    "state": "Idaho"
  }, {"text": "Blaine", "value": "Blaine", "state": "Idaho"}, {
    "text": "Boise",
    "value": "Boise",
    "state": "Idaho"
  }, {"text": "Bonner", "value": "Bonner", "state": "Idaho"}, {
    "text": "Bonneville",
    "value": "Bonneville",
    "state": "Idaho"
  }, {"text": "Boundary", "value": "Boundary", "state": "Idaho"}, {
    "text": "Butte",
    "value": "Butte",
    "state": "Idaho"
  }, {"text": "Camas", "value": "Camas", "state": "Idaho"}, {
    "text": "Canyon",
    "value": "Canyon",
    "state": "Idaho"
  }, {"text": "Caribou", "value": "Caribou", "state": "Idaho"}, {
    "text": "Cassia",
    "value": "Cassia",
    "state": "Idaho"
  }, {"text": "Clark", "value": "Clark", "state": "Idaho"}, {
    "text": "Clearwater",
    "value": "Clearwater",
    "state": "Idaho"
  }, {"text": "Custer", "value": "Custer", "state": "Idaho"}, {
    "text": "Elmore",
    "value": "Elmore",
    "state": "Idaho"
  }, {"text": "Franklin", "value": "Franklin", "state": "Idaho"}, {
    "text": "Fremont",
    "value": "Fremont",
    "state": "Idaho"
  }, {"text": "Gem", "value": "Gem", "state": "Idaho"}, {
    "text": "Gooding",
    "value": "Gooding",
    "state": "Idaho"
  }, {"text": "Idaho", "value": "Idaho", "state": "Idaho"}, {
    "text": "Jefferson",
    "value": "Jefferson",
    "state": "Idaho"
  }, {"text": "Jerome", "value": "Jerome", "state": "Idaho"}, {
    "text": "Kootenai",
    "value": "Kootenai",
    "state": "Idaho"
  }, {"text": "Latah", "value": "Latah", "state": "Idaho"}, {
    "text": "Lemhi",
    "value": "Lemhi",
    "state": "Idaho"
  }, {"text": "Lewis", "value": "Lewis", "state": "Idaho"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "Idaho"
  }, {"text": "Madison", "value": "Madison", "state": "Idaho"}, {
    "text": "Minidoka",
    "value": "Minidoka",
    "state": "Idaho"
  }, {"text": "Nez Perce", "value": "Nez Perce", "state": "Idaho"}, {
    "text": "Oneida",
    "value": "Oneida",
    "state": "Idaho"
  }, {"text": "Owyhee", "value": "Owyhee", "state": "Idaho"}, {
    "text": "Payette",
    "value": "Payette",
    "state": "Idaho"
  }, {"text": "Power", "value": "Power", "state": "Idaho"}, {
    "text": "Shoshone",
    "value": "Shoshone",
    "state": "Idaho"
  }, {"text": "Teton", "value": "Teton", "state": "Idaho"}, {
    "text": "Twin Falls",
    "value": "Twin Falls",
    "state": "Idaho"
  }, {"text": "Valley", "value": "Valley", "state": "Idaho"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Idaho"
  }, {"text": "Adams", "value": "Adams", "state": "Illinois"}, {
    "text": "Alexander",
    "value": "Alexander",
    "state": "Illinois"
  }, {"text": "Bond", "value": "Bond", "state": "Illinois"}, {
    "text": "Boone",
    "value": "Boone",
    "state": "Illinois"
  }, {"text": "Brown", "value": "Brown", "state": "Illinois"}, {
    "text": "Bureau",
    "value": "Bureau",
    "state": "Illinois"
  }, {"text": "Calhoun", "value": "Calhoun", "state": "Illinois"}, {
    "text": "Carroll",
    "value": "Carroll",
    "state": "Illinois"
  }, {"text": "Cass", "value": "Cass", "state": "Illinois"}, {
    "text": "Champaign",
    "value": "Champaign",
    "state": "Illinois"
  }, {"text": "Christian", "value": "Christian", "state": "Illinois"}, {
    "text": "Clark",
    "value": "Clark",
    "state": "Illinois"
  }, {"text": "Clay", "value": "Clay", "state": "Illinois"}, {
    "text": "Clinton",
    "value": "Clinton",
    "state": "Illinois"
  }, {"text": "Coles", "value": "Coles", "state": "Illinois"}, {
    "text": "Cook",
    "value": "Cook",
    "state": "Illinois"
  }, {"text": "Crawford", "value": "Crawford", "state": "Illinois"}, {
    "text": "Cumberland",
    "value": "Cumberland",
    "state": "Illinois"
  }, {"text": "De Witt", "value": "De Witt", "state": "Illinois"}, {
    "text": "DeKalb",
    "value": "DeKalb",
    "state": "Illinois"
  }, {"text": "Douglas", "value": "Douglas", "state": "Illinois"}, {
    "text": "DuPage",
    "value": "DuPage",
    "state": "Illinois"
  }, {"text": "Edgar", "value": "Edgar", "state": "Illinois"}, {
    "text": "Edwards",
    "value": "Edwards",
    "state": "Illinois"
  }, {"text": "Effingham", "value": "Effingham", "state": "Illinois"}, {
    "text": "Fayette",
    "value": "Fayette",
    "state": "Illinois"
  }, {"text": "Ford", "value": "Ford", "state": "Illinois"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Illinois"
  }, {"text": "Fulton", "value": "Fulton", "state": "Illinois"}, {
    "text": "Gallatin",
    "value": "Gallatin",
    "state": "Illinois"
  }, {"text": "Greene", "value": "Greene", "state": "Illinois"}, {
    "text": "Grundy",
    "value": "Grundy",
    "state": "Illinois"
  }, {"text": "Hamilton", "value": "Hamilton", "state": "Illinois"}, {
    "text": "Hancock",
    "value": "Hancock",
    "state": "Illinois"
  }, {"text": "Hardin", "value": "Hardin", "state": "Illinois"}, {
    "text": "Henderson",
    "value": "Henderson",
    "state": "Illinois"
  }, {"text": "Henry", "value": "Henry", "state": "Illinois"}, {
    "text": "Iroquois",
    "value": "Iroquois",
    "state": "Illinois"
  }, {"text": "Jackson", "value": "Jackson", "state": "Illinois"}, {
    "text": "Jasper",
    "value": "Jasper",
    "state": "Illinois"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Illinois"}, {
    "text": "Jersey",
    "value": "Jersey",
    "state": "Illinois"
  }, {"text": "Jo Daviess", "value": "Jo Daviess", "state": "Illinois"}, {
    "text": "Johnson",
    "value": "Johnson",
    "state": "Illinois"
  }, {"text": "Kane", "value": "Kane", "state": "Illinois"}, {
    "text": "Kankakee",
    "value": "Kankakee",
    "state": "Illinois"
  }, {"text": "Kendall", "value": "Kendall", "state": "Illinois"}, {
    "text": "Knox",
    "value": "Knox",
    "state": "Illinois"
  }, {"text": "La Salle", "value": "La Salle", "state": "Illinois"}, {
    "text": "Lake",
    "value": "Lake",
    "state": "Illinois"
  }, {"text": "Lawrence", "value": "Lawrence", "state": "Illinois"}, {
    "text": "Lee",
    "value": "Lee",
    "state": "Illinois"
  }, {"text": "Livingston", "value": "Livingston", "state": "Illinois"}, {
    "text": "Logan",
    "value": "Logan",
    "state": "Illinois"
  }, {"text": "Macon", "value": "Macon", "state": "Illinois"}, {
    "text": "Macoupin",
    "value": "Macoupin",
    "state": "Illinois"
  }, {"text": "Madison", "value": "Madison", "state": "Illinois"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "Illinois"
  }, {"text": "Marshall", "value": "Marshall", "state": "Illinois"}, {
    "text": "Mason",
    "value": "Mason",
    "state": "Illinois"
  }, {"text": "Massac", "value": "Massac", "state": "Illinois"}, {
    "text": "McDonough",
    "value": "McDonough",
    "state": "Illinois"
  }, {"text": "McHenry", "value": "McHenry", "state": "Illinois"}, {
    "text": "McLean",
    "value": "McLean",
    "state": "Illinois"
  }, {"text": "Menard", "value": "Menard", "state": "Illinois"}, {
    "text": "Mercer",
    "value": "Mercer",
    "state": "Illinois"
  }, {"text": "Monroe", "value": "Monroe", "state": "Illinois"}, {
    "text": "Montgomery",
    "value": "Montgomery",
    "state": "Illinois"
  }, {"text": "Morgan", "value": "Morgan", "state": "Illinois"}, {
    "text": "Moultrie",
    "value": "Moultrie",
    "state": "Illinois"
  }, {"text": "Ogle", "value": "Ogle", "state": "Illinois"}, {
    "text": "Peoria",
    "value": "Peoria",
    "state": "Illinois"
  }, {"text": "Perry", "value": "Perry", "state": "Illinois"}, {
    "text": "Piatt",
    "value": "Piatt",
    "state": "Illinois"
  }, {"text": "Pike", "value": "Pike", "state": "Illinois"}, {
    "text": "Pope",
    "value": "Pope",
    "state": "Illinois"
  }, {"text": "Pulaski", "value": "Pulaski", "state": "Illinois"}, {
    "text": "Putnam",
    "value": "Putnam",
    "state": "Illinois"
  }, {"text": "Randolph", "value": "Randolph", "state": "Illinois"}, {
    "text": "Richland",
    "value": "Richland",
    "state": "Illinois"
  }, {"text": "Rock Island", "value": "Rock Island", "state": "Illinois"}, {
    "text": "Saline",
    "value": "Saline",
    "state": "Illinois"
  }, {"text": "Sangamon", "value": "Sangamon", "state": "Illinois"}, {
    "text": "Schuyler",
    "value": "Schuyler",
    "state": "Illinois"
  }, {"text": "Scott", "value": "Scott", "state": "Illinois"}, {
    "text": "Shelby",
    "value": "Shelby",
    "state": "Illinois"
  }, {"text": "St. Clair", "value": "St. Clair", "state": "Illinois"}, {
    "text": "Stark",
    "value": "Stark",
    "state": "Illinois"
  }, {"text": "Stephenson", "value": "Stephenson", "state": "Illinois"}, {
    "text": "Tazewell",
    "value": "Tazewell",
    "state": "Illinois"
  }, {"text": "Union", "value": "Union", "state": "Illinois"}, {
    "text": "Vermilion",
    "value": "Vermilion",
    "state": "Illinois"
  }, {"text": "Wabash", "value": "Wabash", "state": "Illinois"}, {
    "text": "Warren",
    "value": "Warren",
    "state": "Illinois"
  }, {"text": "Washington", "value": "Washington", "state": "Illinois"}, {
    "text": "Wayne",
    "value": "Wayne",
    "state": "Illinois"
  }, {"text": "White", "value": "White", "state": "Illinois"}, {
    "text": "Whiteside",
    "value": "Whiteside",
    "state": "Illinois"
  }, {"text": "Will", "value": "Will", "state": "Illinois"}, {
    "text": "Williamson",
    "value": "Williamson",
    "state": "Illinois"
  }, {"text": "Winnebago", "value": "Winnebago", "state": "Illinois"}, {
    "text": "Woodford",
    "value": "Woodford",
    "state": "Illinois"
  }, {"text": "Adams", "value": "Adams", "state": "Indiana"}, {
    "text": "Allen",
    "value": "Allen",
    "state": "Indiana"
  }, {"text": "Bartholomew", "value": "Bartholomew", "state": "Indiana"}, {
    "text": "Benton",
    "value": "Benton",
    "state": "Indiana"
  }, {"text": "Blackford", "value": "Blackford", "state": "Indiana"}, {
    "text": "Boone",
    "value": "Boone",
    "state": "Indiana"
  }, {"text": "Brown", "value": "Brown", "state": "Indiana"}, {
    "text": "Carroll",
    "value": "Carroll",
    "state": "Indiana"
  }, {"text": "Cass", "value": "Cass", "state": "Indiana"}, {
    "text": "Clark",
    "value": "Clark",
    "state": "Indiana"
  }, {"text": "Clay", "value": "Clay", "state": "Indiana"}, {
    "text": "Clinton",
    "value": "Clinton",
    "state": "Indiana"
  }, {"text": "Crawford", "value": "Crawford", "state": "Indiana"}, {
    "text": "Daviess",
    "value": "Daviess",
    "state": "Indiana"
  }, {"text": "De Kalb", "value": "De Kalb", "state": "Indiana"}, {
    "text": "Dearborn",
    "value": "Dearborn",
    "state": "Indiana"
  }, {"text": "Decatur", "value": "Decatur", "state": "Indiana"}, {
    "text": "Delaware",
    "value": "Delaware",
    "state": "Indiana"
  }, {"text": "Dubois", "value": "Dubois", "state": "Indiana"}, {
    "text": "Elkhart",
    "value": "Elkhart",
    "state": "Indiana"
  }, {"text": "Fayette", "value": "Fayette", "state": "Indiana"}, {
    "text": "Floyd",
    "value": "Floyd",
    "state": "Indiana"
  }, {"text": "Fountain", "value": "Fountain", "state": "Indiana"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Indiana"
  }, {"text": "Fulton", "value": "Fulton", "state": "Indiana"}, {
    "text": "Gibson",
    "value": "Gibson",
    "state": "Indiana"
  }, {"text": "Grant", "value": "Grant", "state": "Indiana"}, {
    "text": "Greene",
    "value": "Greene",
    "state": "Indiana"
  }, {"text": "Hamilton", "value": "Hamilton", "state": "Indiana"}, {
    "text": "Hancock",
    "value": "Hancock",
    "state": "Indiana"
  }, {"text": "Harrison", "value": "Harrison", "state": "Indiana"}, {
    "text": "Hendricks",
    "value": "Hendricks",
    "state": "Indiana"
  }, {"text": "Henry", "value": "Henry", "state": "Indiana"}, {
    "text": "Howard",
    "value": "Howard",
    "state": "Indiana"
  }, {"text": "Huntington", "value": "Huntington", "state": "Indiana"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Indiana"
  }, {"text": "Jasper", "value": "Jasper", "state": "Indiana"}, {
    "text": "Jay",
    "value": "Jay",
    "state": "Indiana"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Indiana"}, {
    "text": "Jennings",
    "value": "Jennings",
    "state": "Indiana"
  }, {"text": "Johnson", "value": "Johnson", "state": "Indiana"}, {
    "text": "Knox",
    "value": "Knox",
    "state": "Indiana"
  }, {"text": "Kosciusko", "value": "Kosciusko", "state": "Indiana"}, {
    "text": "La Porte",
    "value": "La Porte",
    "state": "Indiana"
  }, {"text": "Lagrange", "value": "Lagrange", "state": "Indiana"}, {
    "text": "Lake",
    "value": "Lake",
    "state": "Indiana"
  }, {"text": "Lawrence", "value": "Lawrence", "state": "Indiana"}, {
    "text": "Madison",
    "value": "Madison",
    "state": "Indiana"
  }, {"text": "Marion", "value": "Marion", "state": "Indiana"}, {
    "text": "Marshall",
    "value": "Marshall",
    "state": "Indiana"
  }, {"text": "Martin", "value": "Martin", "state": "Indiana"}, {
    "text": "Miami",
    "value": "Miami",
    "state": "Indiana"
  }, {"text": "Monroe", "value": "Monroe", "state": "Indiana"}, {
    "text": "Montgomery",
    "value": "Montgomery",
    "state": "Indiana"
  }, {"text": "Morgan", "value": "Morgan", "state": "Indiana"}, {
    "text": "Newton",
    "value": "Newton",
    "state": "Indiana"
  }, {"text": "Noble", "value": "Noble", "state": "Indiana"}, {
    "text": "Ohio",
    "value": "Ohio",
    "state": "Indiana"
  }, {"text": "Orange", "value": "Orange", "state": "Indiana"}, {
    "text": "Owen",
    "value": "Owen",
    "state": "Indiana"
  }, {"text": "Parke", "value": "Parke", "state": "Indiana"}, {
    "text": "Perry",
    "value": "Perry",
    "state": "Indiana"
  }, {"text": "Pike", "value": "Pike", "state": "Indiana"}, {
    "text": "Porter",
    "value": "Porter",
    "state": "Indiana"
  }, {"text": "Posey", "value": "Posey", "state": "Indiana"}, {
    "text": "Pulaski",
    "value": "Pulaski",
    "state": "Indiana"
  }, {"text": "Putnam", "value": "Putnam", "state": "Indiana"}, {
    "text": "Randolph",
    "value": "Randolph",
    "state": "Indiana"
  }, {"text": "Ripley", "value": "Ripley", "state": "Indiana"}, {
    "text": "Rush",
    "value": "Rush",
    "state": "Indiana"
  }, {"text": "Scott", "value": "Scott", "state": "Indiana"}, {
    "text": "Shelby",
    "value": "Shelby",
    "state": "Indiana"
  }, {"text": "Spencer", "value": "Spencer", "state": "Indiana"}, {
    "text": "St. Joseph",
    "value": "St. Joseph",
    "state": "Indiana"
  }, {"text": "Starke", "value": "Starke", "state": "Indiana"}, {
    "text": "Steuben",
    "value": "Steuben",
    "state": "Indiana"
  }, {"text": "Sullivan", "value": "Sullivan", "state": "Indiana"}, {
    "text": "Switzerland",
    "value": "Switzerland",
    "state": "Indiana"
  }, {"text": "Tippecanoe", "value": "Tippecanoe", "state": "Indiana"}, {
    "text": "Tipton",
    "value": "Tipton",
    "state": "Indiana"
  }, {"text": "Union", "value": "Union", "state": "Indiana"}, {
    "text": "Vanderburgh",
    "value": "Vanderburgh",
    "state": "Indiana"
  }, {"text": "Vermillion", "value": "Vermillion", "state": "Indiana"}, {
    "text": "Vigo",
    "value": "Vigo",
    "state": "Indiana"
  }, {"text": "Wabash", "value": "Wabash", "state": "Indiana"}, {
    "text": "Warren",
    "value": "Warren",
    "state": "Indiana"
  }, {"text": "Warrick", "value": "Warrick", "state": "Indiana"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Indiana"
  }, {"text": "Wayne", "value": "Wayne", "state": "Indiana"}, {
    "text": "Wells",
    "value": "Wells",
    "state": "Indiana"
  }, {"text": "White", "value": "White", "state": "Indiana"}, {
    "text": "Whitley",
    "value": "Whitley",
    "state": "Indiana"
  }, {"text": "Adair", "value": "Adair", "state": "Iowa"}, {
    "text": "Adams",
    "value": "Adams",
    "state": "Iowa"
  }, {"text": "Allamakee", "value": "Allamakee", "state": "Iowa"}, {
    "text": "Appanoose",
    "value": "Appanoose",
    "state": "Iowa"
  }, {"text": "Audubon", "value": "Audubon", "state": "Iowa"}, {
    "text": "Benton",
    "value": "Benton",
    "state": "Iowa"
  }, {"text": "Black Hawk", "value": "Black Hawk", "state": "Iowa"}, {
    "text": "Boone",
    "value": "Boone",
    "state": "Iowa"
  }, {"text": "Bremer", "value": "Bremer", "state": "Iowa"}, {
    "text": "Buchanan",
    "value": "Buchanan",
    "state": "Iowa"
  }, {"text": "Buena Vista", "value": "Buena Vista", "state": "Iowa"}, {
    "text": "Butler",
    "value": "Butler",
    "state": "Iowa"
  }, {"text": "Calhoun", "value": "Calhoun", "state": "Iowa"}, {
    "text": "Carroll",
    "value": "Carroll",
    "state": "Iowa"
  }, {"text": "Cass", "value": "Cass", "state": "Iowa"}, {
    "text": "Cedar",
    "value": "Cedar",
    "state": "Iowa"
  }, {"text": "Cerro Gordo", "value": "Cerro Gordo", "state": "Iowa"}, {
    "text": "Cherokee",
    "value": "Cherokee",
    "state": "Iowa"
  }, {"text": "Chickasaw", "value": "Chickasaw", "state": "Iowa"}, {
    "text": "Clarke",
    "value": "Clarke",
    "state": "Iowa"
  }, {"text": "Clay", "value": "Clay", "state": "Iowa"}, {
    "text": "Clayton",
    "value": "Clayton",
    "state": "Iowa"
  }, {"text": "Clinton", "value": "Clinton", "state": "Iowa"}, {
    "text": "Crawford",
    "value": "Crawford",
    "state": "Iowa"
  }, {"text": "Dallas", "value": "Dallas", "state": "Iowa"}, {
    "text": "Davis",
    "value": "Davis",
    "state": "Iowa"
  }, {"text": "Decatur", "value": "Decatur", "state": "Iowa"}, {
    "text": "Delaware",
    "value": "Delaware",
    "state": "Iowa"
  }, {"text": "Des Moines", "value": "Des Moines", "state": "Iowa"}, {
    "text": "Dickinson",
    "value": "Dickinson",
    "state": "Iowa"
  }, {"text": "Dubuque", "value": "Dubuque", "state": "Iowa"}, {
    "text": "Emmet",
    "value": "Emmet",
    "state": "Iowa"
  }, {"text": "Fayette", "value": "Fayette", "state": "Iowa"}, {
    "text": "Floyd",
    "value": "Floyd",
    "state": "Iowa"
  }, {"text": "Franklin", "value": "Franklin", "state": "Iowa"}, {
    "text": "Fremont",
    "value": "Fremont",
    "state": "Iowa"
  }, {"text": "Greene", "value": "Greene", "state": "Iowa"}, {
    "text": "Grundy",
    "value": "Grundy",
    "state": "Iowa"
  }, {"text": "Guthrie", "value": "Guthrie", "state": "Iowa"}, {
    "text": "Hamilton",
    "value": "Hamilton",
    "state": "Iowa"
  }, {"text": "Hancock", "value": "Hancock", "state": "Iowa"}, {
    "text": "Hardin",
    "value": "Hardin",
    "state": "Iowa"
  }, {"text": "Harrison", "value": "Harrison", "state": "Iowa"}, {
    "text": "Henry",
    "value": "Henry",
    "state": "Iowa"
  }, {"text": "Howard", "value": "Howard", "state": "Iowa"}, {
    "text": "Humboldt",
    "value": "Humboldt",
    "state": "Iowa"
  }, {"text": "Ida", "value": "Ida", "state": "Iowa"}, {
    "text": "Iowa",
    "value": "Iowa",
    "state": "Iowa"
  }, {"text": "Jackson", "value": "Jackson", "state": "Iowa"}, {
    "text": "Jasper",
    "value": "Jasper",
    "state": "Iowa"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Iowa"}, {
    "text": "Johnson",
    "value": "Johnson",
    "state": "Iowa"
  }, {"text": "Jones", "value": "Jones", "state": "Iowa"}, {
    "text": "Keokuk",
    "value": "Keokuk",
    "state": "Iowa"
  }, {"text": "Kossuth", "value": "Kossuth", "state": "Iowa"}, {
    "text": "Lee",
    "value": "Lee",
    "state": "Iowa"
  }, {"text": "Linn", "value": "Linn", "state": "Iowa"}, {
    "text": "Louisa",
    "value": "Louisa",
    "state": "Iowa"
  }, {"text": "Lucas", "value": "Lucas", "state": "Iowa"}, {
    "text": "Lyon",
    "value": "Lyon",
    "state": "Iowa"
  }, {"text": "Madison", "value": "Madison", "state": "Iowa"}, {
    "text": "Mahaska",
    "value": "Mahaska",
    "state": "Iowa"
  }, {"text": "Marion", "value": "Marion", "state": "Iowa"}, {
    "text": "Marshall",
    "value": "Marshall",
    "state": "Iowa"
  }, {"text": "Mills", "value": "Mills", "state": "Iowa"}, {
    "text": "Mitchell",
    "value": "Mitchell",
    "state": "Iowa"
  }, {"text": "Monona", "value": "Monona", "state": "Iowa"}, {
    "text": "Monroe",
    "value": "Monroe",
    "state": "Iowa"
  }, {"text": "Montgomery", "value": "Montgomery", "state": "Iowa"}, {
    "text": "Muscatine",
    "value": "Muscatine",
    "state": "Iowa"
  }, {"text": "O'Brien", "value": "O'Brien", "state": "Iowa"}, {
    "text": "Osceola",
    "value": "Osceola",
    "state": "Iowa"
  }, {"text": "Page", "value": "Page", "state": "Iowa"}, {
    "text": "Palo Alto",
    "value": "Palo Alto",
    "state": "Iowa"
  }, {"text": "Plymouth", "value": "Plymouth", "state": "Iowa"}, {
    "text": "Pocahontas",
    "value": "Pocahontas",
    "state": "Iowa"
  }, {"text": "Polk", "value": "Polk", "state": "Iowa"}, {
    "text": "Pottawattamie",
    "value": "Pottawattamie",
    "state": "Iowa"
  }, {"text": "Poweshiek", "value": "Poweshiek", "state": "Iowa"}, {
    "text": "Ringgold",
    "value": "Ringgold",
    "state": "Iowa"
  }, {"text": "Sac", "value": "Sac", "state": "Iowa"}, {
    "text": "Scott",
    "value": "Scott",
    "state": "Iowa"
  }, {"text": "Shelby", "value": "Shelby", "state": "Iowa"}, {
    "text": "Sioux",
    "value": "Sioux",
    "state": "Iowa"
  }, {"text": "Story", "value": "Story", "state": "Iowa"}, {
    "text": "Tama",
    "value": "Tama",
    "state": "Iowa"
  }, {"text": "Taylor", "value": "Taylor", "state": "Iowa"}, {
    "text": "Union",
    "value": "Union",
    "state": "Iowa"
  }, {"text": "Van Buren", "value": "Van Buren", "state": "Iowa"}, {
    "text": "Wapello",
    "value": "Wapello",
    "state": "Iowa"
  }, {"text": "Warren", "value": "Warren", "state": "Iowa"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Iowa"
  }, {"text": "Wayne", "value": "Wayne", "state": "Iowa"}, {
    "text": "Webster",
    "value": "Webster",
    "state": "Iowa"
  }, {"text": "Winnebago", "value": "Winnebago", "state": "Iowa"}, {
    "text": "Winneshiek",
    "value": "Winneshiek",
    "state": "Iowa"
  }, {"text": "Woodbury", "value": "Woodbury", "state": "Iowa"}, {
    "text": "Worth",
    "value": "Worth",
    "state": "Iowa"
  }, {"text": "Wright", "value": "Wright", "state": "Iowa"}, {
    "text": "Allen",
    "value": "Allen",
    "state": "Kansas"
  }, {"text": "Anderson", "value": "Anderson", "state": "Kansas"}, {
    "text": "Atchison",
    "value": "Atchison",
    "state": "Kansas"
  }, {"text": "Barber", "value": "Barber", "state": "Kansas"}, {
    "text": "Barton",
    "value": "Barton",
    "state": "Kansas"
  }, {"text": "Bourbon", "value": "Bourbon", "state": "Kansas"}, {
    "text": "Brown",
    "value": "Brown",
    "state": "Kansas"
  }, {"text": "Butler", "value": "Butler", "state": "Kansas"}, {
    "text": "Chase",
    "value": "Chase",
    "state": "Kansas"
  }, {"text": "Chautauqua", "value": "Chautauqua", "state": "Kansas"}, {
    "text": "Cherokee",
    "value": "Cherokee",
    "state": "Kansas"
  }, {"text": "Cheyenne", "value": "Cheyenne", "state": "Kansas"}, {
    "text": "Clark",
    "value": "Clark",
    "state": "Kansas"
  }, {"text": "Clay", "value": "Clay", "state": "Kansas"}, {
    "text": "Cloud",
    "value": "Cloud",
    "state": "Kansas"
  }, {"text": "Coffey", "value": "Coffey", "state": "Kansas"}, {
    "text": "Comanche",
    "value": "Comanche",
    "state": "Kansas"
  }, {"text": "Cowley", "value": "Cowley", "state": "Kansas"}, {
    "text": "Crawford",
    "value": "Crawford",
    "state": "Kansas"
  }, {"text": "Decatur", "value": "Decatur", "state": "Kansas"}, {
    "text": "Dickinson",
    "value": "Dickinson",
    "state": "Kansas"
  }, {"text": "Doniphan", "value": "Doniphan", "state": "Kansas"}, {
    "text": "Douglas",
    "value": "Douglas",
    "state": "Kansas"
  }, {"text": "Edwards", "value": "Edwards", "state": "Kansas"}, {
    "text": "Elk",
    "value": "Elk",
    "state": "Kansas"
  }, {"text": "Ellis", "value": "Ellis", "state": "Kansas"}, {
    "text": "Ellsworth",
    "value": "Ellsworth",
    "state": "Kansas"
  }, {"text": "Finney", "value": "Finney", "state": "Kansas"}, {
    "text": "Ford",
    "value": "Ford",
    "state": "Kansas"
  }, {"text": "Franklin", "value": "Franklin", "state": "Kansas"}, {
    "text": "Geary",
    "value": "Geary",
    "state": "Kansas"
  }, {"text": "Gove", "value": "Gove", "state": "Kansas"}, {
    "text": "Graham",
    "value": "Graham",
    "state": "Kansas"
  }, {"text": "Grant", "value": "Grant", "state": "Kansas"}, {
    "text": "Gray",
    "value": "Gray",
    "state": "Kansas"
  }, {"text": "Greeley", "value": "Greeley", "state": "Kansas"}, {
    "text": "Greenwood",
    "value": "Greenwood",
    "state": "Kansas"
  }, {"text": "Hamilton", "value": "Hamilton", "state": "Kansas"}, {
    "text": "Harper",
    "value": "Harper",
    "state": "Kansas"
  }, {"text": "Harvey", "value": "Harvey", "state": "Kansas"}, {
    "text": "Haskell",
    "value": "Haskell",
    "state": "Kansas"
  }, {"text": "Hodgeman", "value": "Hodgeman", "state": "Kansas"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Kansas"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Kansas"}, {
    "text": "Jewell",
    "value": "Jewell",
    "state": "Kansas"
  }, {"text": "Johnson", "value": "Johnson", "state": "Kansas"}, {
    "text": "Kearny",
    "value": "Kearny",
    "state": "Kansas"
  }, {"text": "Kingman", "value": "Kingman", "state": "Kansas"}, {
    "text": "Kiowa",
    "value": "Kiowa",
    "state": "Kansas"
  }, {"text": "Labette", "value": "Labette", "state": "Kansas"}, {
    "text": "Lane",
    "value": "Lane",
    "state": "Kansas"
  }, {"text": "Leavenworth", "value": "Leavenworth", "state": "Kansas"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "Kansas"
  }, {"text": "Linn", "value": "Linn", "state": "Kansas"}, {
    "text": "Logan",
    "value": "Logan",
    "state": "Kansas"
  }, {"text": "Lyon", "value": "Lyon", "state": "Kansas"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "Kansas"
  }, {"text": "Marshall", "value": "Marshall", "state": "Kansas"}, {
    "text": "McPherson",
    "value": "McPherson",
    "state": "Kansas"
  }, {"text": "Meade", "value": "Meade", "state": "Kansas"}, {
    "text": "Miami",
    "value": "Miami",
    "state": "Kansas"
  }, {"text": "Mitchell", "value": "Mitchell", "state": "Kansas"}, {
    "text": "Montgomery",
    "value": "Montgomery",
    "state": "Kansas"
  }, {"text": "Morris", "value": "Morris", "state": "Kansas"}, {
    "text": "Morton",
    "value": "Morton",
    "state": "Kansas"
  }, {"text": "Nemaha", "value": "Nemaha", "state": "Kansas"}, {
    "text": "Neosho",
    "value": "Neosho",
    "state": "Kansas"
  }, {"text": "Ness", "value": "Ness", "state": "Kansas"}, {
    "text": "Norton",
    "value": "Norton",
    "state": "Kansas"
  }, {"text": "Osage", "value": "Osage", "state": "Kansas"}, {
    "text": "Osborne",
    "value": "Osborne",
    "state": "Kansas"
  }, {"text": "Ottawa", "value": "Ottawa", "state": "Kansas"}, {
    "text": "Pawnee",
    "value": "Pawnee",
    "state": "Kansas"
  }, {"text": "Phillips", "value": "Phillips", "state": "Kansas"}, {
    "text": "Pottawatomie",
    "value": "Pottawatomie",
    "state": "Kansas"
  }, {"text": "Pratt", "value": "Pratt", "state": "Kansas"}, {
    "text": "Rawlins",
    "value": "Rawlins",
    "state": "Kansas"
  }, {"text": "Reno", "value": "Reno", "state": "Kansas"}, {
    "text": "Republic",
    "value": "Republic",
    "state": "Kansas"
  }, {"text": "Rice", "value": "Rice", "state": "Kansas"}, {
    "text": "Riley",
    "value": "Riley",
    "state": "Kansas"
  }, {"text": "Rooks", "value": "Rooks", "state": "Kansas"}, {
    "text": "Rush",
    "value": "Rush",
    "state": "Kansas"
  }, {"text": "Russell", "value": "Russell", "state": "Kansas"}, {
    "text": "Saline",
    "value": "Saline",
    "state": "Kansas"
  }, {"text": "Scott", "value": "Scott", "state": "Kansas"}, {
    "text": "Sedgwick",
    "value": "Sedgwick",
    "state": "Kansas"
  }, {"text": "Seward", "value": "Seward", "state": "Kansas"}, {
    "text": "Shawnee",
    "value": "Shawnee",
    "state": "Kansas"
  }, {"text": "Sheridan", "value": "Sheridan", "state": "Kansas"}, {
    "text": "Sherman",
    "value": "Sherman",
    "state": "Kansas"
  }, {"text": "Smith", "value": "Smith", "state": "Kansas"}, {
    "text": "Stafford",
    "value": "Stafford",
    "state": "Kansas"
  }, {"text": "Stanton", "value": "Stanton", "state": "Kansas"}, {
    "text": "Stevens",
    "value": "Stevens",
    "state": "Kansas"
  }, {"text": "Sumner", "value": "Sumner", "state": "Kansas"}, {
    "text": "Thomas",
    "value": "Thomas",
    "state": "Kansas"
  }, {"text": "Trego", "value": "Trego", "state": "Kansas"}, {
    "text": "Wabaunsee",
    "value": "Wabaunsee",
    "state": "Kansas"
  }, {"text": "Wallace", "value": "Wallace", "state": "Kansas"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Kansas"
  }, {"text": "Wichita", "value": "Wichita", "state": "Kansas"}, {
    "text": "Wilson",
    "value": "Wilson",
    "state": "Kansas"
  }, {"text": "Woodson", "value": "Woodson", "state": "Kansas"}, {
    "text": "Wyandotte",
    "value": "Wyandotte",
    "state": "Kansas"
  }, {"text": "Adair", "value": "Adair", "state": "Kentucky"}, {
    "text": "Allen",
    "value": "Allen",
    "state": "Kentucky"
  }, {"text": "Anderson", "value": "Anderson", "state": "Kentucky"}, {
    "text": "Ballard",
    "value": "Ballard",
    "state": "Kentucky"
  }, {"text": "Barren", "value": "Barren", "state": "Kentucky"}, {
    "text": "Bath",
    "value": "Bath",
    "state": "Kentucky"
  }, {"text": "Bell", "value": "Bell", "state": "Kentucky"}, {
    "text": "Boone",
    "value": "Boone",
    "state": "Kentucky"
  }, {"text": "Bourbon", "value": "Bourbon", "state": "Kentucky"}, {
    "text": "Boyd",
    "value": "Boyd",
    "state": "Kentucky"
  }, {"text": "Boyle", "value": "Boyle", "state": "Kentucky"}, {
    "text": "Bracken",
    "value": "Bracken",
    "state": "Kentucky"
  }, {"text": "Breathitt", "value": "Breathitt", "state": "Kentucky"}, {
    "text": "Breckenridge",
    "value": "Breckenridge",
    "state": "Kentucky"
  }, {"text": "Bullitt", "value": "Bullitt", "state": "Kentucky"}, {
    "text": "Butler",
    "value": "Butler",
    "state": "Kentucky"
  }, {"text": "Caldwell", "value": "Caldwell", "state": "Kentucky"}, {
    "text": "Calloway",
    "value": "Calloway",
    "state": "Kentucky"
  }, {"text": "Campbell", "value": "Campbell", "state": "Kentucky"}, {
    "text": "Carlisle",
    "value": "Carlisle",
    "state": "Kentucky"
  }, {"text": "Carroll", "value": "Carroll", "state": "Kentucky"}, {
    "text": "Carter",
    "value": "Carter",
    "state": "Kentucky"
  }, {"text": "Casey", "value": "Casey", "state": "Kentucky"}, {
    "text": "Christian",
    "value": "Christian",
    "state": "Kentucky"
  }, {"text": "Clark", "value": "Clark", "state": "Kentucky"}, {
    "text": "Clay",
    "value": "Clay",
    "state": "Kentucky"
  }, {"text": "Clinton", "value": "Clinton", "state": "Kentucky"}, {
    "text": "Crittenden",
    "value": "Crittenden",
    "state": "Kentucky"
  }, {"text": "Cumberland", "value": "Cumberland", "state": "Kentucky"}, {
    "text": "Daviess",
    "value": "Daviess",
    "state": "Kentucky"
  }, {"text": "Edmonson", "value": "Edmonson", "state": "Kentucky"}, {
    "text": "Elliott",
    "value": "Elliott",
    "state": "Kentucky"
  }, {"text": "Estill", "value": "Estill", "state": "Kentucky"}, {
    "text": "Fayette",
    "value": "Fayette",
    "state": "Kentucky"
  }, {"text": "Fleming", "value": "Fleming", "state": "Kentucky"}, {
    "text": "Floyd",
    "value": "Floyd",
    "state": "Kentucky"
  }, {"text": "Franklin", "value": "Franklin", "state": "Kentucky"}, {
    "text": "Fulton",
    "value": "Fulton",
    "state": "Kentucky"
  }, {"text": "Gallatin", "value": "Gallatin", "state": "Kentucky"}, {
    "text": "Garrard",
    "value": "Garrard",
    "state": "Kentucky"
  }, {"text": "Grant", "value": "Grant", "state": "Kentucky"}, {
    "text": "Graves",
    "value": "Graves",
    "state": "Kentucky"
  }, {"text": "Grayson", "value": "Grayson", "state": "Kentucky"}, {
    "text": "Green",
    "value": "Green",
    "state": "Kentucky"
  }, {"text": "Greenup", "value": "Greenup", "state": "Kentucky"}, {
    "text": "Hancock",
    "value": "Hancock",
    "state": "Kentucky"
  }, {"text": "Hardin", "value": "Hardin", "state": "Kentucky"}, {
    "text": "Harlan",
    "value": "Harlan",
    "state": "Kentucky"
  }, {"text": "Harrison", "value": "Harrison", "state": "Kentucky"}, {
    "text": "Hart",
    "value": "Hart",
    "state": "Kentucky"
  }, {"text": "Henderson", "value": "Henderson", "state": "Kentucky"}, {
    "text": "Henry",
    "value": "Henry",
    "state": "Kentucky"
  }, {"text": "Hickman", "value": "Hickman", "state": "Kentucky"}, {
    "text": "Hopkins",
    "value": "Hopkins",
    "state": "Kentucky"
  }, {"text": "Jackson", "value": "Jackson", "state": "Kentucky"}, {
    "text": "Jefferson",
    "value": "Jefferson",
    "state": "Kentucky"
  }, {"text": "Jessamine", "value": "Jessamine", "state": "Kentucky"}, {
    "text": "Johnson",
    "value": "Johnson",
    "state": "Kentucky"
  }, {"text": "Kenton", "value": "Kenton", "state": "Kentucky"}, {
    "text": "Knott",
    "value": "Knott",
    "state": "Kentucky"
  }, {"text": "Knox", "value": "Knox", "state": "Kentucky"}, {
    "text": "Larue",
    "value": "Larue",
    "state": "Kentucky"
  }, {"text": "Laurel", "value": "Laurel", "state": "Kentucky"}, {
    "text": "Lawrence",
    "value": "Lawrence",
    "state": "Kentucky"
  }, {"text": "Lee", "value": "Lee", "state": "Kentucky"}, {
    "text": "Leslie",
    "value": "Leslie",
    "state": "Kentucky"
  }, {"text": "Letcher", "value": "Letcher", "state": "Kentucky"}, {
    "text": "Lewis",
    "value": "Lewis",
    "state": "Kentucky"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "Kentucky"}, {
    "text": "Livingston",
    "value": "Livingston",
    "state": "Kentucky"
  }, {"text": "Logan", "value": "Logan", "state": "Kentucky"}, {
    "text": "Lyon",
    "value": "Lyon",
    "state": "Kentucky"
  }, {"text": "Madison", "value": "Madison", "state": "Kentucky"}, {
    "text": "Magoffin",
    "value": "Magoffin",
    "state": "Kentucky"
  }, {"text": "Marion", "value": "Marion", "state": "Kentucky"}, {
    "text": "Marshall",
    "value": "Marshall",
    "state": "Kentucky"
  }, {"text": "Martin", "value": "Martin", "state": "Kentucky"}, {
    "text": "Mason",
    "value": "Mason",
    "state": "Kentucky"
  }, {"text": "McCracken", "value": "McCracken", "state": "Kentucky"}, {
    "text": "McCreary",
    "value": "McCreary",
    "state": "Kentucky"
  }, {"text": "McLean", "value": "McLean", "state": "Kentucky"}, {
    "text": "Meade",
    "value": "Meade",
    "state": "Kentucky"
  }, {"text": "Menifee", "value": "Menifee", "state": "Kentucky"}, {
    "text": "Mercer",
    "value": "Mercer",
    "state": "Kentucky"
  }, {"text": "Metcalfe", "value": "Metcalfe", "state": "Kentucky"}, {
    "text": "Monroe",
    "value": "Monroe",
    "state": "Kentucky"
  }, {"text": "Montgomery", "value": "Montgomery", "state": "Kentucky"}, {
    "text": "Morgan",
    "value": "Morgan",
    "state": "Kentucky"
  }, {"text": "Muhlenberg", "value": "Muhlenberg", "state": "Kentucky"}, {
    "text": "Nelson",
    "value": "Nelson",
    "state": "Kentucky"
  }, {"text": "Nicholas", "value": "Nicholas", "state": "Kentucky"}, {
    "text": "Ohio",
    "value": "Ohio",
    "state": "Kentucky"
  }, {"text": "Oldham", "value": "Oldham", "state": "Kentucky"}, {
    "text": "Owen",
    "value": "Owen",
    "state": "Kentucky"
  }, {"text": "Owsley", "value": "Owsley", "state": "Kentucky"}, {
    "text": "Pendleton",
    "value": "Pendleton",
    "state": "Kentucky"
  }, {"text": "Perry", "value": "Perry", "state": "Kentucky"}, {
    "text": "Pike",
    "value": "Pike",
    "state": "Kentucky"
  }, {"text": "Powell", "value": "Powell", "state": "Kentucky"}, {
    "text": "Pulaski",
    "value": "Pulaski",
    "state": "Kentucky"
  }, {"text": "Robertson", "value": "Robertson", "state": "Kentucky"}, {
    "text": "Rockcastle",
    "value": "Rockcastle",
    "state": "Kentucky"
  }, {"text": "Rowan", "value": "Rowan", "state": "Kentucky"}, {
    "text": "Russell",
    "value": "Russell",
    "state": "Kentucky"
  }, {"text": "Scott", "value": "Scott", "state": "Kentucky"}, {
    "text": "Shelby",
    "value": "Shelby",
    "state": "Kentucky"
  }, {"text": "Simpson", "value": "Simpson", "state": "Kentucky"}, {
    "text": "Spencer",
    "value": "Spencer",
    "state": "Kentucky"
  }, {"text": "Taylor", "value": "Taylor", "state": "Kentucky"}, {
    "text": "Todd",
    "value": "Todd",
    "state": "Kentucky"
  }, {"text": "Trigg", "value": "Trigg", "state": "Kentucky"}, {
    "text": "Trimble",
    "value": "Trimble",
    "state": "Kentucky"
  }, {"text": "Union", "value": "Union", "state": "Kentucky"}, {
    "text": "Warren",
    "value": "Warren",
    "state": "Kentucky"
  }, {"text": "Washington", "value": "Washington", "state": "Kentucky"}, {
    "text": "Wayne",
    "value": "Wayne",
    "state": "Kentucky"
  }, {"text": "Webster", "value": "Webster", "state": "Kentucky"}, {
    "text": "Whitley",
    "value": "Whitley",
    "state": "Kentucky"
  }, {"text": "Wolfe", "value": "Wolfe", "state": "Kentucky"}, {
    "text": "Woodford",
    "value": "Woodford",
    "state": "Kentucky"
  }, {"text": "Acadia", "value": "Acadia", "state": "Louisiana"}, {
    "text": "Allen",
    "value": "Allen",
    "state": "Louisiana"
  }, {"text": "Ascension", "value": "Ascension", "state": "Louisiana"}, {
    "text": "Assumption",
    "value": "Assumption",
    "state": "Louisiana"
  }, {"text": "Avoyelles", "value": "Avoyelles", "state": "Louisiana"}, {
    "text": "Beauregard",
    "value": "Beauregard",
    "state": "Louisiana"
  }, {"text": "Bienville", "value": "Bienville", "state": "Louisiana"}, {
    "text": "Bossier",
    "value": "Bossier",
    "state": "Louisiana"
  }, {"text": "Caddo", "value": "Caddo", "state": "Louisiana"}, {
    "text": "Calcasieu",
    "value": "Calcasieu",
    "state": "Louisiana"
  }, {"text": "Caldwell", "value": "Caldwell", "state": "Louisiana"}, {
    "text": "Cameron",
    "value": "Cameron",
    "state": "Louisiana"
  }, {"text": "Catahoula", "value": "Catahoula", "state": "Louisiana"}, {
    "text": "Claiborne",
    "value": "Claiborne",
    "state": "Louisiana"
  }, {"text": "Concordia", "value": "Concordia", "state": "Louisiana"}, {
    "text": "De Soto",
    "value": "De Soto",
    "state": "Louisiana"
  }, {"text": "East Baton Rouge", "value": "East Baton Rouge", "state": "Louisiana"}, {
    "text": "East Carroll",
    "value": "East Carroll",
    "state": "Louisiana"
  }, {"text": "East Feliciana", "value": "East Feliciana", "state": "Louisiana"}, {
    "text": "Evangeline",
    "value": "Evangeline",
    "state": "Louisiana"
  }, {"text": "Franklin", "value": "Franklin", "state": "Louisiana"}, {
    "text": "Grant",
    "value": "Grant",
    "state": "Louisiana"
  }, {"text": "Iberia", "value": "Iberia", "state": "Louisiana"}, {
    "text": "Iberville",
    "value": "Iberville",
    "state": "Louisiana"
  }, {"text": "Jackson", "value": "Jackson", "state": "Louisiana"}, {
    "text": "Jefferson Davis",
    "value": "Jefferson Davis",
    "state": "Louisiana"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Louisiana"}, {
    "text": "La Salle",
    "value": "La Salle",
    "state": "Louisiana"
  }, {"text": "Lafayette", "value": "Lafayette", "state": "Louisiana"}, {
    "text": "Lafourche",
    "value": "Lafourche",
    "state": "Louisiana"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "Louisiana"}, {
    "text": "Livingston",
    "value": "Livingston",
    "state": "Louisiana"
  }, {"text": "Madison", "value": "Madison", "state": "Louisiana"}, {
    "text": "Morehouse",
    "value": "Morehouse",
    "state": "Louisiana"
  }, {"text": "Natchitoches", "value": "Natchitoches", "state": "Louisiana"}, {
    "text": "Orleans",
    "value": "Orleans",
    "state": "Louisiana"
  }, {"text": "Ouachita", "value": "Ouachita", "state": "Louisiana"}, {
    "text": "Plaquemines",
    "value": "Plaquemines",
    "state": "Louisiana"
  }, {"text": "Pointe Coupee", "value": "Pointe Coupee", "state": "Louisiana"}, {
    "text": "Rapides",
    "value": "Rapides",
    "state": "Louisiana"
  }, {"text": "Red River", "value": "Red River", "state": "Louisiana"}, {
    "text": "Richland",
    "value": "Richland",
    "state": "Louisiana"
  }, {"text": "Sabine", "value": "Sabine", "state": "Louisiana"}, {
    "text": "St. Bernard",
    "value": "St. Bernard",
    "state": "Louisiana"
  }, {"text": "St. Charles", "value": "St. Charles", "state": "Louisiana"}, {
    "text": "St. Helena",
    "value": "St. Helena",
    "state": "Louisiana"
  }, {"text": "St. James", "value": "St. James", "state": "Louisiana"}, {
    "text": "St. John the Baptist",
    "value": "St. John the Baptist",
    "state": "Louisiana"
  }, {"text": "St. Landry", "value": "St. Landry", "state": "Louisiana"}, {
    "text": "St. Martin",
    "value": "St. Martin",
    "state": "Louisiana"
  }, {"text": "St. Mary", "value": "St. Mary", "state": "Louisiana"}, {
    "text": "St. Tammany",
    "value": "St. Tammany",
    "state": "Louisiana"
  }, {"text": "Tangipahoa", "value": "Tangipahoa", "state": "Louisiana"}, {
    "text": "Tensas",
    "value": "Tensas",
    "state": "Louisiana"
  }, {"text": "Terrebonne", "value": "Terrebonne", "state": "Louisiana"}, {
    "text": "Union",
    "value": "Union",
    "state": "Louisiana"
  }, {"text": "Vermilion", "value": "Vermilion", "state": "Louisiana"}, {
    "text": "Vernon",
    "value": "Vernon",
    "state": "Louisiana"
  }, {"text": "Washington", "value": "Washington", "state": "Louisiana"}, {
    "text": "Webster",
    "value": "Webster",
    "state": "Louisiana"
  }, {"text": "West Baton Rouge", "value": "West Baton Rouge", "state": "Louisiana"}, {
    "text": "West Carroll",
    "value": "West Carroll",
    "state": "Louisiana"
  }, {"text": "West Feliciana", "value": "West Feliciana", "state": "Louisiana"}, {
    "text": "Winn",
    "value": "Winn",
    "state": "Louisiana"
  }, {"text": "Androscoggin", "value": "Androscoggin", "state": "Maine"}, {
    "text": "Aroostook",
    "value": "Aroostook",
    "state": "Maine"
  }, {"text": "Cumberland", "value": "Cumberland", "state": "Maine"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Maine"
  }, {"text": "Hancock", "value": "Hancock", "state": "Maine"}, {
    "text": "Kennebec",
    "value": "Kennebec",
    "state": "Maine"
  }, {"text": "Knox", "value": "Knox", "state": "Maine"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "Maine"
  }, {"text": "Oxford", "value": "Oxford", "state": "Maine"}, {
    "text": "Penobscot",
    "value": "Penobscot",
    "state": "Maine"
  }, {"text": "Piscataquis", "value": "Piscataquis", "state": "Maine"}, {
    "text": "Sagadahoc",
    "value": "Sagadahoc",
    "state": "Maine"
  }, {"text": "Somerset", "value": "Somerset", "state": "Maine"}, {
    "text": "Waldo",
    "value": "Waldo",
    "state": "Maine"
  }, {"text": "Washington", "value": "Washington", "state": "Maine"}, {
    "text": "York",
    "value": "York",
    "state": "Maine"
  }, {"text": "Allegany", "value": "Allegany", "state": "Maryland"}, {
    "text": "Anne Arundel",
    "value": "Anne Arundel",
    "state": "Maryland"
  }, {"text": "Baltimore City", "value": "Baltimore City", "state": "Maryland"}, {
    "text": "Baltimore",
    "value": "Baltimore",
    "state": "Maryland"
  }, {"text": "Calvert", "value": "Calvert", "state": "Maryland"}, {
    "text": "Caroline",
    "value": "Caroline",
    "state": "Maryland"
  }, {"text": "Carroll", "value": "Carroll", "state": "Maryland"}, {
    "text": "Cecil",
    "value": "Cecil",
    "state": "Maryland"
  }, {"text": "Charles", "value": "Charles", "state": "Maryland"}, {
    "text": "Dorchester",
    "value": "Dorchester",
    "state": "Maryland"
  }, {"text": "Frederick", "value": "Frederick", "state": "Maryland"}, {
    "text": "Garrett",
    "value": "Garrett",
    "state": "Maryland"
  }, {"text": "Harford", "value": "Harford", "state": "Maryland"}, {
    "text": "Howard",
    "value": "Howard",
    "state": "Maryland"
  }, {"text": "Kent", "value": "Kent", "state": "Maryland"}, {
    "text": "Montgomery",
    "value": "Montgomery",
    "state": "Maryland"
  }, {"text": "Prince George's", "value": "Prince George's", "state": "Maryland"}, {
    "text": "Queen Anne's",
    "value": "Queen Anne's",
    "state": "Maryland"
  }, {"text": "Somerset", "value": "Somerset", "state": "Maryland"}, {
    "text": "St. Mary's",
    "value": "St. Mary's",
    "state": "Maryland"
  }, {"text": "Talbot", "value": "Talbot", "state": "Maryland"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Maryland"
  }, {"text": "Wicomico", "value": "Wicomico", "state": "Maryland"}, {
    "text": "Worcester",
    "value": "Worcester",
    "state": "Maryland"
  }, {"text": "Barnstable", "value": "Barnstable", "state": "Massachusetts"}, {
    "text": "Berkshire",
    "value": "Berkshire",
    "state": "Massachusetts"
  }, {"text": "Bristol", "value": "Bristol", "state": "Massachusetts"}, {
    "text": "Dukes",
    "value": "Dukes",
    "state": "Massachusetts"
  }, {"text": "Essex", "value": "Essex", "state": "Massachusetts"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Massachusetts"
  }, {"text": "Hampden", "value": "Hampden", "state": "Massachusetts"}, {
    "text": "Hampshire",
    "value": "Hampshire",
    "state": "Massachusetts"
  }, {"text": "Middlesex", "value": "Middlesex", "state": "Massachusetts"}, {
    "text": "Nantucket",
    "value": "Nantucket",
    "state": "Massachusetts"
  }, {"text": "Norfolk", "value": "Norfolk", "state": "Massachusetts"}, {
    "text": "Plymouth",
    "value": "Plymouth",
    "state": "Massachusetts"
  }, {"text": "Suffolk", "value": "Suffolk", "state": "Massachusetts"}, {
    "text": "Worcester",
    "value": "Worcester",
    "state": "Massachusetts"
  }, {"text": "Alcona", "value": "Alcona", "state": "Michigan"}, {
    "text": "Alger",
    "value": "Alger",
    "state": "Michigan"
  }, {"text": "Allegan", "value": "Allegan", "state": "Michigan"}, {
    "text": "Alpena",
    "value": "Alpena",
    "state": "Michigan"
  }, {"text": "Antrim", "value": "Antrim", "state": "Michigan"}, {
    "text": "Arenac",
    "value": "Arenac",
    "state": "Michigan"
  }, {"text": "Baraga", "value": "Baraga", "state": "Michigan"}, {
    "text": "Barry",
    "value": "Barry",
    "state": "Michigan"
  }, {"text": "Bay", "value": "Bay", "state": "Michigan"}, {
    "text": "Benzie",
    "value": "Benzie",
    "state": "Michigan"
  }, {"text": "Berrien", "value": "Berrien", "state": "Michigan"}, {
    "text": "Branch",
    "value": "Branch",
    "state": "Michigan"
  }, {"text": "Calhoun", "value": "Calhoun", "state": "Michigan"}, {
    "text": "Cass",
    "value": "Cass",
    "state": "Michigan"
  }, {"text": "Charlevoix", "value": "Charlevoix", "state": "Michigan"}, {
    "text": "Cheboygan",
    "value": "Cheboygan",
    "state": "Michigan"
  }, {"text": "Chippewa", "value": "Chippewa", "state": "Michigan"}, {
    "text": "Clare",
    "value": "Clare",
    "state": "Michigan"
  }, {"text": "Clinton", "value": "Clinton", "state": "Michigan"}, {
    "text": "Crawford",
    "value": "Crawford",
    "state": "Michigan"
  }, {"text": "Delta", "value": "Delta", "state": "Michigan"}, {
    "text": "Dickinson",
    "value": "Dickinson",
    "state": "Michigan"
  }, {"text": "Eaton", "value": "Eaton", "state": "Michigan"}, {
    "text": "Emmet",
    "value": "Emmet",
    "state": "Michigan"
  }, {"text": "Genesee", "value": "Genesee", "state": "Michigan"}, {
    "text": "Gladwin",
    "value": "Gladwin",
    "state": "Michigan"
  }, {"text": "Gogebic", "value": "Gogebic", "state": "Michigan"}, {
    "text": "Grand Traverse",
    "value": "Grand Traverse",
    "state": "Michigan"
  }, {"text": "Gratiot", "value": "Gratiot", "state": "Michigan"}, {
    "text": "Hillsdale",
    "value": "Hillsdale",
    "state": "Michigan"
  }, {"text": "Houghton", "value": "Houghton", "state": "Michigan"}, {
    "text": "Huron",
    "value": "Huron",
    "state": "Michigan"
  }, {"text": "Ingham", "value": "Ingham", "state": "Michigan"}, {
    "text": "Ionia",
    "value": "Ionia",
    "state": "Michigan"
  }, {"text": "Iosco", "value": "Iosco", "state": "Michigan"}, {
    "text": "Iron",
    "value": "Iron",
    "state": "Michigan"
  }, {"text": "Isabella", "value": "Isabella", "state": "Michigan"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Michigan"
  }, {"text": "Kalamazoo", "value": "Kalamazoo", "state": "Michigan"}, {
    "text": "Kalkaska",
    "value": "Kalkaska",
    "state": "Michigan"
  }, {"text": "Kent", "value": "Kent", "state": "Michigan"}, {
    "text": "Keweenaw",
    "value": "Keweenaw",
    "state": "Michigan"
  }, {"text": "Lake", "value": "Lake", "state": "Michigan"}, {
    "text": "Lapeer",
    "value": "Lapeer",
    "state": "Michigan"
  }, {"text": "Leelanau", "value": "Leelanau", "state": "Michigan"}, {
    "text": "Lenawee",
    "value": "Lenawee",
    "state": "Michigan"
  }, {"text": "Livingston", "value": "Livingston", "state": "Michigan"}, {
    "text": "Luce",
    "value": "Luce",
    "state": "Michigan"
  }, {"text": "Mackinac", "value": "Mackinac", "state": "Michigan"}, {
    "text": "Macomb",
    "value": "Macomb",
    "state": "Michigan"
  }, {"text": "Manistee", "value": "Manistee", "state": "Michigan"}, {
    "text": "Marquette",
    "value": "Marquette",
    "state": "Michigan"
  }, {"text": "Mason", "value": "Mason", "state": "Michigan"}, {
    "text": "Mecosta",
    "value": "Mecosta",
    "state": "Michigan"
  }, {"text": "Menominee", "value": "Menominee", "state": "Michigan"}, {
    "text": "Midland",
    "value": "Midland",
    "state": "Michigan"
  }, {"text": "Missaukee", "value": "Missaukee", "state": "Michigan"}, {
    "text": "Monroe",
    "value": "Monroe",
    "state": "Michigan"
  }, {"text": "Montcalm", "value": "Montcalm", "state": "Michigan"}, {
    "text": "Montmorency",
    "value": "Montmorency",
    "state": "Michigan"
  }, {"text": "Muskegon", "value": "Muskegon", "state": "Michigan"}, {
    "text": "Newaygo",
    "value": "Newaygo",
    "state": "Michigan"
  }, {"text": "Oakland", "value": "Oakland", "state": "Michigan"}, {
    "text": "Oceana",
    "value": "Oceana",
    "state": "Michigan"
  }, {"text": "Ogemaw", "value": "Ogemaw", "state": "Michigan"}, {
    "text": "Ontonagon",
    "value": "Ontonagon",
    "state": "Michigan"
  }, {"text": "Osceola", "value": "Osceola", "state": "Michigan"}, {
    "text": "Oscoda",
    "value": "Oscoda",
    "state": "Michigan"
  }, {"text": "Otsego", "value": "Otsego", "state": "Michigan"}, {
    "text": "Ottawa",
    "value": "Ottawa",
    "state": "Michigan"
  }, {"text": "Presque Isle", "value": "Presque Isle", "state": "Michigan"}, {
    "text": "Roscommon",
    "value": "Roscommon",
    "state": "Michigan"
  }, {"text": "Saginaw", "value": "Saginaw", "state": "Michigan"}, {
    "text": "Sanilac",
    "value": "Sanilac",
    "state": "Michigan"
  }, {"text": "Schoolcraft", "value": "Schoolcraft", "state": "Michigan"}, {
    "text": "Shiawassee",
    "value": "Shiawassee",
    "state": "Michigan"
  }, {"text": "St. Clair", "value": "St. Clair", "state": "Michigan"}, {
    "text": "St. Joseph",
    "value": "St. Joseph",
    "state": "Michigan"
  }, {"text": "Tuscola", "value": "Tuscola", "state": "Michigan"}, {
    "text": "Van Buren",
    "value": "Van Buren",
    "state": "Michigan"
  }, {"text": "Washtenaw", "value": "Washtenaw", "state": "Michigan"}, {
    "text": "Wayne",
    "value": "Wayne",
    "state": "Michigan"
  }, {"text": "Wexford", "value": "Wexford", "state": "Michigan"}, {
    "text": "Aitkin",
    "value": "Aitkin",
    "state": "Minnesota"
  }, {"text": "Anoka", "value": "Anoka", "state": "Minnesota"}, {
    "text": "Becker",
    "value": "Becker",
    "state": "Minnesota"
  }, {"text": "Beltrami", "value": "Beltrami", "state": "Minnesota"}, {
    "text": "Benton",
    "value": "Benton",
    "state": "Minnesota"
  }, {"text": "Big Stone", "value": "Big Stone", "state": "Minnesota"}, {
    "text": "Blue Earth",
    "value": "Blue Earth",
    "state": "Minnesota"
  }, {"text": "Brown", "value": "Brown", "state": "Minnesota"}, {
    "text": "Carlton",
    "value": "Carlton",
    "state": "Minnesota"
  }, {"text": "Carver", "value": "Carver", "state": "Minnesota"}, {
    "text": "Cass",
    "value": "Cass",
    "state": "Minnesota"
  }, {"text": "Chippewa", "value": "Chippewa", "state": "Minnesota"}, {
    "text": "Chisago",
    "value": "Chisago",
    "state": "Minnesota"
  }, {"text": "Clay", "value": "Clay", "state": "Minnesota"}, {
    "text": "Clearwater",
    "value": "Clearwater",
    "state": "Minnesota"
  }, {"text": "Cook", "value": "Cook", "state": "Minnesota"}, {
    "text": "Cottonwood",
    "value": "Cottonwood",
    "state": "Minnesota"
  }, {"text": "Crow Wing", "value": "Crow Wing", "state": "Minnesota"}, {
    "text": "Dakota",
    "value": "Dakota",
    "state": "Minnesota"
  }, {"text": "Dodge", "value": "Dodge", "state": "Minnesota"}, {
    "text": "Douglas",
    "value": "Douglas",
    "state": "Minnesota"
  }, {"text": "Faribault", "value": "Faribault", "state": "Minnesota"}, {
    "text": "Fillmore",
    "value": "Fillmore",
    "state": "Minnesota"
  }, {"text": "Freeborn", "value": "Freeborn", "state": "Minnesota"}, {
    "text": "Goodhue",
    "value": "Goodhue",
    "state": "Minnesota"
  }, {"text": "Grant", "value": "Grant", "state": "Minnesota"}, {
    "text": "Hennepin",
    "value": "Hennepin",
    "state": "Minnesota"
  }, {"text": "Houston", "value": "Houston", "state": "Minnesota"}, {
    "text": "Hubbard",
    "value": "Hubbard",
    "state": "Minnesota"
  }, {"text": "Isanti", "value": "Isanti", "state": "Minnesota"}, {
    "text": "Itasca",
    "value": "Itasca",
    "state": "Minnesota"
  }, {"text": "Jackson", "value": "Jackson", "state": "Minnesota"}, {
    "text": "Kanabec",
    "value": "Kanabec",
    "state": "Minnesota"
  }, {"text": "Kandiyohi", "value": "Kandiyohi", "state": "Minnesota"}, {
    "text": "Kittson",
    "value": "Kittson",
    "state": "Minnesota"
  }, {"text": "Koochiching", "value": "Koochiching", "state": "Minnesota"}, {
    "text": "Lac qui Parle",
    "value": "Lac qui Parle",
    "state": "Minnesota"
  }, {"text": "Lake of the Woods", "value": "Lake of the Woods", "state": "Minnesota"}, {
    "text": "Lake",
    "value": "Lake",
    "state": "Minnesota"
  }, {"text": "Le Sueur", "value": "Le Sueur", "state": "Minnesota"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "Minnesota"
  }, {"text": "Lyon", "value": "Lyon", "state": "Minnesota"}, {
    "text": "Mahnomen",
    "value": "Mahnomen",
    "state": "Minnesota"
  }, {"text": "Marshall", "value": "Marshall", "state": "Minnesota"}, {
    "text": "Martin",
    "value": "Martin",
    "state": "Minnesota"
  }, {"text": "McLeod", "value": "McLeod", "state": "Minnesota"}, {
    "text": "Meeker",
    "value": "Meeker",
    "state": "Minnesota"
  }, {"text": "Mille Lacs", "value": "Mille Lacs", "state": "Minnesota"}, {
    "text": "Morrison",
    "value": "Morrison",
    "state": "Minnesota"
  }, {"text": "Mower", "value": "Mower", "state": "Minnesota"}, {
    "text": "Murray",
    "value": "Murray",
    "state": "Minnesota"
  }, {"text": "Nicollet", "value": "Nicollet", "state": "Minnesota"}, {
    "text": "Nobles",
    "value": "Nobles",
    "state": "Minnesota"
  }, {"text": "Norman", "value": "Norman", "state": "Minnesota"}, {
    "text": "Olmsted",
    "value": "Olmsted",
    "state": "Minnesota"
  }, {"text": "Otter Tail", "value": "Otter Tail", "state": "Minnesota"}, {
    "text": "Pennington",
    "value": "Pennington",
    "state": "Minnesota"
  }, {"text": "Pine", "value": "Pine", "state": "Minnesota"}, {
    "text": "Pipestone",
    "value": "Pipestone",
    "state": "Minnesota"
  }, {"text": "Polk", "value": "Polk", "state": "Minnesota"}, {
    "text": "Pope",
    "value": "Pope",
    "state": "Minnesota"
  }, {"text": "Ramsey", "value": "Ramsey", "state": "Minnesota"}, {
    "text": "Red Lake",
    "value": "Red Lake",
    "state": "Minnesota"
  }, {"text": "Redwood", "value": "Redwood", "state": "Minnesota"}, {
    "text": "Renville",
    "value": "Renville",
    "state": "Minnesota"
  }, {"text": "Rice", "value": "Rice", "state": "Minnesota"}, {
    "text": "Rock",
    "value": "Rock",
    "state": "Minnesota"
  }, {"text": "Roseau", "value": "Roseau", "state": "Minnesota"}, {
    "text": "Scott",
    "value": "Scott",
    "state": "Minnesota"
  }, {"text": "Sherburne", "value": "Sherburne", "state": "Minnesota"}, {
    "text": "Sibley",
    "value": "Sibley",
    "state": "Minnesota"
  }, {"text": "St. Louis", "value": "St. Louis", "state": "Minnesota"}, {
    "text": "Stearns",
    "value": "Stearns",
    "state": "Minnesota"
  }, {"text": "Steele", "value": "Steele", "state": "Minnesota"}, {
    "text": "Stevens",
    "value": "Stevens",
    "state": "Minnesota"
  }, {"text": "Swift", "value": "Swift", "state": "Minnesota"}, {
    "text": "Todd",
    "value": "Todd",
    "state": "Minnesota"
  }, {"text": "Traverse", "value": "Traverse", "state": "Minnesota"}, {
    "text": "Wabasha",
    "value": "Wabasha",
    "state": "Minnesota"
  }, {"text": "Wadena", "value": "Wadena", "state": "Minnesota"}, {
    "text": "Waseca",
    "value": "Waseca",
    "state": "Minnesota"
  }, {"text": "Washington", "value": "Washington", "state": "Minnesota"}, {
    "text": "Watonwan",
    "value": "Watonwan",
    "state": "Minnesota"
  }, {"text": "Wilkin", "value": "Wilkin", "state": "Minnesota"}, {
    "text": "Winona",
    "value": "Winona",
    "state": "Minnesota"
  }, {"text": "Wright", "value": "Wright", "state": "Minnesota"}, {
    "text": "Yellow Medicine",
    "value": "Yellow Medicine",
    "state": "Minnesota"
  }, {"text": "Adams", "value": "Adams", "state": "Mississippi"}, {
    "text": "Alcorn",
    "value": "Alcorn",
    "state": "Mississippi"
  }, {"text": "Amite", "value": "Amite", "state": "Mississippi"}, {
    "text": "Attala",
    "value": "Attala",
    "state": "Mississippi"
  }, {"text": "Benton", "value": "Benton", "state": "Mississippi"}, {
    "text": "Bolivar",
    "value": "Bolivar",
    "state": "Mississippi"
  }, {"text": "Calhoun", "value": "Calhoun", "state": "Mississippi"}, {
    "text": "Carroll",
    "value": "Carroll",
    "state": "Mississippi"
  }, {"text": "Chickasaw", "value": "Chickasaw", "state": "Mississippi"}, {
    "text": "Choctaw",
    "value": "Choctaw",
    "state": "Mississippi"
  }, {"text": "Claiborne", "value": "Claiborne", "state": "Mississippi"}, {
    "text": "Clarke",
    "value": "Clarke",
    "state": "Mississippi"
  }, {"text": "Clay", "value": "Clay", "state": "Mississippi"}, {
    "text": "Coahoma",
    "value": "Coahoma",
    "state": "Mississippi"
  }, {"text": "Copiah", "value": "Copiah", "state": "Mississippi"}, {
    "text": "Covington",
    "value": "Covington",
    "state": "Mississippi"
  }, {"text": "DeSoto", "value": "DeSoto", "state": "Mississippi"}, {
    "text": "Forrest",
    "value": "Forrest",
    "state": "Mississippi"
  }, {"text": "Franklin", "value": "Franklin", "state": "Mississippi"}, {
    "text": "George",
    "value": "George",
    "state": "Mississippi"
  }, {"text": "Greene", "value": "Greene", "state": "Mississippi"}, {
    "text": "Grenada",
    "value": "Grenada",
    "state": "Mississippi"
  }, {"text": "Hancock", "value": "Hancock", "state": "Mississippi"}, {
    "text": "Harrison",
    "value": "Harrison",
    "state": "Mississippi"
  }, {"text": "Hinds", "value": "Hinds", "state": "Mississippi"}, {
    "text": "Holmes",
    "value": "Holmes",
    "state": "Mississippi"
  }, {"text": "Humphreys", "value": "Humphreys", "state": "Mississippi"}, {
    "text": "Issaquena",
    "value": "Issaquena",
    "state": "Mississippi"
  }, {"text": "Itawamba", "value": "Itawamba", "state": "Mississippi"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Mississippi"
  }, {"text": "Jasper", "value": "Jasper", "state": "Mississippi"}, {
    "text": "Jefferson",
    "value": "Jefferson",
    "state": "Mississippi"
  }, {"text": "Jefferson Davis", "value": "Jefferson Davis", "state": "Mississippi"}, {
    "text": "Jones",
    "value": "Jones",
    "state": "Mississippi"
  }, {"text": "Kemper", "value": "Kemper", "state": "Mississippi"}, {
    "text": "Lafayette",
    "value": "Lafayette",
    "state": "Mississippi"
  }, {"text": "Lamar", "value": "Lamar", "state": "Mississippi"}, {
    "text": "Lauderdale",
    "value": "Lauderdale",
    "state": "Mississippi"
  }, {"text": "Lawrence", "value": "Lawrence", "state": "Mississippi"}, {
    "text": "Leake",
    "value": "Leake",
    "state": "Mississippi"
  }, {"text": "Lee", "value": "Lee", "state": "Mississippi"}, {
    "text": "Leflore",
    "value": "Leflore",
    "state": "Mississippi"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "Mississippi"}, {
    "text": "Lowndes",
    "value": "Lowndes",
    "state": "Mississippi"
  }, {"text": "Madison", "value": "Madison", "state": "Mississippi"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "Mississippi"
  }, {"text": "Marshall", "value": "Marshall", "state": "Mississippi"}, {
    "text": "Monroe",
    "value": "Monroe",
    "state": "Mississippi"
  }, {"text": "Montgomery", "value": "Montgomery", "state": "Mississippi"}, {
    "text": "Neshoba",
    "value": "Neshoba",
    "state": "Mississippi"
  }, {"text": "Newton", "value": "Newton", "state": "Mississippi"}, {
    "text": "Noxubee",
    "value": "Noxubee",
    "state": "Mississippi"
  }, {"text": "Oktibbeha", "value": "Oktibbeha", "state": "Mississippi"}, {
    "text": "Panola",
    "value": "Panola",
    "state": "Mississippi"
  }, {"text": "Pearl River", "value": "Pearl River", "state": "Mississippi"}, {
    "text": "Perry",
    "value": "Perry",
    "state": "Mississippi"
  }, {"text": "Pike", "value": "Pike", "state": "Mississippi"}, {
    "text": "Pontotoc",
    "value": "Pontotoc",
    "state": "Mississippi"
  }, {"text": "Prentiss", "value": "Prentiss", "state": "Mississippi"}, {
    "text": "Quitman",
    "value": "Quitman",
    "state": "Mississippi"
  }, {"text": "Rankin", "value": "Rankin", "state": "Mississippi"}, {
    "text": "Scott",
    "value": "Scott",
    "state": "Mississippi"
  }, {"text": "Sharkey", "value": "Sharkey", "state": "Mississippi"}, {
    "text": "Simpson",
    "value": "Simpson",
    "state": "Mississippi"
  }, {"text": "Smith", "value": "Smith", "state": "Mississippi"}, {
    "text": "Stone",
    "value": "Stone",
    "state": "Mississippi"
  }, {"text": "Sunflower", "value": "Sunflower", "state": "Mississippi"}, {
    "text": "Tallahatchie",
    "value": "Tallahatchie",
    "state": "Mississippi"
  }, {"text": "Tate", "value": "Tate", "state": "Mississippi"}, {
    "text": "Tippah",
    "value": "Tippah",
    "state": "Mississippi"
  }, {"text": "Tishomingo", "value": "Tishomingo", "state": "Mississippi"}, {
    "text": "Tunica",
    "value": "Tunica",
    "state": "Mississippi"
  }, {"text": "Union", "value": "Union", "state": "Mississippi"}, {
    "text": "Walthall",
    "value": "Walthall",
    "state": "Mississippi"
  }, {"text": "Warren", "value": "Warren", "state": "Mississippi"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Mississippi"
  }, {"text": "Wayne", "value": "Wayne", "state": "Mississippi"}, {
    "text": "Webster",
    "value": "Webster",
    "state": "Mississippi"
  }, {"text": "Wilkinson", "value": "Wilkinson", "state": "Mississippi"}, {
    "text": "Winston",
    "value": "Winston",
    "state": "Mississippi"
  }, {"text": "Yalobusha", "value": "Yalobusha", "state": "Mississippi"}, {
    "text": "Yazoo",
    "value": "Yazoo",
    "state": "Mississippi"
  }, {"text": "Adair", "value": "Adair", "state": "Missouri"}, {
    "text": "Andrew",
    "value": "Andrew",
    "state": "Missouri"
  }, {"text": "Atchison", "value": "Atchison", "state": "Missouri"}, {
    "text": "Audrain",
    "value": "Audrain",
    "state": "Missouri"
  }, {"text": "Barry", "value": "Barry", "state": "Missouri"}, {
    "text": "Barton",
    "value": "Barton",
    "state": "Missouri"
  }, {"text": "Bates", "value": "Bates", "state": "Missouri"}, {
    "text": "Benton",
    "value": "Benton",
    "state": "Missouri"
  }, {"text": "Bollinger", "value": "Bollinger", "state": "Missouri"}, {
    "text": "Boone",
    "value": "Boone",
    "state": "Missouri"
  }, {"text": "Buchanan", "value": "Buchanan", "state": "Missouri"}, {
    "text": "Butler",
    "value": "Butler",
    "state": "Missouri"
  }, {"text": "Caldwell", "value": "Caldwell", "state": "Missouri"}, {
    "text": "Callaway",
    "value": "Callaway",
    "state": "Missouri"
  }, {"text": "Camden", "value": "Camden", "state": "Missouri"}, {
    "text": "Cape Girardeau",
    "value": "Cape Girardeau",
    "state": "Missouri"
  }, {"text": "Carroll", "value": "Carroll", "state": "Missouri"}, {
    "text": "Carter",
    "value": "Carter",
    "state": "Missouri"
  }, {"text": "Cass", "value": "Cass", "state": "Missouri"}, {
    "text": "Cedar",
    "value": "Cedar",
    "state": "Missouri"
  }, {"text": "Chariton", "value": "Chariton", "state": "Missouri"}, {
    "text": "Christian",
    "value": "Christian",
    "state": "Missouri"
  }, {"text": "Clark", "value": "Clark", "state": "Missouri"}, {
    "text": "Clay",
    "value": "Clay",
    "state": "Missouri"
  }, {"text": "Clinton", "value": "Clinton", "state": "Missouri"}, {
    "text": "Cole",
    "value": "Cole",
    "state": "Missouri"
  }, {"text": "Cooper", "value": "Cooper", "state": "Missouri"}, {
    "text": "Crawford",
    "value": "Crawford",
    "state": "Missouri"
  }, {"text": "Dade", "value": "Dade", "state": "Missouri"}, {
    "text": "Dallas",
    "value": "Dallas",
    "state": "Missouri"
  }, {"text": "Daviess", "value": "Daviess", "state": "Missouri"}, {
    "text": "Dent",
    "value": "Dent",
    "state": "Missouri"
  }, {"text": "DeKalb", "value": "DeKalb", "state": "Missouri"}, {
    "text": "Douglas",
    "value": "Douglas",
    "state": "Missouri"
  }, {"text": "Dunklin", "value": "Dunklin", "state": "Missouri"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Missouri"
  }, {"text": "Gasconade", "value": "Gasconade", "state": "Missouri"}, {
    "text": "Gentry",
    "value": "Gentry",
    "state": "Missouri"
  }, {"text": "Greene", "value": "Greene", "state": "Missouri"}, {
    "text": "Grundy",
    "value": "Grundy",
    "state": "Missouri"
  }, {"text": "Harrison", "value": "Harrison", "state": "Missouri"}, {
    "text": "Henry",
    "value": "Henry",
    "state": "Missouri"
  }, {"text": "Hickory", "value": "Hickory", "state": "Missouri"}, {
    "text": "Holt",
    "value": "Holt",
    "state": "Missouri"
  }, {"text": "Howard", "value": "Howard", "state": "Missouri"}, {
    "text": "Howell",
    "value": "Howell",
    "state": "Missouri"
  }, {"text": "Iron", "value": "Iron", "state": "Missouri"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Missouri"
  }, {"text": "Jasper", "value": "Jasper", "state": "Missouri"}, {
    "text": "Jefferson",
    "value": "Jefferson",
    "state": "Missouri"
  }, {"text": "Johnson", "value": "Johnson", "state": "Missouri"}, {
    "text": "Knox",
    "value": "Knox",
    "state": "Missouri"
  }, {"text": "Laclede", "value": "Laclede", "state": "Missouri"}, {
    "text": "Lafayette",
    "value": "Lafayette",
    "state": "Missouri"
  }, {"text": "Lawrence", "value": "Lawrence", "state": "Missouri"}, {
    "text": "Lewis",
    "value": "Lewis",
    "state": "Missouri"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "Missouri"}, {
    "text": "Linn",
    "value": "Linn",
    "state": "Missouri"
  }, {"text": "Livingston", "value": "Livingston", "state": "Missouri"}, {
    "text": "Macon",
    "value": "Macon",
    "state": "Missouri"
  }, {"text": "Madison", "value": "Madison", "state": "Missouri"}, {
    "text": "Maries",
    "value": "Maries",
    "state": "Missouri"
  }, {"text": "Marion", "value": "Marion", "state": "Missouri"}, {
    "text": "McDonald",
    "value": "McDonald",
    "state": "Missouri"
  }, {"text": "Mercer", "value": "Mercer", "state": "Missouri"}, {
    "text": "Miller",
    "value": "Miller",
    "state": "Missouri"
  }, {"text": "Mississippi", "value": "Mississippi", "state": "Missouri"}, {
    "text": "Moniteau",
    "value": "Moniteau",
    "state": "Missouri"
  }, {"text": "Monroe", "value": "Monroe", "state": "Missouri"}, {
    "text": "Montgomery",
    "value": "Montgomery",
    "state": "Missouri"
  }, {"text": "Morgan", "value": "Morgan", "state": "Missouri"}, {
    "text": "New Madrid",
    "value": "New Madrid",
    "state": "Missouri"
  }, {"text": "Newton", "value": "Newton", "state": "Missouri"}, {
    "text": "Nodaway",
    "value": "Nodaway",
    "state": "Missouri"
  }, {"text": "Oregon", "value": "Oregon", "state": "Missouri"}, {
    "text": "Osage",
    "value": "Osage",
    "state": "Missouri"
  }, {"text": "Ozark", "value": "Ozark", "state": "Missouri"}, {
    "text": "Pemiscot",
    "value": "Pemiscot",
    "state": "Missouri"
  }, {"text": "Perry", "value": "Perry", "state": "Missouri"}, {
    "text": "Pettis",
    "value": "Pettis",
    "state": "Missouri"
  }, {"text": "Phelps", "value": "Phelps", "state": "Missouri"}, {
    "text": "Pike",
    "value": "Pike",
    "state": "Missouri"
  }, {"text": "Platte", "value": "Platte", "state": "Missouri"}, {
    "text": "Polk",
    "value": "Polk",
    "state": "Missouri"
  }, {"text": "Pulaski", "value": "Pulaski", "state": "Missouri"}, {
    "text": "Putnam",
    "value": "Putnam",
    "state": "Missouri"
  }, {"text": "Ralls", "value": "Ralls", "state": "Missouri"}, {
    "text": "Randolph",
    "value": "Randolph",
    "state": "Missouri"
  }, {"text": "Ray", "value": "Ray", "state": "Missouri"}, {
    "text": "Reynolds",
    "value": "Reynolds",
    "state": "Missouri"
  }, {"text": "Ripley", "value": "Ripley", "state": "Missouri"}, {
    "text": "Saline",
    "value": "Saline",
    "state": "Missouri"
  }, {"text": "Schuyler", "value": "Schuyler", "state": "Missouri"}, {
    "text": "Scotland",
    "value": "Scotland",
    "state": "Missouri"
  }, {"text": "Scott", "value": "Scott", "state": "Missouri"}, {
    "text": "Shannon",
    "value": "Shannon",
    "state": "Missouri"
  }, {"text": "Shelby", "value": "Shelby", "state": "Missouri"}, {
    "text": "St. Charles",
    "value": "St. Charles",
    "state": "Missouri"
  }, {"text": "St. Clair", "value": "St. Clair", "state": "Missouri"}, {
    "text": "St. Francois",
    "value": "St. Francois",
    "state": "Missouri"
  }, {"text": "St. Louis city", "value": "St. Louis city", "state": "Missouri"}, {
    "text": "St. Louis",
    "value": "St. Louis",
    "state": "Missouri"
  }, {"text": "Ste. Genevieve", "value": "Ste. Genevieve", "state": "Missouri"}, {
    "text": "Stoddard",
    "value": "Stoddard",
    "state": "Missouri"
  }, {"text": "Stone", "value": "Stone", "state": "Missouri"}, {
    "text": "Sullivan",
    "value": "Sullivan",
    "state": "Missouri"
  }, {"text": "Taney", "value": "Taney", "state": "Missouri"}, {
    "text": "Texas",
    "value": "Texas",
    "state": "Missouri"
  }, {"text": "Vernon", "value": "Vernon", "state": "Missouri"}, {
    "text": "Warren",
    "value": "Warren",
    "state": "Missouri"
  }, {"text": "Washington", "value": "Washington", "state": "Missouri"}, {
    "text": "Wayne",
    "value": "Wayne",
    "state": "Missouri"
  }, {"text": "Webster", "value": "Webster", "state": "Missouri"}, {
    "text": "Worth",
    "value": "Worth",
    "state": "Missouri"
  }, {"text": "Wright", "value": "Wright", "state": "Missouri"}, {
    "text": "Beaverhead",
    "value": "Beaverhead",
    "state": "Montana"
  }, {"text": "Big Horn", "value": "Big Horn", "state": "Montana"}, {
    "text": "Blaine",
    "value": "Blaine",
    "state": "Montana"
  }, {"text": "Broadwater", "value": "Broadwater", "state": "Montana"}, {
    "text": "Carbon",
    "value": "Carbon",
    "state": "Montana"
  }, {"text": "Carter", "value": "Carter", "state": "Montana"}, {
    "text": "Cascade",
    "value": "Cascade",
    "state": "Montana"
  }, {"text": "Chouteau", "value": "Chouteau", "state": "Montana"}, {
    "text": "Custer",
    "value": "Custer",
    "state": "Montana"
  }, {"text": "Daniels", "value": "Daniels", "state": "Montana"}, {
    "text": "Dawson",
    "value": "Dawson",
    "state": "Montana"
  }, {"text": "Deer Lodge", "value": "Deer Lodge", "state": "Montana"}, {
    "text": "Fallon",
    "value": "Fallon",
    "state": "Montana"
  }, {"text": "Fergus", "value": "Fergus", "state": "Montana"}, {
    "text": "Flathead",
    "value": "Flathead",
    "state": "Montana"
  }, {"text": "Gallatin", "value": "Gallatin", "state": "Montana"}, {
    "text": "Garfield",
    "value": "Garfield",
    "state": "Montana"
  }, {"text": "Glacier", "value": "Glacier", "state": "Montana"}, {
    "text": "Golden Valley",
    "value": "Golden Valley",
    "state": "Montana"
  }, {"text": "Granite", "value": "Granite", "state": "Montana"}, {
    "text": "Hill",
    "value": "Hill",
    "state": "Montana"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Montana"}, {
    "text": "Judith Basin",
    "value": "Judith Basin",
    "state": "Montana"
  }, {"text": "Lake", "value": "Lake", "state": "Montana"}, {
    "text": "Lewis and Clark",
    "value": "Lewis and Clark",
    "state": "Montana"
  }, {"text": "Liberty", "value": "Liberty", "state": "Montana"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "Montana"
  }, {"text": "Madison", "value": "Madison", "state": "Montana"}, {
    "text": "McCone",
    "value": "McCone",
    "state": "Montana"
  }, {"text": "Meagher", "value": "Meagher", "state": "Montana"}, {
    "text": "Mineral",
    "value": "Mineral",
    "state": "Montana"
  }, {"text": "Missoula", "value": "Missoula", "state": "Montana"}, {
    "text": "Musselshell",
    "value": "Musselshell",
    "state": "Montana"
  }, {"text": "Park", "value": "Park", "state": "Montana"}, {
    "text": "Petroleum",
    "value": "Petroleum",
    "state": "Montana"
  }, {"text": "Phillips", "value": "Phillips", "state": "Montana"}, {
    "text": "Pondera",
    "value": "Pondera",
    "state": "Montana"
  }, {"text": "Powder River", "value": "Powder River", "state": "Montana"}, {
    "text": "Powell",
    "value": "Powell",
    "state": "Montana"
  }, {"text": "Prairie", "value": "Prairie", "state": "Montana"}, {
    "text": "Ravalli",
    "value": "Ravalli",
    "state": "Montana"
  }, {"text": "Richland", "value": "Richland", "state": "Montana"}, {
    "text": "Roosevelt",
    "value": "Roosevelt",
    "state": "Montana"
  }, {"text": "Rosebud", "value": "Rosebud", "state": "Montana"}, {
    "text": "Sanders",
    "value": "Sanders",
    "state": "Montana"
  }, {"text": "Sheridan", "value": "Sheridan", "state": "Montana"}, {
    "text": "Silver Bow",
    "value": "Silver Bow",
    "state": "Montana"
  }, {"text": "Stillwater", "value": "Stillwater", "state": "Montana"}, {
    "text": "Sweet Grass",
    "value": "Sweet Grass",
    "state": "Montana"
  }, {"text": "Teton", "value": "Teton", "state": "Montana"}, {
    "text": "Toole",
    "value": "Toole",
    "state": "Montana"
  }, {"text": "Treasure", "value": "Treasure", "state": "Montana"}, {
    "text": "Valley",
    "value": "Valley",
    "state": "Montana"
  }, {"text": "Wheatland", "value": "Wheatland", "state": "Montana"}, {
    "text": "Wibaux",
    "value": "Wibaux",
    "state": "Montana"
  }, {"text": "Yellowstone", "value": "Yellowstone", "state": "Montana"}, {
    "text": "Adams",
    "value": "Adams",
    "state": "Nebraska"
  }, {"text": "Antelope", "value": "Antelope", "state": "Nebraska"}, {
    "text": "Arthur",
    "value": "Arthur",
    "state": "Nebraska"
  }, {"text": "Banner", "value": "Banner", "state": "Nebraska"}, {
    "text": "Blaine",
    "value": "Blaine",
    "state": "Nebraska"
  }, {"text": "Boone", "value": "Boone", "state": "Nebraska"}, {
    "text": "Box Butte",
    "value": "Box Butte",
    "state": "Nebraska"
  }, {"text": "Boyd", "value": "Boyd", "state": "Nebraska"}, {
    "text": "Brown",
    "value": "Brown",
    "state": "Nebraska"
  }, {"text": "Buffalo", "value": "Buffalo", "state": "Nebraska"}, {
    "text": "Burt",
    "value": "Burt",
    "state": "Nebraska"
  }, {"text": "Butler", "value": "Butler", "state": "Nebraska"}, {
    "text": "Cass",
    "value": "Cass",
    "state": "Nebraska"
  }, {"text": "Cedar", "value": "Cedar", "state": "Nebraska"}, {
    "text": "Chase",
    "value": "Chase",
    "state": "Nebraska"
  }, {"text": "Cherry", "value": "Cherry", "state": "Nebraska"}, {
    "text": "Cheyenne",
    "value": "Cheyenne",
    "state": "Nebraska"
  }, {"text": "Clay", "value": "Clay", "state": "Nebraska"}, {
    "text": "Colfax",
    "value": "Colfax",
    "state": "Nebraska"
  }, {"text": "Cuming", "value": "Cuming", "state": "Nebraska"}, {
    "text": "Custer",
    "value": "Custer",
    "state": "Nebraska"
  }, {"text": "Dakota", "value": "Dakota", "state": "Nebraska"}, {
    "text": "Dawes",
    "value": "Dawes",
    "state": "Nebraska"
  }, {"text": "Dawson", "value": "Dawson", "state": "Nebraska"}, {
    "text": "Deuel",
    "value": "Deuel",
    "state": "Nebraska"
  }, {"text": "Dixon", "value": "Dixon", "state": "Nebraska"}, {
    "text": "Dodge",
    "value": "Dodge",
    "state": "Nebraska"
  }, {"text": "Douglas", "value": "Douglas", "state": "Nebraska"}, {
    "text": "Dundy",
    "value": "Dundy",
    "state": "Nebraska"
  }, {"text": "Fillmore", "value": "Fillmore", "state": "Nebraska"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Nebraska"
  }, {"text": "Frontier", "value": "Frontier", "state": "Nebraska"}, {
    "text": "Furnas",
    "value": "Furnas",
    "state": "Nebraska"
  }, {"text": "Gage", "value": "Gage", "state": "Nebraska"}, {
    "text": "Garden",
    "value": "Garden",
    "state": "Nebraska"
  }, {"text": "Garfield", "value": "Garfield", "state": "Nebraska"}, {
    "text": "Gosper",
    "value": "Gosper",
    "state": "Nebraska"
  }, {"text": "Grant", "value": "Grant", "state": "Nebraska"}, {
    "text": "Greeley",
    "value": "Greeley",
    "state": "Nebraska"
  }, {"text": "Hall", "value": "Hall", "state": "Nebraska"}, {
    "text": "Hamilton",
    "value": "Hamilton",
    "state": "Nebraska"
  }, {"text": "Harlan", "value": "Harlan", "state": "Nebraska"}, {
    "text": "Hayes",
    "value": "Hayes",
    "state": "Nebraska"
  }, {"text": "Hitchcock", "value": "Hitchcock", "state": "Nebraska"}, {
    "text": "Holt",
    "value": "Holt",
    "state": "Nebraska"
  }, {"text": "Hooker", "value": "Hooker", "state": "Nebraska"}, {
    "text": "Howard",
    "value": "Howard",
    "state": "Nebraska"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Nebraska"}, {
    "text": "Johnson",
    "value": "Johnson",
    "state": "Nebraska"
  }, {"text": "Kearney", "value": "Kearney", "state": "Nebraska"}, {
    "text": "Keith",
    "value": "Keith",
    "state": "Nebraska"
  }, {"text": "Keya Paha", "value": "Keya Paha", "state": "Nebraska"}, {
    "text": "Kimball",
    "value": "Kimball",
    "state": "Nebraska"
  }, {"text": "Knox", "value": "Knox", "state": "Nebraska"}, {
    "text": "Lancaster",
    "value": "Lancaster",
    "state": "Nebraska"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "Nebraska"}, {
    "text": "Logan",
    "value": "Logan",
    "state": "Nebraska"
  }, {"text": "Loup", "value": "Loup", "state": "Nebraska"}, {
    "text": "Madison",
    "value": "Madison",
    "state": "Nebraska"
  }, {"text": "McPherson", "value": "McPherson", "state": "Nebraska"}, {
    "text": "Merrick",
    "value": "Merrick",
    "state": "Nebraska"
  }, {"text": "Morrill", "value": "Morrill", "state": "Nebraska"}, {
    "text": "Nance",
    "value": "Nance",
    "state": "Nebraska"
  }, {"text": "Nemaha", "value": "Nemaha", "state": "Nebraska"}, {
    "text": "Nuckolls",
    "value": "Nuckolls",
    "state": "Nebraska"
  }, {"text": "Otoe", "value": "Otoe", "state": "Nebraska"}, {
    "text": "Pawnee",
    "value": "Pawnee",
    "state": "Nebraska"
  }, {"text": "Perkins", "value": "Perkins", "state": "Nebraska"}, {
    "text": "Phelps",
    "value": "Phelps",
    "state": "Nebraska"
  }, {"text": "Pierce", "value": "Pierce", "state": "Nebraska"}, {
    "text": "Platte",
    "value": "Platte",
    "state": "Nebraska"
  }, {"text": "Polk", "value": "Polk", "state": "Nebraska"}, {
    "text": "Red Willow",
    "value": "Red Willow",
    "state": "Nebraska"
  }, {"text": "Richardson", "value": "Richardson", "state": "Nebraska"}, {
    "text": "Rock",
    "value": "Rock",
    "state": "Nebraska"
  }, {"text": "Saline", "value": "Saline", "state": "Nebraska"}, {
    "text": "Sarpy",
    "value": "Sarpy",
    "state": "Nebraska"
  }, {"text": "Saunders", "value": "Saunders", "state": "Nebraska"}, {
    "text": "Scotts Bluff",
    "value": "Scotts Bluff",
    "state": "Nebraska"
  }, {"text": "Seward", "value": "Seward", "state": "Nebraska"}, {
    "text": "Sheridan",
    "value": "Sheridan",
    "state": "Nebraska"
  }, {"text": "Sherman", "value": "Sherman", "state": "Nebraska"}, {
    "text": "Sioux",
    "value": "Sioux",
    "state": "Nebraska"
  }, {"text": "Stanton", "value": "Stanton", "state": "Nebraska"}, {
    "text": "Thayer",
    "value": "Thayer",
    "state": "Nebraska"
  }, {"text": "Thomas", "value": "Thomas", "state": "Nebraska"}, {
    "text": "Thurston",
    "value": "Thurston",
    "state": "Nebraska"
  }, {"text": "Valley", "value": "Valley", "state": "Nebraska"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Nebraska"
  }, {"text": "Wayne", "value": "Wayne", "state": "Nebraska"}, {
    "text": "Webster",
    "value": "Webster",
    "state": "Nebraska"
  }, {"text": "Wheeler", "value": "Wheeler", "state": "Nebraska"}, {
    "text": "York",
    "value": "York",
    "state": "Nebraska"
  }, {"text": "Churchill", "value": "Churchill", "state": "Nevada"}, {
    "text": "Clark",
    "value": "Clark",
    "state": "Nevada"
  }, {"text": "Douglas", "value": "Douglas", "state": "Nevada"}, {
    "text": "Elko",
    "value": "Elko",
    "state": "Nevada"
  }, {"text": "Esmeralda", "value": "Esmeralda", "state": "Nevada"}, {
    "text": "Eureka",
    "value": "Eureka",
    "state": "Nevada"
  }, {"text": "Humboldt", "value": "Humboldt", "state": "Nevada"}, {
    "text": "Lander",
    "value": "Lander",
    "state": "Nevada"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "Nevada"}, {
    "text": "Lyon",
    "value": "Lyon",
    "state": "Nevada"
  }, {"text": "Mineral", "value": "Mineral", "state": "Nevada"}, {
    "text": "Nye",
    "value": "Nye",
    "state": "Nevada"
  }, {"text": "Pershing", "value": "Pershing", "state": "Nevada"}, {
    "text": "Storey",
    "value": "Storey",
    "state": "Nevada"
  }, {"text": "Washoe", "value": "Washoe", "state": "Nevada"}, {
    "text": "White Pine",
    "value": "White Pine",
    "state": "Nevada"
  }, {"text": "Belknap", "value": "Belknap", "state": "New Hampshire"}, {
    "text": "Carroll",
    "value": "Carroll",
    "state": "New Hampshire"
  }, {"text": "Cheshire", "value": "Cheshire", "state": "New Hampshire"}, {
    "text": "Coos",
    "value": "Coos",
    "state": "New Hampshire"
  }, {"text": "Grafton", "value": "Grafton", "state": "New Hampshire"}, {
    "text": "Hillsboro",
    "value": "Hillsboro",
    "state": "New Hampshire"
  }, {"text": "Merrimack", "value": "Merrimack", "state": "New Hampshire"}, {
    "text": "Rockingham",
    "value": "Rockingham",
    "state": "New Hampshire"
  }, {"text": "Strafford", "value": "Strafford", "state": "New Hampshire"}, {
    "text": "Sullivan",
    "value": "Sullivan",
    "state": "New Hampshire"
  }, {"text": "Atlantic", "value": "Atlantic", "state": "New Jersey"}, {
    "text": "Bergen",
    "value": "Bergen",
    "state": "New Jersey"
  }, {"text": "Burlington", "value": "Burlington", "state": "New Jersey"}, {
    "text": "Camden",
    "value": "Camden",
    "state": "New Jersey"
  }, {"text": "Cape May", "value": "Cape May", "state": "New Jersey"}, {
    "text": "Cumberland",
    "value": "Cumberland",
    "state": "New Jersey"
  }, {"text": "Essex", "value": "Essex", "state": "New Jersey"}, {
    "text": "Gloucester",
    "value": "Gloucester",
    "state": "New Jersey"
  }, {"text": "Hudson", "value": "Hudson", "state": "New Jersey"}, {
    "text": "Hunterdon",
    "value": "Hunterdon",
    "state": "New Jersey"
  }, {"text": "Mercer", "value": "Mercer", "state": "New Jersey"}, {
    "text": "Middlesex",
    "value": "Middlesex",
    "state": "New Jersey"
  }, {"text": "Monmouth", "value": "Monmouth", "state": "New Jersey"}, {
    "text": "Morris",
    "value": "Morris",
    "state": "New Jersey"
  }, {"text": "Ocean", "value": "Ocean", "state": "New Jersey"}, {
    "text": "Passaic",
    "value": "Passaic",
    "state": "New Jersey"
  }, {"text": "Salem", "value": "Salem", "state": "New Jersey"}, {
    "text": "Somerset",
    "value": "Somerset",
    "state": "New Jersey"
  }, {"text": "Sussex", "value": "Sussex", "state": "New Jersey"}, {
    "text": "Union",
    "value": "Union",
    "state": "New Jersey"
  }, {"text": "Warren", "value": "Warren", "state": "New Jersey"}, {
    "text": "Bernalillo",
    "value": "Bernalillo",
    "state": "New Mexico"
  }, {"text": "Catron", "value": "Catron", "state": "New Mexico"}, {
    "text": "Chaves",
    "value": "Chaves",
    "state": "New Mexico"
  }, {"text": "Cibola", "value": "Cibola", "state": "New Mexico"}, {
    "text": "Colfax",
    "value": "Colfax",
    "state": "New Mexico"
  }, {"text": "Curry", "value": "Curry", "state": "New Mexico"}, {
    "text": "DeBaca",
    "value": "DeBaca",
    "state": "New Mexico"
  }, {"text": "Dona Ana", "value": "Dona Ana", "state": "New Mexico"}, {
    "text": "Eddy",
    "value": "Eddy",
    "state": "New Mexico"
  }, {"text": "Grant", "value": "Grant", "state": "New Mexico"}, {
    "text": "Guadalupe",
    "value": "Guadalupe",
    "state": "New Mexico"
  }, {"text": "Harding", "value": "Harding", "state": "New Mexico"}, {
    "text": "Hidalgo",
    "value": "Hidalgo",
    "state": "New Mexico"
  }, {"text": "Lea", "value": "Lea", "state": "New Mexico"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "New Mexico"
  }, {"text": "Los Alamos", "value": "Los Alamos", "state": "New Mexico"}, {
    "text": "Luna",
    "value": "Luna",
    "state": "New Mexico"
  }, {"text": "McKinley", "value": "McKinley", "state": "New Mexico"}, {
    "text": "Mora",
    "value": "Mora",
    "state": "New Mexico"
  }, {"text": "Otero", "value": "Otero", "state": "New Mexico"}, {
    "text": "Quay",
    "value": "Quay",
    "state": "New Mexico"
  }, {"text": "Rio Arriba", "value": "Rio Arriba", "state": "New Mexico"}, {
    "text": "Roosevelt",
    "value": "Roosevelt",
    "state": "New Mexico"
  }, {"text": "San Juan", "value": "San Juan", "state": "New Mexico"}, {
    "text": "San Miguel",
    "value": "San Miguel",
    "state": "New Mexico"
  }, {"text": "Sandoval", "value": "Sandoval", "state": "New Mexico"}, {
    "text": "Santa Fe",
    "value": "Santa Fe",
    "state": "New Mexico"
  }, {"text": "Sierra", "value": "Sierra", "state": "New Mexico"}, {
    "text": "Socorro",
    "value": "Socorro",
    "state": "New Mexico"
  }, {"text": "Taos", "value": "Taos", "state": "New Mexico"}, {
    "text": "Torrance",
    "value": "Torrance",
    "state": "New Mexico"
  }, {"text": "Union", "value": "Union", "state": "New Mexico"}, {
    "text": "Valencia",
    "value": "Valencia",
    "state": "New Mexico"
  }, {"text": "Albany", "value": "Albany", "state": "New York"}, {
    "text": "Allegany",
    "value": "Allegany",
    "state": "New York"
  }, {"text": "Bronx", "value": "Bronx", "state": "New York"}, {
    "text": "Broome",
    "value": "Broome",
    "state": "New York"
  }, {"text": "Cattaraugus", "value": "Cattaraugus", "state": "New York"}, {
    "text": "Cayuga",
    "value": "Cayuga",
    "state": "New York"
  }, {"text": "Chautauqua", "value": "Chautauqua", "state": "New York"}, {
    "text": "Chemung",
    "value": "Chemung",
    "state": "New York"
  }, {"text": "Chenango", "value": "Chenango", "state": "New York"}, {
    "text": "Clinton",
    "value": "Clinton",
    "state": "New York"
  }, {"text": "Columbia", "value": "Columbia", "state": "New York"}, {
    "text": "Cortland",
    "value": "Cortland",
    "state": "New York"
  }, {"text": "Delaware", "value": "Delaware", "state": "New York"}, {
    "text": "Dutchess",
    "value": "Dutchess",
    "state": "New York"
  }, {"text": "Erie", "value": "Erie", "state": "New York"}, {
    "text": "Essex",
    "value": "Essex",
    "state": "New York"
  }, {"text": "Franklin", "value": "Franklin", "state": "New York"}, {
    "text": "Fulton",
    "value": "Fulton",
    "state": "New York"
  }, {"text": "Genesee", "value": "Genesee", "state": "New York"}, {
    "text": "Greene",
    "value": "Greene",
    "state": "New York"
  }, {"text": "Hamilton", "value": "Hamilton", "state": "New York"}, {
    "text": "Herkimer",
    "value": "Herkimer",
    "state": "New York"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "New York"}, {
    "text": "Kings",
    "value": "Kings",
    "state": "New York"
  }, {"text": "Lewis", "value": "Lewis", "state": "New York"}, {
    "text": "Livingston",
    "value": "Livingston",
    "state": "New York"
  }, {"text": "Madison", "value": "Madison", "state": "New York"}, {
    "text": "Monroe",
    "value": "Monroe",
    "state": "New York"
  }, {"text": "Montgomery", "value": "Montgomery", "state": "New York"}, {
    "text": "Nassau",
    "value": "Nassau",
    "state": "New York"
  }, {"text": "New York", "value": "New York", "state": "New York"}, {
    "text": "Niagara",
    "value": "Niagara",
    "state": "New York"
  }, {"text": "Oneida", "value": "Oneida", "state": "New York"}, {
    "text": "Onondaga",
    "value": "Onondaga",
    "state": "New York"
  }, {"text": "Ontario", "value": "Ontario", "state": "New York"}, {
    "text": "Orange",
    "value": "Orange",
    "state": "New York"
  }, {"text": "Orleans", "value": "Orleans", "state": "New York"}, {
    "text": "Oswego",
    "value": "Oswego",
    "state": "New York"
  }, {"text": "Otsego", "value": "Otsego", "state": "New York"}, {
    "text": "Putnam",
    "value": "Putnam",
    "state": "New York"
  }, {"text": "Queens", "value": "Queens", "state": "New York"}, {
    "text": "Rensselaer",
    "value": "Rensselaer",
    "state": "New York"
  }, {"text": "Richmond", "value": "Richmond", "state": "New York"}, {
    "text": "Rockland",
    "value": "Rockland",
    "state": "New York"
  }, {"text": "Saratoga", "value": "Saratoga", "state": "New York"}, {
    "text": "Schenectady",
    "value": "Schenectady",
    "state": "New York"
  }, {"text": "Schoharie", "value": "Schoharie", "state": "New York"}, {
    "text": "Schuyler",
    "value": "Schuyler",
    "state": "New York"
  }, {"text": "Seneca", "value": "Seneca", "state": "New York"}, {
    "text": "St. Lawrence",
    "value": "St. Lawrence",
    "state": "New York"
  }, {"text": "Steuben", "value": "Steuben", "state": "New York"}, {
    "text": "Suffolk",
    "value": "Suffolk",
    "state": "New York"
  }, {"text": "Sullivan", "value": "Sullivan", "state": "New York"}, {
    "text": "Tioga",
    "value": "Tioga",
    "state": "New York"
  }, {"text": "Tompkins", "value": "Tompkins", "state": "New York"}, {
    "text": "Ulster",
    "value": "Ulster",
    "state": "New York"
  }, {"text": "Warren", "value": "Warren", "state": "New York"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "New York"
  }, {"text": "Wayne", "value": "Wayne", "state": "New York"}, {
    "text": "Westchester",
    "value": "Westchester",
    "state": "New York"
  }, {"text": "Wyoming", "value": "Wyoming", "state": "New York"}, {
    "text": "Yates",
    "value": "Yates",
    "state": "New York"
  }, {"text": "Alamance", "value": "Alamance", "state": "North Carolina"}, {
    "text": "Alexander",
    "value": "Alexander",
    "state": "North Carolina"
  }, {"text": "Alleghany", "value": "Alleghany", "state": "North Carolina"}, {
    "text": "Anson",
    "value": "Anson",
    "state": "North Carolina"
  }, {"text": "Ashe", "value": "Ashe", "state": "North Carolina"}, {
    "text": "Avery",
    "value": "Avery",
    "state": "North Carolina"
  }, {"text": "Beaufort", "value": "Beaufort", "state": "North Carolina"}, {
    "text": "Bertie",
    "value": "Bertie",
    "state": "North Carolina"
  }, {"text": "Bladen", "value": "Bladen", "state": "North Carolina"}, {
    "text": "Brunswick",
    "value": "Brunswick",
    "state": "North Carolina"
  }, {"text": "Buncombe", "value": "Buncombe", "state": "North Carolina"}, {
    "text": "Burke",
    "value": "Burke",
    "state": "North Carolina"
  }, {"text": "Cabarrus", "value": "Cabarrus", "state": "North Carolina"}, {
    "text": "Caldwell",
    "value": "Caldwell",
    "state": "North Carolina"
  }, {"text": "Camden", "value": "Camden", "state": "North Carolina"}, {
    "text": "Carteret",
    "value": "Carteret",
    "state": "North Carolina"
  }, {"text": "Caswell", "value": "Caswell", "state": "North Carolina"}, {
    "text": "Catawba",
    "value": "Catawba",
    "state": "North Carolina"
  }, {"text": "Chatham", "value": "Chatham", "state": "North Carolina"}, {
    "text": "Cherokee",
    "value": "Cherokee",
    "state": "North Carolina"
  }, {"text": "Chowan", "value": "Chowan", "state": "North Carolina"}, {
    "text": "Clay",
    "value": "Clay",
    "state": "North Carolina"
  }, {"text": "Cleveland", "value": "Cleveland", "state": "North Carolina"}, {
    "text": "Columbus",
    "value": "Columbus",
    "state": "North Carolina"
  }, {"text": "Craven", "value": "Craven", "state": "North Carolina"}, {
    "text": "Cumberland",
    "value": "Cumberland",
    "state": "North Carolina"
  }, {"text": "Currituck", "value": "Currituck", "state": "North Carolina"}, {
    "text": "Dare",
    "value": "Dare",
    "state": "North Carolina"
  }, {"text": "Davidson", "value": "Davidson", "state": "North Carolina"}, {
    "text": "Davie",
    "value": "Davie",
    "state": "North Carolina"
  }, {"text": "Duplin", "value": "Duplin", "state": "North Carolina"}, {
    "text": "Durham",
    "value": "Durham",
    "state": "North Carolina"
  }, {"text": "Edgecombe", "value": "Edgecombe", "state": "North Carolina"}, {
    "text": "Forsyth",
    "value": "Forsyth",
    "state": "North Carolina"
  }, {"text": "Franklin", "value": "Franklin", "state": "North Carolina"}, {
    "text": "Gaston",
    "value": "Gaston",
    "state": "North Carolina"
  }, {"text": "Gates", "value": "Gates", "state": "North Carolina"}, {
    "text": "Graham",
    "value": "Graham",
    "state": "North Carolina"
  }, {"text": "Granville", "value": "Granville", "state": "North Carolina"}, {
    "text": "Greene",
    "value": "Greene",
    "state": "North Carolina"
  }, {"text": "Guilford", "value": "Guilford", "state": "North Carolina"}, {
    "text": "Halifax",
    "value": "Halifax",
    "state": "North Carolina"
  }, {"text": "Harnett", "value": "Harnett", "state": "North Carolina"}, {
    "text": "Haywood",
    "value": "Haywood",
    "state": "North Carolina"
  }, {"text": "Henderson", "value": "Henderson", "state": "North Carolina"}, {
    "text": "Hertford",
    "value": "Hertford",
    "state": "North Carolina"
  }, {"text": "Hoke", "value": "Hoke", "state": "North Carolina"}, {
    "text": "Hyde",
    "value": "Hyde",
    "state": "North Carolina"
  }, {"text": "Iredell", "value": "Iredell", "state": "North Carolina"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "North Carolina"
  }, {"text": "Johnston", "value": "Johnston", "state": "North Carolina"}, {
    "text": "Jones",
    "value": "Jones",
    "state": "North Carolina"
  }, {"text": "Lee", "value": "Lee", "state": "North Carolina"}, {
    "text": "Lenoir",
    "value": "Lenoir",
    "state": "North Carolina"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "North Carolina"}, {
    "text": "Macon",
    "value": "Macon",
    "state": "North Carolina"
  }, {"text": "Madison", "value": "Madison", "state": "North Carolina"}, {
    "text": "Martin",
    "value": "Martin",
    "state": "North Carolina"
  }, {"text": "McDowell", "value": "McDowell", "state": "North Carolina"}, {
    "text": "Mecklenburg",
    "value": "Mecklenburg",
    "state": "North Carolina"
  }, {"text": "Mitchell", "value": "Mitchell", "state": "North Carolina"}, {
    "text": "Montgomery",
    "value": "Montgomery",
    "state": "North Carolina"
  }, {"text": "Moore", "value": "Moore", "state": "North Carolina"}, {
    "text": "Nash",
    "value": "Nash",
    "state": "North Carolina"
  }, {"text": "New Hanover", "value": "New Hanover", "state": "North Carolina"}, {
    "text": "Northampton",
    "value": "Northampton",
    "state": "North Carolina"
  }, {"text": "Onslow", "value": "Onslow", "state": "North Carolina"}, {
    "text": "Orange",
    "value": "Orange",
    "state": "North Carolina"
  }, {"text": "Pamlico", "value": "Pamlico", "state": "North Carolina"}, {
    "text": "Pasquotank",
    "value": "Pasquotank",
    "state": "North Carolina"
  }, {"text": "Pender", "value": "Pender", "state": "North Carolina"}, {
    "text": "Perquimans",
    "value": "Perquimans",
    "state": "North Carolina"
  }, {"text": "Person", "value": "Person", "state": "North Carolina"}, {
    "text": "Pitt",
    "value": "Pitt",
    "state": "North Carolina"
  }, {"text": "Polk", "value": "Polk", "state": "North Carolina"}, {
    "text": "Randolph",
    "value": "Randolph",
    "state": "North Carolina"
  }, {"text": "Richmond", "value": "Richmond", "state": "North Carolina"}, {
    "text": "Robeson",
    "value": "Robeson",
    "state": "North Carolina"
  }, {"text": "Rockingham", "value": "Rockingham", "state": "North Carolina"}, {
    "text": "Rowan",
    "value": "Rowan",
    "state": "North Carolina"
  }, {"text": "Rutherford", "value": "Rutherford", "state": "North Carolina"}, {
    "text": "Sampson",
    "value": "Sampson",
    "state": "North Carolina"
  }, {"text": "Scotland", "value": "Scotland", "state": "North Carolina"}, {
    "text": "Stanly",
    "value": "Stanly",
    "state": "North Carolina"
  }, {"text": "Stokes", "value": "Stokes", "state": "North Carolina"}, {
    "text": "Surry",
    "value": "Surry",
    "state": "North Carolina"
  }, {"text": "Swain", "value": "Swain", "state": "North Carolina"}, {
    "text": "Transylvania",
    "value": "Transylvania",
    "state": "North Carolina"
  }, {"text": "Tyrrell", "value": "Tyrrell", "state": "North Carolina"}, {
    "text": "Union",
    "value": "Union",
    "state": "North Carolina"
  }, {"text": "Vance", "value": "Vance", "state": "North Carolina"}, {
    "text": "Wake",
    "value": "Wake",
    "state": "North Carolina"
  }, {"text": "Warren", "value": "Warren", "state": "North Carolina"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "North Carolina"
  }, {"text": "Watauga", "value": "Watauga", "state": "North Carolina"}, {
    "text": "Wayne",
    "value": "Wayne",
    "state": "North Carolina"
  }, {"text": "Wilkes", "value": "Wilkes", "state": "North Carolina"}, {
    "text": "Wilson",
    "value": "Wilson",
    "state": "North Carolina"
  }, {"text": "Yadkin", "value": "Yadkin", "state": "North Carolina"}, {
    "text": "Yancey",
    "value": "Yancey",
    "state": "North Carolina"
  }, {"text": "Adams", "value": "Adams", "state": "North Dakota"}, {
    "text": "Barnes",
    "value": "Barnes",
    "state": "North Dakota"
  }, {"text": "Benson", "value": "Benson", "state": "North Dakota"}, {
    "text": "Billings",
    "value": "Billings",
    "state": "North Dakota"
  }, {"text": "Bottineau", "value": "Bottineau", "state": "North Dakota"}, {
    "text": "Bowman",
    "value": "Bowman",
    "state": "North Dakota"
  }, {"text": "Burke", "value": "Burke", "state": "North Dakota"}, {
    "text": "Burleigh",
    "value": "Burleigh",
    "state": "North Dakota"
  }, {"text": "Cass", "value": "Cass", "state": "North Dakota"}, {
    "text": "Cavalier",
    "value": "Cavalier",
    "state": "North Dakota"
  }, {"text": "Dickey", "value": "Dickey", "state": "North Dakota"}, {
    "text": "Divide",
    "value": "Divide",
    "state": "North Dakota"
  }, {"text": "Dunn", "value": "Dunn", "state": "North Dakota"}, {
    "text": "Eddy",
    "value": "Eddy",
    "state": "North Dakota"
  }, {"text": "Emmons", "value": "Emmons", "state": "North Dakota"}, {
    "text": "Foster",
    "value": "Foster",
    "state": "North Dakota"
  }, {"text": "Golden Valley", "value": "Golden Valley", "state": "North Dakota"}, {
    "text": "Grand Forks",
    "value": "Grand Forks",
    "state": "North Dakota"
  }, {"text": "Grant", "value": "Grant", "state": "North Dakota"}, {
    "text": "Griggs",
    "value": "Griggs",
    "state": "North Dakota"
  }, {"text": "Hettinger", "value": "Hettinger", "state": "North Dakota"}, {
    "text": "Kidder",
    "value": "Kidder",
    "state": "North Dakota"
  }, {"text": "LaMoure", "value": "LaMoure", "state": "North Dakota"}, {
    "text": "Logan",
    "value": "Logan",
    "state": "North Dakota"
  }, {"text": "McHenry", "value": "McHenry", "state": "North Dakota"}, {
    "text": "McIntosh",
    "value": "McIntosh",
    "state": "North Dakota"
  }, {"text": "McKenzie", "value": "McKenzie", "state": "North Dakota"}, {
    "text": "McLean",
    "value": "McLean",
    "state": "North Dakota"
  }, {"text": "Mercer", "value": "Mercer", "state": "North Dakota"}, {
    "text": "Morton",
    "value": "Morton",
    "state": "North Dakota"
  }, {"text": "Mountrail", "value": "Mountrail", "state": "North Dakota"}, {
    "text": "Nelson",
    "value": "Nelson",
    "state": "North Dakota"
  }, {"text": "Oliver", "value": "Oliver", "state": "North Dakota"}, {
    "text": "Pembina",
    "value": "Pembina",
    "state": "North Dakota"
  }, {"text": "Pierce", "value": "Pierce", "state": "North Dakota"}, {
    "text": "Ramsey",
    "value": "Ramsey",
    "state": "North Dakota"
  }, {"text": "Ransom", "value": "Ransom", "state": "North Dakota"}, {
    "text": "Renville",
    "value": "Renville",
    "state": "North Dakota"
  }, {"text": "Richland", "value": "Richland", "state": "North Dakota"}, {
    "text": "Rolette",
    "value": "Rolette",
    "state": "North Dakota"
  }, {"text": "Sargent", "value": "Sargent", "state": "North Dakota"}, {
    "text": "Sheridan",
    "value": "Sheridan",
    "state": "North Dakota"
  }, {"text": "Sioux", "value": "Sioux", "state": "North Dakota"}, {
    "text": "Slope",
    "value": "Slope",
    "state": "North Dakota"
  }, {"text": "Stark", "value": "Stark", "state": "North Dakota"}, {
    "text": "Steele",
    "value": "Steele",
    "state": "North Dakota"
  }, {"text": "Stutsman", "value": "Stutsman", "state": "North Dakota"}, {
    "text": "Towner",
    "value": "Towner",
    "state": "North Dakota"
  }, {"text": "Traill", "value": "Traill", "state": "North Dakota"}, {
    "text": "Walsh",
    "value": "Walsh",
    "state": "North Dakota"
  }, {"text": "Ward", "value": "Ward", "state": "North Dakota"}, {
    "text": "Wells",
    "value": "Wells",
    "state": "North Dakota"
  }, {"text": "Williams", "value": "Williams", "state": "North Dakota"}, {
    "text": "Adams",
    "value": "Adams",
    "state": "Ohio"
  }, {"text": "Allen", "value": "Allen", "state": "Ohio"}, {
    "text": "Ashland",
    "value": "Ashland",
    "state": "Ohio"
  }, {"text": "Ashtabula", "value": "Ashtabula", "state": "Ohio"}, {
    "text": "Athens",
    "value": "Athens",
    "state": "Ohio"
  }, {"text": "Auglaize", "value": "Auglaize", "state": "Ohio"}, {
    "text": "Belmont",
    "value": "Belmont",
    "state": "Ohio"
  }, {"text": "Brown", "value": "Brown", "state": "Ohio"}, {
    "text": "Butler",
    "value": "Butler",
    "state": "Ohio"
  }, {"text": "Carroll", "value": "Carroll", "state": "Ohio"}, {
    "text": "Champaign",
    "value": "Champaign",
    "state": "Ohio"
  }, {"text": "Clark", "value": "Clark", "state": "Ohio"}, {
    "text": "Clermont",
    "value": "Clermont",
    "state": "Ohio"
  }, {"text": "Clinton", "value": "Clinton", "state": "Ohio"}, {
    "text": "Columbiana",
    "value": "Columbiana",
    "state": "Ohio"
  }, {"text": "Coshocton", "value": "Coshocton", "state": "Ohio"}, {
    "text": "Crawford",
    "value": "Crawford",
    "state": "Ohio"
  }, {"text": "Cuyahoga", "value": "Cuyahoga", "state": "Ohio"}, {
    "text": "Darke",
    "value": "Darke",
    "state": "Ohio"
  }, {"text": "Defiance", "value": "Defiance", "state": "Ohio"}, {
    "text": "Delaware",
    "value": "Delaware",
    "state": "Ohio"
  }, {"text": "Erie", "value": "Erie", "state": "Ohio"}, {
    "text": "Fairfield",
    "value": "Fairfield",
    "state": "Ohio"
  }, {"text": "Fayette", "value": "Fayette", "state": "Ohio"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Ohio"
  }, {"text": "Fulton", "value": "Fulton", "state": "Ohio"}, {
    "text": "Gallia",
    "value": "Gallia",
    "state": "Ohio"
  }, {"text": "Geauga", "value": "Geauga", "state": "Ohio"}, {
    "text": "Greene",
    "value": "Greene",
    "state": "Ohio"
  }, {"text": "Guernsey", "value": "Guernsey", "state": "Ohio"}, {
    "text": "Hamilton",
    "value": "Hamilton",
    "state": "Ohio"
  }, {"text": "Hancock", "value": "Hancock", "state": "Ohio"}, {
    "text": "Hardin",
    "value": "Hardin",
    "state": "Ohio"
  }, {"text": "Harrison", "value": "Harrison", "state": "Ohio"}, {
    "text": "Henry",
    "value": "Henry",
    "state": "Ohio"
  }, {"text": "Highland", "value": "Highland", "state": "Ohio"}, {
    "text": "Hocking",
    "value": "Hocking",
    "state": "Ohio"
  }, {"text": "Holmes", "value": "Holmes", "state": "Ohio"}, {
    "text": "Huron",
    "value": "Huron",
    "state": "Ohio"
  }, {"text": "Jackson", "value": "Jackson", "state": "Ohio"}, {
    "text": "Jefferson",
    "value": "Jefferson",
    "state": "Ohio"
  }, {"text": "Knox", "value": "Knox", "state": "Ohio"}, {
    "text": "Lake",
    "value": "Lake",
    "state": "Ohio"
  }, {"text": "Lawrence", "value": "Lawrence", "state": "Ohio"}, {
    "text": "Licking",
    "value": "Licking",
    "state": "Ohio"
  }, {"text": "Logan", "value": "Logan", "state": "Ohio"}, {
    "text": "Lorain",
    "value": "Lorain",
    "state": "Ohio"
  }, {"text": "Lucas", "value": "Lucas", "state": "Ohio"}, {
    "text": "Madison",
    "value": "Madison",
    "state": "Ohio"
  }, {"text": "Mahoning", "value": "Mahoning", "state": "Ohio"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "Ohio"
  }, {"text": "Medina", "value": "Medina", "state": "Ohio"}, {
    "text": "Meigs",
    "value": "Meigs",
    "state": "Ohio"
  }, {"text": "Mercer", "value": "Mercer", "state": "Ohio"}, {
    "text": "Miami",
    "value": "Miami",
    "state": "Ohio"
  }, {"text": "Monroe", "value": "Monroe", "state": "Ohio"}, {
    "text": "Montgomery",
    "value": "Montgomery",
    "state": "Ohio"
  }, {"text": "Morgan", "value": "Morgan", "state": "Ohio"}, {
    "text": "Morrow",
    "value": "Morrow",
    "state": "Ohio"
  }, {"text": "Muskingum", "value": "Muskingum", "state": "Ohio"}, {
    "text": "Noble",
    "value": "Noble",
    "state": "Ohio"
  }, {"text": "Ottawa", "value": "Ottawa", "state": "Ohio"}, {
    "text": "Paulding",
    "value": "Paulding",
    "state": "Ohio"
  }, {"text": "Perry", "value": "Perry", "state": "Ohio"}, {
    "text": "Pickaway",
    "value": "Pickaway",
    "state": "Ohio"
  }, {"text": "Pike", "value": "Pike", "state": "Ohio"}, {
    "text": "Portage",
    "value": "Portage",
    "state": "Ohio"
  }, {"text": "Preble", "value": "Preble", "state": "Ohio"}, {
    "text": "Putnam",
    "value": "Putnam",
    "state": "Ohio"
  }, {"text": "Richland", "value": "Richland", "state": "Ohio"}, {
    "text": "Ross",
    "value": "Ross",
    "state": "Ohio"
  }, {"text": "Sandusky", "value": "Sandusky", "state": "Ohio"}, {
    "text": "Scioto",
    "value": "Scioto",
    "state": "Ohio"
  }, {"text": "Seneca", "value": "Seneca", "state": "Ohio"}, {
    "text": "Shelby",
    "value": "Shelby",
    "state": "Ohio"
  }, {"text": "Stark", "value": "Stark", "state": "Ohio"}, {
    "text": "Summit",
    "value": "Summit",
    "state": "Ohio"
  }, {"text": "Trumbull", "value": "Trumbull", "state": "Ohio"}, {
    "text": "Tuscarawas",
    "value": "Tuscarawas",
    "state": "Ohio"
  }, {"text": "Union", "value": "Union", "state": "Ohio"}, {
    "text": "Van Wert",
    "value": "Van Wert",
    "state": "Ohio"
  }, {"text": "Vinton", "value": "Vinton", "state": "Ohio"}, {
    "text": "Warren",
    "value": "Warren",
    "state": "Ohio"
  }, {"text": "Washington", "value": "Washington", "state": "Ohio"}, {
    "text": "Wayne",
    "value": "Wayne",
    "state": "Ohio"
  }, {"text": "Williams", "value": "Williams", "state": "Ohio"}, {
    "text": "Wood",
    "value": "Wood",
    "state": "Ohio"
  }, {"text": "Wyandot", "value": "Wyandot", "state": "Ohio"}, {
    "text": "Adair",
    "value": "Adair",
    "state": "Oklahoma"
  }, {"text": "Alfalfa", "value": "Alfalfa", "state": "Oklahoma"}, {
    "text": "Atoka",
    "value": "Atoka",
    "state": "Oklahoma"
  }, {"text": "Beaver", "value": "Beaver", "state": "Oklahoma"}, {
    "text": "Beckham",
    "value": "Beckham",
    "state": "Oklahoma"
  }, {"text": "Blaine", "value": "Blaine", "state": "Oklahoma"}, {
    "text": "Bryan",
    "value": "Bryan",
    "state": "Oklahoma"
  }, {"text": "Caddo", "value": "Caddo", "state": "Oklahoma"}, {
    "text": "Canadian",
    "value": "Canadian",
    "state": "Oklahoma"
  }, {"text": "Carter", "value": "Carter", "state": "Oklahoma"}, {
    "text": "Cherokee",
    "value": "Cherokee",
    "state": "Oklahoma"
  }, {"text": "Choctaw", "value": "Choctaw", "state": "Oklahoma"}, {
    "text": "Cimarron",
    "value": "Cimarron",
    "state": "Oklahoma"
  }, {"text": "Cleveland", "value": "Cleveland", "state": "Oklahoma"}, {
    "text": "Coal",
    "value": "Coal",
    "state": "Oklahoma"
  }, {"text": "Comanche", "value": "Comanche", "state": "Oklahoma"}, {
    "text": "Cotton",
    "value": "Cotton",
    "state": "Oklahoma"
  }, {"text": "Craig", "value": "Craig", "state": "Oklahoma"}, {
    "text": "Creek",
    "value": "Creek",
    "state": "Oklahoma"
  }, {"text": "Custer", "value": "Custer", "state": "Oklahoma"}, {
    "text": "Delaware",
    "value": "Delaware",
    "state": "Oklahoma"
  }, {"text": "Dewey", "value": "Dewey", "state": "Oklahoma"}, {
    "text": "Ellis",
    "value": "Ellis",
    "state": "Oklahoma"
  }, {"text": "Garfield", "value": "Garfield", "state": "Oklahoma"}, {
    "text": "Garvin",
    "value": "Garvin",
    "state": "Oklahoma"
  }, {"text": "Grady", "value": "Grady", "state": "Oklahoma"}, {
    "text": "Grant",
    "value": "Grant",
    "state": "Oklahoma"
  }, {"text": "Greer", "value": "Greer", "state": "Oklahoma"}, {
    "text": "Harmon",
    "value": "Harmon",
    "state": "Oklahoma"
  }, {"text": "Harper", "value": "Harper", "state": "Oklahoma"}, {
    "text": "Haskell",
    "value": "Haskell",
    "state": "Oklahoma"
  }, {"text": "Hughes", "value": "Hughes", "state": "Oklahoma"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Oklahoma"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Oklahoma"}, {
    "text": "Johnston",
    "value": "Johnston",
    "state": "Oklahoma"
  }, {"text": "Kay", "value": "Kay", "state": "Oklahoma"}, {
    "text": "Kingfisher",
    "value": "Kingfisher",
    "state": "Oklahoma"
  }, {"text": "Kiowa", "value": "Kiowa", "state": "Oklahoma"}, {
    "text": "Latimer",
    "value": "Latimer",
    "state": "Oklahoma"
  }, {"text": "Le Flore", "value": "Le Flore", "state": "Oklahoma"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "Oklahoma"
  }, {"text": "Logan", "value": "Logan", "state": "Oklahoma"}, {
    "text": "Love",
    "value": "Love",
    "state": "Oklahoma"
  }, {"text": "Major", "value": "Major", "state": "Oklahoma"}, {
    "text": "Marshall",
    "value": "Marshall",
    "state": "Oklahoma"
  }, {"text": "Mayes", "value": "Mayes", "state": "Oklahoma"}, {
    "text": "McClain",
    "value": "McClain",
    "state": "Oklahoma"
  }, {"text": "McCurtain", "value": "McCurtain", "state": "Oklahoma"}, {
    "text": "McIntosh",
    "value": "McIntosh",
    "state": "Oklahoma"
  }, {"text": "Murray", "value": "Murray", "state": "Oklahoma"}, {
    "text": "Muskogee",
    "value": "Muskogee",
    "state": "Oklahoma"
  }, {"text": "Noble", "value": "Noble", "state": "Oklahoma"}, {
    "text": "Nowata",
    "value": "Nowata",
    "state": "Oklahoma"
  }, {"text": "Okfuskee", "value": "Okfuskee", "state": "Oklahoma"}, {
    "text": "Oklahoma",
    "value": "Oklahoma",
    "state": "Oklahoma"
  }, {"text": "Okmulgee", "value": "Okmulgee", "state": "Oklahoma"}, {
    "text": "Osage",
    "value": "Osage",
    "state": "Oklahoma"
  }, {"text": "Ottawa", "value": "Ottawa", "state": "Oklahoma"}, {
    "text": "Pawnee",
    "value": "Pawnee",
    "state": "Oklahoma"
  }, {"text": "Payne", "value": "Payne", "state": "Oklahoma"}, {
    "text": "Pittsburg",
    "value": "Pittsburg",
    "state": "Oklahoma"
  }, {"text": "Pontotoc", "value": "Pontotoc", "state": "Oklahoma"}, {
    "text": "Pottawatomie",
    "value": "Pottawatomie",
    "state": "Oklahoma"
  }, {"text": "Pushmataha", "value": "Pushmataha", "state": "Oklahoma"}, {
    "text": "Roger Mills",
    "value": "Roger Mills",
    "state": "Oklahoma"
  }, {"text": "Rogers", "value": "Rogers", "state": "Oklahoma"}, {
    "text": "Seminole",
    "value": "Seminole",
    "state": "Oklahoma"
  }, {"text": "Sequoyah", "value": "Sequoyah", "state": "Oklahoma"}, {
    "text": "Stephens",
    "value": "Stephens",
    "state": "Oklahoma"
  }, {"text": "Texas", "value": "Texas", "state": "Oklahoma"}, {
    "text": "Tillman",
    "value": "Tillman",
    "state": "Oklahoma"
  }, {"text": "Tulsa", "value": "Tulsa", "state": "Oklahoma"}, {
    "text": "Wagoner",
    "value": "Wagoner",
    "state": "Oklahoma"
  }, {"text": "Washington", "value": "Washington", "state": "Oklahoma"}, {
    "text": "Washita",
    "value": "Washita",
    "state": "Oklahoma"
  }, {"text": "Woods", "value": "Woods", "state": "Oklahoma"}, {
    "text": "Woodward",
    "value": "Woodward",
    "state": "Oklahoma"
  }, {"text": "Baker", "value": "Baker", "state": "Oregon"}, {
    "text": "Benton",
    "value": "Benton",
    "state": "Oregon"
  }, {"text": "Clackamas", "value": "Clackamas", "state": "Oregon"}, {
    "text": "Clatsop",
    "value": "Clatsop",
    "state": "Oregon"
  }, {"text": "Columbia", "value": "Columbia", "state": "Oregon"}, {
    "text": "Coos",
    "value": "Coos",
    "state": "Oregon"
  }, {"text": "Crook", "value": "Crook", "state": "Oregon"}, {
    "text": "Curry",
    "value": "Curry",
    "state": "Oregon"
  }, {"text": "Deschutes", "value": "Deschutes", "state": "Oregon"}, {
    "text": "Douglas",
    "value": "Douglas",
    "state": "Oregon"
  }, {"text": "Gilliam", "value": "Gilliam", "state": "Oregon"}, {
    "text": "Grant",
    "value": "Grant",
    "state": "Oregon"
  }, {"text": "Harney", "value": "Harney", "state": "Oregon"}, {
    "text": "Hood River",
    "value": "Hood River",
    "state": "Oregon"
  }, {"text": "Jackson", "value": "Jackson", "state": "Oregon"}, {
    "text": "Jefferson",
    "value": "Jefferson",
    "state": "Oregon"
  }, {"text": "Josephine", "value": "Josephine", "state": "Oregon"}, {
    "text": "Klamath",
    "value": "Klamath",
    "state": "Oregon"
  }, {"text": "Lake", "value": "Lake", "state": "Oregon"}, {
    "text": "Lane",
    "value": "Lane",
    "state": "Oregon"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "Oregon"}, {
    "text": "Linn",
    "value": "Linn",
    "state": "Oregon"
  }, {"text": "Malheur", "value": "Malheur", "state": "Oregon"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "Oregon"
  }, {"text": "Morrow", "value": "Morrow", "state": "Oregon"}, {
    "text": "Multnomah",
    "value": "Multnomah",
    "state": "Oregon"
  }, {"text": "Polk", "value": "Polk", "state": "Oregon"}, {
    "text": "Sherman",
    "value": "Sherman",
    "state": "Oregon"
  }, {"text": "Tillamook", "value": "Tillamook", "state": "Oregon"}, {
    "text": "Umatilla",
    "value": "Umatilla",
    "state": "Oregon"
  }, {"text": "Union", "value": "Union", "state": "Oregon"}, {
    "text": "Wallowa",
    "value": "Wallowa",
    "state": "Oregon"
  }, {"text": "Wasco", "value": "Wasco", "state": "Oregon"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Oregon"
  }, {"text": "Wheeler", "value": "Wheeler", "state": "Oregon"}, {
    "text": "Yamhill",
    "value": "Yamhill",
    "state": "Oregon"
  }, {"text": "Adams", "value": "Adams", "state": "Pennsylvania"}, {
    "text": "Allegheny",
    "value": "Allegheny",
    "state": "Pennsylvania"
  }, {"text": "Armstrong", "value": "Armstrong", "state": "Pennsylvania"}, {
    "text": "Beaver",
    "value": "Beaver",
    "state": "Pennsylvania"
  }, {"text": "Bedford", "value": "Bedford", "state": "Pennsylvania"}, {
    "text": "Berks",
    "value": "Berks",
    "state": "Pennsylvania"
  }, {"text": "Blair", "value": "Blair", "state": "Pennsylvania"}, {
    "text": "Bradford",
    "value": "Bradford",
    "state": "Pennsylvania"
  }, {"text": "Bucks", "value": "Bucks", "state": "Pennsylvania"}, {
    "text": "Butler",
    "value": "Butler",
    "state": "Pennsylvania"
  }, {"text": "Cambria", "value": "Cambria", "state": "Pennsylvania"}, {
    "text": "Cameron",
    "value": "Cameron",
    "state": "Pennsylvania"
  }, {"text": "Carbon", "value": "Carbon", "state": "Pennsylvania"}, {
    "text": "Centre",
    "value": "Centre",
    "state": "Pennsylvania"
  }, {"text": "Chester", "value": "Chester", "state": "Pennsylvania"}, {
    "text": "Clarion",
    "value": "Clarion",
    "state": "Pennsylvania"
  }, {"text": "Clearfield", "value": "Clearfield", "state": "Pennsylvania"}, {
    "text": "Clinton",
    "value": "Clinton",
    "state": "Pennsylvania"
  }, {"text": "Columbia", "value": "Columbia", "state": "Pennsylvania"}, {
    "text": "Crawford",
    "value": "Crawford",
    "state": "Pennsylvania"
  }, {"text": "Cumberland", "value": "Cumberland", "state": "Pennsylvania"}, {
    "text": "Dauphin",
    "value": "Dauphin",
    "state": "Pennsylvania"
  }, {"text": "Delaware", "value": "Delaware", "state": "Pennsylvania"}, {
    "text": "Elk",
    "value": "Elk",
    "state": "Pennsylvania"
  }, {"text": "Erie", "value": "Erie", "state": "Pennsylvania"}, {
    "text": "Fayette",
    "value": "Fayette",
    "state": "Pennsylvania"
  }, {"text": "Forest", "value": "Forest", "state": "Pennsylvania"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Pennsylvania"
  }, {"text": "Fulton", "value": "Fulton", "state": "Pennsylvania"}, {
    "text": "Greene",
    "value": "Greene",
    "state": "Pennsylvania"
  }, {"text": "Huntingdon", "value": "Huntingdon", "state": "Pennsylvania"}, {
    "text": "Indiana",
    "value": "Indiana",
    "state": "Pennsylvania"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Pennsylvania"}, {
    "text": "Juniata",
    "value": "Juniata",
    "state": "Pennsylvania"
  }, {"text": "Lackawanna", "value": "Lackawanna", "state": "Pennsylvania"}, {
    "text": "Lancaster",
    "value": "Lancaster",
    "state": "Pennsylvania"
  }, {"text": "Lawrence", "value": "Lawrence", "state": "Pennsylvania"}, {
    "text": "Lebanon",
    "value": "Lebanon",
    "state": "Pennsylvania"
  }, {"text": "Lehigh", "value": "Lehigh", "state": "Pennsylvania"}, {
    "text": "Luzerne",
    "value": "Luzerne",
    "state": "Pennsylvania"
  }, {"text": "Lycoming", "value": "Lycoming", "state": "Pennsylvania"}, {
    "text": "McKean",
    "value": "McKean",
    "state": "Pennsylvania"
  }, {"text": "Mercer", "value": "Mercer", "state": "Pennsylvania"}, {
    "text": "Mifflin",
    "value": "Mifflin",
    "state": "Pennsylvania"
  }, {"text": "Monroe", "value": "Monroe", "state": "Pennsylvania"}, {
    "text": "Montgomery",
    "value": "Montgomery",
    "state": "Pennsylvania"
  }, {"text": "Montour", "value": "Montour", "state": "Pennsylvania"}, {
    "text": "Northampton",
    "value": "Northampton",
    "state": "Pennsylvania"
  }, {"text": "Northumberland", "value": "Northumberland", "state": "Pennsylvania"}, {
    "text": "Perry",
    "value": "Perry",
    "state": "Pennsylvania"
  }, {"text": "Philadelphia", "value": "Philadelphia", "state": "Pennsylvania"}, {
    "text": "Pike",
    "value": "Pike",
    "state": "Pennsylvania"
  }, {"text": "Potter", "value": "Potter", "state": "Pennsylvania"}, {
    "text": "Schuylkill",
    "value": "Schuylkill",
    "state": "Pennsylvania"
  }, {"text": "Snyder", "value": "Snyder", "state": "Pennsylvania"}, {
    "text": "Somerset",
    "value": "Somerset",
    "state": "Pennsylvania"
  }, {"text": "Sullivan", "value": "Sullivan", "state": "Pennsylvania"}, {
    "text": "Susquehanna",
    "value": "Susquehanna",
    "state": "Pennsylvania"
  }, {"text": "Tioga", "value": "Tioga", "state": "Pennsylvania"}, {
    "text": "Union",
    "value": "Union",
    "state": "Pennsylvania"
  }, {"text": "Venango", "value": "Venango", "state": "Pennsylvania"}, {
    "text": "Warren",
    "value": "Warren",
    "state": "Pennsylvania"
  }, {"text": "Washington", "value": "Washington", "state": "Pennsylvania"}, {
    "text": "Wayne",
    "value": "Wayne",
    "state": "Pennsylvania"
  }, {"text": "Westmoreland", "value": "Westmoreland", "state": "Pennsylvania"}, {
    "text": "Wyoming",
    "value": "Wyoming",
    "state": "Pennsylvania"
  }, {"text": "York", "value": "York", "state": "Pennsylvania"}, {
    "text": "Bristol",
    "value": "Bristol",
    "state": "Rhode Island"
  }, {"text": "Kent", "value": "Kent", "state": "Rhode Island"}, {
    "text": "Newport",
    "value": "Newport",
    "state": "Rhode Island"
  }, {"text": "Providence", "value": "Providence", "state": "Rhode Island"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Rhode Island"
  }, {"text": "Abbeville", "value": "Abbeville", "state": "South Carolina"}, {
    "text": "Aiken",
    "value": "Aiken",
    "state": "South Carolina"
  }, {"text": "Allendale", "value": "Allendale", "state": "South Carolina"}, {
    "text": "Anderson",
    "value": "Anderson",
    "state": "South Carolina"
  }, {"text": "Bamberg", "value": "Bamberg", "state": "South Carolina"}, {
    "text": "Barnwell",
    "value": "Barnwell",
    "state": "South Carolina"
  }, {"text": "Beaufort", "value": "Beaufort", "state": "South Carolina"}, {
    "text": "Berkeley",
    "value": "Berkeley",
    "state": "South Carolina"
  }, {"text": "Calhoun", "value": "Calhoun", "state": "South Carolina"}, {
    "text": "Charleston",
    "value": "Charleston",
    "state": "South Carolina"
  }, {"text": "Cherokee", "value": "Cherokee", "state": "South Carolina"}, {
    "text": "Chester",
    "value": "Chester",
    "state": "South Carolina"
  }, {"text": "Chesterfield", "value": "Chesterfield", "state": "South Carolina"}, {
    "text": "Clarendon",
    "value": "Clarendon",
    "state": "South Carolina"
  }, {"text": "Colleton", "value": "Colleton", "state": "South Carolina"}, {
    "text": "Darlington",
    "value": "Darlington",
    "state": "South Carolina"
  }, {"text": "Dillon", "value": "Dillon", "state": "South Carolina"}, {
    "text": "Dorchester",
    "value": "Dorchester",
    "state": "South Carolina"
  }, {"text": "Edgefield", "value": "Edgefield", "state": "South Carolina"}, {
    "text": "Fairfield",
    "value": "Fairfield",
    "state": "South Carolina"
  }, {"text": "Florence", "value": "Florence", "state": "South Carolina"}, {
    "text": "Georgetown",
    "value": "Georgetown",
    "state": "South Carolina"
  }, {"text": "Greenville", "value": "Greenville", "state": "South Carolina"}, {
    "text": "Greenwood",
    "value": "Greenwood",
    "state": "South Carolina"
  }, {"text": "Hampton", "value": "Hampton", "state": "South Carolina"}, {
    "text": "Horry",
    "value": "Horry",
    "state": "South Carolina"
  }, {"text": "Jasper", "value": "Jasper", "state": "South Carolina"}, {
    "text": "Kershaw",
    "value": "Kershaw",
    "state": "South Carolina"
  }, {"text": "Lancaster", "value": "Lancaster", "state": "South Carolina"}, {
    "text": "Laurens",
    "value": "Laurens",
    "state": "South Carolina"
  }, {"text": "Lee", "value": "Lee", "state": "South Carolina"}, {
    "text": "Lexington",
    "value": "Lexington",
    "state": "South Carolina"
  }, {"text": "Marion", "value": "Marion", "state": "South Carolina"}, {
    "text": "Marlboro",
    "value": "Marlboro",
    "state": "South Carolina"
  }, {"text": "McCormick", "value": "McCormick", "state": "South Carolina"}, {
    "text": "Newberry",
    "value": "Newberry",
    "state": "South Carolina"
  }, {"text": "Oconee", "value": "Oconee", "state": "South Carolina"}, {
    "text": "Orangeburg",
    "value": "Orangeburg",
    "state": "South Carolina"
  }, {"text": "Pickens", "value": "Pickens", "state": "South Carolina"}, {
    "text": "Richland",
    "value": "Richland",
    "state": "South Carolina"
  }, {"text": "Saluda", "value": "Saluda", "state": "South Carolina"}, {
    "text": "Spartanburg",
    "value": "Spartanburg",
    "state": "South Carolina"
  }, {"text": "Sumter", "value": "Sumter", "state": "South Carolina"}, {
    "text": "Union",
    "value": "Union",
    "state": "South Carolina"
  }, {"text": "Williamsburg", "value": "Williamsburg", "state": "South Carolina"}, {
    "text": "York",
    "value": "York",
    "state": "South Carolina"
  }, {"text": "Aurora", "value": "Aurora", "state": "South Dakota"}, {
    "text": "Beadle",
    "value": "Beadle",
    "state": "South Dakota"
  }, {"text": "Bennett", "value": "Bennett", "state": "South Dakota"}, {
    "text": "Bon Homme",
    "value": "Bon Homme",
    "state": "South Dakota"
  }, {"text": "Brookings", "value": "Brookings", "state": "South Dakota"}, {
    "text": "Brown",
    "value": "Brown",
    "state": "South Dakota"
  }, {"text": "Brule", "value": "Brule", "state": "South Dakota"}, {
    "text": "Buffalo",
    "value": "Buffalo",
    "state": "South Dakota"
  }, {"text": "Butte", "value": "Butte", "state": "South Dakota"}, {
    "text": "Campbell",
    "value": "Campbell",
    "state": "South Dakota"
  }, {"text": "Charles Mix", "value": "Charles Mix", "state": "South Dakota"}, {
    "text": "Clark",
    "value": "Clark",
    "state": "South Dakota"
  }, {"text": "Clay", "value": "Clay", "state": "South Dakota"}, {
    "text": "Codington",
    "value": "Codington",
    "state": "South Dakota"
  }, {"text": "Corson", "value": "Corson", "state": "South Dakota"}, {
    "text": "Custer",
    "value": "Custer",
    "state": "South Dakota"
  }, {"text": "Davison", "value": "Davison", "state": "South Dakota"}, {
    "text": "Day",
    "value": "Day",
    "state": "South Dakota"
  }, {"text": "Deuel", "value": "Deuel", "state": "South Dakota"}, {
    "text": "Dewey",
    "value": "Dewey",
    "state": "South Dakota"
  }, {"text": "Douglas", "value": "Douglas", "state": "South Dakota"}, {
    "text": "Edmunds",
    "value": "Edmunds",
    "state": "South Dakota"
  }, {"text": "Fall River", "value": "Fall River", "state": "South Dakota"}, {
    "text": "Faulk",
    "value": "Faulk",
    "state": "South Dakota"
  }, {"text": "Grant", "value": "Grant", "state": "South Dakota"}, {
    "text": "Gregory",
    "value": "Gregory",
    "state": "South Dakota"
  }, {"text": "Haakon", "value": "Haakon", "state": "South Dakota"}, {
    "text": "Hamlin",
    "value": "Hamlin",
    "state": "South Dakota"
  }, {"text": "Hand", "value": "Hand", "state": "South Dakota"}, {
    "text": "Hanson",
    "value": "Hanson",
    "state": "South Dakota"
  }, {"text": "Harding", "value": "Harding", "state": "South Dakota"}, {
    "text": "Hughes",
    "value": "Hughes",
    "state": "South Dakota"
  }, {"text": "Hutchinson", "value": "Hutchinson", "state": "South Dakota"}, {
    "text": "Hyde",
    "value": "Hyde",
    "state": "South Dakota"
  }, {"text": "Jackson", "value": "Jackson", "state": "South Dakota"}, {
    "text": "Jerauld",
    "value": "Jerauld",
    "state": "South Dakota"
  }, {"text": "Jones", "value": "Jones", "state": "South Dakota"}, {
    "text": "Kingsbury",
    "value": "Kingsbury",
    "state": "South Dakota"
  }, {"text": "Lake", "value": "Lake", "state": "South Dakota"}, {
    "text": "Lawrence",
    "value": "Lawrence",
    "state": "South Dakota"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "South Dakota"}, {
    "text": "Lyman",
    "value": "Lyman",
    "state": "South Dakota"
  }, {"text": "Marshall", "value": "Marshall", "state": "South Dakota"}, {
    "text": "McCook",
    "value": "McCook",
    "state": "South Dakota"
  }, {"text": "McPherson", "value": "McPherson", "state": "South Dakota"}, {
    "text": "Meade",
    "value": "Meade",
    "state": "South Dakota"
  }, {"text": "Mellette", "value": "Mellette", "state": "South Dakota"}, {
    "text": "Miner",
    "value": "Miner",
    "state": "South Dakota"
  }, {"text": "Minnehaha", "value": "Minnehaha", "state": "South Dakota"}, {
    "text": "Moody",
    "value": "Moody",
    "state": "South Dakota"
  }, {"text": "Pennington", "value": "Pennington", "state": "South Dakota"}, {
    "text": "Perkins",
    "value": "Perkins",
    "state": "South Dakota"
  }, {"text": "Potter", "value": "Potter", "state": "South Dakota"}, {
    "text": "Roberts",
    "value": "Roberts",
    "state": "South Dakota"
  }, {"text": "Sanborn", "value": "Sanborn", "state": "South Dakota"}, {
    "text": "Shannon",
    "value": "Shannon",
    "state": "South Dakota"
  }, {"text": "Spink", "value": "Spink", "state": "South Dakota"}, {
    "text": "Stanley",
    "value": "Stanley",
    "state": "South Dakota"
  }, {"text": "Sully", "value": "Sully", "state": "South Dakota"}, {
    "text": "Todd",
    "value": "Todd",
    "state": "South Dakota"
  }, {"text": "Tripp", "value": "Tripp", "state": "South Dakota"}, {
    "text": "Turner",
    "value": "Turner",
    "state": "South Dakota"
  }, {"text": "Union", "value": "Union", "state": "South Dakota"}, {
    "text": "Walworth",
    "value": "Walworth",
    "state": "South Dakota"
  }, {"text": "Yankton", "value": "Yankton", "state": "South Dakota"}, {
    "text": "Ziebach",
    "value": "Ziebach",
    "state": "South Dakota"
  }, {"text": "Anderson", "value": "Anderson", "state": "Tennessee"}, {
    "text": "Bedford",
    "value": "Bedford",
    "state": "Tennessee"
  }, {"text": "Benton", "value": "Benton", "state": "Tennessee"}, {
    "text": "Bledsoe",
    "value": "Bledsoe",
    "state": "Tennessee"
  }, {"text": "Blount", "value": "Blount", "state": "Tennessee"}, {
    "text": "Bradley",
    "value": "Bradley",
    "state": "Tennessee"
  }, {"text": "Campbell", "value": "Campbell", "state": "Tennessee"}, {
    "text": "Cannon",
    "value": "Cannon",
    "state": "Tennessee"
  }, {"text": "Carroll", "value": "Carroll", "state": "Tennessee"}, {
    "text": "Carter",
    "value": "Carter",
    "state": "Tennessee"
  }, {"text": "Cheatham", "value": "Cheatham", "state": "Tennessee"}, {
    "text": "Chester",
    "value": "Chester",
    "state": "Tennessee"
  }, {"text": "Claiborne", "value": "Claiborne", "state": "Tennessee"}, {
    "text": "Clay",
    "value": "Clay",
    "state": "Tennessee"
  }, {"text": "Cocke", "value": "Cocke", "state": "Tennessee"}, {
    "text": "Coffee",
    "value": "Coffee",
    "state": "Tennessee"
  }, {"text": "Crockett", "value": "Crockett", "state": "Tennessee"}, {
    "text": "Cumberland",
    "value": "Cumberland",
    "state": "Tennessee"
  }, {"text": "Davidson", "value": "Davidson", "state": "Tennessee"}, {
    "text": "Decatur",
    "value": "Decatur",
    "state": "Tennessee"
  }, {"text": "DeKalb", "value": "DeKalb", "state": "Tennessee"}, {
    "text": "Dickson",
    "value": "Dickson",
    "state": "Tennessee"
  }, {"text": "Dyer", "value": "Dyer", "state": "Tennessee"}, {
    "text": "Fayette",
    "value": "Fayette",
    "state": "Tennessee"
  }, {"text": "Fentress", "value": "Fentress", "state": "Tennessee"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Tennessee"
  }, {"text": "Gibson", "value": "Gibson", "state": "Tennessee"}, {
    "text": "Giles",
    "value": "Giles",
    "state": "Tennessee"
  }, {"text": "Grainger", "value": "Grainger", "state": "Tennessee"}, {
    "text": "Greene",
    "value": "Greene",
    "state": "Tennessee"
  }, {"text": "Grundy", "value": "Grundy", "state": "Tennessee"}, {
    "text": "Hamblen",
    "value": "Hamblen",
    "state": "Tennessee"
  }, {"text": "Hamilton", "value": "Hamilton", "state": "Tennessee"}, {
    "text": "Hancock",
    "value": "Hancock",
    "state": "Tennessee"
  }, {"text": "Hardeman", "value": "Hardeman", "state": "Tennessee"}, {
    "text": "Hardin",
    "value": "Hardin",
    "state": "Tennessee"
  }, {"text": "Hawkins", "value": "Hawkins", "state": "Tennessee"}, {
    "text": "Haywood",
    "value": "Haywood",
    "state": "Tennessee"
  }, {"text": "Henderson", "value": "Henderson", "state": "Tennessee"}, {
    "text": "Henry",
    "value": "Henry",
    "state": "Tennessee"
  }, {"text": "Hickman", "value": "Hickman", "state": "Tennessee"}, {
    "text": "Houston",
    "value": "Houston",
    "state": "Tennessee"
  }, {"text": "Humphreys", "value": "Humphreys", "state": "Tennessee"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Tennessee"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Tennessee"}, {
    "text": "Johnson",
    "value": "Johnson",
    "state": "Tennessee"
  }, {"text": "Knox", "value": "Knox", "state": "Tennessee"}, {
    "text": "Lake",
    "value": "Lake",
    "state": "Tennessee"
  }, {"text": "Lauderdale", "value": "Lauderdale", "state": "Tennessee"}, {
    "text": "Lawrence",
    "value": "Lawrence",
    "state": "Tennessee"
  }, {"text": "Lewis", "value": "Lewis", "state": "Tennessee"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "Tennessee"
  }, {"text": "Loudon", "value": "Loudon", "state": "Tennessee"}, {
    "text": "Macon",
    "value": "Macon",
    "state": "Tennessee"
  }, {"text": "Madison", "value": "Madison", "state": "Tennessee"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "Tennessee"
  }, {"text": "Marshall", "value": "Marshall", "state": "Tennessee"}, {
    "text": "Maury",
    "value": "Maury",
    "state": "Tennessee"
  }, {"text": "McMinn", "value": "McMinn", "state": "Tennessee"}, {
    "text": "McNairy",
    "value": "McNairy",
    "state": "Tennessee"
  }, {"text": "Meigs", "value": "Meigs", "state": "Tennessee"}, {
    "text": "Monroe",
    "value": "Monroe",
    "state": "Tennessee"
  }, {"text": "Montgomery", "value": "Montgomery", "state": "Tennessee"}, {
    "text": "Moore",
    "value": "Moore",
    "state": "Tennessee"
  }, {"text": "Morgan", "value": "Morgan", "state": "Tennessee"}, {
    "text": "Obion",
    "value": "Obion",
    "state": "Tennessee"
  }, {"text": "Overton", "value": "Overton", "state": "Tennessee"}, {
    "text": "Perry",
    "value": "Perry",
    "state": "Tennessee"
  }, {"text": "Pickett", "value": "Pickett", "state": "Tennessee"}, {
    "text": "Polk",
    "value": "Polk",
    "state": "Tennessee"
  }, {"text": "Putnam", "value": "Putnam", "state": "Tennessee"}, {
    "text": "Rhea",
    "value": "Rhea",
    "state": "Tennessee"
  }, {"text": "Roane", "value": "Roane", "state": "Tennessee"}, {
    "text": "Robertson",
    "value": "Robertson",
    "state": "Tennessee"
  }, {"text": "Rutherford", "value": "Rutherford", "state": "Tennessee"}, {
    "text": "Scott",
    "value": "Scott",
    "state": "Tennessee"
  }, {"text": "Sequatchie", "value": "Sequatchie", "state": "Tennessee"}, {
    "text": "Sevier",
    "value": "Sevier",
    "state": "Tennessee"
  }, {"text": "Shelby", "value": "Shelby", "state": "Tennessee"}, {
    "text": "Smith",
    "value": "Smith",
    "state": "Tennessee"
  }, {"text": "Stewart", "value": "Stewart", "state": "Tennessee"}, {
    "text": "Sullivan",
    "value": "Sullivan",
    "state": "Tennessee"
  }, {"text": "Sumner", "value": "Sumner", "state": "Tennessee"}, {
    "text": "Tipton",
    "value": "Tipton",
    "state": "Tennessee"
  }, {"text": "Trousdale", "value": "Trousdale", "state": "Tennessee"}, {
    "text": "Unicoi",
    "value": "Unicoi",
    "state": "Tennessee"
  }, {"text": "Union", "value": "Union", "state": "Tennessee"}, {
    "text": "Van Buren",
    "value": "Van Buren",
    "state": "Tennessee"
  }, {"text": "Warren", "value": "Warren", "state": "Tennessee"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Tennessee"
  }, {"text": "Wayne", "value": "Wayne", "state": "Tennessee"}, {
    "text": "Weakley",
    "value": "Weakley",
    "state": "Tennessee"
  }, {"text": "White", "value": "White", "state": "Tennessee"}, {
    "text": "Williamson",
    "value": "Williamson",
    "state": "Tennessee"
  }, {"text": "Wilson", "value": "Wilson", "state": "Tennessee"}, {
    "text": "Anderson",
    "value": "Anderson",
    "state": "Texas"
  }, {"text": "Andrews", "value": "Andrews", "state": "Texas"}, {
    "text": "Angelina",
    "value": "Angelina",
    "state": "Texas"
  }, {"text": "Aransas", "value": "Aransas", "state": "Texas"}, {
    "text": "Archer",
    "value": "Archer",
    "state": "Texas"
  }, {"text": "Armstrong", "value": "Armstrong", "state": "Texas"}, {
    "text": "Atascosa",
    "value": "Atascosa",
    "state": "Texas"
  }, {"text": "Austin", "value": "Austin", "state": "Texas"}, {
    "text": "Bailey",
    "value": "Bailey",
    "state": "Texas"
  }, {"text": "Bandera", "value": "Bandera", "state": "Texas"}, {
    "text": "Bastrop",
    "value": "Bastrop",
    "state": "Texas"
  }, {"text": "Baylor", "value": "Baylor", "state": "Texas"}, {
    "text": "Bee",
    "value": "Bee",
    "state": "Texas"
  }, {"text": "Bell", "value": "Bell", "state": "Texas"}, {
    "text": "Bexar",
    "value": "Bexar",
    "state": "Texas"
  }, {"text": "Blanco", "value": "Blanco", "state": "Texas"}, {
    "text": "Borden",
    "value": "Borden",
    "state": "Texas"
  }, {"text": "Bosque", "value": "Bosque", "state": "Texas"}, {
    "text": "Bowie",
    "value": "Bowie",
    "state": "Texas"
  }, {"text": "Brazoria", "value": "Brazoria", "state": "Texas"}, {
    "text": "Brazos",
    "value": "Brazos",
    "state": "Texas"
  }, {"text": "Brewster", "value": "Brewster", "state": "Texas"}, {
    "text": "Briscoe",
    "value": "Briscoe",
    "state": "Texas"
  }, {"text": "Brooks", "value": "Brooks", "state": "Texas"}, {
    "text": "Brown",
    "value": "Brown",
    "state": "Texas"
  }, {"text": "Burleson", "value": "Burleson", "state": "Texas"}, {
    "text": "Burnet",
    "value": "Burnet",
    "state": "Texas"
  }, {"text": "Caldwell", "value": "Caldwell", "state": "Texas"}, {
    "text": "Calhoun",
    "value": "Calhoun",
    "state": "Texas"
  }, {"text": "Callahan", "value": "Callahan", "state": "Texas"}, {
    "text": "Cameron",
    "value": "Cameron",
    "state": "Texas"
  }, {"text": "Camp", "value": "Camp", "state": "Texas"}, {
    "text": "Carson",
    "value": "Carson",
    "state": "Texas"
  }, {"text": "Cass", "value": "Cass", "state": "Texas"}, {
    "text": "Castro",
    "value": "Castro",
    "state": "Texas"
  }, {"text": "Chambers", "value": "Chambers", "state": "Texas"}, {
    "text": "Cherokee",
    "value": "Cherokee",
    "state": "Texas"
  }, {"text": "Childress", "value": "Childress", "state": "Texas"}, {
    "text": "Clay",
    "value": "Clay",
    "state": "Texas"
  }, {"text": "Cochran", "value": "Cochran", "state": "Texas"}, {
    "text": "Coke",
    "value": "Coke",
    "state": "Texas"
  }, {"text": "Coleman", "value": "Coleman", "state": "Texas"}, {
    "text": "Collin",
    "value": "Collin",
    "state": "Texas"
  }, {"text": "Collingsworth", "value": "Collingsworth", "state": "Texas"}, {
    "text": "Colorado",
    "value": "Colorado",
    "state": "Texas"
  }, {"text": "Comal", "value": "Comal", "state": "Texas"}, {
    "text": "Comanche",
    "value": "Comanche",
    "state": "Texas"
  }, {"text": "Concho", "value": "Concho", "state": "Texas"}, {
    "text": "Cooke",
    "value": "Cooke",
    "state": "Texas"
  }, {"text": "Coryell", "value": "Coryell", "state": "Texas"}, {
    "text": "Cottle",
    "value": "Cottle",
    "state": "Texas"
  }, {"text": "Crane", "value": "Crane", "state": "Texas"}, {
    "text": "Crockett",
    "value": "Crockett",
    "state": "Texas"
  }, {"text": "Crosby", "value": "Crosby", "state": "Texas"}, {
    "text": "Culberson",
    "value": "Culberson",
    "state": "Texas"
  }, {"text": "Dallam", "value": "Dallam", "state": "Texas"}, {
    "text": "Dallas",
    "value": "Dallas",
    "state": "Texas"
  }, {"text": "Dawson", "value": "Dawson", "state": "Texas"}, {
    "text": "Deaf Smith",
    "value": "Deaf Smith",
    "state": "Texas"
  }, {"text": "Delta", "value": "Delta", "state": "Texas"}, {
    "text": "Denton",
    "value": "Denton",
    "state": "Texas"
  }, {"text": "DeWitt", "value": "DeWitt", "state": "Texas"}, {
    "text": "Dickens",
    "value": "Dickens",
    "state": "Texas"
  }, {"text": "Dimmit", "value": "Dimmit", "state": "Texas"}, {
    "text": "Donley",
    "value": "Donley",
    "state": "Texas"
  }, {"text": "Duval", "value": "Duval", "state": "Texas"}, {
    "text": "Eastland",
    "value": "Eastland",
    "state": "Texas"
  }, {"text": "Ector", "value": "Ector", "state": "Texas"}, {
    "text": "Edwards",
    "value": "Edwards",
    "state": "Texas"
  }, {"text": "El Paso", "value": "El Paso", "state": "Texas"}, {
    "text": "Ellis",
    "value": "Ellis",
    "state": "Texas"
  }, {"text": "Erath", "value": "Erath", "state": "Texas"}, {
    "text": "Falls",
    "value": "Falls",
    "state": "Texas"
  }, {"text": "Fannin", "value": "Fannin", "state": "Texas"}, {
    "text": "Fayette",
    "value": "Fayette",
    "state": "Texas"
  }, {"text": "Fisher", "value": "Fisher", "state": "Texas"}, {
    "text": "Floyd",
    "value": "Floyd",
    "state": "Texas"
  }, {"text": "Foard", "value": "Foard", "state": "Texas"}, {
    "text": "Fort Bend",
    "value": "Fort Bend",
    "state": "Texas"
  }, {"text": "Franklin", "value": "Franklin", "state": "Texas"}, {
    "text": "Freestone",
    "value": "Freestone",
    "state": "Texas"
  }, {"text": "Frio", "value": "Frio", "state": "Texas"}, {
    "text": "Gaines",
    "value": "Gaines",
    "state": "Texas"
  }, {"text": "Galveston", "value": "Galveston", "state": "Texas"}, {
    "text": "Garza",
    "value": "Garza",
    "state": "Texas"
  }, {"text": "Gillespie", "value": "Gillespie", "state": "Texas"}, {
    "text": "Glasscock",
    "value": "Glasscock",
    "state": "Texas"
  }, {"text": "Goliad", "value": "Goliad", "state": "Texas"}, {
    "text": "Gonzales",
    "value": "Gonzales",
    "state": "Texas"
  }, {"text": "Gray", "value": "Gray", "state": "Texas"}, {
    "text": "Grayson",
    "value": "Grayson",
    "state": "Texas"
  }, {"text": "Gregg", "value": "Gregg", "state": "Texas"}, {
    "text": "Grimes",
    "value": "Grimes",
    "state": "Texas"
  }, {"text": "Guadalupe", "value": "Guadalupe", "state": "Texas"}, {
    "text": "Hale",
    "value": "Hale",
    "state": "Texas"
  }, {"text": "Hall", "value": "Hall", "state": "Texas"}, {
    "text": "Hamilton",
    "value": "Hamilton",
    "state": "Texas"
  }, {"text": "Hansford", "value": "Hansford", "state": "Texas"}, {
    "text": "Hardeman",
    "value": "Hardeman",
    "state": "Texas"
  }, {"text": "Hardin", "value": "Hardin", "state": "Texas"}, {
    "text": "Harris",
    "value": "Harris",
    "state": "Texas"
  }, {"text": "Harrison", "value": "Harrison", "state": "Texas"}, {
    "text": "Hartley",
    "value": "Hartley",
    "state": "Texas"
  }, {"text": "Haskell", "value": "Haskell", "state": "Texas"}, {
    "text": "Hays",
    "value": "Hays",
    "state": "Texas"
  }, {"text": "Hemphill", "value": "Hemphill", "state": "Texas"}, {
    "text": "Henderson",
    "value": "Henderson",
    "state": "Texas"
  }, {"text": "Hidalgo", "value": "Hidalgo", "state": "Texas"}, {
    "text": "Hill",
    "value": "Hill",
    "state": "Texas"
  }, {"text": "Hockley", "value": "Hockley", "state": "Texas"}, {
    "text": "Hood",
    "value": "Hood",
    "state": "Texas"
  }, {"text": "Hopkins", "value": "Hopkins", "state": "Texas"}, {
    "text": "Houston",
    "value": "Houston",
    "state": "Texas"
  }, {"text": "Howard", "value": "Howard", "state": "Texas"}, {
    "text": "Hudspeth",
    "value": "Hudspeth",
    "state": "Texas"
  }, {"text": "Hunt", "value": "Hunt", "state": "Texas"}, {
    "text": "Hutchinson",
    "value": "Hutchinson",
    "state": "Texas"
  }, {"text": "Irion", "value": "Irion", "state": "Texas"}, {
    "text": "Jack",
    "value": "Jack",
    "state": "Texas"
  }, {"text": "Jackson", "value": "Jackson", "state": "Texas"}, {
    "text": "Jasper",
    "value": "Jasper",
    "state": "Texas"
  }, {"text": "Jeff Davis", "value": "Jeff Davis", "state": "Texas"}, {
    "text": "Jefferson",
    "value": "Jefferson",
    "state": "Texas"
  }, {"text": "Jim Hogg", "value": "Jim Hogg", "state": "Texas"}, {
    "text": "Jim Wells",
    "value": "Jim Wells",
    "state": "Texas"
  }, {"text": "Johnson", "value": "Johnson", "state": "Texas"}, {
    "text": "Jones",
    "value": "Jones",
    "state": "Texas"
  }, {"text": "Karnes", "value": "Karnes", "state": "Texas"}, {
    "text": "Kaufman",
    "value": "Kaufman",
    "state": "Texas"
  }, {"text": "Kendall", "value": "Kendall", "state": "Texas"}, {
    "text": "Kenedy",
    "value": "Kenedy",
    "state": "Texas"
  }, {"text": "Kent", "value": "Kent", "state": "Texas"}, {
    "text": "Kerr",
    "value": "Kerr",
    "state": "Texas"
  }, {"text": "Kimble", "value": "Kimble", "state": "Texas"}, {
    "text": "King",
    "value": "King",
    "state": "Texas"
  }, {"text": "Kinney", "value": "Kinney", "state": "Texas"}, {
    "text": "Kleberg",
    "value": "Kleberg",
    "state": "Texas"
  }, {"text": "Knox", "value": "Knox", "state": "Texas"}, {
    "text": "La Salle",
    "value": "La Salle",
    "state": "Texas"
  }, {"text": "Lamar", "value": "Lamar", "state": "Texas"}, {
    "text": "Lamb",
    "value": "Lamb",
    "state": "Texas"
  }, {"text": "Lampasas", "value": "Lampasas", "state": "Texas"}, {
    "text": "Lavaca",
    "value": "Lavaca",
    "state": "Texas"
  }, {"text": "Lee", "value": "Lee", "state": "Texas"}, {
    "text": "Leon",
    "value": "Leon",
    "state": "Texas"
  }, {"text": "Liberty", "value": "Liberty", "state": "Texas"}, {
    "text": "Limestone",
    "value": "Limestone",
    "state": "Texas"
  }, {"text": "Lipscomb", "value": "Lipscomb", "state": "Texas"}, {
    "text": "Live Oak",
    "value": "Live Oak",
    "state": "Texas"
  }, {"text": "Llano", "value": "Llano", "state": "Texas"}, {
    "text": "Loving",
    "value": "Loving",
    "state": "Texas"
  }, {"text": "Lubbock", "value": "Lubbock", "state": "Texas"}, {
    "text": "Lynn",
    "value": "Lynn",
    "state": "Texas"
  }, {"text": "Madison", "value": "Madison", "state": "Texas"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "Texas"
  }, {"text": "Martin", "value": "Martin", "state": "Texas"}, {
    "text": "Mason",
    "value": "Mason",
    "state": "Texas"
  }, {"text": "Matagorda", "value": "Matagorda", "state": "Texas"}, {
    "text": "Maverick",
    "value": "Maverick",
    "state": "Texas"
  }, {"text": "McCulloch", "value": "McCulloch", "state": "Texas"}, {
    "text": "McLennan",
    "value": "McLennan",
    "state": "Texas"
  }, {"text": "McMullen", "value": "McMullen", "state": "Texas"}, {
    "text": "Medina",
    "value": "Medina",
    "state": "Texas"
  }, {"text": "Menard", "value": "Menard", "state": "Texas"}, {
    "text": "Midland",
    "value": "Midland",
    "state": "Texas"
  }, {"text": "Milam", "value": "Milam", "state": "Texas"}, {
    "text": "Mills",
    "value": "Mills",
    "state": "Texas"
  }, {"text": "Mitchell", "value": "Mitchell", "state": "Texas"}, {
    "text": "Montague",
    "value": "Montague",
    "state": "Texas"
  }, {"text": "Montgomery", "value": "Montgomery", "state": "Texas"}, {
    "text": "Moore",
    "value": "Moore",
    "state": "Texas"
  }, {"text": "Morris", "value": "Morris", "state": "Texas"}, {
    "text": "Motley",
    "value": "Motley",
    "state": "Texas"
  }, {"text": "Nacogdoches", "value": "Nacogdoches", "state": "Texas"}, {
    "text": "Navarro",
    "value": "Navarro",
    "state": "Texas"
  }, {"text": "Newton", "value": "Newton", "state": "Texas"}, {
    "text": "Nolan",
    "value": "Nolan",
    "state": "Texas"
  }, {"text": "Nueces", "value": "Nueces", "state": "Texas"}, {
    "text": "Ochiltree",
    "value": "Ochiltree",
    "state": "Texas"
  }, {"text": "Oldham", "value": "Oldham", "state": "Texas"}, {
    "text": "Orange",
    "value": "Orange",
    "state": "Texas"
  }, {"text": "Palo Pinto", "value": "Palo Pinto", "state": "Texas"}, {
    "text": "Panola",
    "value": "Panola",
    "state": "Texas"
  }, {"text": "Parker", "value": "Parker", "state": "Texas"}, {
    "text": "Parmer",
    "value": "Parmer",
    "state": "Texas"
  }, {"text": "Pecos", "value": "Pecos", "state": "Texas"}, {
    "text": "Polk",
    "value": "Polk",
    "state": "Texas"
  }, {"text": "Potter", "value": "Potter", "state": "Texas"}, {
    "text": "Presidio",
    "value": "Presidio",
    "state": "Texas"
  }, {"text": "Rains", "value": "Rains", "state": "Texas"}, {
    "text": "Randall",
    "value": "Randall",
    "state": "Texas"
  }, {"text": "Reagan", "value": "Reagan", "state": "Texas"}, {
    "text": "Real",
    "value": "Real",
    "state": "Texas"
  }, {"text": "Red River", "value": "Red River", "state": "Texas"}, {
    "text": "Reeves",
    "value": "Reeves",
    "state": "Texas"
  }, {"text": "Refugio", "value": "Refugio", "state": "Texas"}, {
    "text": "Roberts",
    "value": "Roberts",
    "state": "Texas"
  }, {"text": "Robertson", "value": "Robertson", "state": "Texas"}, {
    "text": "Rockwall",
    "value": "Rockwall",
    "state": "Texas"
  }, {"text": "Runnels", "value": "Runnels", "state": "Texas"}, {
    "text": "Rusk",
    "value": "Rusk",
    "state": "Texas"
  }, {"text": "Sabine", "value": "Sabine", "state": "Texas"}, {
    "text": "San Augustine",
    "value": "San Augustine",
    "state": "Texas"
  }, {"text": "San Jacinto", "value": "San Jacinto", "state": "Texas"}, {
    "text": "San Patricio",
    "value": "San Patricio",
    "state": "Texas"
  }, {"text": "San Saba", "value": "San Saba", "state": "Texas"}, {
    "text": "Schleicher",
    "value": "Schleicher",
    "state": "Texas"
  }, {"text": "Scurry", "value": "Scurry", "state": "Texas"}, {
    "text": "Shackelford",
    "value": "Shackelford",
    "state": "Texas"
  }, {"text": "Shelby", "value": "Shelby", "state": "Texas"}, {
    "text": "Sherman",
    "value": "Sherman",
    "state": "Texas"
  }, {"text": "Smith", "value": "Smith", "state": "Texas"}, {
    "text": "Somervell",
    "value": "Somervell",
    "state": "Texas"
  }, {"text": "Starr", "value": "Starr", "state": "Texas"}, {
    "text": "Stephens",
    "value": "Stephens",
    "state": "Texas"
  }, {"text": "Sterling", "value": "Sterling", "state": "Texas"}, {
    "text": "Stonewall",
    "value": "Stonewall",
    "state": "Texas"
  }, {"text": "Sutton", "value": "Sutton", "state": "Texas"}, {
    "text": "Swisher",
    "value": "Swisher",
    "state": "Texas"
  }, {"text": "Tarrant", "value": "Tarrant", "state": "Texas"}, {
    "text": "Taylor",
    "value": "Taylor",
    "state": "Texas"
  }, {"text": "Terrell", "value": "Terrell", "state": "Texas"}, {
    "text": "Terry",
    "value": "Terry",
    "state": "Texas"
  }, {"text": "Throckmorton", "value": "Throckmorton", "state": "Texas"}, {
    "text": "Titus",
    "value": "Titus",
    "state": "Texas"
  }, {"text": "Tom Green", "value": "Tom Green", "state": "Texas"}, {
    "text": "Travis",
    "value": "Travis",
    "state": "Texas"
  }, {"text": "Trinity", "value": "Trinity", "state": "Texas"}, {
    "text": "Tyler",
    "value": "Tyler",
    "state": "Texas"
  }, {"text": "Upshur", "value": "Upshur", "state": "Texas"}, {
    "text": "Upton",
    "value": "Upton",
    "state": "Texas"
  }, {"text": "Uvalde", "value": "Uvalde", "state": "Texas"}, {
    "text": "Val Verde",
    "value": "Val Verde",
    "state": "Texas"
  }, {"text": "Van Zandt", "value": "Van Zandt", "state": "Texas"}, {
    "text": "Victoria",
    "value": "Victoria",
    "state": "Texas"
  }, {"text": "Walker", "value": "Walker", "state": "Texas"}, {
    "text": "Waller",
    "value": "Waller",
    "state": "Texas"
  }, {"text": "Ward", "value": "Ward", "state": "Texas"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Texas"
  }, {"text": "Webb", "value": "Webb", "state": "Texas"}, {
    "text": "Wharton",
    "value": "Wharton",
    "state": "Texas"
  }, {"text": "Wheeler", "value": "Wheeler", "state": "Texas"}, {
    "text": "Wichita",
    "value": "Wichita",
    "state": "Texas"
  }, {"text": "Wilbarger", "value": "Wilbarger", "state": "Texas"}, {
    "text": "Willacy",
    "value": "Willacy",
    "state": "Texas"
  }, {"text": "Williamson", "value": "Williamson", "state": "Texas"}, {
    "text": "Wilson",
    "value": "Wilson",
    "state": "Texas"
  }, {"text": "Winkler", "value": "Winkler", "state": "Texas"}, {
    "text": "Wise",
    "value": "Wise",
    "state": "Texas"
  }, {"text": "Wood", "value": "Wood", "state": "Texas"}, {
    "text": "Yoakum",
    "value": "Yoakum",
    "state": "Texas"
  }, {"text": "Young", "value": "Young", "state": "Texas"}, {
    "text": "Zapata",
    "value": "Zapata",
    "state": "Texas"
  }, {"text": "Zavala", "value": "Zavala", "state": "Texas"}, {
    "text": "Beaver",
    "value": "Beaver",
    "state": "Utah"
  }, {"text": "Box Elder", "value": "Box Elder", "state": "Utah"}, {
    "text": "Cache",
    "value": "Cache",
    "state": "Utah"
  }, {"text": "Carbon", "value": "Carbon", "state": "Utah"}, {
    "text": "Daggett",
    "value": "Daggett",
    "state": "Utah"
  }, {"text": "Davis", "value": "Davis", "state": "Utah"}, {
    "text": "Duchesne",
    "value": "Duchesne",
    "state": "Utah"
  }, {"text": "Emery", "value": "Emery", "state": "Utah"}, {
    "text": "Garfield",
    "value": "Garfield",
    "state": "Utah"
  }, {"text": "Grand", "value": "Grand", "state": "Utah"}, {
    "text": "Iron",
    "value": "Iron",
    "state": "Utah"
  }, {"text": "Juab", "value": "Juab", "state": "Utah"}, {
    "text": "Kane",
    "value": "Kane",
    "state": "Utah"
  }, {"text": "Millard", "value": "Millard", "state": "Utah"}, {
    "text": "Morgan",
    "value": "Morgan",
    "state": "Utah"
  }, {"text": "Piute", "value": "Piute", "state": "Utah"}, {
    "text": "Rich",
    "value": "Rich",
    "state": "Utah"
  }, {"text": "Salt Lake", "value": "Salt Lake", "state": "Utah"}, {
    "text": "San Juan",
    "value": "San Juan",
    "state": "Utah"
  }, {"text": "Sanpete", "value": "Sanpete", "state": "Utah"}, {
    "text": "Sevier",
    "value": "Sevier",
    "state": "Utah"
  }, {"text": "Summit", "value": "Summit", "state": "Utah"}, {
    "text": "Tooele",
    "value": "Tooele",
    "state": "Utah"
  }, {"text": "Uintah", "value": "Uintah", "state": "Utah"}, {
    "text": "Utah",
    "value": "Utah",
    "state": "Utah"
  }, {"text": "Wasatch", "value": "Wasatch", "state": "Utah"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Utah"
  }, {"text": "Wayne", "value": "Wayne", "state": "Utah"}, {
    "text": "Weber",
    "value": "Weber",
    "state": "Utah"
  }, {"text": "Addison", "value": "Addison", "state": "Vermont"}, {
    "text": "Bennington",
    "value": "Bennington",
    "state": "Vermont"
  }, {"text": "Caledonia", "value": "Caledonia", "state": "Vermont"}, {
    "text": "Chittenden",
    "value": "Chittenden",
    "state": "Vermont"
  }, {"text": "Essex", "value": "Essex", "state": "Vermont"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Vermont"
  }, {"text": "Grand Isle", "value": "Grand Isle", "state": "Vermont"}, {
    "text": "Lamoille",
    "value": "Lamoille",
    "state": "Vermont"
  }, {"text": "Orange", "value": "Orange", "state": "Vermont"}, {
    "text": "Orleans",
    "value": "Orleans",
    "state": "Vermont"
  }, {"text": "Rutland", "value": "Rutland", "state": "Vermont"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Vermont"
  }, {"text": "Windham", "value": "Windham", "state": "Vermont"}, {
    "text": "Windsor",
    "value": "Windsor",
    "state": "Vermont"
  }, {"text": "Accomack", "value": "Accomack", "state": "Virginia"}, {
    "text": "Albemarle",
    "value": "Albemarle",
    "state": "Virginia"
  }, {"text": "Alleghany", "value": "Alleghany", "state": "Virginia"}, {
    "text": "Amelia",
    "value": "Amelia",
    "state": "Virginia"
  }, {"text": "Amherst", "value": "Amherst", "state": "Virginia"}, {
    "text": "Appomattox",
    "value": "Appomattox",
    "state": "Virginia"
  }, {"text": "Arlington", "value": "Arlington", "state": "Virginia"}, {
    "text": "Augusta",
    "value": "Augusta",
    "state": "Virginia"
  }, {"text": "Bath", "value": "Bath", "state": "Virginia"}, {
    "text": "Bedford",
    "value": "Bedford",
    "state": "Virginia"
  }, {"text": "Bland", "value": "Bland", "state": "Virginia"}, {
    "text": "Botetourt",
    "value": "Botetourt",
    "state": "Virginia"
  }, {"text": "Brunswick", "value": "Brunswick", "state": "Virginia"}, {
    "text": "Buchanan",
    "value": "Buchanan",
    "state": "Virginia"
  }, {"text": "Buckingham", "value": "Buckingham", "state": "Virginia"}, {
    "text": "Campbell",
    "value": "Campbell",
    "state": "Virginia"
  }, {"text": "Caroline", "value": "Caroline", "state": "Virginia"}, {
    "text": "Carroll",
    "value": "Carroll",
    "state": "Virginia"
  }, {"text": "Charles City", "value": "Charles City", "state": "Virginia"}, {
    "text": "Charlotte",
    "value": "Charlotte",
    "state": "Virginia"
  }, {"text": "Chesterfield", "value": "Chesterfield", "state": "Virginia"}, {
    "text": "Clarke",
    "value": "Clarke",
    "state": "Virginia"
  }, {"text": "Craig", "value": "Craig", "state": "Virginia"}, {
    "text": "Culpeper",
    "value": "Culpeper",
    "state": "Virginia"
  }, {"text": "Cumberland", "value": "Cumberland", "state": "Virginia"}, {
    "text": "Dickenson",
    "value": "Dickenson",
    "state": "Virginia"
  }, {"text": "Dinwiddie", "value": "Dinwiddie", "state": "Virginia"}, {
    "text": "Essex",
    "value": "Essex",
    "state": "Virginia"
  }, {"text": "Fairfax", "value": "Fairfax", "state": "Virginia"}, {
    "text": "Fauquier",
    "value": "Fauquier",
    "state": "Virginia"
  }, {"text": "Floyd", "value": "Floyd", "state": "Virginia"}, {
    "text": "Fluvanna",
    "value": "Fluvanna",
    "state": "Virginia"
  }, {"text": "Franklin", "value": "Franklin", "state": "Virginia"}, {
    "text": "Frederick",
    "value": "Frederick",
    "state": "Virginia"
  }, {"text": "Giles", "value": "Giles", "state": "Virginia"}, {
    "text": "Gloucester",
    "value": "Gloucester",
    "state": "Virginia"
  }, {"text": "Goochland", "value": "Goochland", "state": "Virginia"}, {
    "text": "Grayson",
    "value": "Grayson",
    "state": "Virginia"
  }, {"text": "Greene", "value": "Greene", "state": "Virginia"}, {
    "text": "Greensville",
    "value": "Greensville",
    "state": "Virginia"
  }, {"text": "Halifax", "value": "Halifax", "state": "Virginia"}, {
    "text": "Hanover",
    "value": "Hanover",
    "state": "Virginia"
  }, {"text": "Henrico", "value": "Henrico", "state": "Virginia"}, {
    "text": "Henry",
    "value": "Henry",
    "state": "Virginia"
  }, {"text": "Highland", "value": "Highland", "state": "Virginia"}, {
    "text": "Isle of Wight",
    "value": "Isle of Wight",
    "state": "Virginia"
  }, {"text": "James City", "value": "James City", "state": "Virginia"}, {
    "text": "King and Queen",
    "value": "King and Queen",
    "state": "Virginia"
  }, {"text": "King George", "value": "King George", "state": "Virginia"}, {
    "text": "King William",
    "value": "King William",
    "state": "Virginia"
  }, {"text": "Lancaster", "value": "Lancaster", "state": "Virginia"}, {
    "text": "Lee",
    "value": "Lee",
    "state": "Virginia"
  }, {"text": "Loudoun", "value": "Loudoun", "state": "Virginia"}, {
    "text": "Louisa",
    "value": "Louisa",
    "state": "Virginia"
  }, {"text": "Lunenburg", "value": "Lunenburg", "state": "Virginia"}, {
    "text": "Madison",
    "value": "Madison",
    "state": "Virginia"
  }, {"text": "Mathews", "value": "Mathews", "state": "Virginia"}, {
    "text": "Mecklenburg",
    "value": "Mecklenburg",
    "state": "Virginia"
  }, {"text": "Middlesex", "value": "Middlesex", "state": "Virginia"}, {
    "text": "Montgomery",
    "value": "Montgomery",
    "state": "Virginia"
  }, {"text": "Nelson", "value": "Nelson", "state": "Virginia"}, {
    "text": "New Kent",
    "value": "New Kent",
    "state": "Virginia"
  }, {"text": "Northampton", "value": "Northampton", "state": "Virginia"}, {
    "text": "Northumberland",
    "value": "Northumberland",
    "state": "Virginia"
  }, {"text": "Nottoway", "value": "Nottoway", "state": "Virginia"}, {
    "text": "Orange",
    "value": "Orange",
    "state": "Virginia"
  }, {"text": "Page", "value": "Page", "state": "Virginia"}, {
    "text": "Patrick",
    "value": "Patrick",
    "state": "Virginia"
  }, {"text": "Pittsylvania", "value": "Pittsylvania", "state": "Virginia"}, {
    "text": "Powhatan",
    "value": "Powhatan",
    "state": "Virginia"
  }, {"text": "Prince Edward", "value": "Prince Edward", "state": "Virginia"}, {
    "text": "Prince George",
    "value": "Prince George",
    "state": "Virginia"
  }, {"text": "Prince William", "value": "Prince William", "state": "Virginia"}, {
    "text": "Pulaski",
    "value": "Pulaski",
    "state": "Virginia"
  }, {"text": "Rappahannock", "value": "Rappahannock", "state": "Virginia"}, {
    "text": "Richmond",
    "value": "Richmond",
    "state": "Virginia"
  }, {"text": "Roanoke", "value": "Roanoke", "state": "Virginia"}, {
    "text": "Rockbridge",
    "value": "Rockbridge",
    "state": "Virginia"
  }, {"text": "Rockingham", "value": "Rockingham", "state": "Virginia"}, {
    "text": "Russell",
    "value": "Russell",
    "state": "Virginia"
  }, {"text": "Scott", "value": "Scott", "state": "Virginia"}, {
    "text": "Shenandoah",
    "value": "Shenandoah",
    "state": "Virginia"
  }, {"text": "Smyth", "value": "Smyth", "state": "Virginia"}, {
    "text": "Southampton",
    "value": "Southampton",
    "state": "Virginia"
  }, {"text": "Spotsylvania", "value": "Spotsylvania", "state": "Virginia"}, {
    "text": "Stafford",
    "value": "Stafford",
    "state": "Virginia"
  }, {"text": "Surry", "value": "Surry", "state": "Virginia"}, {
    "text": "Sussex",
    "value": "Sussex",
    "state": "Virginia"
  }, {"text": "Tazewell", "value": "Tazewell", "state": "Virginia"}, {
    "text": "Warren",
    "value": "Warren",
    "state": "Virginia"
  }, {"text": "Washington", "value": "Washington", "state": "Virginia"}, {
    "text": "Westmoreland",
    "value": "Westmoreland",
    "state": "Virginia"
  }, {"text": "Wise", "value": "Wise", "state": "Virginia"}, {
    "text": "Wythe",
    "value": "Wythe",
    "state": "Virginia"
  }, {"text": "York", "value": "York", "state": "Virginia"}, {
    "text": "Adams",
    "value": "Adams",
    "state": "Washington"
  }, {"text": "Asotin", "value": "Asotin", "state": "Washington"}, {
    "text": "Benton",
    "value": "Benton",
    "state": "Washington"
  }, {"text": "Chelan", "value": "Chelan", "state": "Washington"}, {
    "text": "Clallam",
    "value": "Clallam",
    "state": "Washington"
  }, {"text": "Clark", "value": "Clark", "state": "Washington"}, {
    "text": "Columbia",
    "value": "Columbia",
    "state": "Washington"
  }, {"text": "Cowlitz", "value": "Cowlitz", "state": "Washington"}, {
    "text": "Douglas",
    "value": "Douglas",
    "state": "Washington"
  }, {"text": "Ferry", "value": "Ferry", "state": "Washington"}, {
    "text": "Franklin",
    "value": "Franklin",
    "state": "Washington"
  }, {"text": "Garfield", "value": "Garfield", "state": "Washington"}, {
    "text": "Grant",
    "value": "Grant",
    "state": "Washington"
  }, {"text": "Grays Harbor", "value": "Grays Harbor", "state": "Washington"}, {
    "text": "Island",
    "value": "Island",
    "state": "Washington"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Washington"}, {
    "text": "King",
    "value": "King",
    "state": "Washington"
  }, {"text": "Kitsap", "value": "Kitsap", "state": "Washington"}, {
    "text": "Kittitas",
    "value": "Kittitas",
    "state": "Washington"
  }, {"text": "Klickitat", "value": "Klickitat", "state": "Washington"}, {
    "text": "Lewis",
    "value": "Lewis",
    "state": "Washington"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "Washington"}, {
    "text": "Mason",
    "value": "Mason",
    "state": "Washington"
  }, {"text": "Okanogan", "value": "Okanogan", "state": "Washington"}, {
    "text": "Pacific",
    "value": "Pacific",
    "state": "Washington"
  }, {"text": "Pend Oreille", "value": "Pend Oreille", "state": "Washington"}, {
    "text": "Pierce",
    "value": "Pierce",
    "state": "Washington"
  }, {"text": "San Juan", "value": "San Juan", "state": "Washington"}, {
    "text": "Skagit",
    "value": "Skagit",
    "state": "Washington"
  }, {"text": "Skamania", "value": "Skamania", "state": "Washington"}, {
    "text": "Snohomish",
    "value": "Snohomish",
    "state": "Washington"
  }, {"text": "Spokane", "value": "Spokane", "state": "Washington"}, {
    "text": "Stevens",
    "value": "Stevens",
    "state": "Washington"
  }, {"text": "Thurston", "value": "Thurston", "state": "Washington"}, {
    "text": "Wahkiakum",
    "value": "Wahkiakum",
    "state": "Washington"
  }, {"text": "Walla Walla", "value": "Walla Walla", "state": "Washington"}, {
    "text": "Whatcom",
    "value": "Whatcom",
    "state": "Washington"
  }, {"text": "Whitman", "value": "Whitman", "state": "Washington"}, {
    "text": "Yakima",
    "value": "Yakima",
    "state": "Washington"
  }, {"text": "Barbour", "value": "Barbour", "state": "West Virginia"}, {
    "text": "Berkeley",
    "value": "Berkeley",
    "state": "West Virginia"
  }, {"text": "Boone", "value": "Boone", "state": "West Virginia"}, {
    "text": "Braxton",
    "value": "Braxton",
    "state": "West Virginia"
  }, {"text": "Brooke", "value": "Brooke", "state": "West Virginia"}, {
    "text": "Cabell",
    "value": "Cabell",
    "state": "West Virginia"
  }, {"text": "Calhoun", "value": "Calhoun", "state": "West Virginia"}, {
    "text": "Clay",
    "value": "Clay",
    "state": "West Virginia"
  }, {"text": "Doddridge", "value": "Doddridge", "state": "West Virginia"}, {
    "text": "Fayette",
    "value": "Fayette",
    "state": "West Virginia"
  }, {"text": "Gilmer", "value": "Gilmer", "state": "West Virginia"}, {
    "text": "Grant",
    "value": "Grant",
    "state": "West Virginia"
  }, {"text": "Greenbrier", "value": "Greenbrier", "state": "West Virginia"}, {
    "text": "Hampshire",
    "value": "Hampshire",
    "state": "West Virginia"
  }, {"text": "Hancock", "value": "Hancock", "state": "West Virginia"}, {
    "text": "Hardy",
    "value": "Hardy",
    "state": "West Virginia"
  }, {"text": "Harrison", "value": "Harrison", "state": "West Virginia"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "West Virginia"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "West Virginia"}, {
    "text": "Kanawha",
    "value": "Kanawha",
    "state": "West Virginia"
  }, {"text": "Lewis", "value": "Lewis", "state": "West Virginia"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "West Virginia"
  }, {"text": "Logan", "value": "Logan", "state": "West Virginia"}, {
    "text": "Marion",
    "value": "Marion",
    "state": "West Virginia"
  }, {"text": "Marshall", "value": "Marshall", "state": "West Virginia"}, {
    "text": "Mason",
    "value": "Mason",
    "state": "West Virginia"
  }, {"text": "McDowell", "value": "McDowell", "state": "West Virginia"}, {
    "text": "Mercer",
    "value": "Mercer",
    "state": "West Virginia"
  }, {"text": "Mineral", "value": "Mineral", "state": "West Virginia"}, {
    "text": "Mingo",
    "value": "Mingo",
    "state": "West Virginia"
  }, {"text": "Monongalia", "value": "Monongalia", "state": "West Virginia"}, {
    "text": "Monroe",
    "value": "Monroe",
    "state": "West Virginia"
  }, {"text": "Morgan", "value": "Morgan", "state": "West Virginia"}, {
    "text": "Nicholas",
    "value": "Nicholas",
    "state": "West Virginia"
  }, {"text": "Ohio", "value": "Ohio", "state": "West Virginia"}, {
    "text": "Pendleton",
    "value": "Pendleton",
    "state": "West Virginia"
  }, {"text": "Pleasants", "value": "Pleasants", "state": "West Virginia"}, {
    "text": "Pocahontas",
    "value": "Pocahontas",
    "state": "West Virginia"
  }, {"text": "Preston", "value": "Preston", "state": "West Virginia"}, {
    "text": "Putnam",
    "value": "Putnam",
    "state": "West Virginia"
  }, {"text": "Raleigh", "value": "Raleigh", "state": "West Virginia"}, {
    "text": "Randolph",
    "value": "Randolph",
    "state": "West Virginia"
  }, {"text": "Ritchie", "value": "Ritchie", "state": "West Virginia"}, {
    "text": "Roane",
    "value": "Roane",
    "state": "West Virginia"
  }, {"text": "Summers", "value": "Summers", "state": "West Virginia"}, {
    "text": "Taylor",
    "value": "Taylor",
    "state": "West Virginia"
  }, {"text": "Tucker", "value": "Tucker", "state": "West Virginia"}, {
    "text": "Tyler",
    "value": "Tyler",
    "state": "West Virginia"
  }, {"text": "Upshur", "value": "Upshur", "state": "West Virginia"}, {
    "text": "Wayne",
    "value": "Wayne",
    "state": "West Virginia"
  }, {"text": "Webster", "value": "Webster", "state": "West Virginia"}, {
    "text": "Wetzel",
    "value": "Wetzel",
    "state": "West Virginia"
  }, {"text": "Wirt", "value": "Wirt", "state": "West Virginia"}, {
    "text": "Wood",
    "value": "Wood",
    "state": "West Virginia"
  }, {"text": "Wyoming", "value": "Wyoming", "state": "West Virginia"}, {
    "text": "Adams",
    "value": "Adams",
    "state": "Wisconsin"
  }, {"text": "Ashland", "value": "Ashland", "state": "Wisconsin"}, {
    "text": "Barron",
    "value": "Barron",
    "state": "Wisconsin"
  }, {"text": "Bayfield", "value": "Bayfield", "state": "Wisconsin"}, {
    "text": "Brown",
    "value": "Brown",
    "state": "Wisconsin"
  }, {"text": "Buffalo", "value": "Buffalo", "state": "Wisconsin"}, {
    "text": "Burnett",
    "value": "Burnett",
    "state": "Wisconsin"
  }, {"text": "Calumet", "value": "Calumet", "state": "Wisconsin"}, {
    "text": "Chippewa",
    "value": "Chippewa",
    "state": "Wisconsin"
  }, {"text": "Clark", "value": "Clark", "state": "Wisconsin"}, {
    "text": "Columbia",
    "value": "Columbia",
    "state": "Wisconsin"
  }, {"text": "Crawford", "value": "Crawford", "state": "Wisconsin"}, {
    "text": "Dane",
    "value": "Dane",
    "state": "Wisconsin"
  }, {"text": "Dodge", "value": "Dodge", "state": "Wisconsin"}, {
    "text": "Door",
    "value": "Door",
    "state": "Wisconsin"
  }, {"text": "Douglas", "value": "Douglas", "state": "Wisconsin"}, {
    "text": "Dunn",
    "value": "Dunn",
    "state": "Wisconsin"
  }, {"text": "Eau Claire", "value": "Eau Claire", "state": "Wisconsin"}, {
    "text": "Florence",
    "value": "Florence",
    "state": "Wisconsin"
  }, {"text": "Fond du Lac", "value": "Fond du Lac", "state": "Wisconsin"}, {
    "text": "Forest",
    "value": "Forest",
    "state": "Wisconsin"
  }, {"text": "Grant", "value": "Grant", "state": "Wisconsin"}, {
    "text": "Green",
    "value": "Green",
    "state": "Wisconsin"
  }, {"text": "Green Lake", "value": "Green Lake", "state": "Wisconsin"}, {
    "text": "Iowa",
    "value": "Iowa",
    "state": "Wisconsin"
  }, {"text": "Iron", "value": "Iron", "state": "Wisconsin"}, {
    "text": "Jackson",
    "value": "Jackson",
    "state": "Wisconsin"
  }, {"text": "Jefferson", "value": "Jefferson", "state": "Wisconsin"}, {
    "text": "Juneau",
    "value": "Juneau",
    "state": "Wisconsin"
  }, {"text": "Kenosha", "value": "Kenosha", "state": "Wisconsin"}, {
    "text": "Kewaunee",
    "value": "Kewaunee",
    "state": "Wisconsin"
  }, {"text": "La Crosse", "value": "La Crosse", "state": "Wisconsin"}, {
    "text": "Lafayette",
    "value": "Lafayette",
    "state": "Wisconsin"
  }, {"text": "Langlade", "value": "Langlade", "state": "Wisconsin"}, {
    "text": "Lincoln",
    "value": "Lincoln",
    "state": "Wisconsin"
  }, {"text": "Manitowoc", "value": "Manitowoc", "state": "Wisconsin"}, {
    "text": "Marathon",
    "value": "Marathon",
    "state": "Wisconsin"
  }, {"text": "Marinette", "value": "Marinette", "state": "Wisconsin"}, {
    "text": "Marquette",
    "value": "Marquette",
    "state": "Wisconsin"
  }, {"text": "Menominee", "value": "Menominee", "state": "Wisconsin"}, {
    "text": "Milwaukee",
    "value": "Milwaukee",
    "state": "Wisconsin"
  }, {"text": "Monroe", "value": "Monroe", "state": "Wisconsin"}, {
    "text": "Oconto",
    "value": "Oconto",
    "state": "Wisconsin"
  }, {"text": "Oneida", "value": "Oneida", "state": "Wisconsin"}, {
    "text": "Outagamie",
    "value": "Outagamie",
    "state": "Wisconsin"
  }, {"text": "Ozaukee", "value": "Ozaukee", "state": "Wisconsin"}, {
    "text": "Pepin",
    "value": "Pepin",
    "state": "Wisconsin"
  }, {"text": "Pierce", "value": "Pierce", "state": "Wisconsin"}, {
    "text": "Polk",
    "value": "Polk",
    "state": "Wisconsin"
  }, {"text": "Portage", "value": "Portage", "state": "Wisconsin"}, {
    "text": "Price",
    "value": "Price",
    "state": "Wisconsin"
  }, {"text": "Racine", "value": "Racine", "state": "Wisconsin"}, {
    "text": "Richland",
    "value": "Richland",
    "state": "Wisconsin"
  }, {"text": "Rock", "value": "Rock", "state": "Wisconsin"}, {
    "text": "Rusk",
    "value": "Rusk",
    "state": "Wisconsin"
  }, {"text": "Sauk", "value": "Sauk", "state": "Wisconsin"}, {
    "text": "Sawyer",
    "value": "Sawyer",
    "state": "Wisconsin"
  }, {"text": "Shawano", "value": "Shawano", "state": "Wisconsin"}, {
    "text": "Sheboygan",
    "value": "Sheboygan",
    "state": "Wisconsin"
  }, {"text": "St. Croix", "value": "St. Croix", "state": "Wisconsin"}, {
    "text": "Taylor",
    "value": "Taylor",
    "state": "Wisconsin"
  }, {"text": "Trempealeau", "value": "Trempealeau", "state": "Wisconsin"}, {
    "text": "Vernon",
    "value": "Vernon",
    "state": "Wisconsin"
  }, {"text": "Vilas", "value": "Vilas", "state": "Wisconsin"}, {
    "text": "Walworth",
    "value": "Walworth",
    "state": "Wisconsin"
  }, {"text": "Washburn", "value": "Washburn", "state": "Wisconsin"}, {
    "text": "Washington",
    "value": "Washington",
    "state": "Wisconsin"
  }, {"text": "Waukesha", "value": "Waukesha", "state": "Wisconsin"}, {
    "text": "Waupaca",
    "value": "Waupaca",
    "state": "Wisconsin"
  }, {"text": "Waushara", "value": "Waushara", "state": "Wisconsin"}, {
    "text": "Winnebago",
    "value": "Winnebago",
    "state": "Wisconsin"
  }, {"text": "Wood", "value": "Wood", "state": "Wisconsin"}, {
    "text": "Albany",
    "value": "Albany",
    "state": "Wyoming"
  }, {"text": "Big Horn", "value": "Big Horn", "state": "Wyoming"}, {
    "text": "Campbell",
    "value": "Campbell",
    "state": "Wyoming"
  }, {"text": "Carbon", "value": "Carbon", "state": "Wyoming"}, {
    "text": "Converse",
    "value": "Converse",
    "state": "Wyoming"
  }, {"text": "Crook", "value": "Crook", "state": "Wyoming"}, {
    "text": "Fremont",
    "value": "Fremont",
    "state": "Wyoming"
  }, {"text": "Goshen", "value": "Goshen", "state": "Wyoming"}, {
    "text": "Hot Springs",
    "value": "Hot Springs",
    "state": "Wyoming"
  }, {"text": "Johnson", "value": "Johnson", "state": "Wyoming"}, {
    "text": "Laramie",
    "value": "Laramie",
    "state": "Wyoming"
  }, {"text": "Lincoln", "value": "Lincoln", "state": "Wyoming"}, {
    "text": "Natrona",
    "value": "Natrona",
    "state": "Wyoming"
  }, {"text": "Niobrara", "value": "Niobrara", "state": "Wyoming"}, {
    "text": "Park",
    "value": "Park",
    "state": "Wyoming"
  }, {"text": "Platte", "value": "Platte", "state": "Wyoming"}, {
    "text": "Sheridan",
    "value": "Sheridan",
    "state": "Wyoming"
  }, {"text": "Sublette", "value": "Sublette", "state": "Wyoming"}, {
    "text": "Sweetwater",
    "value": "Sweetwater",
    "state": "Wyoming"
  }, {"text": "Teton", "value": "Teton", "state": "Wyoming"}, {
    "text": "Uinta",
    "value": "Uinta",
    "state": "Wyoming"
  }, {"text": "Washakie", "value": "Washakie", "state": "Wyoming"}, {
    "text": "Weston",
    "value": "Weston",
    "state": "Wyoming"
  }];

  var _config = {
    partner_id: 1573,
    lang: 'en',
    domain: 'https://sailplay.net'
  };

  //var _config = {
  //  partner_id: 1189,
  //  lang: 'en',
  //  domain: 'http://skazka.loc'
  //};

  SAILPLAY.send('init', _config);

  SAILPLAY.on('init.success', function () {

    set_state();

    start_timer();

  });

  var params = SAILPLAY.url_params();

  if (params.p_name) {
    $('.p_name').text(params.p_name)
  }

  function set_state(state) {

    if ($('.sp_popup_blocks').is(':visible')) {

      $('.sp_popup_blocks').fadeOut();

    }

    var $elms = $('.sp_wrapper > .sp_l-centered');

    var _map = {
      'welcome': 0,
      'reg': 1,
      'reg_success': 2,
      'login': 3,
      'info': 4
    };

    state = state && _map[state] || 0;

    start_timer();

    if ($elms.eq(state).is(':visible')) return;

    clear_inputs();

    $elms.hide();

    $elms.eq(state).show();

  }

  function clear_inputs() {

    $('form .sp_form__error-cpt').remove();

    $('.js-create-checkbox').prettyCheckable('check');

    $('form .this-error').removeClass('this-error');

    $('form')[0].reset();

    $select_state[0].selectize.setValue("");

    $('[name=login_phone]').val('');

  }

  $('body').on('click', '[data-do]', function (e) {

    var that = $(this);
    set_state(that.data('do'));
    e.preventDefault();

  }).on('submit', 'form.sp_form', function (e) {

    var $form = $(this);

    var data = $form.serializeArray();

    $.each(data, function (index, item) {

      if (!item.value) {

        _error_block(item.name, 'add')

      } else {

        var _el = $form.find('[name=' + item.name + ']');

        if ((_el.data('valid') == 'email' || _el.data('valid') == 'phone') && !_validator(_el.data('valid'), _el.val())) {

          _error_block(item.name, 'add');

        } else {
          _error_block(item.name, 'del');

        }

      }

      if (index == data.length - 1) {

        _submit();

      }

      e.preventDefault();

      e.stopPropagation();

    });

    function _submit() {

      var errors = $form.find('.this-error').length;

      if (errors != 0) return;

      var u_data = getData().user_data;

      SAILPLAY.send('user.update', u_data);

    }

    e.preventDefault();

  }).on('click', '.btn_login', function (e) {

    e.preventDefault();
    var _phone = $('[name=login_phone]').length && $('[name=login_phone]').val();

    if (!_validator('phone', _phone)) {
      popup({
        title: 'Error',
        text: 'Please enter a valid phone number (United States)'
      });
      start_timer(15000);
      return;
    }

    $('[name=login_phone]').val('');

    SAILPLAY.send('load.user.info', {user: {phone: _phone}, all: 1});

  }).on('click', '.sp_popup__close', function (e) {

    e.preventDefault();

    $('.sp_popup_blocks').fadeOut();

    start_timer();

  }).on("click touchstart", function () {

    start_timer();

  }).on('keyup', 'input', function () {

    start_timer();

  });

  function getData() {

    var $form = $('form');

    var form_fields = ['lastName', 'firstName', 'phone', 'addEmail'];

    var user_data = {};

    var vars_fields = ['address1', 'address2', 'zip', 'state', 'city'];

    var vars_data = {};

    var tags_data = [];

    form_fields.forEach(function (field) {

      user_data[field] = $form.find('[name=' + field + ']').val();

    });

    vars_fields.forEach(function (field) {

      if ($form.find('[name=' + field + ']').val()) {

        vars_data[field] = $form.find('[name=' + field + ']').val();

      }

    });

    if ($form.find('[name=agree]').is(':checked')) {

      tags_data.push($form.find('[name=agree]').data('tag'));

    }

    return {
      user_data: user_data,
      vars_data: vars_data,
      tags_data: tags_data
    }

  }

  function start_timer(time) {

    _timeout_to_redirect && clearTimeout(_timeout_to_redirect);

    _timeout_to_redirect = setTimeout(function () {

      set_state('welcome');

    }, time || WAIT_FOR_REDIRECT);

  }

  SAILPLAY.on('user.update.error', function (res) {

    var errors = {
      '-200008': {
        title: 'This phone number is already in use.',
        text: 'Dear customer, if you are already registered, you can <span class="sp_popup__close this-link" data-do="login">check your bonus points by providing you phone number</span>.'
      },
      '-200010': {
        title: 'This email is already in use by someone else.',
        text: 'Dear customer, please use another email. If you are already registered, you can <span class="sp_popup__close this-link" data-do="login">check your bonus points by providing you phone number</span>. If you want to update your profile please ask a cashier for help.'
      }
    };

    popup(errors[res.status_code] || {});

  });

  SAILPLAY.on('user.update.success', function (res) {

    var data = getData();

    SAILPLAY.send('vars.add', {custom_vars: data.vars_data, user: {phone: data.user_data.phone}}, function () {

      if (data.tags_data.length) {

        SAILPLAY.send('tags.add', {tags: data.tags_data, user: {phone: data.user_data.phone}}, function () {

          finish_submit();

        });

      } else {

        finish_submit();

      }

    });

  });

  function popup(params) {

    if (!params || !params.title || !params.text)return;

    var $popup = $('.sp_popup');

    $popup.find('.sp_popup__head').html(params.title);

    $popup.find('.sp_popup__txt p').html(params.text);

    $('.sp_popup_blocks').animate({opacity: 'toggle'}, {

      duration: 500, start: function () {
        $(this).css('display', 'table');
      }

    });

  }

  function finish_submit() {

    set_state('reg_success');

    start_timer(15000);

  }

  SAILPLAY.on('load.user.info.success', function (res) {

    $('.user_points').text(res.user_points.confirmed);

    $('.user_name').text(res.user.first_name + ' ' + res.user.last_name);

    set_state('info');

    start_timer(15000);

  });

  SAILPLAY.on('load.user.info.error', function (res) {

    popup({
      title: 'Error',
      text: 'Customer with such phone number is not registered'
    });

    start_timer(15000);


  });

  function _validator(type, val) {

    if (!type || !val) return;

    if (type == 'email') {

      return _validateEmail();

    } else if (type == 'phone') {

      return _validatePhone();

    }
    else {
      return false
    }

    function _validateEmail() {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(val);
    }

    function _validatePhone() {
      return val.match(/\d/g).length === 11;
    }

  }

  function _error_block(name, action) {

    if (!name || !$('[name=' + name + ']').length || !action) return;

    var $el = $('[name=' + name + ']');

    if (!$el.data('required')) return;

    function _add() {

      var _error_block = $('<div class="sp_form__error-cpt">\n    <div class="sp_form__error-cpt-inn">field is required</div>\n</div>');

      if ($el.siblings('.sp_cmn-selectize').length) {
        $el.siblings('.sp_cmn-selectize').addClass('this-error');
      } else {
        $el.addClass('this-error');
      }

      if (!$el.siblings('.sp_form__error-cpt').length) {
        $el.after(_error_block);
      }

    }

    function _del() {

      if ($el.siblings('.sp_cmn-selectize.this-error').length) {
        $el.siblings('.sp_cmn-selectize.this-error').removeClass('this-error');
      } else {
        $el.removeClass('this-error');
      }

      if ($el.siblings('.sp_form__error-cpt').length) {
        $el.siblings('.sp_form__error-cpt').remove();
      }

    }

    if (action == 'add') {
      _add();
    } else if (action == 'del') {
      _del();
    } else {
      return false
    }

  }

  $('.js-create-checkbox').each(function () {
    $(this).prettyCheckable({
      customClass: 'sp_cmn-checkbox-wr js-target'
    });
  });

  $('.js-satellite').click(function () {
    $(this).siblings('.js-target').find('a').trigger('click');
  });

  var $select_city = $('.js-create-select#city').selectize({
    options: {"text": "City", "value": "", "state": ""},
    sortField: "value"
  });

  $select_city[0].selectize.setValue("");

  $select_city[0].selectize.disable();

  var $select_state = $('.js-create-select#state').selectize({
    options: _states,
    sortField: "value",
    onChange: function (val) {

      $select_city[0].selectize.clear();
      $select_city[0].selectize.clearOptions();
      $select_city[0].selectize.addOption([{"text": "City", "value": "", "state": ""}]);
      $select_city[0].selectize.setValue("");

      if (val) {

        var new_data = _cities.filter(function (item) {
          return item.state === val;
        });

        $select_city[0].selectize.load(function (callback) {
          callback(new_data);
        });

        $select_city[0].selectize.enable();

      } else {

        $select_city[0].selectize.disable();
      }

    }
  });

  $select_state[0].selectize.setValue("");


});