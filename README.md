# Sri Lanka Division Data

A comprehensive and structured JSON dataset of Sri Lanka's administrative divisions. This repository provides a hierarchical list including **Provinces**, **Districts**, and **Divisional Secretariats**, making it ideal for software applications requiring address validation, location selection, or data analysis.

## Features

- **Complete Hierarchy**: Covers all 9 Provinces, 25 Districts, and their respective Divisional Secretariats.
- **Easy to Use**: Available as an npm package with built-in helper functions and TypeScript support.
- **Case-Insensitive Lookups**: All lookup functions are case-insensitive for convenience.
- **Open Source**: Free for use in commercial and personal projects under the MIT license.

## Installation

```bash
npm install sri-lanka-division-data
```

Or, you can clone the repository directly:

```bash
git clone https://github.com/sahanRanasingha/Sri-Lanka-Division-Data.git
```

## Data Structure

The data is organized hierarchically as follows:

```json
{
  "provinces": [
    {
      "name": "Province Name",
      "districts": [
        {
          "name": "District Name",
          "divisional_secretariats": ["Division 1", "Division 2"]
        }
      ]
    }
  ]
}
```

### Fields

- `provinces`: Array of province objects.
  - `name`: Name of the Province (e.g., "Western Province").
  - `districts`: Array of district objects within that province.
    - `name`: Name of the District (e.g., "Colombo").
    - `divisional_secretariats`: Array of strings, listing all Divisional Secretariats in that district (e.g., ["Colombo", "Dehiwala", ...]).

## Usage

### JavaScript / Node.js

```javascript
const {
  getProvinces,
  getDistricts,
  getDivisionalSecretariats,
  getProvince,
  getDistrict,
  getProvinceOfDistrict,
  getDistrictOfDivisionalSecretariat,
} = require("sri-lanka-division-data");

// Get all province names
console.log(getProvinces());
// ['Northern Province', 'North Western Province', 'Western Province', ...]

// Get districts in Western Province
console.log(getDistricts("Western Province"));
// ['Colombo', 'Gampaha', 'Kalutara']

// Get all district names across all provinces
console.log(getDistricts());
// ['Jaffna', 'Kilinochchi', ..., 'Matara', 'Hambantota']

// Get divisional secretariats for Colombo district
console.log(getDivisionalSecretariats("Colombo"));
// ['Colombo', 'Dehiwala', 'Homagama', ...]

// Get a full province object
const western = getProvince("Western Province");
console.log(western.districts.length); // 3

// Get a full district object
const colombo = getDistrict("Colombo");
console.log(colombo.divisional_secretariats);

// Find which province a district belongs to
console.log(getProvinceOfDistrict("Colombo"));
// 'Western Province'

// Find which district a divisional secretariat belongs to
console.log(getDistrictOfDivisionalSecretariat("Dehiwala"));
// 'Colombo'
```

### ES Modules

```javascript
import {
  getProvinces,
  getDistricts,
  getDivisionalSecretariats,
} from "sri-lanka-division-data";
```

### Direct Data Access

You can also access the raw data directly:

```javascript
const { provinces } = require("sri-lanka-division-data");

// provinces is the raw array of province objects
provinces.forEach((province) => {
  console.log(province.name);
});
```

Or import just the JSON file:

```javascript
const data = require("sri-lanka-division-data/sri-lanka-division-data.json");
```

### Python

```python
import json

with open('sri-lanka-division-data.json', 'r') as f:
    data = json.load(f)

# Print all districts in the dataset
for province in data['provinces']:
    for district in province['districts']:
        print(f"District: {district['name']}")
```

## API Reference

All lookup functions are **case-insensitive**.

| Function | Parameters | Returns | Description |
|---|---|---|---|
| `getAllData()` | — | `object` | Returns the full data object with all provinces, districts, and divisional secretariats. |
| `getProvinces()` | — | `string[]` | Returns an array of all province names. |
| `getDistricts(provinceName?)` | `provinceName` *(optional)* | `string[]` | Returns district names. If a province name is given, returns only its districts. |
| `getDivisionalSecretariats(districtName?)` | `districtName` *(optional)* | `string[]` | Returns divisional secretariat names. If a district name is given, returns only its secretariats. |
| `getProvince(name)` | `name` | `object \| undefined` | Returns the full province object, or `undefined` if not found. |
| `getDistrict(name)` | `name` | `object \| undefined` | Returns the full district object, or `undefined` if not found. |
| `getProvinceOfDistrict(districtName)` | `districtName` | `string \| undefined` | Returns the province name for a given district. |
| `getDistrictOfDivisionalSecretariat(dsName)` | `dsName` | `string \| undefined` | Returns the district name for a given divisional secretariat. |

## TypeScript

This package includes TypeScript type definitions. Types are available for `Province`, `District`, and `SriLankaDivisionData`.

```typescript
import { getProvince, Province } from "sri-lanka-division-data";

const province: Province | undefined = getProvince("Western Province");
```

## Contributing

Contributions are welcome! If you find any typos, missing divisions, or outdated information, please feel free to report an issue or submit a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions on how to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
