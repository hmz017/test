export const rowData = [
  {
    id: 'a',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Kevin’s VM Groups',
    status: 'Disabled',
    created_at: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 'b',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Maureen’s VM Groups',
    status: 'Starting',
    created_at: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 'c',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrew’s VM Groups',
    status: 'Active',
    created_at: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 'd',
    name: 'Load Balancer 6',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Marc’s VM Groups',
    status: 'Disabled',
    created_at: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 'e',
    name: 'Load Balancer 4',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Mel’s VM Groups',
    status: 'Starting',
    created_at: '2020-01-01T00:00:00.000Z',
  },
  {
    id: 'f',
    name: 'Load Balancer 5',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Ronja’s VM Groups',
    status: 'Active',
    created_at: '2020-01-01T00:00:00.000Z',
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
  {
    key: 'created_at',
    header: 'Created At',
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
	

export const worldsdata = 
[
{
  "word": "Lorem",
  "value": 52,
  "group": "Second"
},
{
  "word": "ipsum",
  "value": 25,
  "group": "Second"
},
{
  "word": "dolor",
  "value": 51,
  "group": "Second"
},
{
  "word": "amet",
  "value": 40,
  "group": "First"
},
{
  "word": "consectetur",
  "value": 25,
  "group": "Fourth"
},
{
  "word": "adipiscing",
  "value": 36,
  "group": "Fourth"
},
{
  "word": "elit",
  "value": 40,
  "group": "First"
},
{
  "word": "Duis",
  "value": 18,
  "group": "First"
},
{
  "word": "dapibus",
  "value": 49,
  "group": "Third"
},
{
  "word": "urna",
  "value": 18,
  "group": "First"
},
{
  "word": "tellus",
  "value": 54,
  "group": "Second"
},
{
  "word": "placerat",
  "value": 57,
  "group": "Third"
},
{
  "word": "leo",
  "value": 18,
  "group": "First"
},
{
  "word": "semper",
  "value": 18,
  "group": "Second"
},
{
  "word": "venenatis",
  "value": 43,
  "group": "Fourth"
},
{
  "word": "Vestibulum",
  "value": 50,
  "group": "Fourth"
},
{
  "word": "imperdiet",
  "value": 30,
  "group": "Fourth"
},
{
  "word": "erat",
  "value": 18,
  "group": "First"
},
{
  "word": "auctor",
  "value": 18,
  "group": "Second"
},
{
  "word": "purus",
  "value": 18,
  "group": "Second"
},
{
  "word": "ullamcorper",
  "value": 18,
  "group": "Fourth"
},
{
  "word": "porta",
  "value": 52,
  "group": "Second"
},
{
  "word": "Pellentesque",
  "value": 40,
  "group": "Fourth"
},
{
  "word": "porta",
  "value": 39,
  "group": "Second"
},
{
  "word": "aliquam",
  "value": 18,
  "group": "Third"
},
{
  "word": "est",
  "value": 18,
  "group": "First"
},
{
  "word": "bibendum",
  "value": 46,
  "group": "Third"
},
{
  "word": "lorem",
  "value": 18,
  "group": "Second"
},
{
  "word": "Morbi",
  "value": 46,
  "group": "Second"
},
{
  "word": "dui",
  "value": 18,
  "group": "First"
},
{
  "word": "non",
  "value": 42,
  "group": "First"
},
{
  "word": "neque",
  "value": 18,
  "group": "Second"
},
{
  "word": "semper",
  "value": 18,
  "group": "Second"
},
{
  "word": "aliquam",
  "value": 34,
  "group": "Third"
},
{
  "word": "mollis",
  "value": 18,
  "group": "Second"
},
{
  "word": "sapien",
  "value": 39,
  "group": "Second"
},
{
  "word": "Interdum",
  "value": 18,
  "group": "Third"
},
{
  "word": "malesuada",
  "value": 18,
  "group": "Fourth"
},
{
  "word": "fames",
  "value": 41,
  "group": "Second"
},
{
  "word": "ante",
  "value": 18,
  "group": "First"
},
{
  "word": "ipsum",
  "value": 53,
  "group": "Second"
},
{
  "word": "primis",
  "value": 18,
  "group": "Second"
},
{
  "word": "faucibus",
  "value": 29,
  "group": "Third"
},
{
  "word": "Fusce",
  "value": 20,
  "group": "Second"
},
{
  "word": "magna",
  "value": 18,
  "group": "Second"
},
{
  "word": "quis",
  "value": 35,
  "group": "First"
},
{
  "word": "arcu",
  "value": 46,
  "group": "First"
},
{
  "word": "aliquet",
  "value": 18,
  "group": "Third"
},
{
  "word": "porttitor",
  "value": 18,
  "group": "Fourth"
},
{
  "word": "amet",
  "value": 18,
  "group": "First"
},
{
  "word": "nisl",
  "value": 51,
  "group": "First"
},
{
  "word": "Praesent",
  "value": 34,
  "group": "Third"
},
{
  "word": "varius",
  "value": 18,
  "group": "Second"
},
{
  "word": "sit",
  "value": 58,
  "group": "First"
},
{
  "word": "amet",
  "value": 18,
  "group": "First"
},
{
  "word": "turpis",
  "value": 24,
  "group": "Second"
},
{
  "word": "non",
  "value": 47,
  "group": "First"
},
{
  "word": "finibus",
  "value": 18,
  "group": "Third"
},
{
  "word": "Pellentesque",
  "value": 48,
  "group": "Fourth"
},
{
  "word": "habitant",
  "value": 27,
  "group": "Third"
},
{
  "word": "morbi",
  "value": 19,
  "group": "Second"
},
{
  "word": "tristique",
  "value": 18,
  "group": "Fourth"
},
{
  "word": "senectus",
  "value": 43,
  "group": "Third"
},
{
  "word": "netus",
  "value": 18,
  "group": "Second"
},
{
  "word": "malesuada",
  "value": 18,
  "group": "Fourth"
},
{
  "word": "fames",
  "value": 37,
  "group": "Second"
},
{
  "word": "turpis",
  "value": 24,
  "group": "Second"
},
{
  "word": "egestas",
  "value": 18,
  "group": "Third"
},
{
  "word": "Aliquam",
  "value": 45,
  "group": "Third"
},
{
  "word": "erat",
  "value": 18,
  "group": "First"
},
{
  "word": "volutpat",
  "value": 57,
  "group": "Third"
},
{
  "word": "Aliquam",
  "value": 18,
  "group": "Third"
},
{
  "word": "dapibus",
  "value": 42,
  "group": "Third"
},
{
  "word": "urna",
  "value": 36,
  "group": "First"
},
{
  "word": "vehicula",
  "value": 19,
  "group": "Third"
},
{
  "word": "Quisque",
  "value": 18,
  "group": "Third"
},
{
  "word": "convallis",
  "value": 25,
  "group": "Fourth"
},
{
  "word": "finibus",
  "value": 18,
  "group": "Third"
},
{
  "word": "felis",
  "value": 18,
  "group": "Second"
},
{
  "word": "quis",
  "value": 22,
  "group": "First"
},
{
  "word": "aliquam",
  "value": 18,
  "group": "Third"
},
{
  "word": "massa",
  "value": 55,
  "group": "Second"
},
{
  "word": "sagittis",
  "value": 18,
  "group": "Third"
},
{
  "word": "Nam",
  "value": 32,
  "group": "First"
},
{
  "word": "ipsum",
  "value": 18,
  "group": "Second"
},
{
  "word": "orci",
  "value": 38,
  "group": "First"
},
{
  "word": "ornare",
  "value": 18,
  "group": "Second"
},
{
  "word": "non",
  "value": 18,
  "group": "First"
},
{
  "word": "arcu",
  "value": 32,
  "group": "First"
},
{
  "word": "consequat",
  "value": 55,
  "group": "Fourth"
},
{
  "word": "tempus",
  "value": 23,
  "group": "Second"
},
{
  "word": "lobortis",
  "value": 47,
  "group": "Third"
},
{
  "word": "magna",
  "value": 18,
  "group": "Second"
}
];

export const worldsoptions=
   {
"title": "Word cloud",
"resizable": true,
"color": {
  "pairing": {
    "option": 4
  }
},
"height": "300px"
}
