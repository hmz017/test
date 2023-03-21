export const rowData = [
  {
    id: 'a',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Kevin’s VM Groups',
    status: 'Disabled',
  },
  {
    id: 'b',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Maureen’s VM Groups',
    status: 'Starting',
  },
  {
    id: 'c',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrew’s VM Groups',
    status: 'Active',
  },
  {
    id: 'd',
    name: 'Load Balancer 6',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Marc’s VM Groups',
    status: 'Disabled',
  },
  {
    id: 'e',
    name: 'Load Balancer 4',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Mel’s VM Groups',
    status: 'Starting',
  },
  {
    id: 'f',
    name: 'Load Balancer 5',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Ronja’s VM Groups',
    status: 'Active',
  },
  
];

export const headerData = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'protocol',
    header: 'Protocol',
  },
  {
    key: 'port',
    header: 'Port',
  },
  {
    key: 'rule',
    header: 'Rule',
  },
  {
    key: 'attached_groups',
    header: 'Attached Groups',
  },
  {
    key: 'status',
    header: 'Status',
  },
  
];
export const sampleHierarchy = {
  MLB: {
    'American League': {
      'Chicago White Sox': {
        'Leury Garcia': 'CF',
        'Yoan Moncada': '3B',
        'Jose Abreu': '1B',
        'Welington Castillo': 'C',
        'Eloy Jimenez': 'LF',
        'Charlie Tilson': 'RF',
        'Tim Anderson': 'SS',
        'Yolmer Sanchez': '2B',
        'Dylan Covey': 'P',
      },
      'New York Yankees': {
        'DJ LeMahieu': '2B',
        'Luke Voit': '1B',
        'Gary Sanchez': 'C',
        'Kendrys Morales': 'DH',
        'Gleyber Torres': 'SS',
        'Clint Frazier': 'RF',
        'Brett Gardner': 'LF',
        'Gio Urshela': '3B',
        'Cameron Maybin': 'RF',
        'Robinson Cano': '2B',
      },
      'Houston Astros': {
        'George Springer': 'RF',
        'Jose Altuve': '2B',
        'Michael Brantley': 'LF',
        'Alex Bregman': '3B',
        'Yuli Gurriel': '1B',
        'Yordan Alvarez': 'DH',
        'Carlos Correa': 'SS',
        'Robinson Chirinos': 'C',
        'Josh Reddick': 'CF',
      },
    },
    'National League': {
      'Atlanta Braves': {
        'Ronald Acuna Jr.': 'CF',
        'Dansby Swanson': 'SS',
        'Freddie Freeman': '1B',
        'Josh Donaldson': '3B',
        'Nick Markakis': 'RF',
        'Austin Riley': 'LF',
        'Brian McCann': 'C',
        'Ozzie Albies': '2B',
        'Kevin Gausman': 'P',
      },
      'New York Mets': {
        'Jeff McNeil': '3B',
        'Amed Rosario': 'SS',
        'Michael Conforto is a super duper long name that will get cut off': 'RF',
        'Pete Alonso': '1B',
        'Wilson Ramos': 'C',
        'Robinson Cano': '2B',
        'JD Davis': 'LF',
        'Brandon Nimmo': 'CF',
        'Jacob Degrom': 'P',
      },
      'Washington Nationals': {
        'Trea Turner': 'SS',
        'Adam Eaton': 'RF',
        'Anthony Rendon': '3B',
        'Juan Soto': 'LF',
        'Howie Kendrick': '2B',
        'Ryan Zimmerman': '1B',
        'Yian Gomes': 'C',
        'Victor Robles': 'CF',
        'Max Scherzer': 'P',
      },
    },
  },
};
export const datacircle = [
	{
		"name": "North America",
		"children": [
			{
				"name": "Canada",
				"children": [
					{
						"name": "Toronto",
						"value": 50
					},
					{
						"name": "Montreal",
						"value": 100
					}
				]
			},
			{
				"name": "United States",
				"children": [
					{
						"name": "Texas",
						"value": 50
					},
					{
						"name": "New York",
						"value": 40
					}
				]
			},
			{
				"name": "Mexico",
				"value": 100
			}
		]
	},
	{
		"name": "South America",
		"children": [
			{
				"name": "Brazil",
				"value": 2800
			},
			{
				"name": "Argentina",
				"value": 10000
			},
			{
				"name": "Peru",
				"value": 500
			}
		]
	},
	{
		"name": "Africa",
		"children": [
			{
				"name": "Egypt",
				"value": 50
			},
			{
				"name": "Morocco",
				"value": 10
			},
			{
				"name": "Chad",
				"value": 200
			},
			{
				"name": "Nigeria",
				"value": 80
			},
			{
				"name": "Libya",
				"value": 90
			}
		]
	},
	{
		"name": "Europe",
		"children": [
			{
				"name": "Portugal",
				"value": 2000
			},
			{
				"name": "Spain",
				"value": 400
			},
			{
				"name": "France",
				"value": 500
			},
			{
				"name": "Italy",
				"value": 300
			},
			{
				"name": "Poland",
				"value": 100
			},
			{
				"name": "Ukraine",
				"value": 900
			}
		]
	},
  
];
export const optionscircle= {
	"title": "Three Levels Hierarchy ",
	"circlePack": {
		"hierarchyLevel": 4
	},
	"canvasZoom": {
		"enabled": false
	},
	"height": "400px"
};
	