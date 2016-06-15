$(document).ready(function () {

  var _timeout_to_redirect;

  var WAIT_FOR_REDIRECT = 60000;

  var _states = [
    {"text": "State", "value": ""}, {"text": "Texas", "value": "Texas"}, {
      "text": "Ohio",
      "value": "Ohio"
    }, {"text": "Florida", "value": "Florida"}, {"text": "California", "value": "California"}, {
      "text": "New York",
      "value": "New York"
    }, {"text": "Georgia", "value": "Georgia"}, {"text": "Oregon", "value": "Oregon"}, {
      "text": "New Mexico",
      "value": "New Mexico"
    }, {"text": "Virginia", "value": "Virginia"}, {"text": "Louisiana", "value": "Louisiana"}, {
      "text": "Pennsylvania",
      "value": "Pennsylvania"
    }, {"text": "Iowa", "value": "Iowa"}, {"text": "Alaska", "value": "Alaska"}, {
      "text": "Indiana",
      "value": "Indiana"
    }, {"text": "Michigan", "value": "Michigan"}, {"text": "Arizona", "value": "Arizona"}, {
      "text": "North Carolina",
      "value": "North Carolina"
    }, {"text": "Wisconsin", "value": "Wisconsin"}, {"text": "Minnesota", "value": "Minnesota"}, {
      "text": "Massachusetts",
      "value": "Massachusetts"
    }, {"text": "Illinois", "value": "Illinois"}, {"text": "Colorado", "value": "Colorado"}, {
      "text": "Maryland",
      "value": "Maryland"
    }, {"text": "Washington", "value": "Washington"}, {"text": "Alabama", "value": "Alabama"}, {
      "text": "Tennessee",
      "value": "Tennessee"
    }, {"text": "New Jersey", "value": "New Jersey"}, {"text": "Nebraska", "value": "Nebraska"}, {
      "text": "Montana",
      "value": "Montana"
    }, {"text": "Mississippi", "value": "Mississippi"}, {
      "text": "North Dakota",
      "value": "North Dakota"
    }, {"text": "Missouri", "value": "Missouri"}, {"text": "Idaho", "value": "Idaho"}, {
      "text": "Utah",
      "value": "Utah"
    }, {"text": "Kentucky", "value": "Kentucky"}, {"text": "Connecticut", "value": "Connecticut"}, {
      "text": "Oklahoma",
      "value": "Oklahoma"
    }, {"text": "Vermont", "value": "Vermont"}, {"text": "Nevada", "value": "Nevada"}, {
      "text": "Wyoming",
      "value": "Wyoming"
    }, {"text": "South Carolina", "value": "South Carolina"}, {
      "text": "West Virginia",
      "value": "West Virginia"
    }, {"text": "New Hampshire", "value": "New Hampshire"}, {
      "text": "Arkansas",
      "value": "Arkansas"
    }, {"text": "Rhode Island", "value": "Rhode Island"}, {"text": "Hawaii", "value": "Hawaii"}, {
      "text": "Kansas",
      "value": "Kansas"
    }, {"text": "Maine", "value": "Maine"}, {
      "text": "South Dakota",
      "value": "South Dakota"
    }, {"text": "District of Columbia", "value": "District of Columbia"}, {"text": "Delaware", "value": "Delaware"}];

  var _cities = [
    {"text": "Abilene", "value": "Abilene", "state": "Texas"}, {
      "text": "Akron",
      "value": "Akron",
      "state": "Ohio"
    }, {"text": "Alafaya", "value": "Alafaya", "state": "Florida"}, {
      "text": "Alameda",
      "value": "Alameda",
      "state": "California"
    }, {"text": "Albany", "value": "Albany", "state": "New York"}, {
      "text": "Albany",
      "value": "Albany",
      "state": "Georgia"
    }, {"text": "Albany", "value": "Albany", "state": "Oregon"}, {
      "text": "Albuquerque",
      "value": "Albuquerque",
      "state": "New Mexico"
    }, {"text": "Alexandria", "value": "Alexandria", "state": "Virginia"}, {
      "text": "Alexandria",
      "value": "Alexandria",
      "state": "Louisiana"
    }, {"text": "Alhambra", "value": "Alhambra", "state": "California"}, {
      "text": "Aliso Viejo",
      "value": "Aliso Viejo",
      "state": "California"
    }, {"text": "Allen", "value": "Allen", "state": "Texas"}, {
      "text": "Allentown",
      "value": "Allentown",
      "state": "Pennsylvania"
    }, {"text": "Aloha", "value": "Aloha", "state": "Oregon"}, {
      "text": "Alpharetta",
      "value": "Alpharetta",
      "state": "Georgia"
    }, {"text": "Altadena", "value": "Altadena", "state": "California"}, {
      "text": "Altamonte Springs",
      "value": "Altamonte Springs",
      "state": "Florida"
    }, {"text": "Altoona", "value": "Altoona", "state": "Pennsylvania"}, {
      "text": "Amarillo",
      "value": "Amarillo",
      "state": "Texas"
    }, {"text": "Ames", "value": "Ames", "state": "Iowa"}, {
      "text": "Anaheim",
      "value": "Anaheim",
      "state": "California"
    }, {"text": "Anchorage", "value": "Anchorage", "state": "Alaska"}, {
      "text": "Anderson",
      "value": "Anderson",
      "state": "Indiana"
    }, {"text": "Ankeny", "value": "Ankeny", "state": "Iowa"}, {
      "text": "Ann Arbor",
      "value": "Ann Arbor",
      "state": "Michigan"
    }, {"text": "Antelope", "value": "Antelope", "state": "California"}, {
      "text": "Antioch",
      "value": "Antioch",
      "state": "California"
    }, {"text": "Apache Junction", "value": "Apache Junction", "state": "Arizona"}, {
      "text": "Apex",
      "value": "Apex",
      "state": "North Carolina"
    }, {"text": "Apopka", "value": "Apopka", "state": "Florida"}, {
      "text": "Appleton",
      "value": "Appleton",
      "state": "Wisconsin"
    }, {"text": "Apple Valley", "value": "Apple Valley", "state": "California"}, {
      "text": "Apple Valley",
      "value": "Apple Valley",
      "state": "Minnesota"
    }, {"text": "Arcadia", "value": "Arcadia", "state": "California"}, {
      "text": "Arden-Arcade",
      "value": "Arden-Arcade",
      "state": "California"
    }, {"text": "Arlington", "value": "Arlington", "state": "Texas"}, {
      "text": "Arlington",
      "value": "Arlington",
      "state": "Virginia"
    }, {"text": "Arlington", "value": "Arlington", "state": "Massachusetts"}, {
      "text": "Arlington Heights",
      "value": "Arlington Heights",
      "state": "Illinois"
    }, {"text": "Arvada", "value": "Arvada", "state": "Colorado"}, {
      "text": "Ashburn",
      "value": "Ashburn",
      "state": "Virginia"
    }, {"text": "Asheville", "value": "Asheville", "state": "North Carolina"}, {
      "text": "Aspen Hill",
      "value": "Aspen Hill",
      "state": "Maryland"
    }, {"text": "Atascocita", "value": "Atascocita", "state": "Texas"}, {
      "text": "Athens-Clarke",
      "value": "Athens-Clarke",
      "state": "Georgia"
    }, {"text": "Atlanta", "value": "Atlanta", "state": "Georgia"}, {
      "text": "Attleboro",
      "value": "Attleboro",
      "state": "Massachusetts"
    }, {"text": "Auburn", "value": "Auburn", "state": "Washington"}, {
      "text": "Auburn",
      "value": "Auburn",
      "state": "Alabama"
    }, {"text": "Augusta-Richmond", "value": "Augusta-Richmond", "state": "Georgia"}, {
      "text": "Aurora",
      "value": "Aurora",
      "state": "Colorado"
    }, {"text": "Aurora", "value": "Aurora", "state": "Illinois"}, {
      "text": "Austin",
      "value": "Austin",
      "state": "Texas"
    }, {"text": "Avondale", "value": "Avondale", "state": "Arizona"}, {
      "text": "Azusa",
      "value": "Azusa",
      "state": "California"
    }, {"text": "Bakersfield", "value": "Bakersfield", "state": "California"}, {
      "text": "Baldwin Park",
      "value": "Baldwin Park",
      "state": "California"
    }, {"text": "Baltimore", "value": "Baltimore", "state": "Maryland"}, {
      "text": "Barnstable Town",
      "value": "Barnstable Town",
      "state": "Massachusetts"
    }, {"text": "Bartlett", "value": "Bartlett", "state": "Tennessee"}, {
      "text": "Bartlett",
      "value": "Bartlett",
      "state": "Illinois"
    }, {"text": "Baton Rouge", "value": "Baton Rouge", "state": "Louisiana"}, {
      "text": "Battle Creek",
      "value": "Battle Creek",
      "state": "Michigan"
    }, {"text": "Bayonne", "value": "Bayonne", "state": "New Jersey"}, {
      "text": "Baytown",
      "value": "Baytown",
      "state": "Texas"
    }, {"text": "Beaumont", "value": "Beaumont", "state": "Texas"}, {
      "text": "Beaumont",
      "value": "Beaumont",
      "state": "California"
    }, {"text": "Beavercreek", "value": "Beavercreek", "state": "Ohio"}, {
      "text": "Beaverton",
      "value": "Beaverton",
      "state": "Oregon"
    }, {"text": "Bedford", "value": "Bedford", "state": "Texas"}, {
      "text": "Bel Air South",
      "value": "Bel Air South",
      "state": "Maryland"
    }, {"text": "Belleville", "value": "Belleville", "state": "Illinois"}, {
      "text": "Bellevue",
      "value": "Bellevue",
      "state": "Washington"
    }, {"text": "Bellevue", "value": "Bellevue", "state": "Nebraska"}, {
      "text": "Bellflower",
      "value": "Bellflower",
      "state": "California"
    }, {"text": "Bell Gardens", "value": "Bell Gardens", "state": "California"}, {
      "text": "Bellingham",
      "value": "Bellingham",
      "state": "Washington"
    }, {"text": "Bend", "value": "Bend", "state": "Oregon"}, {
      "text": "Berkeley",
      "value": "Berkeley",
      "state": "California"
    }, {"text": "Berwyn", "value": "Berwyn", "state": "Illinois"}, {
      "text": "Bethesda",
      "value": "Bethesda",
      "state": "Maryland"
    }, {"text": "Bethlehem", "value": "Bethlehem", "state": "Pennsylvania"}, {
      "text": "Billerica",
      "value": "Billerica",
      "state": "Massachusetts"
    }, {"text": "Billings", "value": "Billings", "state": "Montana"}, {
      "text": "Biloxi",
      "value": "Biloxi",
      "state": "Mississippi"
    }, {"text": "Binghamton", "value": "Binghamton", "state": "New York"}, {
      "text": "Birmingham",
      "value": "Birmingham",
      "state": "Alabama"
    }, {"text": "Bismarck", "value": "Bismarck", "state": "North Dakota"}, {
      "text": "Blacksburg",
      "value": "Blacksburg",
      "state": "Virginia"
    }, {"text": "Blaine", "value": "Blaine", "state": "Minnesota"}, {
      "text": "Bloomington",
      "value": "Bloomington",
      "state": "Minnesota"
    }, {"text": "Bloomington", "value": "Bloomington", "state": "Indiana"}, {
      "text": "Bloomington",
      "value": "Bloomington",
      "state": "Illinois"
    }, {"text": "Blue Springs", "value": "Blue Springs", "state": "Missouri"}, {
      "text": "Boca Raton",
      "value": "Boca Raton",
      "state": "Florida"
    }, {"text": "Boise City", "value": "Boise City", "state": "Idaho"}, {
      "text": "Bolingbrook",
      "value": "Bolingbrook",
      "state": "Illinois"
    }, {"text": "Bonita Springs", "value": "Bonita Springs", "state": "Florida"}, {
      "text": "Bossier City",
      "value": "Bossier City",
      "state": "Louisiana"
    }, {"text": "Boston", "value": "Boston", "state": "Massachusetts"}, {
      "text": "Boulder",
      "value": "Boulder",
      "state": "Colorado"
    }, {"text": "Bountiful", "value": "Bountiful", "state": "Utah"}, {
      "text": "Bowie",
      "value": "Bowie",
      "state": "Maryland"
    }, {"text": "Bowling Green", "value": "Bowling Green", "state": "Kentucky"}, {
      "text": "Boynton Beach",
      "value": "Boynton Beach",
      "state": "Florida"
    }, {"text": "Bradenton", "value": "Bradenton", "state": "Florida"}, {
      "text": "Brandon",
      "value": "Brandon",
      "state": "Florida"
    }, {"text": "Brentwood", "value": "Brentwood", "state": "New York"}, {
      "text": "Brentwood",
      "value": "Brentwood",
      "state": "California"
    }, {"text": "Bridgeport", "value": "Bridgeport", "state": "Connecticut"}, {
      "text": "Bristol",
      "value": "Bristol",
      "state": "Connecticut"
    }, {"text": "Brockton", "value": "Brockton", "state": "Massachusetts"}, {
      "text": "Broken Arrow",
      "value": "Broken Arrow",
      "state": "Oklahoma"
    }, {"text": "Brookline", "value": "Brookline", "state": "Massachusetts"}, {
      "text": "Brooklyn Park",
      "value": "Brooklyn Park",
      "state": "Minnesota"
    }, {"text": "Broomfield", "value": "Broomfield", "state": "Colorado"}, {
      "text": "Brownsville",
      "value": "Brownsville",
      "state": "Texas"
    }, {"text": "Bryan", "value": "Bryan", "state": "Texas"}, {
      "text": "Buckeye",
      "value": "Buckeye",
      "state": "Arizona"
    }, {"text": "Buena Park", "value": "Buena Park", "state": "California"}, {
      "text": "Buffalo",
      "value": "Buffalo",
      "state": "New York"
    }, {"text": "Buffalo Grove", "value": "Buffalo Grove", "state": "Illinois"}, {
      "text": "Bullhead City",
      "value": "Bullhead City",
      "state": "Arizona"
    }, {"text": "Burbank", "value": "Burbank", "state": "California"}, {
      "text": "Burlington",
      "value": "Burlington",
      "state": "North Carolina"
    }, {"text": "Burlington", "value": "Burlington", "state": "Vermont"}, {
      "text": "Burnsville",
      "value": "Burnsville",
      "state": "Minnesota"
    }, {"text": "Caldwell", "value": "Caldwell", "state": "Idaho"}, {
      "text": "Calexico",
      "value": "Calexico",
      "state": "California"
    }, {"text": "Camarillo", "value": "Camarillo", "state": "California"}, {
      "text": "Cambridge",
      "value": "Cambridge",
      "state": "Massachusetts"
    }, {"text": "Camden", "value": "Camden", "state": "New Jersey"}, {
      "text": "Canton",
      "value": "Canton",
      "state": "Ohio"
    }, {"text": "Cape Coral", "value": "Cape Coral", "state": "Florida"}, {
      "text": "Carlsbad",
      "value": "Carlsbad",
      "state": "California"
    }, {"text": "Carmel", "value": "Carmel", "state": "Indiana"}, {
      "text": "Carmichael",
      "value": "Carmichael",
      "state": "California"
    }, {"text": "Carrollton", "value": "Carrollton", "state": "Texas"}, {
      "text": "Carson",
      "value": "Carson",
      "state": "California"
    }, {"text": "Carson", "value": "Carson", "state": "Nevada"}, {
      "text": "Cary",
      "value": "Cary",
      "state": "North Carolina"
    }, {"text": "Casa Grande", "value": "Casa Grande", "state": "Arizona"}, {
      "text": "Casas Adobes",
      "value": "Casas Adobes",
      "state": "Arizona"
    }, {"text": "Casper", "value": "Casper", "state": "Wyoming"}, {
      "text": "Castle Rock",
      "value": "Castle Rock",
      "state": "Colorado"
    }, {"text": "Castro Valley", "value": "Castro Valley", "state": "California"}, {
      "text": "Catalina Foothills",
      "value": "Catalina Foothills",
      "state": "Arizona"
    }, {"text": "Cathedral City", "value": "Cathedral City", "state": "California"}, {
      "text": "Catonsville",
      "value": "Catonsville",
      "state": "Maryland"
    }, {"text": "Cedar Hill", "value": "Cedar Hill", "state": "Texas"}, {
      "text": "Cedar Park",
      "value": "Cedar Park",
      "state": "Texas"
    }, {"text": "Cedar Rapids", "value": "Cedar Rapids", "state": "Iowa"}, {
      "text": "Centennial",
      "value": "Centennial",
      "state": "Colorado"
    }, {"text": "Centerville", "value": "Centerville", "state": "Ohio"}, {
      "text": "Centreville",
      "value": "Centreville",
      "state": "Virginia"
    }, {"text": "Ceres", "value": "Ceres", "state": "California"}, {
      "text": "Cerritos",
      "value": "Cerritos",
      "state": "California"
    }, {"text": "Champaign", "value": "Champaign", "state": "Illinois"}, {
      "text": "Chandler",
      "value": "Chandler",
      "state": "Arizona"
    }, {"text": "Chapel Hill", "value": "Chapel Hill", "state": "North Carolina"}, {
      "text": "Charleston",
      "value": "Charleston",
      "state": "South Carolina"
    }, {"text": "Charleston", "value": "Charleston", "state": "West Virginia"}, {
      "text": "Charlotte",
      "value": "Charlotte",
      "state": "North Carolina"
    }, {"text": "Charlottesville", "value": "Charlottesville", "state": "Virginia"}, {
      "text": "Chattanooga",
      "value": "Chattanooga",
      "state": "Tennessee"
    }, {"text": "Cheektowaga", "value": "Cheektowaga", "state": "New York"}, {
      "text": "Chesapeake",
      "value": "Chesapeake",
      "state": "Virginia"
    }, {"text": "Chesterfield", "value": "Chesterfield", "state": "Missouri"}, {
      "text": "Cheyenne",
      "value": "Cheyenne",
      "state": "Wyoming"
    }, {"text": "Chicago", "value": "Chicago", "state": "Illinois"}, {
      "text": "Chico",
      "value": "Chico",
      "state": "California"
    }, {"text": "Chicopee", "value": "Chicopee", "state": "Massachusetts"}, {
      "text": "Chino",
      "value": "Chino",
      "state": "California"
    }, {"text": "Chino Hills", "value": "Chino Hills", "state": "California"}, {
      "text": "Chula Vista",
      "value": "Chula Vista",
      "state": "California"
    }, {"text": "Cicero", "value": "Cicero", "state": "Illinois"}, {
      "text": "Cincinnati",
      "value": "Cincinnati",
      "state": "Ohio"
    }, {"text": "Citrus Heights", "value": "Citrus Heights", "state": "California"}, {
      "text": "Clarksville",
      "value": "Clarksville",
      "state": "Tennessee"
    }, {"text": "Clearwater", "value": "Clearwater", "state": "Florida"}, {
      "text": "Cleveland",
      "value": "Cleveland",
      "state": "Ohio"
    }, {"text": "Cleveland", "value": "Cleveland", "state": "Tennessee"}, {
      "text": "Cleveland Heights",
      "value": "Cleveland Heights",
      "state": "Ohio"
    }, {"text": "Clifton", "value": "Clifton", "state": "New Jersey"}, {
      "text": "Clovis",
      "value": "Clovis",
      "state": "California"
    }, {"text": "Coachella", "value": "Coachella", "state": "California"}, {
      "text": "Coconut Creek",
      "value": "Coconut Creek",
      "state": "Florida"
    }, {"text": "Coeur d'Alene", "value": "Coeur d'Alene", "state": "Idaho"}, {
      "text": "College Station",
      "value": "College Station",
      "state": "Texas"
    }, {"text": "Collierville", "value": "Collierville", "state": "Tennessee"}, {
      "text": "Colorado Springs",
      "value": "Colorado Springs",
      "state": "Colorado"
    }, {"text": "Colton", "value": "Colton", "state": "California"}, {
      "text": "Columbia",
      "value": "Columbia",
      "state": "South Carolina"
    }, {"text": "Columbia", "value": "Columbia", "state": "Missouri"}, {
      "text": "Columbia",
      "value": "Columbia",
      "state": "Maryland"
    }, {"text": "Columbus", "value": "Columbus", "state": "Ohio"}, {
      "text": "Columbus",
      "value": "Columbus",
      "state": "Georgia"
    }, {"text": "Columbus", "value": "Columbus", "state": "Indiana"}, {
      "text": "Commerce City",
      "value": "Commerce City",
      "state": "Colorado"
    }, {"text": "Compton", "value": "Compton", "state": "California"}, {
      "text": "Concord",
      "value": "Concord",
      "state": "California"
    }, {"text": "Concord", "value": "Concord", "state": "North Carolina"}, {
      "text": "Concord",
      "value": "Concord",
      "state": "New Hampshire"
    }, {"text": "Conroe", "value": "Conroe", "state": "Texas"}, {
      "text": "Conway",
      "value": "Conway",
      "state": "Arkansas"
    }, {"text": "Coon Rapids", "value": "Coon Rapids", "state": "Minnesota"}, {
      "text": "Coral Gables",
      "value": "Coral Gables",
      "state": "Florida"
    }, {"text": "Coral Springs", "value": "Coral Springs", "state": "Florida"}, {
      "text": "Corona",
      "value": "Corona",
      "state": "California"
    }, {"text": "Corpus Christi", "value": "Corpus Christi", "state": "Texas"}, {
      "text": "Corvallis",
      "value": "Corvallis",
      "state": "Oregon"
    }, {"text": "Costa Mesa", "value": "Costa Mesa", "state": "California"}, {
      "text": "Council Bluffs",
      "value": "Council Bluffs",
      "state": "Iowa"
    }, {"text": "Country Club", "value": "Country Club", "state": "Florida"}, {
      "text": "Covina",
      "value": "Covina",
      "state": "California"
    }, {"text": "Cranston", "value": "Cranston", "state": "Rhode Island"}, {
      "text": "Crystal Lake",
      "value": "Crystal Lake",
      "state": "Illinois"
    }, {"text": "Cupertino", "value": "Cupertino", "state": "California"}, {
      "text": "Cutler Bay",
      "value": "Cutler Bay",
      "state": "Florida"
    }, {"text": "Cuyahoga Falls", "value": "Cuyahoga Falls", "state": "Ohio"}, {
      "text": "Cypress",
      "value": "Cypress",
      "state": "California"
    }, {"text": "Dale City", "value": "Dale City", "state": "Virginia"}, {
      "text": "Dallas",
      "value": "Dallas",
      "state": "Texas"
    }, {"text": "Daly City", "value": "Daly City", "state": "California"}, {
      "text": "Danbury",
      "value": "Danbury",
      "state": "Connecticut"
    }, {"text": "Danville", "value": "Danville", "state": "California"}, {
      "text": "Danville",
      "value": "Danville",
      "state": "Virginia"
    }, {"text": "Davenport", "value": "Davenport", "state": "Iowa"}, {
      "text": "Davie",
      "value": "Davie",
      "state": "Florida"
    }, {"text": "Davis", "value": "Davis", "state": "California"}, {
      "text": "Dayton",
      "value": "Dayton",
      "state": "Ohio"
    }, {"text": "Daytona Beach", "value": "Daytona Beach", "state": "Florida"}, {
      "text": "Dearborn",
      "value": "Dearborn",
      "state": "Michigan"
    }, {"text": "Dearborn Heights", "value": "Dearborn Heights", "state": "Michigan"}, {
      "text": "Decatur",
      "value": "Decatur",
      "state": "Illinois"
    }, {"text": "Decatur", "value": "Decatur", "state": "Alabama"}, {
      "text": "Deerfield Beach",
      "value": "Deerfield Beach",
      "state": "Florida"
    }, {"text": "DeKalb", "value": "DeKalb", "state": "Illinois"}, {
      "text": "Delano",
      "value": "Delano",
      "state": "California"
    }, {"text": "Delray Beach", "value": "Delray Beach", "state": "Florida"}, {
      "text": "Deltona",
      "value": "Deltona",
      "state": "Florida"
    }, {"text": "Denton", "value": "Denton", "state": "Texas"}, {
      "text": "Denver",
      "value": "Denver",
      "state": "Colorado"
    }, {"text": "Des Moines", "value": "Des Moines", "state": "Iowa"}, {
      "text": "DeSoto",
      "value": "DeSoto",
      "state": "Texas"
    }, {"text": "Des Plaines", "value": "Des Plaines", "state": "Illinois"}, {
      "text": "Detroit",
      "value": "Detroit",
      "state": "Michigan"
    }, {"text": "Diamond Bar", "value": "Diamond Bar", "state": "California"}, {
      "text": "Doral",
      "value": "Doral",
      "state": "Florida"
    }, {"text": "Dothan", "value": "Dothan", "state": "Alabama"}, {
      "text": "Downers Grove",
      "value": "Downers Grove",
      "state": "Illinois"
    }, {"text": "Downey", "value": "Downey", "state": "California"}, {
      "text": "Draper",
      "value": "Draper",
      "state": "Utah"
    }, {"text": "Dublin", "value": "Dublin", "state": "California"}, {
      "text": "Dublin",
      "value": "Dublin",
      "state": "Ohio"
    }, {"text": "Dubuque", "value": "Dubuque", "state": "Iowa"}, {
      "text": "Duluth",
      "value": "Duluth",
      "state": "Minnesota"
    }, {"text": "Dundalk", "value": "Dundalk", "state": "Maryland"}, {
      "text": "Dunwoody",
      "value": "Dunwoody",
      "state": "Georgia"
    }, {"text": "Durham", "value": "Durham", "state": "North Carolina"}, {
      "text": "Eagan",
      "value": "Eagan",
      "state": "Minnesota"
    }, {"text": "East Hartford", "value": "East Hartford", "state": "Connecticut"}, {
      "text": "East Honolulu",
      "value": "East Honolulu",
      "state": "Hawaii"
    }, {"text": "East Lansing", "value": "East Lansing", "state": "Michigan"}, {
      "text": "East Los Angeles",
      "value": "East Los Angeles",
      "state": "California"
    }, {"text": "East Orange", "value": "East Orange", "state": "New Jersey"}, {
      "text": "East Providence",
      "value": "East Providence",
      "state": "Rhode Island"
    }, {"text": "Eastvale", "value": "Eastvale", "state": "California"}, {
      "text": "Eau Claire",
      "value": "Eau Claire",
      "state": "Wisconsin"
    }, {"text": "Eden Prairie", "value": "Eden Prairie", "state": "Minnesota"}, {
      "text": "Edina",
      "value": "Edina",
      "state": "Minnesota"
    }, {"text": "Edinburg", "value": "Edinburg", "state": "Texas"}, {
      "text": "Edmond",
      "value": "Edmond",
      "state": "Oklahoma"
    }, {"text": "El Cajon", "value": "El Cajon", "state": "California"}, {
      "text": "El Centro",
      "value": "El Centro",
      "state": "California"
    }, {"text": "El Dorado Hills", "value": "El Dorado Hills", "state": "California"}, {
      "text": "Elgin",
      "value": "Elgin",
      "state": "Illinois"
    }, {"text": "Elizabeth", "value": "Elizabeth", "state": "New Jersey"}, {
      "text": "Elk Grove",
      "value": "Elk Grove",
      "state": "California"
    }, {"text": "Elkhart", "value": "Elkhart", "state": "Indiana"}, {
      "text": "Ellicott City",
      "value": "Ellicott City",
      "state": "Maryland"
    }, {"text": "Elmhurst", "value": "Elmhurst", "state": "Illinois"}, {
      "text": "El Monte",
      "value": "El Monte",
      "state": "California"
    }, {"text": "El Paso", "value": "El Paso", "state": "Texas"}, {
      "text": "Elyria",
      "value": "Elyria",
      "state": "Ohio"
    }, {"text": "Encinitas", "value": "Encinitas", "state": "California"}, {
      "text": "Enid",
      "value": "Enid",
      "state": "Oklahoma"
    }, {"text": "Enterprise", "value": "Enterprise", "state": "Nevada"}, {
      "text": "Erie",
      "value": "Erie",
      "state": "Pennsylvania"
    }, {"text": "Escondido", "value": "Escondido", "state": "California"}, {
      "text": "Euclid",
      "value": "Euclid",
      "state": "Ohio"
    }, {"text": "Eugene", "value": "Eugene", "state": "Oregon"}, {
      "text": "Euless",
      "value": "Euless",
      "state": "Texas"
    }, {"text": "Evanston", "value": "Evanston", "state": "Illinois"}, {
      "text": "Evansville",
      "value": "Evansville",
      "state": "Indiana"
    }, {"text": "Everett", "value": "Everett", "state": "Washington"}, {
      "text": "Everett",
      "value": "Everett",
      "state": "Massachusetts"
    }, {"text": "Fairfield", "value": "Fairfield", "state": "California"}, {
      "text": "Fairfield",
      "value": "Fairfield",
      "state": "Ohio"
    }, {"text": "Fall River", "value": "Fall River", "state": "Massachusetts"}, {
      "text": "Fargo",
      "value": "Fargo",
      "state": "North Dakota"
    }, {"text": "Farmington", "value": "Farmington", "state": "New Mexico"}, {
      "text": "Farmington Hills",
      "value": "Farmington Hills",
      "state": "Michigan"
    }, {"text": "Fayetteville", "value": "Fayetteville", "state": "North Carolina"}, {
      "text": "Fayetteville",
      "value": "Fayetteville",
      "state": "Arkansas"
    }, {"text": "Federal Way", "value": "Federal Way", "state": "Washington"}, {
      "text": "Findlay",
      "value": "Findlay",
      "state": "Ohio"
    }, {"text": "Fishers", "value": "Fishers", "state": "Indiana"}, {
      "text": "Flagstaff",
      "value": "Flagstaff",
      "state": "Arizona"
    }, {"text": "Flint", "value": "Flint", "state": "Michigan"}, {
      "text": "Florence-Graham",
      "value": "Florence-Graham",
      "state": "California"
    }, {"text": "Florin", "value": "Florin", "state": "California"}, {
      "text": "Florissant",
      "value": "Florissant",
      "state": "Missouri"
    }, {"text": "Flower Mound", "value": "Flower Mound", "state": "Texas"}, {
      "text": "Folsom",
      "value": "Folsom",
      "state": "California"
    }, {"text": "Fond du Lac", "value": "Fond du Lac", "state": "Wisconsin"}, {
      "text": "Fontana",
      "value": "Fontana",
      "state": "California"
    }, {"text": "Fort Collins", "value": "Fort Collins", "state": "Colorado"}, {
      "text": "Fort Lauderdale",
      "value": "Fort Lauderdale",
      "state": "Florida"
    }, {"text": "Fort Myers", "value": "Fort Myers", "state": "Florida"}, {
      "text": "Fort Pierce",
      "value": "Fort Pierce",
      "state": "Florida"
    }, {"text": "Fort Smith", "value": "Fort Smith", "state": "Arkansas"}, {
      "text": "Fort Wayne",
      "value": "Fort Wayne",
      "state": "Indiana"
    }, {"text": "Fort Worth", "value": "Fort Worth", "state": "Texas"}, {
      "text": "Fountainebleau",
      "value": "Fountainebleau",
      "state": "Florida"
    }, {"text": "Fountain Valley", "value": "Fountain Valley", "state": "California"}, {
      "text": "Framingham",
      "value": "Framingham",
      "state": "Massachusetts"
    }, {"text": "Franklin", "value": "Franklin", "state": "Tennessee"}, {
      "text": "Frederick",
      "value": "Frederick",
      "state": "Maryland"
    }, {"text": "Freeport", "value": "Freeport", "state": "New York"}, {
      "text": "Fremont",
      "value": "Fremont",
      "state": "California"
    }, {"text": "Fresno", "value": "Fresno", "state": "California"}, {
      "text": "Frisco",
      "value": "Frisco",
      "state": "Texas"
    }, {"text": "Fullerton", "value": "Fullerton", "state": "California"}, {
      "text": "Gainesville",
      "value": "Gainesville",
      "state": "Florida"
    }, {"text": "Gaithersburg", "value": "Gaithersburg", "state": "Maryland"}, {
      "text": "Galveston",
      "value": "Galveston",
      "state": "Texas"
    }, {"text": "Gardena", "value": "Gardena", "state": "California"}, {
      "text": "Garden Grove",
      "value": "Garden Grove",
      "state": "California"
    }, {"text": "Garland", "value": "Garland", "state": "Texas"}, {
      "text": "Gary",
      "value": "Gary",
      "state": "Indiana"
    }, {"text": "Gastonia", "value": "Gastonia", "state": "North Carolina"}, {
      "text": "Georgetown",
      "value": "Georgetown",
      "state": "Texas"
    }, {"text": "Germantown", "value": "Germantown", "state": "Maryland"}, {
      "text": "Gilbert",
      "value": "Gilbert",
      "state": "Arizona"
    }, {"text": "Gilroy", "value": "Gilroy", "state": "California"}, {
      "text": "Glen Burnie",
      "value": "Glen Burnie",
      "state": "Maryland"
    }, {"text": "Glendale", "value": "Glendale", "state": "Arizona"}, {
      "text": "Glendale",
      "value": "Glendale",
      "state": "California"
    }, {"text": "Glendora", "value": "Glendora", "state": "California"}, {
      "text": "Glenview",
      "value": "Glenview",
      "state": "Illinois"
    }, {"text": "Goodyear", "value": "Goodyear", "state": "Arizona"}, {
      "text": "Grand Forks",
      "value": "Grand Forks",
      "state": "North Dakota"
    }, {"text": "Grand Island", "value": "Grand Island", "state": "Nebraska"}, {
      "text": "Grand Junction",
      "value": "Grand Junction",
      "state": "Colorado"
    }, {"text": "Grand Prairie", "value": "Grand Prairie", "state": "Texas"}, {
      "text": "Grand Rapids",
      "value": "Grand Rapids",
      "state": "Michigan"
    }, {"text": "Grapevine", "value": "Grapevine", "state": "Texas"}, {
      "text": "Great Falls",
      "value": "Great Falls",
      "state": "Montana"
    }, {"text": "Greeley", "value": "Greeley", "state": "Colorado"}, {
      "text": "Green Bay",
      "value": "Green Bay",
      "state": "Wisconsin"
    }, {"text": "Greensboro", "value": "Greensboro", "state": "North Carolina"}, {
      "text": "Greenville",
      "value": "Greenville",
      "state": "North Carolina"
    }, {"text": "Greenville", "value": "Greenville", "state": "South Carolina"}, {
      "text": "Greenwood",
      "value": "Greenwood",
      "state": "Indiana"
    }, {"text": "Gresham", "value": "Gresham", "state": "Oregon"}, {
      "text": "Gulfport",
      "value": "Gulfport",
      "state": "Mississippi"
    }, {"text": "Hacienda Heights", "value": "Hacienda Heights", "state": "California"}, {
      "text": "Hackensack",
      "value": "Hackensack",
      "state": "New Jersey"
    }, {"text": "Haltom City", "value": "Haltom City", "state": "Texas"}, {
      "text": "Hamilton",
      "value": "Hamilton",
      "state": "Ohio"
    }, {"text": "Hammond", "value": "Hammond", "state": "Indiana"}, {
      "text": "Hampton",
      "value": "Hampton",
      "state": "Virginia"
    }, {"text": "Hanford", "value": "Hanford", "state": "California"}, {
      "text": "Harlingen",
      "value": "Harlingen",
      "state": "Texas"
    }, {"text": "Harrisburg", "value": "Harrisburg", "state": "Pennsylvania"}, {
      "text": "Harrisonburg",
      "value": "Harrisonburg",
      "state": "Virginia"
    }, {"text": "Hartford", "value": "Hartford", "state": "Connecticut"}, {
      "text": "Hattiesburg",
      "value": "Hattiesburg",
      "state": "Mississippi"
    }, {"text": "Haverhill", "value": "Haverhill", "state": "Massachusetts"}, {
      "text": "Hawthorne",
      "value": "Hawthorne",
      "state": "California"
    }, {"text": "Hayward", "value": "Hayward", "state": "California"}, {
      "text": "Hemet",
      "value": "Hemet",
      "state": "California"
    }, {"text": "Hempstead", "value": "Hempstead", "state": "New York"}, {
      "text": "Henderson",
      "value": "Henderson",
      "state": "Nevada"
    }, {"text": "Hendersonville", "value": "Hendersonville", "state": "Tennessee"}, {
      "text": "Hesperia",
      "value": "Hesperia",
      "state": "California"
    }, {"text": "Hialeah", "value": "Hialeah", "state": "Florida"}, {
      "text": "Hicksville",
      "value": "Hicksville",
      "state": "New York"
    }, {"text": "Highland", "value": "Highland", "state": "California"}, {
      "text": "Highlands Ranch",
      "value": "Highlands Ranch",
      "state": "Colorado"
    }, {"text": "High Point", "value": "High Point", "state": "North Carolina"}, {
      "text": "Hillsboro",
      "value": "Hillsboro",
      "state": "Oregon"
    }, {"text": "Hilo", "value": "Hilo", "state": "Hawaii"}, {
      "text": "Hoboken",
      "value": "Hoboken",
      "state": "New Jersey"
    }, {"text": "Hoffman Estates", "value": "Hoffman Estates", "state": "Illinois"}, {
      "text": "Hollywood",
      "value": "Hollywood",
      "state": "Florida"
    }, {"text": "Homestead", "value": "Homestead", "state": "Florida"}, {
      "text": "Honolulu",
      "value": "Honolulu",
      "state": "Hawaii"
    }, {"text": "Hoover", "value": "Hoover", "state": "Alabama"}, {
      "text": "Houston",
      "value": "Houston",
      "state": "Texas"
    }, {"text": "Huntersville", "value": "Huntersville", "state": "North Carolina"}, {
      "text": "Huntington",
      "value": "Huntington",
      "state": "West Virginia"
    }, {"text": "Huntington Beach", "value": "Huntington Beach", "state": "California"}, {
      "text": "Huntington Park",
      "value": "Huntington Park",
      "state": "California"
    }, {"text": "Huntsville", "value": "Huntsville", "state": "Alabama"}, {
      "text": "Hutchinson",
      "value": "Hutchinson",
      "state": "Kansas"
    }, {"text": "Idaho Falls", "value": "Idaho Falls", "state": "Idaho"}, {
      "text": "Independence",
      "value": "Independence",
      "state": "Missouri"
    }, {"text": "Indianapolis", "value": "Indianapolis", "state": "Indiana"}, {
      "text": "Indio",
      "value": "Indio",
      "state": "California"
    }, {"text": "Inglewood", "value": "Inglewood", "state": "California"}, {
      "text": "Iowa City",
      "value": "Iowa City",
      "state": "Iowa"
    }, {"text": "Irondequoit", "value": "Irondequoit", "state": "New York"}, {
      "text": "Irvine",
      "value": "Irvine",
      "state": "California"
    }, {"text": "Irving", "value": "Irving", "state": "Texas"}, {
      "text": "Jackson",
      "value": "Jackson",
      "state": "Mississippi"
    }, {"text": "Jackson", "value": "Jackson", "state": "Tennessee"}, {
      "text": "Jacksonville",
      "value": "Jacksonville",
      "state": "Florida"
    }, {"text": "Jacksonville", "value": "Jacksonville", "state": "North Carolina"}, {
      "text": "Janesville",
      "value": "Janesville",
      "state": "Wisconsin"
    }, {"text": "Jefferson City", "value": "Jefferson City", "state": "Missouri"}, {
      "text": "Jeffersonville",
      "value": "Jeffersonville",
      "state": "Indiana"
    }, {"text": "Jersey City", "value": "Jersey City", "state": "New Jersey"}, {
      "text": "Johns Creek",
      "value": "Johns Creek",
      "state": "Georgia"
    }, {"text": "Johnson City", "value": "Johnson City", "state": "Tennessee"}, {
      "text": "Joliet",
      "value": "Joliet",
      "state": "Illinois"
    }, {"text": "Jonesboro", "value": "Jonesboro", "state": "Arkansas"}, {
      "text": "Joplin",
      "value": "Joplin",
      "state": "Missouri"
    }, {"text": "Jupiter", "value": "Jupiter", "state": "Florida"}, {
      "text": "Kalamazoo",
      "value": "Kalamazoo",
      "state": "Michigan"
    }, {"text": "Kannapolis", "value": "Kannapolis", "state": "North Carolina"}, {
      "text": "Kansas City",
      "value": "Kansas City",
      "state": "Missouri"
    }, {"text": "Kansas City", "value": "Kansas City", "state": "Kansas"}, {
      "text": "Kearny",
      "value": "Kearny",
      "state": "New Jersey"
    }, {"text": "Keller", "value": "Keller", "state": "Texas"}, {
      "text": "Kendale Lakes",
      "value": "Kendale Lakes",
      "state": "Florida"
    }, {"text": "Kendall", "value": "Kendall", "state": "Florida"}, {
      "text": "Kenner",
      "value": "Kenner",
      "state": "Louisiana"
    }, {"text": "Kennewick", "value": "Kennewick", "state": "Washington"}, {
      "text": "Kenosha",
      "value": "Kenosha",
      "state": "Wisconsin"
    }, {"text": "Kent", "value": "Kent", "state": "Washington"}, {
      "text": "Kentwood",
      "value": "Kentwood",
      "state": "Michigan"
    }, {"text": "Kettering", "value": "Kettering", "state": "Ohio"}, {
      "text": "Killeen",
      "value": "Killeen",
      "state": "Texas"
    }, {"text": "Kingsport", "value": "Kingsport", "state": "Tennessee"}, {
      "text": "Kirkland",
      "value": "Kirkland",
      "state": "Washington"
    }, {"text": "Kissimmee", "value": "Kissimmee", "state": "Florida"}, {
      "text": "Knoxville",
      "value": "Knoxville",
      "state": "Tennessee"
    }, {"text": "Kokomo", "value": "Kokomo", "state": "Indiana"}, {
      "text": "Lacey",
      "value": "Lacey",
      "state": "Washington"
    }, {"text": "La Crosse", "value": "La Crosse", "state": "Wisconsin"}, {
      "text": "Lafayette",
      "value": "Lafayette",
      "state": "Louisiana"
    }, {"text": "Lafayette", "value": "Lafayette", "state": "Indiana"}, {
      "text": "Laguna Niguel",
      "value": "Laguna Niguel",
      "state": "California"
    }, {"text": "La Habra", "value": "La Habra", "state": "California"}, {
      "text": "Lake Charles",
      "value": "Lake Charles",
      "state": "Louisiana"
    }, {"text": "Lake Elsinore", "value": "Lake Elsinore", "state": "California"}, {
      "text": "Lake Forest",
      "value": "Lake Forest",
      "state": "California"
    }, {"text": "Lake Havasu City", "value": "Lake Havasu City", "state": "Arizona"}, {
      "text": "Lakeland",
      "value": "Lakeland",
      "state": "Florida"
    }, {"text": "Lake Ridge", "value": "Lake Ridge", "state": "Virginia"}, {
      "text": "Lakeville",
      "value": "Lakeville",
      "state": "Minnesota"
    }, {"text": "Lakewood", "value": "Lakewood", "state": "Colorado"}, {
      "text": "Lakewood",
      "value": "Lakewood",
      "state": "California"
    }, {"text": "Lakewood", "value": "Lakewood", "state": "Washington"}, {
      "text": "Lakewood",
      "value": "Lakewood",
      "state": "New Jersey"
    }, {"text": "Lakewood", "value": "Lakewood", "state": "Ohio"}, {
      "text": "La Mesa",
      "value": "La Mesa",
      "state": "California"
    }, {"text": "La Mirada", "value": "La Mirada", "state": "California"}, {
      "text": "Lancaster",
      "value": "Lancaster",
      "state": "California"
    }, {"text": "Lancaster", "value": "Lancaster", "state": "Pennsylvania"}, {
      "text": "Lansing",
      "value": "Lansing",
      "state": "Michigan"
    }, {"text": "La Quinta", "value": "La Quinta", "state": "California"}, {
      "text": "Laredo",
      "value": "Laredo",
      "state": "Texas"
    }, {"text": "Largo", "value": "Largo", "state": "Florida"}, {
      "text": "Las Cruces",
      "value": "Las Cruces",
      "state": "New Mexico"
    }, {"text": "Las Vegas", "value": "Las Vegas", "state": "Nevada"}, {
      "text": "Lauderhill",
      "value": "Lauderhill",
      "state": "Florida"
    }, {"text": "Lawrence", "value": "Lawrence", "state": "Kansas"}, {
      "text": "Lawrence",
      "value": "Lawrence",
      "state": "Massachusetts"
    }, {"text": "Lawrence", "value": "Lawrence", "state": "Indiana"}, {
      "text": "Lawton",
      "value": "Lawton",
      "state": "Oklahoma"
    }, {"text": "Layton", "value": "Layton", "state": "Utah"}, {
      "text": "League City",
      "value": "League City",
      "state": "Texas"
    }, {"text": "Leesburg", "value": "Leesburg", "state": "Virginia"}, {
      "text": "Lee's Summit",
      "value": "Lee's Summit",
      "state": "Missouri"
    }, {"text": "Lehi", "value": "Lehi", "state": "Utah"}, {
      "text": "Lehigh Acres",
      "value": "Lehigh Acres",
      "state": "Florida"
    }, {"text": "Lenexa", "value": "Lenexa", "state": "Kansas"}, {
      "text": "Levittown",
      "value": "Levittown",
      "state": "Pennsylvania"
    }, {"text": "Levittown", "value": "Levittown", "state": "New York"}, {
      "text": "Lewisville",
      "value": "Lewisville",
      "state": "Texas"
    }, {"text": "Lexington", "value": "Lexington", "state": "Kentucky"}, {
      "text": "Lincoln",
      "value": "Lincoln",
      "state": "Nebraska"
    }, {"text": "Lincoln", "value": "Lincoln", "state": "California"}, {
      "text": "Linton Hall",
      "value": "Linton Hall",
      "state": "Virginia"
    }, {"text": "Little Rock", "value": "Little Rock", "state": "Arkansas"}, {
      "text": "Littleton",
      "value": "Littleton",
      "state": "Colorado"
    }, {"text": "Livermore", "value": "Livermore", "state": "California"}, {
      "text": "Livonia",
      "value": "Livonia",
      "state": "Michigan"
    }, {"text": "Lodi", "value": "Lodi", "state": "California"}, {
      "text": "Logan",
      "value": "Logan",
      "state": "Utah"
    }, {"text": "Lombard", "value": "Lombard", "state": "Illinois"}, {
      "text": "Lompoc",
      "value": "Lompoc",
      "state": "California"
    }, {"text": "Long Beach", "value": "Long Beach", "state": "California"}, {
      "text": "Longmont",
      "value": "Longmont",
      "state": "Colorado"
    }, {"text": "Longview", "value": "Longview", "state": "Texas"}, {
      "text": "Lorain",
      "value": "Lorain",
      "state": "Ohio"
    }, {"text": "Los Angeles", "value": "Los Angeles", "state": "California"}, {
      "text": "Louisville",
      "value": "Louisville",
      "state": "Kentucky"
    }, {"text": "Loveland", "value": "Loveland", "state": "Colorado"}, {
      "text": "Lowell",
      "value": "Lowell",
      "state": "Massachusetts"
    }, {"text": "Lubbock", "value": "Lubbock", "state": "Texas"}, {
      "text": "Lynchburg",
      "value": "Lynchburg",
      "state": "Virginia"
    }, {"text": "Lynn", "value": "Lynn", "state": "Massachusetts"}, {
      "text": "Lynwood",
      "value": "Lynwood",
      "state": "California"
    }, {"text": "MacAllen", "value": "MacAllen", "state": "Texas"}, {
      "text": "MacKinney",
      "value": "MacKinney",
      "state": "Texas"
    }, {"text": "MacLean", "value": "MacLean", "state": "Virginia"}, {
      "text": "Macon",
      "value": "Macon",
      "state": "Georgia"
    }, {"text": "Madera", "value": "Madera", "state": "California"}, {
      "text": "Madison",
      "value": "Madison",
      "state": "Wisconsin"
    }, {"text": "Madison", "value": "Madison", "state": "Alabama"}, {
      "text": "Malden",
      "value": "Malden",
      "state": "Massachusetts"
    }, {"text": "Manchester", "value": "Manchester", "state": "New Hampshire"}, {
      "text": "Manhattan",
      "value": "Manhattan",
      "state": "Kansas"
    }, {"text": "Mansfield", "value": "Mansfield", "state": "Texas"}, {
      "text": "Mansfield",
      "value": "Mansfield",
      "state": "Ohio"
    }, {"text": "Manteca", "value": "Manteca", "state": "California"}, {
      "text": "Maple Grove",
      "value": "Maple Grove",
      "state": "Minnesota"
    }, {"text": "Margate", "value": "Margate", "state": "Florida"}, {
      "text": "Maricopa",
      "value": "Maricopa",
      "state": "Arizona"
    }, {"text": "Marietta", "value": "Marietta", "state": "Georgia"}, {
      "text": "Marysville",
      "value": "Marysville",
      "state": "Washington"
    }, {"text": "Medford", "value": "Medford", "state": "Oregon"}, {
      "text": "Medford",
      "value": "Medford",
      "state": "Massachusetts"
    }, {"text": "Melbourne", "value": "Melbourne", "state": "Florida"}, {
      "text": "Memphis",
      "value": "Memphis",
      "state": "Tennessee"
    }, {"text": "Menifee", "value": "Menifee", "state": "California"}, {
      "text": "Mentor",
      "value": "Mentor",
      "state": "Ohio"
    }, {"text": "Merced", "value": "Merced", "state": "California"}, {
      "text": "Meriden",
      "value": "Meriden",
      "state": "Connecticut"
    }, {"text": "Meridian", "value": "Meridian", "state": "Idaho"}, {
      "text": "Meridian",
      "value": "Meridian",
      "state": "Mississippi"
    }, {"text": "Mesa", "value": "Mesa", "state": "Arizona"}, {
      "text": "Mesquite",
      "value": "Mesquite",
      "state": "Texas"
    }, {"text": "Metairie", "value": "Metairie", "state": "Louisiana"}, {
      "text": "Methuen",
      "value": "Methuen",
      "state": "Massachusetts"
    }, {"text": "Methuen Town", "value": "Methuen Town", "state": "Massachusetts"}, {
      "text": "Miami",
      "value": "Miami",
      "state": "Florida"
    }, {"text": "Miami Beach", "value": "Miami Beach", "state": "Florida"}, {
      "text": "Miami Gardens",
      "value": "Miami Gardens",
      "state": "Florida"
    }, {"text": "Middletown", "value": "Middletown", "state": "Ohio"}, {
      "text": "Middletown",
      "value": "Middletown",
      "state": "Connecticut"
    }, {"text": "Midland", "value": "Midland", "state": "Texas"}, {
      "text": "Midland",
      "value": "Midland",
      "state": "Michigan"
    }, {"text": "Midwest City", "value": "Midwest City", "state": "Oklahoma"}, {
      "text": "Milford",
      "value": "Milford",
      "state": "Connecticut"
    }, {"text": "Millcreek", "value": "Millcreek", "state": "Utah"}, {
      "text": "Milpitas",
      "value": "Milpitas",
      "state": "California"
    }, {"text": "Milwaukee", "value": "Milwaukee", "state": "Wisconsin"}, {
      "text": "Minneapolis",
      "value": "Minneapolis",
      "state": "Minnesota"
    }, {"text": "Minnetonka", "value": "Minnetonka", "state": "Minnesota"}, {
      "text": "Minot",
      "value": "Minot",
      "state": "North Dakota"
    }, {"text": "Miramar", "value": "Miramar", "state": "Florida"}, {
      "text": "Mishawaka",
      "value": "Mishawaka",
      "state": "Indiana"
    }, {"text": "Mission", "value": "Mission", "state": "Texas"}, {
      "text": "Mission Viejo",
      "value": "Mission Viejo",
      "state": "California"
    }, {"text": "Missoula", "value": "Missoula", "state": "Montana"}, {
      "text": "Missouri City",
      "value": "Missouri City",
      "state": "Texas"
    }, {"text": "Mobile", "value": "Mobile", "state": "Alabama"}, {
      "text": "Modesto",
      "value": "Modesto",
      "state": "California"
    }, {"text": "Moline", "value": "Moline", "state": "Illinois"}, {
      "text": "Monroe",
      "value": "Monroe",
      "state": "Louisiana"
    }, {"text": "Montebello", "value": "Montebello", "state": "California"}, {
      "text": "Monterey Park",
      "value": "Monterey Park",
      "state": "California"
    }, {"text": "Montgomery", "value": "Montgomery", "state": "Alabama"}, {
      "text": "Moore",
      "value": "Moore",
      "state": "Oklahoma"
    }, {"text": "Moreno Valley", "value": "Moreno Valley", "state": "California"}, {
      "text": "Mountain View",
      "value": "Mountain View",
      "state": "California"
    }, {"text": "Mount Pleasant", "value": "Mount Pleasant", "state": "South Carolina"}, {
      "text": "Mount Prospect",
      "value": "Mount Prospect",
      "state": "Illinois"
    }, {"text": "Mount Vernon", "value": "Mount Vernon", "state": "New York"}, {
      "text": "Muncie",
      "value": "Muncie",
      "state": "Indiana"
    }, {"text": "Murfreesboro", "value": "Murfreesboro", "state": "Tennessee"}, {
      "text": "Murray",
      "value": "Murray",
      "state": "Utah"
    }, {"text": "Murrieta", "value": "Murrieta", "state": "California"}, {
      "text": "Nampa",
      "value": "Nampa",
      "state": "Idaho"
    }, {"text": "Napa", "value": "Napa", "state": "California"}, {
      "text": "Naperville",
      "value": "Naperville",
      "state": "Illinois"
    }, {"text": "Nashua", "value": "Nashua", "state": "New Hampshire"}, {
      "text": "Nashville",
      "value": "Nashville",
      "state": "Tennessee"
    }, {"text": "National City", "value": "National City", "state": "California"}, {
      "text": "Newark",
      "value": "Newark",
      "state": "New Jersey"
    }, {"text": "Newark", "value": "Newark", "state": "Ohio"}, {
      "text": "Newark",
      "value": "Newark",
      "state": "California"
    }, {"text": "New Bedford", "value": "New Bedford", "state": "Massachusetts"}, {
      "text": "New Braunfels",
      "value": "New Braunfels",
      "state": "Texas"
    }, {"text": "New Britain", "value": "New Britain", "state": "Connecticut"}, {
      "text": "New Brunswick",
      "value": "New Brunswick",
      "state": "New Jersey"
    }, {"text": "New Haven", "value": "New Haven", "state": "Connecticut"}, {
      "text": "New Orleans",
      "value": "New Orleans",
      "state": "Louisiana"
    }, {"text": "Newport Beach", "value": "Newport Beach", "state": "California"}, {
      "text": "Newport News",
      "value": "Newport News",
      "state": "Virginia"
    }, {"text": "New Rochelle", "value": "New Rochelle", "state": "New York"}, {
      "text": "Newton",
      "value": "Newton",
      "state": "Massachusetts"
    }, {"text": "New York", "value": "New York", "state": "New York"}, {
      "text": "Niagara Falls",
      "value": "Niagara Falls",
      "state": "New York"
    }, {"text": "Noblesville", "value": "Noblesville", "state": "Indiana"}, {
      "text": "Norfolk",
      "value": "Norfolk",
      "state": "Virginia"
    }, {"text": "Normal", "value": "Normal", "state": "Illinois"}, {
      "text": "Norman",
      "value": "Norman",
      "state": "Oklahoma"
    }, {"text": "North Atlanta", "value": "North Atlanta", "state": "Georgia"}, {
      "text": "North Attleborough",
      "value": "North Attleborough",
      "state": "Massachusetts"
    }, {"text": "North Bethesda", "value": "North Bethesda", "state": "Maryland"}, {
      "text": "North Charleston",
      "value": "North Charleston",
      "state": "South Carolina"
    }, {"text": "North Highlands", "value": "North Highlands", "state": "California"}, {
      "text": "North Las Vegas",
      "value": "North Las Vegas",
      "state": "Nevada"
    }, {"text": "North Lauderdale", "value": "North Lauderdale", "state": "Florida"}, {
      "text": "North Little Rock",
      "value": "North Little Rock",
      "state": "Arkansas"
    }, {"text": "North Miami", "value": "North Miami", "state": "Florida"}, {
      "text": "North Miami Beach",
      "value": "North Miami Beach",
      "state": "Florida"
    }, {"text": "North Port", "value": "North Port", "state": "Florida"}, {
      "text": "North Richland Hills",
      "value": "North Richland Hills",
      "state": "Texas"
    }, {"text": "Norwalk", "value": "Norwalk", "state": "California"}, {
      "text": "Norwalk",
      "value": "Norwalk",
      "state": "Connecticut"
    }, {"text": "Norwich", "value": "Norwich", "state": "Connecticut"}, {
      "text": "Novato",
      "value": "Novato",
      "state": "California"
    }, {"text": "Novi", "value": "Novi", "state": "Michigan"}, {
      "text": "Oakland",
      "value": "Oakland",
      "state": "California"
    }, {"text": "Oakland Park", "value": "Oakland Park", "state": "Florida"}, {
      "text": "Oak Lawn",
      "value": "Oak Lawn",
      "state": "Illinois"
    }, {"text": "Oak Park", "value": "Oak Park", "state": "Illinois"}, {
      "text": "Ocala",
      "value": "Ocala",
      "state": "Florida"
    }, {"text": "Oceanside", "value": "Oceanside", "state": "California"}, {
      "text": "Odenton",
      "value": "Odenton",
      "state": "Maryland"
    }, {"text": "Odessa", "value": "Odessa", "state": "Texas"}, {
      "text": "O'Fallon",
      "value": "O'Fallon",
      "state": "Missouri"
    }, {"text": "Ogden", "value": "Ogden", "state": "Utah"}, {
      "text": "Oklahoma City",
      "value": "Oklahoma City",
      "state": "Oklahoma"
    }, {"text": "Olathe", "value": "Olathe", "state": "Kansas"}, {
      "text": "Olympia",
      "value": "Olympia",
      "state": "Washington"
    }, {"text": "Omaha", "value": "Omaha", "state": "Nebraska"}, {
      "text": "Ontario",
      "value": "Ontario",
      "state": "California"
    }, {"text": "Orange", "value": "Orange", "state": "California"}, {
      "text": "Orem",
      "value": "Orem",
      "state": "Utah"
    }, {"text": "Orlando", "value": "Orlando", "state": "Florida"}, {
      "text": "Orland Park",
      "value": "Orland Park",
      "state": "Illinois"
    }, {"text": "Oro Valley", "value": "Oro Valley", "state": "Arizona"}, {
      "text": "Oshkosh",
      "value": "Oshkosh",
      "state": "Wisconsin"
    }, {"text": "Overland Park", "value": "Overland Park", "state": "Kansas"}, {
      "text": "Owensboro",
      "value": "Owensboro",
      "state": "Kentucky"
    }, {"text": "Oxnard", "value": "Oxnard", "state": "California"}, {
      "text": "Palatine",
      "value": "Palatine",
      "state": "Illinois"
    }, {"text": "Palm Bay", "value": "Palm Bay", "state": "Florida"}, {
      "text": "Palm Beach Gardens",
      "value": "Palm Beach Gardens",
      "state": "Florida"
    }, {"text": "Palm Coast", "value": "Palm Coast", "state": "Florida"}, {
      "text": "Palmdale",
      "value": "Palmdale",
      "state": "California"
    }, {"text": "Palm Desert", "value": "Palm Desert", "state": "California"}, {
      "text": "Palm Harbor",
      "value": "Palm Harbor",
      "state": "Florida"
    }, {"text": "Palm Springs", "value": "Palm Springs", "state": "California"}, {
      "text": "Palo Alto",
      "value": "Palo Alto",
      "state": "California"
    }, {"text": "Paradise", "value": "Paradise", "state": "Nevada"}, {
      "text": "Paramount",
      "value": "Paramount",
      "state": "California"
    }, {"text": "Parker", "value": "Parker", "state": "Colorado"}, {
      "text": "Parma",
      "value": "Parma",
      "state": "Ohio"
    }, {"text": "Pasadena", "value": "Pasadena", "state": "Texas"}, {
      "text": "Pasadena",
      "value": "Pasadena",
      "state": "California"
    }, {"text": "Pasco", "value": "Pasco", "state": "Washington"}, {
      "text": "Passaic",
      "value": "Passaic",
      "state": "New Jersey"
    }, {"text": "Paterson", "value": "Paterson", "state": "New Jersey"}, {
      "text": "Pawtucket",
      "value": "Pawtucket",
      "state": "Rhode Island"
    }, {"text": "Peabody", "value": "Peabody", "state": "Massachusetts"}, {
      "text": "Pearland",
      "value": "Pearland",
      "state": "Texas"
    }, {"text": "Pearl City", "value": "Pearl City", "state": "Hawaii"}, {
      "text": "Pembroke Pines",
      "value": "Pembroke Pines",
      "state": "Florida"
    }, {"text": "Pensacola", "value": "Pensacola", "state": "Florida"}, {
      "text": "Peoria",
      "value": "Peoria",
      "state": "Arizona"
    }, {"text": "Peoria", "value": "Peoria", "state": "Illinois"}, {
      "text": "Perris",
      "value": "Perris",
      "state": "California"
    }, {"text": "Perth Amboy", "value": "Perth Amboy", "state": "New Jersey"}, {
      "text": "Petaluma",
      "value": "Petaluma",
      "state": "California"
    }, {"text": "Pflugerville", "value": "Pflugerville", "state": "Texas"}, {
      "text": "Pharr",
      "value": "Pharr",
      "state": "Texas"
    }, {"text": "Philadelphia", "value": "Philadelphia", "state": "Pennsylvania"}, {
      "text": "Phoenix",
      "value": "Phoenix",
      "state": "Arizona"
    }, {"text": "Pico Rivera", "value": "Pico Rivera", "state": "California"}, {
      "text": "Pine Bluff",
      "value": "Pine Bluff",
      "state": "Arkansas"
    }, {"text": "Pine Hills", "value": "Pine Hills", "state": "Florida"}, {
      "text": "Pinellas Park",
      "value": "Pinellas Park",
      "state": "Florida"
    }, {"text": "Pittsburg", "value": "Pittsburg", "state": "California"}, {
      "text": "Pittsburgh",
      "value": "Pittsburgh",
      "state": "Pennsylvania"
    }, {"text": "Pittsfield", "value": "Pittsfield", "state": "Massachusetts"}, {
      "text": "Placentia",
      "value": "Placentia",
      "state": "California"
    }, {"text": "Plainfield", "value": "Plainfield", "state": "New Jersey"}, {
      "text": "Plainfield",
      "value": "Plainfield",
      "state": "Illinois"
    }, {"text": "Plano", "value": "Plano", "state": "Texas"}, {
      "text": "Plantation",
      "value": "Plantation",
      "state": "Florida"
    }, {"text": "Pleasanton", "value": "Pleasanton", "state": "California"}, {
      "text": "Plymouth",
      "value": "Plymouth",
      "state": "Minnesota"
    }, {"text": "Pocatello", "value": "Pocatello", "state": "Idaho"}, {
      "text": "Poinciana",
      "value": "Poinciana",
      "state": "Florida"
    }, {"text": "Pomona", "value": "Pomona", "state": "California"}, {
      "text": "Pompano Beach",
      "value": "Pompano Beach",
      "state": "Florida"
    }, {"text": "Pontiac", "value": "Pontiac", "state": "Michigan"}, {
      "text": "Portage",
      "value": "Portage",
      "state": "Michigan"
    }, {"text": "Port Arthur", "value": "Port Arthur", "state": "Texas"}, {
      "text": "Port Charlotte",
      "value": "Port Charlotte",
      "state": "Florida"
    }, {"text": "Porterville", "value": "Porterville", "state": "California"}, {
      "text": "Portland",
      "value": "Portland",
      "state": "Oregon"
    }, {"text": "Portland", "value": "Portland", "state": "Maine"}, {
      "text": "Port Orange",
      "value": "Port Orange",
      "state": "Florida"
    }, {"text": "Port Saint Lucie", "value": "Port Saint Lucie", "state": "Florida"}, {
      "text": "Portsmouth",
      "value": "Portsmouth",
      "state": "Virginia"
    }, {"text": "Potomac", "value": "Potomac", "state": "Maryland"}, {
      "text": "Poway",
      "value": "Poway",
      "state": "California"
    }, {"text": "Prescott", "value": "Prescott", "state": "Arizona"}, {
      "text": "Prescott Valley",
      "value": "Prescott Valley",
      "state": "Arizona"
    }, {"text": "Providence", "value": "Providence", "state": "Rhode Island"}, {
      "text": "Provo",
      "value": "Provo",
      "state": "Utah"
    }, {"text": "Pueblo", "value": "Pueblo", "state": "Colorado"}, {
      "text": "Quincy",
      "value": "Quincy",
      "state": "Massachusetts"
    }, {"text": "Racine", "value": "Racine", "state": "Wisconsin"}, {
      "text": "Raleigh",
      "value": "Raleigh",
      "state": "North Carolina"
    }, {"text": "Rancho Cordova", "value": "Rancho Cordova", "state": "California"}, {
      "text": "Rancho Cucamonga",
      "value": "Rancho Cucamonga",
      "state": "California"
    }, {
      "text": "Rancho Palos Verdes",
      "value": "Rancho Palos Verdes",
      "state": "California"
    }, {
      "text": "Rancho Santa Margarita",
      "value": "Rancho Santa Margarita",
      "state": "California"
    }, {"text": "Rapid City", "value": "Rapid City", "state": "South Dakota"}, {
      "text": "Reading",
      "value": "Reading",
      "state": "Pennsylvania"
    }, {"text": "Redding", "value": "Redding", "state": "California"}, {
      "text": "Redlands",
      "value": "Redlands",
      "state": "California"
    }, {"text": "Redmond", "value": "Redmond", "state": "Washington"}, {
      "text": "Redondo Beach",
      "value": "Redondo Beach",
      "state": "California"
    }, {"text": "Redwood City", "value": "Redwood City", "state": "California"}, {
      "text": "Reno",
      "value": "Reno",
      "state": "Nevada"
    }, {"text": "Renton", "value": "Renton", "state": "Washington"}, {
      "text": "Reston",
      "value": "Reston",
      "state": "Virginia"
    }, {"text": "Revere", "value": "Revere", "state": "Massachusetts"}, {
      "text": "Rialto",
      "value": "Rialto",
      "state": "California"
    }, {"text": "Richardson", "value": "Richardson", "state": "Texas"}, {
      "text": "Richland",
      "value": "Richland",
      "state": "Washington"
    }, {"text": "Richmond", "value": "Richmond", "state": "Virginia"}, {
      "text": "Richmond",
      "value": "Richmond",
      "state": "California"
    }, {"text": "Rio Rancho", "value": "Rio Rancho", "state": "New Mexico"}, {
      "text": "Riverside",
      "value": "Riverside",
      "state": "California"
    }, {"text": "Riverton", "value": "Riverton", "state": "Utah"}, {
      "text": "Riverview",
      "value": "Riverview",
      "state": "Florida"
    }, {"text": "Roanoke", "value": "Roanoke", "state": "Virginia"}, {
      "text": "Rochester",
      "value": "Rochester",
      "state": "New York"
    }, {"text": "Rochester", "value": "Rochester", "state": "Minnesota"}, {
      "text": "Rochester Hills",
      "value": "Rochester Hills",
      "state": "Michigan"
    }, {"text": "Rockford", "value": "Rockford", "state": "Illinois"}, {
      "text": "Rock Hill",
      "value": "Rock Hill",
      "state": "South Carolina"
    }, {"text": "Rocklin", "value": "Rocklin", "state": "California"}, {
      "text": "Rockville",
      "value": "Rockville",
      "state": "Maryland"
    }, {"text": "Rockwall", "value": "Rockwall", "state": "Texas"}, {
      "text": "Rocky Mount",
      "value": "Rocky Mount",
      "state": "North Carolina"
    }, {"text": "Rogers", "value": "Rogers", "state": "Arkansas"}, {
      "text": "Rohnert Park",
      "value": "Rohnert Park",
      "state": "California"
    }, {"text": "Romeoville", "value": "Romeoville", "state": "Illinois"}, {
      "text": "Rosemead",
      "value": "Rosemead",
      "state": "California"
    }, {"text": "Roseville", "value": "Roseville", "state": "California"}, {
      "text": "Roseville",
      "value": "Roseville",
      "state": "Michigan"
    }, {"text": "Roswell", "value": "Roswell", "state": "Georgia"}, {
      "text": "Roswell",
      "value": "Roswell",
      "state": "New Mexico"
    }, {"text": "Round Rock", "value": "Round Rock", "state": "Texas"}, {
      "text": "Rowland Heights",
      "value": "Rowland Heights",
      "state": "California"
    }, {"text": "Rowlett", "value": "Rowlett", "state": "Texas"}, {
      "text": "Royal Oak",
      "value": "Royal Oak",
      "state": "Michigan"
    }, {"text": "Sacramento", "value": "Sacramento", "state": "California"}, {
      "text": "Saginaw",
      "value": "Saginaw",
      "state": "Michigan"
    }, {"text": "Saint Charles", "value": "Saint Charles", "state": "Missouri"}, {
      "text": "Saint Clair Shores",
      "value": "Saint Clair Shores",
      "state": "Michigan"
    }, {"text": "Saint Cloud", "value": "Saint Cloud", "state": "Minnesota"}, {
      "text": "Saint George",
      "value": "Saint George",
      "state": "Utah"
    }, {"text": "Saint Joseph", "value": "Saint Joseph", "state": "Missouri"}, {
      "text": "Saint Louis",
      "value": "Saint Louis",
      "state": "Missouri"
    }, {"text": "Saint Louis Park", "value": "Saint Louis Park", "state": "Minnesota"}, {
      "text": "Saint Paul",
      "value": "Saint Paul",
      "state": "Minnesota"
    }, {"text": "Saint Peters", "value": "Saint Peters", "state": "Missouri"}, {
      "text": "Saint Petersburg",
      "value": "Saint Petersburg",
      "state": "Florida"
    }, {"text": "Salem", "value": "Salem", "state": "Oregon"}, {
      "text": "Salem",
      "value": "Salem",
      "state": "Massachusetts"
    }, {"text": "Salina", "value": "Salina", "state": "Kansas"}, {
      "text": "Salinas",
      "value": "Salinas",
      "state": "California"
    }, {"text": "Salt Lake City", "value": "Salt Lake City", "state": "Utah"}, {
      "text": "Sammamish",
      "value": "Sammamish",
      "state": "Washington"
    }, {"text": "San Angelo", "value": "San Angelo", "state": "Texas"}, {
      "text": "San Antonio",
      "value": "San Antonio",
      "state": "Texas"
    }, {"text": "San Bernardino", "value": "San Bernardino", "state": "California"}, {
      "text": "San Bruno",
      "value": "San Bruno",
      "state": "California"
    }, {"text": "San Buenaventura", "value": "San Buenaventura", "state": "California"}, {
      "text": "San Clemente",
      "value": "San Clemente",
      "state": "California"
    }, {"text": "San Diego", "value": "San Diego", "state": "California"}, {
      "text": "Sandy",
      "value": "Sandy",
      "state": "Utah"
    }, {"text": "Sandy Springs", "value": "Sandy Springs", "state": "Georgia"}, {
      "text": "Sanford",
      "value": "Sanford",
      "state": "Florida"
    }, {"text": "San Francisco", "value": "San Francisco", "state": "California"}, {
      "text": "San Jacinto",
      "value": "San Jacinto",
      "state": "California"
    }, {"text": "San Jose", "value": "San Jose", "state": "California"}, {
      "text": "San Leandro",
      "value": "San Leandro",
      "state": "California"
    }, {"text": "San Luis Obispo", "value": "San Luis Obispo", "state": "California"}, {
      "text": "San Marcos",
      "value": "San Marcos",
      "state": "California"
    }, {"text": "San Marcos", "value": "San Marcos", "state": "Texas"}, {
      "text": "San Mateo",
      "value": "San Mateo",
      "state": "California"
    }, {"text": "San Rafael", "value": "San Rafael", "state": "California"}, {
      "text": "San Ramon",
      "value": "San Ramon",
      "state": "California"
    }, {"text": "Santa Ana", "value": "Santa Ana", "state": "California"}, {
      "text": "Santa Barbara",
      "value": "Santa Barbara",
      "state": "California"
    }, {"text": "Santa Clara", "value": "Santa Clara", "state": "California"}, {
      "text": "Santa Clarita",
      "value": "Santa Clarita",
      "state": "California"
    }, {"text": "Santa Cruz", "value": "Santa Cruz", "state": "California"}, {
      "text": "Santa Fe",
      "value": "Santa Fe",
      "state": "New Mexico"
    }, {"text": "Santa Maria", "value": "Santa Maria", "state": "California"}, {
      "text": "Santa Monica",
      "value": "Santa Monica",
      "state": "California"
    }, {"text": "San Tan Valley", "value": "San Tan Valley", "state": "Arizona"}, {
      "text": "Santa Rosa",
      "value": "Santa Rosa",
      "state": "California"
    }, {"text": "Santee", "value": "Santee", "state": "California"}, {
      "text": "Sarasota",
      "value": "Sarasota",
      "state": "Florida"
    }, {"text": "Savannah", "value": "Savannah", "state": "Georgia"}, {
      "text": "Sayreville",
      "value": "Sayreville",
      "state": "New Jersey"
    }, {"text": "Schaumburg", "value": "Schaumburg", "state": "Illinois"}, {
      "text": "Schenectady",
      "value": "Schenectady",
      "state": "New York"
    }, {"text": "Scottsdale", "value": "Scottsdale", "state": "Arizona"}, {
      "text": "Scranton",
      "value": "Scranton",
      "state": "Pennsylvania"
    }, {"text": "Seattle", "value": "Seattle", "state": "Washington"}, {
      "text": "Severn",
      "value": "Severn",
      "state": "Maryland"
    }, {"text": "Shakopee", "value": "Shakopee", "state": "Minnesota"}, {
      "text": "Shawnee",
      "value": "Shawnee",
      "state": "Kansas"
    }, {"text": "Sheboygan", "value": "Sheboygan", "state": "Wisconsin"}, {
      "text": "Shoreline",
      "value": "Shoreline",
      "state": "Washington"
    }, {"text": "Shreveport", "value": "Shreveport", "state": "Louisiana"}, {
      "text": "Sierra Vista",
      "value": "Sierra Vista",
      "state": "Arizona"
    }, {"text": "Silver Spring", "value": "Silver Spring", "state": "Maryland"}, {
      "text": "Simi Valley",
      "value": "Simi Valley",
      "state": "California"
    }, {"text": "Sioux City", "value": "Sioux City", "state": "Iowa"}, {
      "text": "Sioux Falls",
      "value": "Sioux Falls",
      "state": "South Dakota"
    }, {"text": "Skokie", "value": "Skokie", "state": "Illinois"}, {
      "text": "Smyrna",
      "value": "Smyrna",
      "state": "Georgia"
    }, {"text": "Smyrna", "value": "Smyrna", "state": "Tennessee"}, {
      "text": "Somerville",
      "value": "Somerville",
      "state": "Massachusetts"
    }, {"text": "Southaven", "value": "Southaven", "state": "Mississippi"}, {
      "text": "South Bend",
      "value": "South Bend",
      "state": "Indiana"
    }, {"text": "Southfield", "value": "Southfield", "state": "Michigan"}, {
      "text": "South Gate",
      "value": "South Gate",
      "state": "California"
    }, {"text": "South Hill", "value": "South Hill", "state": "Washington"}, {
      "text": "South Jordan",
      "value": "South Jordan",
      "state": "Utah"
    }, {"text": "South San Francisco", "value": "South San Francisco", "state": "California"}, {
      "text": "South Valley",
      "value": "South Valley",
      "state": "New Mexico"
    }, {"text": "South Whittier", "value": "South Whittier", "state": "California"}, {
      "text": "Sparks",
      "value": "Sparks",
      "state": "Nevada"
    }, {"text": "Spokane", "value": "Spokane", "state": "Washington"}, {
      "text": "Spokane Valley",
      "value": "Spokane Valley",
      "state": "Washington"
    }, {"text": "Spring", "value": "Spring", "state": "Texas"}, {
      "text": "Springdale",
      "value": "Springdale",
      "state": "Arkansas"
    }, {"text": "Springfield", "value": "Springfield", "state": "Missouri"}, {
      "text": "Springfield",
      "value": "Springfield",
      "state": "Massachusetts"
    }, {"text": "Springfield", "value": "Springfield", "state": "Illinois"}, {
      "text": "Springfield",
      "value": "Springfield",
      "state": "Oregon"
    }, {"text": "Springfield", "value": "Springfield", "state": "Ohio"}, {
      "text": "Spring Hill",
      "value": "Spring Hill",
      "state": "Florida"
    }, {"text": "Spring Valley", "value": "Spring Valley", "state": "Nevada"}, {
      "text": "Stamford",
      "value": "Stamford",
      "state": "Connecticut"
    }, {"text": "State College", "value": "State College", "state": "Pennsylvania"}, {
      "text": "Sterling Heights",
      "value": "Sterling Heights",
      "state": "Michigan"
    }, {"text": "Stillwater", "value": "Stillwater", "state": "Oklahoma"}, {
      "text": "Stockton",
      "value": "Stockton",
      "state": "California"
    }, {"text": "Stratford", "value": "Stratford", "state": "Connecticut"}, {
      "text": "Strongsville",
      "value": "Strongsville",
      "state": "Ohio"
    }, {"text": "Suffolk", "value": "Suffolk", "state": "Virginia"}, {
      "text": "Sugar Land",
      "value": "Sugar Land",
      "state": "Texas"
    }, {"text": "Summerville", "value": "Summerville", "state": "South Carolina"}, {
      "text": "Sunnyvale",
      "value": "Sunnyvale",
      "state": "California"
    }, {"text": "Sunrise", "value": "Sunrise", "state": "Florida"}, {
      "text": "Sunrise Manor",
      "value": "Sunrise Manor",
      "state": "Nevada"
    }, {"text": "Surprise", "value": "Surprise", "state": "Arizona"}, {
      "text": "Syracuse",
      "value": "Syracuse",
      "state": "New York"
    }, {"text": "Tacoma", "value": "Tacoma", "state": "Washington"}, {
      "text": "Tallahassee",
      "value": "Tallahassee",
      "state": "Florida"
    }, {"text": "Tamarac", "value": "Tamarac", "state": "Florida"}, {
      "text": "Tamiami",
      "value": "Tamiami",
      "state": "Florida"
    }, {"text": "Tampa", "value": "Tampa", "state": "Florida"}, {
      "text": "Taunton",
      "value": "Taunton",
      "state": "Massachusetts"
    }, {"text": "Taylor", "value": "Taylor", "state": "Michigan"}, {
      "text": "Taylorsville",
      "value": "Taylorsville",
      "state": "Utah"
    }, {"text": "Temecula", "value": "Temecula", "state": "California"}, {
      "text": "Tempe",
      "value": "Tempe",
      "state": "Arizona"
    }, {"text": "Temple", "value": "Temple", "state": "Texas"}, {
      "text": "Terre Haute",
      "value": "Terre Haute",
      "state": "Indiana"
    }, {"text": "Texas City", "value": "Texas City", "state": "Texas"}, {
      "text": "The Hammocks",
      "value": "The Hammocks",
      "state": "Florida"
    }, {"text": "The Villages", "value": "The Villages", "state": "Florida"}, {
      "text": "The Woodlands",
      "value": "The Woodlands",
      "state": "Texas"
    }, {"text": "Thornton", "value": "Thornton", "state": "Colorado"}, {
      "text": "Thousand Oaks",
      "value": "Thousand Oaks",
      "state": "California"
    }, {"text": "Tigard", "value": "Tigard", "state": "Oregon"}, {
      "text": "Tinley Park",
      "value": "Tinley Park",
      "state": "Illinois"
    }, {"text": "Titusville", "value": "Titusville", "state": "Florida"}, {
      "text": "Toledo",
      "value": "Toledo",
      "state": "Ohio"
    }, {"text": "Toms River", "value": "Toms River", "state": "New Jersey"}, {
      "text": "Tonawanda CDP",
      "value": "Tonawanda CDP",
      "state": "New York"
    }, {"text": "Topeka", "value": "Topeka", "state": "Kansas"}, {
      "text": "Torrance",
      "value": "Torrance",
      "state": "California"
    }, {"text": "Town 'n' Country", "value": "Town 'n' Country", "state": "Florida"}, {
      "text": "Towson",
      "value": "Towson",
      "state": "Maryland"
    }, {"text": "Tracy", "value": "Tracy", "state": "California"}, {
      "text": "Trenton",
      "value": "Trenton",
      "state": "New Jersey"
    }, {"text": "Troy", "value": "Troy", "state": "Michigan"}, {
      "text": "Troy",
      "value": "Troy",
      "state": "New York"
    }, {"text": "Tuckahoe", "value": "Tuckahoe", "state": "Virginia"}, {
      "text": "Tucson",
      "value": "Tucson",
      "state": "Arizona"
    }, {"text": "Tulare", "value": "Tulare", "state": "California"}, {
      "text": "Tulsa",
      "value": "Tulsa",
      "state": "Oklahoma"
    }, {"text": "Turlock", "value": "Turlock", "state": "California"}, {
      "text": "Tuscaloosa",
      "value": "Tuscaloosa",
      "state": "Alabama"
    }, {"text": "Tustin", "value": "Tustin", "state": "California"}, {
      "text": "Twin Falls",
      "value": "Twin Falls",
      "state": "Idaho"
    }, {"text": "Tyler", "value": "Tyler", "state": "Texas"}, {
      "text": "Union City",
      "value": "Union City",
      "state": "California"
    }, {"text": "Union City", "value": "Union City", "state": "New Jersey"}, {
      "text": "University",
      "value": "University",
      "state": "Florida"
    }, {"text": "Upland", "value": "Upland", "state": "California"}, {
      "text": "Urbana",
      "value": "Urbana",
      "state": "Illinois"
    }, {"text": "Urbandale", "value": "Urbandale", "state": "Iowa"}, {
      "text": "Utica",
      "value": "Utica",
      "state": "New York"
    }, {"text": "Vacaville", "value": "Vacaville", "state": "California"}, {
      "text": "Valdosta",
      "value": "Valdosta",
      "state": "Georgia"
    }, {"text": "Vallejo", "value": "Vallejo", "state": "California"}, {
      "text": "Valrico",
      "value": "Valrico",
      "state": "Florida"
    }, {"text": "Vancouver", "value": "Vancouver", "state": "Washington"}, {
      "text": "Victoria",
      "value": "Victoria",
      "state": "Texas"
    }, {"text": "Victorville", "value": "Victorville", "state": "California"}, {
      "text": "Vineland",
      "value": "Vineland",
      "state": "New Jersey"
    }, {"text": "Virginia Beach", "value": "Virginia Beach", "state": "Virginia"}, {
      "text": "Visalia",
      "value": "Visalia",
      "state": "California"
    }, {"text": "Vista", "value": "Vista", "state": "California"}, {
      "text": "Waco",
      "value": "Waco",
      "state": "Texas"
    }, {"text": "Waldorf", "value": "Waldorf", "state": "Maryland"}, {
      "text": "Walnut Creek",
      "value": "Walnut Creek",
      "state": "California"
    }, {"text": "Waltham", "value": "Waltham", "state": "Massachusetts"}, {
      "text": "Warner Robins",
      "value": "Warner Robins",
      "state": "Georgia"
    }, {"text": "Warren", "value": "Warren", "state": "Michigan"}, {
      "text": "Warwick",
      "value": "Warwick",
      "state": "Rhode Island"
    }, {"text": "Washington", "value": "Washington", "state": "District of Columbia"}, {
      "text": "Waterbury",
      "value": "Waterbury",
      "state": "Connecticut"
    }, {"text": "Waterloo", "value": "Waterloo", "state": "Iowa"}, {
      "text": "Watsonville",
      "value": "Watsonville",
      "state": "California"
    }, {"text": "Waukegan", "value": "Waukegan", "state": "Illinois"}, {
      "text": "Waukesha",
      "value": "Waukesha",
      "state": "Wisconsin"
    }, {"text": "Wauwatosa", "value": "Wauwatosa", "state": "Wisconsin"}, {
      "text": "Wellington",
      "value": "Wellington",
      "state": "Florida"
    }, {"text": "Wesley Chapel", "value": "Wesley Chapel", "state": "Florida"}, {
      "text": "West Allis",
      "value": "West Allis",
      "state": "Wisconsin"
    }, {"text": "West Babylon", "value": "West Babylon", "state": "New York"}, {
      "text": "West Covina",
      "value": "West Covina",
      "state": "California"
    }, {"text": "West Des Moines", "value": "West Des Moines", "state": "Iowa"}, {
      "text": "Westfield",
      "value": "Westfield",
      "state": "Massachusetts"
    }, {"text": "West Hartford", "value": "West Hartford", "state": "Connecticut"}, {
      "text": "West Haven",
      "value": "West Haven",
      "state": "Connecticut"
    }, {"text": "West Jordan", "value": "West Jordan", "state": "Utah"}, {
      "text": "Westland",
      "value": "Westland",
      "state": "Michigan"
    }, {"text": "Westminster", "value": "Westminster", "state": "Colorado"}, {
      "text": "Westminster",
      "value": "Westminster",
      "state": "California"
    }, {"text": "West New York", "value": "West New York", "state": "New Jersey"}, {
      "text": "Weston",
      "value": "Weston",
      "state": "Florida"
    }, {"text": "West Palm Beach", "value": "West Palm Beach", "state": "Florida"}, {
      "text": "West Sacramento",
      "value": "West Sacramento",
      "state": "California"
    }, {"text": "West Seneca", "value": "West Seneca", "state": "New York"}, {
      "text": "West Valley City",
      "value": "West Valley City",
      "state": "Utah"
    }, {"text": "Weymouth", "value": "Weymouth", "state": "Massachusetts"}, {
      "text": "Weymouth Town",
      "value": "Weymouth Town",
      "state": "Massachusetts"
    }, {"text": "Wheaton", "value": "Wheaton", "state": "Illinois"}, {
      "text": "Wheaton",
      "value": "Wheaton",
      "state": "Maryland"
    }, {"text": "White Plains", "value": "White Plains", "state": "New York"}, {
      "text": "Whitney",
      "value": "Whitney",
      "state": "Nevada"
    }, {"text": "Whittier", "value": "Whittier", "state": "California"}, {
      "text": "Wichita",
      "value": "Wichita",
      "state": "Kansas"
    }, {"text": "Wichita Falls", "value": "Wichita Falls", "state": "Texas"}, {
      "text": "Wilkes-Barre",
      "value": "Wilkes-Barre",
      "state": "Pennsylvania"
    }, {"text": "Wilmington", "value": "Wilmington", "state": "North Carolina"}, {
      "text": "Wilmington",
      "value": "Wilmington",
      "state": "Delaware"
    }, {"text": "Wilson", "value": "Wilson", "state": "North Carolina"}, {
      "text": "Winston-Salem",
      "value": "Winston-Salem",
      "state": "North Carolina"
    }, {"text": "Woodbury", "value": "Woodbury", "state": "Minnesota"}, {
      "text": "Woodland",
      "value": "Woodland",
      "state": "California"
    }, {"text": "Woonsocket", "value": "Woonsocket", "state": "Rhode Island"}, {
      "text": "Worcester",
      "value": "Worcester",
      "state": "Massachusetts"
    }, {"text": "Wylie", "value": "Wylie", "state": "Texas"}, {
      "text": "Wyoming",
      "value": "Wyoming",
      "state": "Michigan"
    }, {"text": "Yakima", "value": "Yakima", "state": "Washington"}, {
      "text": "Yonkers",
      "value": "Yonkers",
      "state": "New York"
    }, {"text": "Yorba Linda", "value": "Yorba Linda", "state": "California"}, {
      "text": "York",
      "value": "York",
      "state": "Pennsylvania"
    }, {"text": "Youngstown", "value": "Youngstown", "state": "Ohio"}, {
      "text": "Yuba City",
      "value": "Yuba City",
      "state": "California"
    }, {"text": "Yucaipa", "value": "Yucaipa", "state": "California"}, {
      "text": "Yuma",
      "value": "Yuma",
      "state": "Arizona"
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

  function clear_inputs(){

    $('form .sp_form__error-cpt').remove();

    $('.js-create-checkbox').prettyCheckable('uncheck');

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
      return;
    }
    $('[name=login_phone]').val('');
    SAILPLAY.send('load.user.info', {user: {phone: _phone}, all: 1});

  }).on('click', '.sp_popup__close', function (e) {

    e.preventDefault();
    $('.sp_popup_blocks').fadeOut();

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
    })

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